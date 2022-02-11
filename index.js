var express = require('express');
var app=express();



app.get('/', (req,res)=>
{

    res.json({'message' : 'world'});
})

app.listen(process.env.PORT || 3000);
