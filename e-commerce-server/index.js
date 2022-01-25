const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

const cors = require("cors");
// const req = require("express/lib/request");


app.use(express.json()); 
dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose
 .connect(process.env.MONGO_URL)
 .then(()=>console.log("DBConnection successful!"))
 .catch((err)=>{
    console.log(error)
});
app.use(cors());
app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/products",productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoute);

app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
})