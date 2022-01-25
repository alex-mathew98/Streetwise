const { verifyToken, verifyTokenandAuth, verifyTokenandAdmin } = require("../middleware/VerifyToken");
const Order = require("../models/order");

const router = require("express").Router();

//Create a Order:
router.post("/",verifyToken,async(req,res)=>{
    const newOrder = new Order(req.body);
    try{
        const savedOrder= await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get("/",verifyTokenandAdmin,async(req,res)=>{
    try{
        const Orders = await Order.find();
        res.status(200).json(Orders);
    }catch(err){
        res.status(500).json(err);
    }
})

//Get User Orders
router.get("/search/:userId",verifyTokenandAuth,async(req,res)=>{
    try{
        const orders = await Order.find({userId: req.params.userId});
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
});

// TWEAK+Test
router.get("/income",verifyTokenandAdmin,async(req,res)=>{
    const date  = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() -1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1));

    try{
        const income = await Order.aggregate([
            {$match: {createdAt: {$gte: previousMonth}}},
            {
                $project:{
                    month: {$month: "$createdAt"},
                    sales: "$amount",

                }
            },
        
            {
                $group:{
                    _id:"$month",
                    total:{$sum: "$sales"},
                },
            },
        ]);
        res.status(200).json(income);
    }catch(err){
        res.status(500).json(err);
    }
})

//Update
router.put("/:id",verifyTokenandAdmin,async (req,res)=>{

    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true})
        res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});

//Delete
router.delete("/:id",verifyTokenandAdmin,async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports =router