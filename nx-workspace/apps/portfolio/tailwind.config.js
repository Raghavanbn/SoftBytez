const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'prime-color' : '#2596be',
      },
      backgroundImage: {
        'laptop': "url('/assets/images/laptop.png')",
        'aboutus1': "url('/assets/images/aboutus.png')",
      },
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
      },
      
      
    },
    palette: {
      primary : {
        main : '#2596be',
        contrastText: '#fff',
      },
    },
  },
  plugins: [],
};
