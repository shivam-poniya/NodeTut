require('dotenv').config();
const express = require('express');
const connectToMongoDB= require('./connection')
const staticRoutes = require('./routes/staticRoutes')
const urlRoutes = require('./routes/urlRoutes')
const path = require('path')

const app = express();

app.set('view engine', 'ejs')
app.set("views" , path.resolve("./views"))

//middleware

//db connection
connectToMongoDB(process.env.URL)

app.use(express.json())
app.use(express.urlencoded({extended : false}));
//routes
app.use('/api/linkly', urlRoutes)
app.use('/', staticRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`SERVER STARTED AT ${PORT}`));

