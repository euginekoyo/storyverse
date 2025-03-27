module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: '#ccc',
      },
      borderColor: {
        DEFAULT: '#ccc',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
