const { verifyToken, verifyTokenandAuth, verifyTokenandAdmin } = require("../middleware/VerifyToken");
const Cart = require("../models/cart");

const router = require("express").Router();

//Create a Cart:
router.post("/",verifyToken,async(req,res)=>{
    const newCart = new Cart(req.body);
    try{
        const savedCart= await newCart.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get("/",verifyTokenandAdmin,async(req,res)=>{
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err);
    }
})

//Get user cart
router.get("/search/:userId",verifyTokenandAuth,async(req,res)=>{
    try{
        const userCart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(userCart);
    }catch(err){
        res.status(500).json(err);
    }
});

//Update
router.put("/:id",verifyTokenandAuth,async (req,res)=>{

    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true})
        res.status(200).json(updatedCart);
    }catch(err){
        res.status(500).json(err);
    }
});

//Delete
router.delete("/:id",verifyTokenandAuth,async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports =router