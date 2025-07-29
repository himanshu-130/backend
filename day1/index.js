console.log("Hello, backend!");
const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hellow there!');
const data = fs.readFileSync('hello.txt', 'utf-8');
console.log(data);
