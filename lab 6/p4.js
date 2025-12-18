
// Create a program that appends the text into a file named output.txt. 

const fs = require('fs')

console.log("start")

fs.appendFile('hello.txt','hey this is apppend content',(err)=>{
    if(err){
        console.log("error is:",err)
    }
    console.log('apppend sucessfuly')
})


console.log("end")