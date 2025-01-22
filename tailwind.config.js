/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          500: '#f0eeef', 
        },
        primary: {
          500: '#F620DC', 
        },
        secondary: {
          500: '#7720F5', 
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        lg: ['1rem', { lineHeight: '1.5rem' }],
        md: ['0.875rem', { lineHeight: '1.25rem' }],
        sm: ['0.75rem', { lineHeight: '1rem' }],
        xs: ['0.625rem', { lineHeight: '1rem' }],
      },
      lineHeight: {
        none: 1,
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
      },
    },
  },
  plugins: [],
}

