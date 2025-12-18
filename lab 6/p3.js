// Create a program that writes the text into a file named output.txt.

const fs = require('fs')

console.log("start")

fs.writeFile('hello.txt','hey this is write content ',(err)=>{
    if(err){
        console.log("error is:",err)
    }
    console.log('write sucessfuly')
})


console.log("end")