import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        'base': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        '5xl': ['3rem', { lineHeight: '1', fontWeight: '800' }],
        '6xl': ['3.75rem', { lineHeight: '1', fontWeight: '800' }],
        '7xl': ['4.5rem', { lineHeight: '1', fontWeight: '800' }],
        '8xl': ['6rem', { lineHeight: '1', fontWeight: '800' }],
        '9xl': ['8rem', { lineHeight: '1', fontWeight: '800' }],
      },
      colors: {
        // Luxury color palette
        luxury: {
          50: "hsl(var(--luxury-50))",
          100: "hsl(var(--luxury-100))",
          200: "hsl(var(--luxury-200))",
          300: "hsl(var(--luxury-300))",
          400: "hsl(var(--luxury-400))",
          500: "hsl(var(--luxury-500))",
          600: "hsl(var(--luxury-600))",
          700: "hsl(var(--luxury-700))",
          800: "hsl(var(--luxury-800))",
          900: "hsl(var(--luxury-900))",
          950: "hsl(var(--luxury-950))",
        },
        gold: {
          50: "hsl(var(--gold-50))",
          100: "hsl(var(--gold-100))",
          200: "hsl(var(--gold-200))",
          300: "hsl(var(--gold-300))",
          400: "hsl(var(--gold-400))",
          500: "hsl(var(--gold-500))",
          600: "hsl(var(--gold-600))",
          700: "hsl(var(--gold-700))",
          800: "hsl(var(--gold-800))",
          900: "hsl(var(--gold-900))",
        },
        platinum: {
          50: "hsl(var(--platinum-50))",
          100: "hsl(var(--platinum-100))",
          200: "hsl(var(--platinum-200))",
          300: "hsl(var(--platinum-300))",
          400: "hsl(var(--platinum-400))",
          500: "hsl(var(--platinum-500))",
          600: "hsl(var(--platinum-600))",
          700: "hsl(var(--platinum-700))",
          800: "hsl(var(--platinum-800))",
          900: "hsl(var(--platinum-900))",
        },
        // Original shadcn colors (preserved for component compatibility)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'luxury-lg': '0 35px 60px -12px rgba(0, 0, 0, 0.35)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.1)',
        'glow-gold': '0 0 30px rgba(107, 47, 155, 0.35)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, hsl(var(--luxury-900)) 0%, hsl(var(--luxury-800)) 100%)',
        'gold-gradient': 'linear-gradient(135deg, hsl(var(--gold-400)) 0%, hsl(var(--gold-600)) 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
