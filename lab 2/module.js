const path = require('path');
const os = require('os')
//1.
console.log(__dirname);
console.log("file path: "+__filename);
console.log("path name: "+path.basename(__filename));
console.log("directory name: "+path.basename(__dirname));
console.log("extenson name: "+path.extname(__filename));


// Create a program that joins "users", "arjun", "documents", "project" into a single path using
// path.join(). 

console.log(path.join("users", "arjun", "documents'", "project"));



//  Write a program to fix the path="//folder//subfolder////file.txt" using path.normalize() and
// display the clean normalised path. 

console.log(path.normalize("//folder//subfolder////file.txt"));


//  Write a program that checks whether the given path is absolute or relative paths. 


console.log(path.isAbsolute("module.js"));
console.log(path.isAbsolute("C:/Users/miraj/documents"));



// Write a Node.js program that uses path.resolve() to convert "folder", "subfolder", "app.js"
// into an absolute path. Print the final resolved path

console.log(path.resolve("folder", "subfolder", "app.js"));

// Write a program that prints: (A)
// • Operating system name
// • Release version
// • Platform
// • Architecture
console.log(os.type());
console.log(os.release());
console.log(os.platform());
console.log(os.arch());

// Write a program that prints the total memory and free memory in GB

console.log("Total Memory: "+(os.totalmem()));
console.log("Free Memory: "+(os.freemem()));

// Write a Node.js program that prints details about the currently logged-in user in operating
// system

console.log(os.userInfo());

// Write a program that prints how long the system has been running (uptime) in seconds and in
// hours.

console.log("Uptime in seconds: "+os.uptime());
console.log("Uptime in hours: "+(os.uptime()/3600));

//  Write a Node.js program that prints: (B)
// • Number of CPU cores
// • Model name of each core
// • Network interface details

console.log(os.cpus());
console.log(os.networkInterfaces())

