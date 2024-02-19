/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        genos: ['Genos', 'sans-serif'],
      },
      colors:{
        'progreen': '#319e77',
        'linkedin': '#0A66C2',
        'github': '#24292F',
        'youtube': '#FF0000',
        'udemy': '#A435F0',
        'instagram': '#D92C74 linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
        'insta_gradient_1': '#FFC52E',
        'insta_gradient_2': '#9A16C7',
        'insta_gradient_3': '#E400B4',
      },
    },
  },
  plugins: [],
}
