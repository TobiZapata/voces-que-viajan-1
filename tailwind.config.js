/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: { fondo1: "url('/background.webp')" },
      colors: {
        graciela: "#d06c98",
        miriam: "#61d2ce",
        dario: "#9cb493",
      },
      boxShadow: {
        neonGraciela: "0 0 10px #d06c98, 0 0 20px #d06c98, 0 0 30px #d06c98",
        neonMiriam: "0 0 10px #61d2ce, 0 0 20px #61d2ce, 0 0 30px #61d2ce",
        neonDario: "0 0 10px #9cb493, 0 0 20px #9cb493, 0 0 30px #9cb493",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 30px rgba(208, 108, 151, 0.66)" },
          "33%": { boxShadow: "0 0 30px rgba(97, 210, 206, 0.66)" },
          "66%": { boxShadow: "0 0 30px #9cb493" },
        },
        pulseDario: {
          "0%": { boxShadow: "0 0 10px #9cb493" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 3s infinite ease-in-out",
        "pulse-dario": "pulseDario 3s infinite ease-in-out",
      },
    },
  },

  plugins: [],
};
