/** @type {import('tailwindcss').Config} */

import { generatedTailwind } from './src/helpers/colors-generator.js';

export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: generatedTailwind,
    },
  },
  plugins: [],
};
