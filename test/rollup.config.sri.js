const checksum = require("../lib/index").default;
const path = require("path");

export default {
  input: path.resolve(__dirname, "src/index.js"),
  output: {
    file: path.resolve(__dirname, "dist/index.js"),
    format: "es",
  },
  plugins: [checksum({ sri: "sha384" })],
}; 