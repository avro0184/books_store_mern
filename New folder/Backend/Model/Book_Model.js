const mongoose = require("mongoose")


const BOOk = mongoose.Schema({
    name : {type : String,require:true},
    author : {type : String, require:true},
    description : {type : String, require:true},
    price : {type : String, require:true},
    image : {type : String, require:true},
    avaiable : {type : Boolean, require:true}
},{timestamps:true})

module.exports = mongoose.model("book" , BOOk)