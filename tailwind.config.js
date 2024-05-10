/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
       primaryColor:"rgb(219, 168, 150);"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

