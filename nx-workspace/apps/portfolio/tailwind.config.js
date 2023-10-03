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
        'prime-blue' : '#2596be',
      },
      backgroundImage: {
        'laptop': "url('/src/assets/images/laptop.png')",
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
