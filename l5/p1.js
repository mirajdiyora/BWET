// Write a Node.js program using child_process.exec() to run the shell command to check the
// current version of node

const child_process = require('child_process');

const { exec } = require('child_process');

child_process.exec('Node -v',(error,stdout,stderr)=>{
    
})