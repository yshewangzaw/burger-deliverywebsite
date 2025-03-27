// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this includes your component files
  ],
  theme: {
    extend: {
      colors: {
        "floral-white": "#FFFAF0",
        chocolate: "#D2691E",
        "saddle-brown": "#8B4513",
        moccasin: "#FFE4B5",
      },
    },
  },
  plugins: [],
};
