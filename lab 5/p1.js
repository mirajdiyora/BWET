const child_process = require('child_process');
console.log(child_process);
const { exec } = require('child_process');

child_process.exec('Node -v',(error,stdout)=>{
    if(error){
        console.log(Error: ${error.message});
        return;
    }
    console.error("Cuurrent Node.js Version:",stdout);
})