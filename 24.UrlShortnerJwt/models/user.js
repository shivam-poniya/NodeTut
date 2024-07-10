const mongoose = require("mongoose");

const userAuthSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    email:{
        type:String,
        required: true,
        unquie : true,
    },
    password:{
        type: String,
        required: true,
    },



},{timestamps:true});

const User = mongoose.model("user",userAuthSchema)

module.exports = User;