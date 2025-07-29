import express from "express"
import cors from "cors"
import "dotenv/config"

//App Config 

const app = express();

const port = process.env.PORT || 4000;

//midelware
app.use(express.json());
app.use(cors());

// API

app.get("/",(req,res)=>{
    res.send("API working");
})

app.listen(port,()=>{
    console.log("Port its working");
})