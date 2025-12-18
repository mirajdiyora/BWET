// Use fs.readFileSync() to read info.txt and print the content, Compare execution with the 
// asynchronous version.


const fs = require('fs')

console.log("start")

 try{
    const data = fs.readFileSync('hello.txt')
    console.log('read sucessfully')
    console.log(data.toString())
 }catch(err){
    console.log('error is:',err)
 }
   


console.log("end")