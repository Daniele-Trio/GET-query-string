const express = require("express");
const app = express();
const port = 3333;

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res)=>{

    res.sendFile(__dirname+"/client.html");

})

app.get("/users", (req,res)=>{

    let {id, token} = req.query; 
    console.log(`ID: ${id} TOKEN: ${token}`);
    res.status(200).send("Ciao");

})

app.get('/users/:id/:token', (req, res) => {

    let {id, token} = req.params;
    console.log(`ID: ${id} TOKEN: ${token}`);
    res.status(200).send("OK");

});

app.post("/users", (req, res)=>{

    let {id, token} = req.body;
    console.log(`ID: ${id} TOKEN: ${token}`);
    res.status(200).send();

})

app.listen(port, ()=>{

    console.log(`Listening on port ${port}`);   

})