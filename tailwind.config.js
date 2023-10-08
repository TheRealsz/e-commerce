/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        "33" : "0 8.4rem",
        "navbar": "4rem 8.4rem 0.5rem 16rem"
      },
      borderRadius:{
        "navbar": "0 0 1rem 1rem",
        "sections" : " 0 4rem 4rem 0"
      },
      width: {
        "default": "90rem",
        "BannerVant": "73rem"
      },
      height :{ 
        "Banner": "41.1rem"
      },
      colors: {
        "-uppy-rosa": "#EA3458",
        "-uppy-azul": "#051626",
        "-uppy-azul-4": "#9BA2A8"
      },
    },
  },
  plugins: [],
}

