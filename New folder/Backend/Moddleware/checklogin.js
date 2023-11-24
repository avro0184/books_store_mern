const jwt = require("jsonwebtoken")

const checkLogin = (req , res , next) =>{
  const {authorization} = req.header
  try{
     const accessToken = authorization.split(" ")[1]
     const user = jwt.verify(accessToken , process.env.ACCESS_TOKEN_SECRATE)
     req.user;
     next();
  } catch {
    console.log("authemtication error")
  }
}

module.exports = checkLogin