/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
   
  ],
  theme: {
    colors: {
      
      'pain':"#DECAAC",
      'white':"#EEEEEE",
      'blue':"#26367E",
      'fblue': '#312e81',

    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    
  ],

}

