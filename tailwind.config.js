/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
         primaryColor:"#FFC107" ,  // Navy Blue (Background/Main theme color)
        secondary: "#0C1446", // Gold/Yellow (Luxury & highlights)
        accent: "#D32F2F",  // Red (Attention-grabbing elements)
        neutral: "#FFFFFF", // White (For contrast and readability)
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
