/** @type {import('tailwindcss').Config} */


module.exports = {

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgImg': "url('../src/Asset/bg.jpg')"
        
      },
      screens: {
       
      },
      colors: {
        
      },
      fontFamily: {
        Inter:['Inter', "sans-serif"]
      },
    },
  },
  plugins: [require("daisyui")],
}

