/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [ 'Inter', 'sans-serif' ],
        'pacifico': [ 'Pacifico', 'sans-serif' ],
      },
      colors: {
        primary: '#ff7077',
        secondary: '#ffb8b8',
      }
    }
  },
  darkMode: 'class',
  plugins: [],
}

