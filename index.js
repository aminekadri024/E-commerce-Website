const express = require("express");

const mongoose = require("mongoose");

const app = express();
const Article = require("../models/Article");

mongoose
    .connect("mongodb+srv://amine024:aminebvb2016@cluster0.va3wkef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
        .then(()=>{
            console.log("successfully");
    
    })
    .catch((error)=>{
        console.log("error",error);
    
    });
app.use(express.json());

// app.get("/home",(req,res)=>{
//     res.render("main.ejs",{
//         name : "Amine"
//     });
// });

app.post("/article",async (req,res)=>{
    const newarticle = new Article();

    const arttitle = req.body.title;
    const artprice = req.body.price;

    newarticle.title = arttitle;
    newarticle.price = artprice;

    await newarticle.save();

    res.json(newarticle);
    console.log("test");
    
});



app.listen(3000, ()=>{
    console.log("listen 3000")
})