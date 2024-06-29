require('dotenv').config();
const express = require('express');
const connectToMongoDB= require('./connection')
const urlRoutes = require('./routes/urlRoutes')

const app = express();


//middleware

//db connection
connectToMongoDB(process.env.URL)

//routes
app.use(express.json())
app.use('/api/linkly', urlRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`SERVER STARTED AT ${PORT}`));

