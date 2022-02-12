var express = require('express');

var app=express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res)=>
{

    res.sendFile(__dirname + '/index.html');
})

app.post('/article', (req, res)=>{
    res.send("Hi you successfully posted!!");
    console.log(req.body);
})


app.listen(process.env.PORT || 3000);
