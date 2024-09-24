/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './app/components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      screens: {
        mobile: '375px',
        tablet: '480px',
        desktop: '1340px',
        '2xl': '1440px',
        'desktop-xl': '1920px'
      },
      colors: {
        'error-red': '#FF8281',
        'gray-countdown-text': '#D6D6D6',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        white: '#FFFFFF',
        black: '#110C2D',
        grayscale: {
          100: '#050505',
          90: '#1C1C22',
          80: '#33323E',
          70: '#4A495B',
          50: '#6F6E80',
          40: '#9593A6',
          30: '#CBC9D6',
          20: '#E4E3EB',
          10: '#F3F2F7',
          0: '#FFFFFF'
        },
        dark: '#110C2D',
        'ui-alt': 'rgba(51, 50, 62, 0.85)',
        highlightLightBG: '#504CFF',
        highlightDarkBG: '#7A77FF',
        accent: '#2A197D',
        popoverBackground: 'rgba(17, 12, 45, 0.80)',

        // Solid color versions of the gradients, used in places where gradients are not supported, like SVG fills and texts
        'midnight-1': 'rgb(66, 45, 211)',
        'midnight-2': 'rgb(96, 87, 236)',
        'midnight-3': 'rgb(76, 57, 226)',
        'dusk-1': 'rgb(176, 153, 233)',
        'dusk-2': 'rgb(130, 139, 237)',
        'dusk-3': 'rgb(235, 203, 195)',
        'twilight-1': 'rgb(150, 93, 244)',
        'twilight-2': 'rgb(190, 130, 244)',
        'twilight-3': 'rgb(232, 172, 244)',
        'nocturnal-1': 'rgb(103, 77, 233)',
        'nocturnal-2': 'rgb(134, 102, 242)',
        'nocturnal-3': 'rgb(150, 115, 246)',
        'vesper-1': 'rgb(84, 149, 247)',
        'vesper-2': 'rgb(100, 181, 246)',
        'vesper-3': 'rgb(106, 192, 247)',
        'nightfall-1': 'rgb(61, 96, 240)',
        'nightfall-2': 'rgb(88, 157, 246)',
        'nightfall-3': 'rgb(112, 203, 247)',
        'radiant-1': 'rgb(231, 173, 150)',
        'radiant-2': 'rgb(239, 199, 178)',
        'radiant-3': 'rgb(243, 203, 210)',
        'azure-1': 'rgb(129, 223, 249)',
        'azure-2': 'rgb(167, 235, 252)',
        'azure-3': 'rgb(197, 242, 253)',
        'sunset-1': 'rgb(235, 162, 147)',
        'sunset-2': 'rgb(239, 187, 167)',
        'sunset-3': 'rgb(243, 204, 181)',
        'aurora-1': 'rgb(169, 184, 245)',
        'aurora-2': 'rgb(181, 217, 233)',
        'aurora-3': 'rgb(161, 158, 249)',
        'serenity-1': 'rgb(202, 182, 250)',
        'serenity-2': 'rgb(225, 209, 237)',
        'serenity-3': 'rgb(242, 225, 217)',
        'flare-1': 'rgb(243, 209, 121)',
        'flare-2': 'rgb(246, 223, 157)',
        'flare-3': 'rgb(250, 238, 198)',
        'celestial-1': 'rgb(185, 181, 245)',
        'celestial-2': 'rgb(141, 193, 246)',
        'celestial-3': 'rgb(177, 182, 245)'
      },
      backgroundImage: {
        ui: 'linear-gradient(176deg, #13142C 1.52%, #1E1350 102.02%)',
        'midnight-1': 'linear-gradient(278deg, #6A6CFB -55.49%, #4331E9 17.13%, #2A197D 89.76%)',
        'midnight-2': 'linear-gradient(289deg, #6A6CFB -9.32%, #4331E9 96.65%, #2A197D 137.59%)',
        'midnight-3': 'linear-gradient(286deg, #6A6CFB -38.89%, #4331E9 41.42%, #2A197D 121.72%)',
        'dusk-1': 'linear-gradient(275deg, #FFD2B9 -69%, #C99BED 13.98%, #0075FF 165.32%, #0075FF 165.32%)',
        'dusk-2':
          'linear-gradient(271deg, #FFD2B9 -143.76%, #C99BED -58.16%, #0075FF 151.82%, #0075FF 151.82%)',
        'dusk-3': 'linear-gradient(275deg, #FFD2B9 5.97%, #C99BED 134.09%, #0075FF 265.6%, #0075FF 265.6%)',
        'twilight-1': 'linear-gradient(274deg, #F7A7F9 -108.69%, #6D28FF 106.54%)',
        'twilight-2': 'linear-gradient(275deg, #F7A7F9 -32.34%, #6D28FF 150.47%)',
        'twilight-3': 'linear-gradient(281deg, #F7A7F9 36.7%, #6D28FF 187.69%)',
        'nocturnal-1': 'linear-gradient(277deg, #A273FF -63.32%, #4331E9 91.52%)',
        'nocturnal-2': 'linear-gradient(270deg, #A273FF -3.66%, #4331E9 118.8%)',
        'nocturnal-3': 'linear-gradient(271deg, #A273FF 11.37%, #4331E9 206.21%)',
        'vesper-1': 'linear-gradient(272deg, #00DDFB -91.3%, #0075FF 86.6%)',
        'vesper-2': 'linear-gradient(271deg, #00DDFB -20.9%, #0075FF 111.13%)',
        'vesper-3': 'linear-gradient(88deg, #00DDFB 0%, #0075FF 332.73%)',
        'nightfall-1': 'linear-gradient(277deg, #00DDFB -129.39%, #0075FF -4.26%, #4331E9 116.62%)',
        'nightfall-2': 'linear-gradient(273deg, #00DDFB -21.68%, #0075FF 65.05%, #4331E9 148.84%)',
        'nightfall-3': 'linear-gradient(272deg, #00DDFB 5.31%, #0075FF 182.62%, #4331E9 290.84%)',
        'radiant-1': 'linear-gradient(277deg, #FFCD6B -21.14%, #FFCD6B -21.12%, #EB5EDF 131.34%)',
        'radiant-2': 'linear-gradient(272deg, #FFDFA1 -12.07%, #EB5EDF 175.77%)',
        'radiant-3': 'linear-gradient(270deg, #FFE9BD -146.45%, #FF90F6 320.75%)',
        'azure-1': 'linear-gradient(277deg, #D4FAFF -189.89%, #00DDFB 90.42%)',
        'azure-2': 'linear-gradient(86deg, #D4FAFF -4.77%, #00DDFB 193.49%)',
        'azure-3': 'linear-gradient(87deg, #D4FAFF 0%, #00DDFB 442.34%)',
        'sunset-1':
          'linear-gradient(273deg, #FFD2B9 -167.41%, #FF6D6D 181.95%, #FF6D6D 181.95%, #FF6D6D 181.95%)',
        'sunset-2':
          'linear-gradient(272deg, #FFD2B9 -21.68%, #FF6D6D 145.23%, #FF6D6D 145.23%, #FF6D6D 145.23%)',
        'sunset-3':
          'linear-gradient(271deg, #FFD2B9 -11.52%, #FF6D6D 391.49%, #FF6D6D 391.49%, #FF6D6D 391.49%)',
        'aurora-1': 'linear-gradient(278deg, #AAF2E1 -22.79%, #9FAEFF 40.16%, #A273FF 103.12%)',
        'aurora-2': 'linear-gradient(279deg, #AAF2E1 -22.31%, #9FAEFF 137.35%)',
        'aurora-3': 'linear-gradient(272deg, #9FAEFF -5.57%, #A273FF 122.3%)',
        'serenity-1': 'linear-gradient(273deg, #D8C3FF 10.13%, #B68EFF 83.96%)',
        'serenity-2': 'linear-gradient(273deg, #FFE8D4 -26.14%, #D8C3FF 58.67%, #B68EFF 143.49%)',
        'serenity-3': 'linear-gradient(272deg, #FFE8D4 -19.3%, #B68EFF 443.31%)',
        'flare-1': 'linear-gradient(271deg, #FFF3D0 -200.83%, #FFC044 105.45%)',
        'flare-2': 'linear-gradient(270deg, #FFF3D0 -58.75%, #FFC044 141.25%)',
        'flare-3': 'linear-gradient(272deg, #FFF3D0 0.45%, #FFC044 232.68%)',
        'celestial-1': 'linear-gradient(274deg, #F7A7F9 -16.47%, #00DDFB 155.51%)',
        'celestial-2': 'linear-gradient(272deg, #F7A7F9 -88.59%, #00DDFB 124.43%)',
        'celestial-3': 'linear-gradient(91deg, #F7A7F9 -30.2%, #00DDFB 309.12%)',
        // Accent button
        accent: 'linear-gradient(320deg, #EC4FF0 -138.67%, #5116CC 84.55%)',
        'accent-hover': 'linear-gradient(330deg, #6D28FF -40.2%, #2A197D 87.65%)',
        'white-fill':
          'linear-gradient(255deg, rgba(255, 255, 255, var(--initial-opacity)) 14.03%, rgba(255, 255, 255, var(--final-opacity)) 91.45%)',
        'header-glass':
          'linear-gradient(91deg, rgba(235, 234, 255, 0.04) -1.43%, rgba(235, 234, 255, 0.24) 100.87%)'
      },
      boxShadow: {
        'glass-light': '0 8px 80px -8px rgba(17,12,45,0.1)',
        'glass-dark': '0 8px 80px -8px rgba(17, 12, 45, 0.25)',
        anchor: '0px 8px 80px -8px rgba(17, 12, 45, 0.04)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      duration: {
        350: '350ms'
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.03, 1)'
      },
      transitionProperty: {
        'gradient-and-colors':
          '--initial-opacity, --final-opacity, color, background-color, border-color, text-decoration-color, fill, stroke'
      },
      letterSpacing: {
        1: '0.01rem', // 1%
        2: '0.02rem', // 2%
        3: '0.03rem', // 3%
        4: '0.04rem' // 4%
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
