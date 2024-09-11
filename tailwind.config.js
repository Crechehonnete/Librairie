/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
   
  ],
  theme: {
    colors: {
      
      'pain':"#DECAAC",
          'white': '#ffffff',
      'gray-white':"#EEEEEE",
      'blue':"#26367E",
      'fblue': '#312e81',
      'black':"#030712"

    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    
  ],

}

