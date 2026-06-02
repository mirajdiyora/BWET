const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors");
dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());

// MongoDB Connection

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {console.log("MongoDB connected")})
  .catch(err => {console.log(err)})



// MongoDB Connection
const facultyRoutes = require('./routes/facultyRoutes')
const studentRoutes = require('./routes/studentRoutes')
const productRoutes = require('./routes/productRoutes')

// Routes
app.use('/api/faculty', facultyRoutes)
app.use('/api/student', studentRoutes)
app.use('/api/product', productRoutes)





const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))
