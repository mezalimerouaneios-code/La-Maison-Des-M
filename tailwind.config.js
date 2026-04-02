/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#f5f5f0',
        'charcoal': '#1a1a1a',
        'dark': '#0a0a0a',
        'grey': '#888888',
        'gold': '#c9a962',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      padding: {
        'x1': '0.25rem',
        'x2': '0.5rem',
        'x3': '0.75rem',
        'x4': '1rem',
        'x5': '1.25rem',
        'x6': '1.5rem',
        'x8': '2rem',
        'x10': '2.5rem',
        'x12': '3rem',
      },
      margin: {
        'x1': '0.25rem',
        'x2': '0.5rem',
        'x4': '1rem',
        'x5': '1.25rem',
      },
    },
  },
  plugins: [],
}
