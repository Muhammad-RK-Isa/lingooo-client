const withMT = require( "@material-tailwind/react/utils/withMT" );

module.exports = withMT( {
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
        primary: '#5b70f9',
        secondary: '#00c9b7',
        dark: '#1a1a1a'
      }
    }
  },
  darkMode: 'class',
  plugins: [],
} );


