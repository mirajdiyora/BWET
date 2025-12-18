// Write a program to list all files in a folder called documents/ using fs.readdir() and print the 
// file names one by one.

const fs = require('fs')

console.log("start")
fs.readdir('../lab 6',(err,files)=>{
  if(err){
   console.log('err ',err)
  }
  console.log(files)

})

