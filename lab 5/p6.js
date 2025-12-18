const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("Greet",()=>{
   console.log("Hello, Event Emitter");
});
emitter.emit("Greet");




// Extra
setInterval(() => {
    emitter.emit("tick");
},1000);

emitter.on("tick",()=>{
    console.log("Dubble Kill ");
});


setInterval(() => {
    emitter.emit("tick1");
},1001);

emitter.on("tick1",()=>{
    console.log("Triple Kill");
});
