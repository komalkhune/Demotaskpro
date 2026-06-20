const express=require("express");
const router=require("./router/router")
const bodyParser=require("body-parser")
const cors=require("cors")

const db=require("./utils/database")

const app=express();

app.use(cors());

app.use(express.json());

app.use(router);



app.listen(5000, () => {
    console.log("Server Started");
});