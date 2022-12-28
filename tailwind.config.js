/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '48px',
    },
    extend: {
      colors: {
        'primary': '#FF4910',
        'secondary': '#1D1D1D',
        'background': '#F8F9FA',
        'accent-orange': '#FDA403'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      
    }
  },
  plugins: [],
}
