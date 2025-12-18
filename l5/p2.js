const cp = require('child_process');

// const {chdir} = require("process")
// const child = cp.spawn("find",["/"]);


const child = cp.spawn("cmd.exe",["/c","dir","/s","c:\\"]);
child.stderr.on('data',(data)=>{
    console.log(`STDERR: ${data}`);
})

child.stdout.on('data',(data)=>{
    console.log(`STDOUT: ${data}`);
})

child.on('CLOSE',(data)=>{
    console.log(`CLOSE: ${data}`);
})