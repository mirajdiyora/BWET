const express = require('express');
const userRouter = require('./routes/users.route');
const moviesRouter = require('./routes/movies.route')
const ratingRouter = require('./routes/moviesRanting.route')

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/movies", moviesRouter);
app.use("/rating", ratingRouter);

app.listen(4000, ()=> {
    console.log("Server started at @4000")
})
