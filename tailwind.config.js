/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        'whiteF': '#F5F5F5',
        'darker' : '#EAEAEA',
        'gray-new': '#858585',
        'gray-new01': '#999999',
        'grey-light': '#B0B0B0',
        'grey-light2': '#858585',
        'new-blue':'#346BD4',
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif' ],
        'Lato': ['Lato', 'sans-serif' ],
      },
      borderRadius:{
        '2lg': '0.625rem',
        '4xl': '1.875rem',
      },
      width: {
        '4.5': '1.125rem',
      },
      height: {
        '4.5': '1.125rem',
        '7.5': '1.875rem',
      },
    },
  },
  plugins: [],
}
