
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      colors: {
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
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // Traffic specific colors
        traffic: {
          green: '#22c55e',
          yellow: '#f59e0b',
          red: '#ef4444',
          blue: '#0ea5e9'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        gruppo: ['Gruppo', 'cursive'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'traffic-flow': {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' }
        },
        'bg-fade-1': {
          '0%, 33%': { opacity: '1' },
          '66%, 100%': { opacity: '0' }
        },
        'bg-fade-2': {
          '0%': { opacity: '1' },
          '33%, 66%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'car-drive': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100vw))' }
        },
        'car-horizontal': {
          '0%': { transform: 'translateX(-30px)' },
          '100%': { transform: 'translateX(calc(100% + 30px))' }
        },
        'car-horizontal-delay': {
          '0%': { transform: 'translateX(-30px)' },
          '100%': { transform: 'translateX(calc(100% + 30px))' }
        },
        'car-vertical': {
          '0%': { transform: 'translateY(-30px)' },
          '100%': { transform: 'translateY(calc(100% + 30px))' }
        },
        'car-vertical-delay': {
          '0%': { transform: 'translateY(-30px)' },
          '100%': { transform: 'translateY(calc(100% + 30px))' }
        },
        'neon-car-drive': {
          '0%': { transform: 'translateX(-40px)' },
          '100%': { transform: 'translateX(calc(100% + 40px))' }
        },
        'button-car-drive': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100% - 30px))' }
        },
        'traffic-red': {
          '0%, 100%': { backgroundColor: '#FF4757', boxShadow: '0 0 8px #FF4757' },
          '50%': { backgroundColor: '#FF4757', boxShadow: '0 0 12px #FF4757' }
        },
        'traffic-amber': {
          '0%, 100%': { backgroundColor: '#FFA502', boxShadow: '0 0 8px #FFA502' },
          '50%': { backgroundColor: '#FFA502', boxShadow: '0 0 12px #FFA502' }
        },
        'traffic-green': {
          '0%, 100%': { backgroundColor: '#2ED573', boxShadow: '0 0 8px #2ED573' },
          '50%': { backgroundColor: '#2ED573', boxShadow: '0 0 12px #2ED573' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'traffic-flow': 'traffic-flow 4s linear infinite',
        'bg-fade-1': 'bg-fade-1 6s linear infinite',
        'bg-fade-2': 'bg-fade-2 6s linear infinite',
        'car-drive': 'car-drive 8s linear infinite',
        'car-horizontal': 'car-horizontal 5s linear infinite',
        'car-horizontal-delay': 'car-horizontal 5s linear infinite 2.5s',
        'car-vertical': 'car-vertical 6s linear infinite',
        'car-vertical-delay': 'car-vertical 6s linear infinite 3s',
        'neon-car-drive': 'neon-car-drive 6s linear infinite',
        'button-car-drive': 'button-car-drive 1.5s ease-in-out infinite',
        'traffic-red': 'traffic-red 2s ease-in-out infinite 0.1s',
        'traffic-amber': 'traffic-amber 2s ease-in-out infinite 0.3s',
        'traffic-green': 'traffic-green 2s ease-in-out infinite 0.5s'
      },
      boxShadow: {
        'neon-cyan': '0 0 5px 1px rgba(6, 182, 212, 0.7)',
        'glow': '0 0 3px currentColor'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
