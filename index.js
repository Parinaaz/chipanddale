var express = require('express');
var app=express();

var port_no = server.listen(process.env.PORT || 3000);

app.get('/', (req,res)=>
{

    res.json({'message' : 'world'});
})

app.listen(port_no);
