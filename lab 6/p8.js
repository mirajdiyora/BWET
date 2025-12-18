// Write a program that copies a file named source.txt to a new file named backup.txt using 
// fs.copyFile().

const fs = require('fs')

console.log("start")

fs.copyFile('hello.txt','hi.txt',(err)=>{
    if(err){
        console.log("error is:",err)
    }
    console.log('file copy sucessfuly')
})


console.log("end")


