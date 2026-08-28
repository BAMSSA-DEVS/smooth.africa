/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1258AB',
          'blue-light': '#1a6fd4',
          'blue-dark': '#0e4489',
        },
        surface: {
          light: '#FAFAF9',
          dark: '#141414',
          'dark-card': '#1C1C1C',
          'dark-border': '#2A2A2A',
        }
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', '"Space Grotesk"', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dot-pattern': "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
        'dot-pattern-dark': "radial-gradient(circle, #2A2A2A 1px, transparent 1px)",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-down': 'slideDown 0.25s ease-out forwards',
        'count-up': 'countUp 0.5s ease-out forwards',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card-hover': '0 10px 25px -5px rgb(0 0 0 / 0.08), 0 4px 10px -6px rgb(0 0 0 / 0.06)',
        'card-dark': '0 1px 3px 0 rgb(0 0 0 / 0.3)',
        'card-hover-dark': '0 10px 25px -5px rgb(0 0 0 / 0.4)',
        'brand': '0 4px 14px 0 rgb(18 88 171 / 0.3)',
        'brand-hover': '0 6px 20px 0 rgb(18 88 171 / 0.4)',
      },
    },
  },
  plugins: [],
}
