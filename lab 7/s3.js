const http = require("http")
const fs = require('fs')

const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.statusCode = 200;
        fs.readFile('home.txt', (err, data) => {
            if(err){
                res.end(err)
            }
            res.end(data)
        })
    }
    else if(req.url === '/about'){
        res.statusCode = 200;
        fs.readFile('about.txt', (err, data) => {
            if(err){
                res.end(err)
            }
            res.end(data)
        })
    }
    else if(req.url === '/contact'){
        res.statusCode = 200;
        fs.readFile('contact.txt', (err, data) => {
            if(err){
                res.end(err)
            }
            res.end(data)
        })    
    }
    else if(req.url === 'help'){
        res.statusCode = 200;    
        fs.readFile('help.txt', (err, data) => {
            if(err){
                res.end(err)
            }
            res.end(data)
        })    
    }
    else{
        res.statusCode = 404;
        res.end("Page not found")
    }
})

server.listen(9669, ()=>{
    console.log('Server started at @9669')
})