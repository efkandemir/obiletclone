/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kirmizi': '#d23b38',
        'beyaz': '#f6f7f8',
        'gri': '#616c72',
        'bordergri': '#b3b3b2',
        'cercevegri': '#f4f5f5',
        'cardbggri': '#fafafa',
        'yesil':'#209c7c',
        'lacivert':'#45619d',
        'mavi':'#4285f4',
        'cercevekirmizi':'#d23b38',
        'bgBus' : '#f2f3f4',
        'bgBuss' : '#f3f7f8',
        
      },
    },
  },
  plugins: [],
}

