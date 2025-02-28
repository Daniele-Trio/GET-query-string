const { log } = require("console");
const express = require("express");
const app = express();
const port = 3333;

app.use(express.static(__dirname));

app.get("/", (req,res)=>{

    res.sendFile(__dirname+"/client.html");

})

app.listen(port, ()=>{

    console.log(`Listening on port ${port}`);   

})