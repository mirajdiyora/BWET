const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv')

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err);
})

const userRoute = require('./routes/userRoute');
const librarianRoute = require('./routes/librarianRoute');
const bookRoute = require('./routes/bookRoute');

app.use('/api/userRoute', userRoute);
app.use('/api/librarianRoute', librarianRoute);
app.use('/api/bookRoute', bookRoute);   

// const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});
   
