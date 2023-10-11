/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "33": "0 8.4rem",
        "navbar": "4rem 8.4rem 0.5rem 16rem"
      },
      borderRadius: {
        "navbar": "0 0 1rem 1rem",
        "sections": " 0 4rem 4rem 0",
        "input": "4rem",
        "footer": "1rem 1rem 0rem 0rem"
      },
      width: {
        "default": "90rem",
        "main": "73.125rem",
        "70": "17.5rem",
        "92": "23rem",
        "168": "42rem",
        "142": "35.5rem",
        "modal": "25rem",
        "modalPhoto": "38rem"
      },
      height: {
        "Banner": "41.1rem",
        "Divider": " 0.0625rem",
        "142": "35.5rem",
        "modalPhoto": "38rem"
      },
      colors: {
        "-uppy-rosa": "#EA3458",
        "-uppy-rosa-2": "#EE5D79",
        "-uppy-rosa-3": "#F2859B",
        "-uppy-rosa-4": "#F7AEBC",
        "-uppy-rosa-5": "#FBD6DE",
        "-uppy-azul": "#051626",
        "-uppy-azul-2": "#374551",
        "-uppy-azul-3": "#69737D",
        "-uppy-azul-4": "#9BA2A8",
        "-uppy-azul-5": "#CDD0D4",
        "preto": "#222222",
        "preto-2": "#414141",
        "preto-3": "#606060",
        "preto-4": "#7F7F7F",
        "preto-5": "#9E9E9E",
        "preto-6": "#BDBDBD",
        "preto-7": "#DCDCDC",
        "preto-8": "#F0F0F0",
        "preto-9": "#FFFFFF",
      },
      flex: {
        "text": "1 0 0"
      },
      boxShadow: {
        "Elev": "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        "Elev-2": "0px 4px 8px 0px rgba(0, 0, 0, 0.25)",
        "Elev-3": "0px -8px 8px 0px rgba(0, 0, 0, 0.15)",
        "Elev-4": "0px 0px 16px 0px #69737D",
      },
      fontFamily: {
        "Roboto": "Roboto"
      },
      fontSize: {
        "1.17": "1.17rem"
      },
      borderWidth: {
        "2": "0.5px",
        "8": "2px"
      }
    },
  },
  plugins: [],
}

