/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        "33" : "0 135px",
        "navbar": "64px 135px 8px 256px"
      },
      borderRadius:{
        "navbar": "0 0 16px 16px"
      },
      width: {
        "default": "1440px",
        "BannerVant": "1168px"
      },
      height :{
        "Banner": "658px"
      },
      colors: {
        "-uppy-rosa": "#EA3458",
        "-uppy-azul": "#051626"
      }
    },
  },
  plugins: [],
}

