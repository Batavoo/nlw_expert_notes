/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ISSO DETERMINA QUAIS ARQUIVOS DA MINHA APLICACAO VAO CONTER CLASSES DO TAILWIND
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
