/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,php,js}","./src/*.{htm,php,js}","./*.{html,php,js}"],
  
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#00b299",
        
"secondary": "#09d300",
        
"accent": "#ef0000",
        
"neutral": "#020a20",
        
"base-100": "#272030",
        
"info": "#008eff",
        
"success": "#6e9c00",
        
"warning": "#efa200",
        
"error": "#ff7995",
        },
      },
    ],
  },
  
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

