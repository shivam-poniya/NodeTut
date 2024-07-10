require('dotenv').config();
const express = require('express');
const connectToMongoDB= require('./connection')
const path = require('path')
const {restrictToLoggedinUserOnly, checkAuth} = require("./middlewares/auth")
const cookieParser = require('cookie-parser')

const staticRoutes = require('./routes/staticRoutes')
const urlRoutes = require('./routes/urlRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express();

app.set('view engine', 'ejs')
app.set("views" , path.resolve("./views"))

//middleware

//db connection
connectToMongoDB(process.env.URL)

app.use(express.json())
app.use(express.urlencoded({extended : false}));
app.use(cookieParser())
//routes
app.use('/api/linkly', restrictToLoggedinUserOnly, urlRoutes)
app.use('/', checkAuth, staticRoutes)
app.use('/user', userRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`SERVER STARTED AT ${PORT}`));

