console.log("Hello World");

const os = require("os");
const path = require("path");
const { add } = require("./math");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname)
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log(add(1, 2));