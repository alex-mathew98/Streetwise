const User = require("../models/user");
const CryptoJS = require("crypto-js");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
// Handles user registration:
router.post("/register",async (req,res)=>{
    
    //TODO: Error Handler for empty username and password
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }

});

// Handles user login:
router.post("/login",async (req,res)=>{
    
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json('Wrong credentials')
        const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        OriginalPassword !== req.body.password && 
            res.status(401).json('Wrong credentials');
            
            const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SEC,
            {expiresIn:"3d"}
            )
        const {password, ...others} =user._doc;
        res.status(200).json({...others,accessToken});
    }catch(err){
        res.status(500).json(err);
    }

});

module.exports =router