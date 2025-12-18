// Write a Node.js program that uses fs.readFile() to read a file named data.txt asynchronously 
// and print its content on the console. 

const fs = require('fs')

console.log("start")

fs.readFile('hello.txt',(err,data)=>{
    if(err){
        console.log("error is:",err)
    }
    console.log('read sucessfuly')
})


console.log("end")