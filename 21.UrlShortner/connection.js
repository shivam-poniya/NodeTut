const mongoose = require('mongoose');

async function connectToMongoDB(url){
    return mongoose.connect(url).then(console.log("Mongodb Connected"));
}

module.exports= connectToMongoDB;