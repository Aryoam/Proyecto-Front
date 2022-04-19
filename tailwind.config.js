module.exports = {
  content: [
    "index.html",
    "./src/**/*.jsx",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
