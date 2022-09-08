/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lobster: ["Lobster", "cursive"],
        Playfair: ["Playfair Display", "serif"], 
        Lato: ["Lato", "sans-serif"], 
        Pacifico: ['Pacifico', "cursive"], 
        Orbitron: ['Orbitron', "sans-serif"], 
      },
      colors: {
        "ct-primary": {
          100: "#EBFAFE",
          200: "#99EAFF",
          300: "#3DD1F7",
          400: "#0067C5",
          500: "#0056A4",
          600: "#00376E",
          700: "#002C58",
          800: "#002347",
          900: "#001C38",
          1000: "#0056B8",
        },
        "ct-secondary": {
          100: "#FF7ECB",
          200: "#FF65C1",
          300: "#FF58C2",
          400: "#FF47D2",
          500: "#FF3BAF",
          600: "#CC2F8C",
          700: "#A32670",
          800: "#831E5A",
          900: "#681848",
        },
        "ct-tertiary": {
          100: "#E4FF7E",
          200: "#D0FF72",
          300: "#BDFF68",
          400: "#ACF85F",
          500: "#9CE156",
          600: "#7DB445",
          700: "#649037",
          800: "#50732C",
          900: "#405C23",
          1000: "#6CBD19",
        },
        "ct-neutral": {
          100: "#FAFCFE",
          200: "#E2EBF3",
          300: "#C7D6E6",
          400: "#B5C7D9",
          500: "#7893B0",
          600: "#425F80",
          700: "#2F4E74",
          800: "#213650",
          900: "#152B47",
          white: "#FFFFFF",
          black: "#000000",
        },
        "ct-texts": {
          origin: "#fd8f6c",
          black: "#333333",
          white: "#FFFFFF",
          gray555: "#555555",
          gray888: "#888888",
        },
        "ct-theme": {
          blue: "#0D6EFD",
          indigo: "#6610F2",
          purple: "#7367F0",
          pink: "#D63384",
          red: "#EA5455",
          orange: "#FD7E14",
          yellow: "#FF9F43",
          green: "#28C76F",
          teal: "#20C997",
          cyan: "#00CFE8",
        },

        // old-color
        "ct2-neutral": {
          "01": "#FFFFFF",
          "02": "#E0E0E0",
          "03": "#C4C4C4",
          "04": "#4B5563",
          "05": "#333333",
          "06": "#FAFAFA",
        },
        "ct2-primary": {
          "01": "#2978F9",
          "02": "#EDF3FC",
        },
        "ct2-semantic": {
          error: "#E22020",
        },
      },
    },
  },
  plugins: [],
};
