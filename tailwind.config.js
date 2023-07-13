/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{tsx,mdx}',
    './app/**/*.{tsx,mdx}',
  ],
  theme: {

    extend: {
      gridTemplateColumns: {
        'custom': '8rem 8rem 10rem',
        'sm-custom': '6rem 6rem 8rem',
        'two': '2rem 8rem'
    },
    screens: {
      'xs': '340px'
    }
  },
  plugins: [],
}
}