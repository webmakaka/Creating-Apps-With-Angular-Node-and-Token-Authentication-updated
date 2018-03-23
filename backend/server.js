const express = require('express');

const app = express();

const port = 3000;

app.post('/register', function(req, res){
    res.send("Hi");
});

const server = app.listen(port, function(){
    console.log('api listening on ', server.address().port);
});
