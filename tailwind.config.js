/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

// eslint-disable-next-line no-undef
const { addDynamicIconSelectors } = require('@iconify/tailwind');
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui, addDynamicIconSelectors()],
}

