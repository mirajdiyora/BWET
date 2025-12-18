// Write a program that checks if the file config.json exists in the current directory using 
// fs.existsSync() and prints the result. 

const fs = require('fs');

console.log("start");


    const exists = fs.existsSync('hello.txt');
console.log("file exists:", exists);



console.log("end");