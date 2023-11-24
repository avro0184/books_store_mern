const express = require("express")
const router = express.Router()
const bcrypt = require('bcrypt');
const User  = require("../Model/User_Model")


router.route("/").get(async(req,res)=>{
    try{
        const All_User = await User.find()
         if(!All_User){
            res.status(400).json({message : "NO PRODUCT BOOKS"})
        }
        res.status(200).json(All_User)
    } catch(err){
        console.log(err)
    }
})
router.route("/").post(async(req,res)=>{
    try{
        const {email, number , password , confirmPassword} = req.body
        const hashpassword = await bcrypt.hash(password ,10)
        const exist_email = await User.findOne({email})
        const exist_number = await User.findOne({number})
        if((!exist_email || !exist_number) && password == confirmPassword){
            const New_User = await User.create({
                email : req.body.email,
                number : req.body.number,
                password : hashpassword
        }) 
        res.status(200).json(New_User)
        } else {
            if(exist_number)
            {
                res.status(400).json({message : `${email} already exist....!`})
            } else if(exist_email) {
                res.status(400).json({message : `${number} already exist....!`})
            } else {
                res.status(400).json({message : "Password doesn't match"})
            }
        }
       
    } catch(err){
        console.log(err)
    }
})

module.exports = router