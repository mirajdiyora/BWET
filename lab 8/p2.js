const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('home page')
})
app.get('/about', (req, res) => {
    res.send('about page')
})
app.get('/contact', (req, res) => {
    res.send('contact page')
})
app.get('/service', (req, res) => {
    res.send('service page')
})
app.use((req, res) => {
    res.status(404).send('404 page not found')
})
app.listen(4000,()=>{
    console.log("Server is running at port 4000")
})