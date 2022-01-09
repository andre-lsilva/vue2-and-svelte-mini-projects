// Config based on https://www.mathew-paul.nz/posts/how-to-use-vue2-with-vite/
const { createVuePlugin } = require("vite-plugin-vue2");

module.exports = {
  plugins: [createVuePlugin()],
};
