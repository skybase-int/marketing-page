#!/usr/bin/env bash

# Don't exit on error - we'll handle errors gracefully
set +e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
# Use SSH URL for authentication, or override with CONTENT_REPO_URL env var
CONTENT_REPO="${CONTENT_REPO_URL:-git@github.com:sky-ecosystem/corpus.git}"
CONTENT_VERSION_FILE=".content-version"
TEMP_DIR=".tmp-content-repo"
OUTPUT_SOURCE_PATH="output/website"
FAQS_DESTINATION_PATH="app/(main)/faq/faqData"
EXTRACT_SCRIPT="scripts/extract_website_faqs.js"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[SYNC]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Check if .content-version file exists
if [ ! -f "$CONTENT_VERSION_FILE" ]; then
    print_error "Content version file '$CONTENT_VERSION_FILE' not found!"
    print_error "Please create it with a valid commit hash or tag."
    exit 1
fi

# Read the content version
CONTENT_VERSION=$(cat "$CONTENT_VERSION_FILE" | tr -d '[:space:]')

if [ -z "$CONTENT_VERSION" ]; then
    print_error "Content version file '$CONTENT_VERSION_FILE' is empty!"
    exit 1
fi

print_status "Using content version: $CONTENT_VERSION"

# Clean up any existing temp directory
if [ -d "$TEMP_DIR" ]; then
    print_status "Cleaning up existing temp directory..."
    rm -rf "$TEMP_DIR"
fi

# Clone the repository at the specific version
print_status "Cloning content repository..."
git clone --quiet "$CONTENT_REPO" "$TEMP_DIR" 2>/dev/null

# Check if clone was successful
if [ $? -ne 0 ]; then
    print_warning "Failed to clone content repository. This might be due to:"
    print_warning "  - Missing SSH keys or authentication"
    print_warning "  - Network connectivity issues"
    print_warning "  - Repository access permissions"
    print_warning ""
    print_warning "Skipping content sync. The build will continue with existing content."
    rm -rf "$TEMP_DIR" 2>/dev/null
    exit 0
fi

# Navigate to the temp directory
cd "$TEMP_DIR"

# Checkout the specific version
print_status "Checking out version: $CONTENT_VERSION"
git checkout --quiet "$CONTENT_VERSION" 2>/dev/null

# Check if checkout was successful
if [ $? -ne 0 ]; then
    print_warning "Failed to checkout version: $CONTENT_VERSION"
    print_warning "Skipping content sync. The build will continue with existing content."
    cd ..
    rm -rf "$TEMP_DIR"
    exit 0
fi

# Check if the extract script exists
if [ ! -f "$EXTRACT_SCRIPT" ]; then
    print_error "Extract script '$EXTRACT_SCRIPT' not found in content repository!"
    cd ..
    rm -rf "$TEMP_DIR"
    exit 1
fi

# Run the extract script
print_status "Running extraction script..."
node "$EXTRACT_SCRIPT"

# Check if output was generated
if [ ! -d "$OUTPUT_SOURCE_PATH" ]; then
    print_error "Expected output directory '$OUTPUT_SOURCE_PATH' was not created!"
    cd ..
    rm -rf "$TEMP_DIR"
    exit 1
fi

# Go back to project root
cd ..

# Ensure destination directory exists
mkdir -p "$FAQS_DESTINATION_PATH"

# Copy FAQ files specifically from output/website/faqs/
print_status "Copying FAQ files to $FAQS_DESTINATION_PATH..."

# Check if FAQs directory exists in the output
if [ -d "$TEMP_DIR/$OUTPUT_SOURCE_PATH/faqs" ]; then
    # Use rsync for better control over the copy process
    # This will copy all files from output/website/faqs/* to app/(main)/faq/faqData/
    # Without --delete flag, existing files will be preserved
    if command -v rsync &> /dev/null; then
        rsync -av "$TEMP_DIR/$OUTPUT_SOURCE_PATH/faqs/" "$FAQS_DESTINATION_PATH/"
    else
        # Fallback to cp if rsync is not available
        print_warning "rsync not found, using cp instead"
        cp -r "$TEMP_DIR/$OUTPUT_SOURCE_PATH/faqs/"* "$FAQS_DESTINATION_PATH/"
    fi
else
    print_warning "No FAQs directory found in output, skipping FAQ sync"
fi

# Clean up temp directory
print_status "Cleaning up temporary files..."
rm -rf "$TEMP_DIR"

# Collect generated files for formatting
GENERATED_FILES=()

# Add FAQ files if they exist
if [ -d "$FAQS_DESTINATION_PATH" ]; then
    while IFS= read -r -d '' file; do
        GENERATED_FILES+=("$file")
    done < <(find "$FAQS_DESTINATION_PATH" -type f \( -name "*.ts" -o -name "*.json" -o -name "*.md" \) -print0)
fi

# Format only the generated files
if [ ${#GENERATED_FILES[@]} -gt 0 ]; then
    print_status "Formatting ${#GENERATED_FILES[@]} generated files with prettier..."
    
    # Check if prettier is available
    if command -v npx &> /dev/null && npx --no-install prettier --version &> /dev/null; then
        # Format each file individually to avoid running prettier on the entire repo
        for file in "${GENERATED_FILES[@]}"; do
            npx --no-install prettier --write "$file" 2>/dev/null || true
        done
        print_status "Files formatted successfully"
    else
        print_warning "Prettier not available, skipping formatting"
    fi
else
    print_warning "No files to format"
fi

print_status "Content sync completed successfully!"

# List the synced FAQ files
echo ""
print_status "Synced FAQ files to $FAQS_DESTINATION_PATH:"
find "$FAQS_DESTINATION_PATH" -type f \( -name "*.json" -o -name "*.ts" -o -name "*.md" \) | sort | while read file; do
    echo "  - $file"
done