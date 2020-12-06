const glob = require('glob');

console.log(process.cwd());

const options = {};

glob("**/*.stories.jsx", function (er, files) {
  console.log(files.length);
  console.log(files);
})
