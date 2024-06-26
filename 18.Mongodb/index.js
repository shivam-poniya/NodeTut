const express = require("express");
const {logReqRes} = require("./middlewares")
const {connectToMongoDB} = require('./connection')
const userRoutes = require('./routes/userRoutes')

const app = express();
const PORT = 8000;

// Db Connection
connectToMongoDB("mongodb://127.0.0.1:27017/userSchema")

// Middleware
app.use(express.urlencoded({ extended: false}));
app.use(logReqRes("log.txt"))

// Routes
app.use("/users", userRoutes)
 
app.listen(PORT, () => console.log(`Server started at Port ${PORT}`));
