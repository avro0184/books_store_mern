const mongoose = require("mongoose")



const Connect_DB = async () =>{
    try{
    const DB = await  mongoose.connect(process.env.MONGO_URL)
    console.log(DB.connection.host , DB.connection.name)
    }
    catch (err){
        console.log(err)
    }
}

module.exports = Connect_DB