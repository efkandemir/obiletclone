/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'kirmizi' : '#d23b38',
        'beyaz' : '#f6f7f8',
        'gri':'#616c72',
        'bordergri':'#b3b3b2'
      }
    },
  },
  plugins: [],
}

