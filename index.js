var express = require('express');
var app=express();

var PORT = 3000 || process.env.PORT;

app.get('/', (req,res)=>
{

    res.json({'message' : 'world'});
})

app.listen(PORT);
