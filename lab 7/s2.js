const http = require('http')

const server = http.createServer((req,res)=>{
     if(req.url ==='/'){
           res.statusCode = 200;
           res.end("home page")
     }
     else if(req.url ==='/contact'){
           res.statusCode = 200;
           res.end("contact page")
     }
      else if(req.url ==='/about'){
           res.statusCode = 200;
           res.end("about page")
     }
      else if(req.url ==='/services'){
           res.statusCode = 200;
           res.end("services page")
     }
     else{
        res.statusCode = 404;
         res.end("404 page not found")     
     }

})


server.listen((4001),()=>{
            console.log("server listening at  port 4001")
})