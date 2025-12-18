// Write a program using fs.watch() to monitor changes in watchme.txt. Whenever file content 
// changes, print: “File Changed”

const { log } = require('console')
const fs = require('fs')

console.log("start")

fs.watch('.',(eventType,filename)=>{
    console.log("EventType: ",eventType, "File changed: ",filename);

    console.log(eventType)
})


console.log("end")