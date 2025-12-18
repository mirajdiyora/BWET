const express = require('express')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
    
    fs.readFile('me.txt', (err, data) => {
        if(err){
                res.send(err)
            }
            res.send(data)
        })
    })

app.get('/about', (req, res) => {
    
    fs.readFile('about.txt', (err, data) => {
        if(err){
                res.send(err)
            }
            res.send(data)
        })
    })
app.get('/service', (req, res) => {
    
    fs.readFile('me.txt', (err, data) => {
        if(err){
                res.send(err)
            }
            res.send(data)
        })
    })
app.get('/contact', (req, res) => {
    
    fs.readFile('me.txt', (err, data) => {
        if(err){
                res.send(err)
            }
            res.send(data)
        })
    })
   
app.listen(4001, ()=>{
    console.log('Server started at 4001')
})