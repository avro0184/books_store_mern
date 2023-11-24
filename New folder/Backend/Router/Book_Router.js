const express = require("express")
const router = express.Router()
const BOOK = require("../Model/Book_Model")



router.route("/").get(async(req,res)=>{
    try{
        const All_Book = await BOOK.find()
        if(!All_Book){
            res.status(404).json({message : "NO PRODUCT BOOKS"})
        }
        res.status(200).json(All_Book)
    } catch (err){
        console.log(err)
    }
})

router.route("/").post(async(req,res)=>{
    try{
        const New_Book = await BOOK.create({
        name : req.body.name,
        author : req.body.author,
        description : req.body.description,
        price : req.body.price,
        image : req.body.image,
        avaiable : req.body.avaiable
    })
    res.status(200).json(New_Book)
    } catch(err) {
        res.status(400).json({message:err.message})
    }
    
})

router.route("/:id").get(async(req,res)=>{
    try{
        const Book_By_ID = await BOOK.findById(req.params.id);
    if(!Book_By_ID)
    {
        res.status(200).json({message : "No Data.......!"})
    }
    res.status(200).json(Book_By_ID);
    } catch (err){
        res.status(400).json({
            message : err.message
        })
    }
    
})

router.route("/:id").put(async(req,res)=>{
    try{
        const Update_Book_By_ID = await BOOK.findByIdAndUpdate(req.params.id , req.body , {new:true});
        if(!Update_Book_By_ID){
            res.status(400).json({message : "No Data"})
        } else {
        res.status(200).json(Update_Book_By_ID);
        }
    } catch (err) {
        res.status(400).json({message :err.message})
    }
})

router.route("/:id").delete(async(req,res)=>{
    const Delete_Book_By_ID = await BOOK.findByIdAndDelete(req.params.id);
    if(!Delete_Book_By_ID){
        res.status(400).json({message : "No Data"})
    } else {
    res.status(200).json(Delete_Book_By_ID);
    }
})
 
module.exports = router