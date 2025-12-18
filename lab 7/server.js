const http = require('http')

const server = http.createServer((req,res)=>{
     if(req.url ==='/'){
           res.end("home page")
     }
     
})

server.listen((4000),()=>{
            console.log("server listening at  port 4000")
     })