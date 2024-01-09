/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'richblack': '#1E1E24',
      'paperwhite': '#FEF9EF',
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
