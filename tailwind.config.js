/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#FF5E84',
        'custom-green': '#2BD9AF',
        'custom-white': '#F5F5F5',
        'custom-black': '#0E0E0E',
        'custom-blue': '#0E42FD',
      },
      boxShadow:{
        'custom-box-shadow': '10px 15px 20px 0px #00000026'
      },
      fontFamily: {
        roboto: 'Roboto'
      }
    },
  },
  plugins: [],
}