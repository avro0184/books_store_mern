const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../Model/User_Model")
const checkLogin = require("../Moddleware/checklogin")



// const mid = (req, res , next ) =>{
//     const login = false ;
//     if(login)
//     {
//       console.log("hello");
//       next();
//     } else {
//       res.status(400).json({message:"world"})
//     }
// }
// router.use(mid)
router.route("/").get((req,res)=>{
   res.status(200).json({message : "data here"})
})


router.route("/").post(async(req,res)=>{
    try{
        const {email , password , ischeck} = req.body
        const user = await User.findOne({email})
       if (user) {
  bcrypt.compare(password, user.password, async (error, passwordMatch) => {
    if (error) {
       res.status(500).json({ message: 'Internal server error' });
    }

    if (passwordMatch && ischeck === true) {
      const accessToken = jwt.sign(
        {
          user_data: {
            email: user.email,
            number: user.number,
            id : user._id
          },
        },
        process.env.ACCESS_TOKEN_SECRATE,
        { expiresIn: '1h' }
      );
       res.status(200).json({ accessToken });
    } else {
      return res.status(400).json({ message: 'Email && Password did not match or ischeck is false' });
    }
  });
} else {
  res.status(404).json({ message: 'User not found' });
}
    } catch(err){
         res.status(404).json({ message: 'User not found' });
    }
})



module.exports = router