const mongoose = require("mongoose")


const User = mongoose.Schema({
    email : {type : String , require:[true, "Please add email ...."], unique: [true, "Email address already taken...."]},
    number : {type : String , require:[true, "Please add phone number ...."], unique: [true, "phone number already taken"]},
    password : {type : String , require:[true, "Please add password ...."]}
},{timestamps : true})

module.exports = mongoose.model("user" , User)