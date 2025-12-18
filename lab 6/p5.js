// Write a program to delete a file named temp.txt using fs.unlink() and display success or 
// error. 

const fs = require('fs')
console.log("start")
fs.unlink('hii.txt',(err)=>{
  if(err){
        console.log('error',error)
  }
  console.log('file sucessfully deleted')

})