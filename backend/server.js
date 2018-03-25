const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;


app.use(bodyParser.json());
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    next();
});

app.post('/register', function(req, res){
    console.log(req.body);
    res.send("Hi");
});

const server = app.listen(port, function(){
    console.log('api listening on ', server.address().port);
});
