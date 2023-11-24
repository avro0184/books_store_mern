// const jwt = require("jsonwebtoken")


// const validtoken = async(req ,res ) =>{
//     const {authorization} = req.headers['autorization']
//     try{
//         const token = authorization.split("")[1]
//         const decode = jwt.verify(token , process.env.ACCESS_TOKEN_SECRATE , (err, decode)=>{
//             if(err){
//                 console.log(err)
//             } else {
//                 req.user = decode
//             }
//         })

//     } catch(err){
//         console.log(err)
//     }
// }



const mid = (req, res , next ) =>{
    const login = false ;
    if(login)
    {
      console.log("hello");
      next();
    } else {
      res.status(400).json({message:"world"})
    }
}