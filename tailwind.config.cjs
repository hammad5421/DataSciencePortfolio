/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      blur: {
        xs: '2px',
        '2xs': '1px',
        '3xs': '0.75px',
      }
    }
  },
  plugins: [],
}
