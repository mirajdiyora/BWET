const child_process = require('child_process');
// console.log(child_process);

const cmd = child_process.spawn("cmd",["/c","dir"]);

cmd.stdout.on("data",(data)=>{
    console.log(Output: ${data});
});
cmd .stderr.on("data",(data)=>{
    console.log(Error: ${data});
});