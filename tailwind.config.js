/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // RB Racing — paleta minimal premium
        ink: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        accent: {
          DEFAULT: '#C8102E',
          dark: '#8B0A1F',
        },
      },
      fontFamily: {
        // Inter para todo - ultra premium, ultra limpio
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        // Display sólo para hero, gigante, peso fino
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Escala tipográfica precisa
        'mega': ['clamp(4rem, 14vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '500' }],
        'hero': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.035em', fontWeight: '500' }],
        'display': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '500' }],
        'h2': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '500' }],
        'h3': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '500' }],
      },
      letterSpacing: {
        'micro': '0.18em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'reveal': 'reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-fast': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
