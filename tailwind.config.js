/** @type {import('tailwindcss').Config} */

import { generatedTailwindColors } from './src/helpers/colors-generator.js';

export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: generatedTailwindColors,
    },
  },
  plugins: [],
};
