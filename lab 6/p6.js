// Write a program that creates a folder named my-data using fs.mkdir(). If the folder already 
// exists, show an appropriate message. 



const fs = require('fs')

console.log("start")
fs.mkdir('../lab 6',(err)=>{
  if(err){
    if(err.code=='EEXIsT'){
        console.log('file already exist')
    }
    else{
        console.log('err is',err)
    }
  }
  console.log('directory made sucessfully')

})