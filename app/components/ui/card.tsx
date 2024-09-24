import * as React from 'react';
import { cardVariants } from './cardVariants';
import { cn } from '@/app/lib/utils';
import { type VariantProps } from 'tailwind-variants';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ className, variant, children, ...props }, ref) => (
  <div ref={ref} className={cn(cardVariants({ variant }).base(), className)} {...props}>
    {React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        const childType = child.type as React.ComponentType;
        const childDisplayName = childType.displayName || '';
        // This ensures that only these card slots are affected by the variant
        if (['CardHeader', 'CardTitle', 'CardContent', 'CardFooter'].includes(childDisplayName)) {
          return React.cloneElement(child, { ...child.props, variant });
        }
      }
      return child;
    })}
  </div>
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ variant, className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(cardVariants({ variant }).header(), className)} {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          const childType = child.type as React.ComponentType;
          const childDisplayName = childType.displayName || '';
          if (['CardTitle', 'CardDescription'].includes(childDisplayName)) {
            return React.cloneElement(child, { ...child.props, variant });
          }
          return React.cloneElement(child, child.props);
        }
        return child;
      })}
    </div>
  );
});
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof cardVariants>
>(({ variant, className, ...props }, ref) => (
  <h3 ref={ref} className={cn(cardVariants({ variant }).title(), className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { className?: string }
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ variant, className, ...props }, ref) => (
  <div ref={ref} className={cn(cardVariants({ variant }).content(), className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ variant, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardVariants({ variant }), 'flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardContent };
