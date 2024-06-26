const mongoose = require("mongoose");

async function connectToMongoDB(url) {
 return  mongoose
    .connect(url)
    .then(() => console.log("Mongodb Server Connected"))
    .catch((err) => console.log("Mongodb error", err));
}


module.exports = {
    connectToMongoDB
}