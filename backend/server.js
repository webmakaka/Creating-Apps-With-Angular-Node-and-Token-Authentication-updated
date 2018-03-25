const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User.js');

const app = express();

const port = 3000;
const mongoDbConnectString = 'mongodb://admin1:admin1@ds223019.mlab.com:23019/creating-apps-with-angular-node-and-token-authentication';


app.use(bodyParser.json());
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    next();
});



app.post('/register', function(req, res){
    
    const user = req.body;
    
    console.log(user);
    
    const newUser = new User.model({
        email: user.email,
        password: user.password
    });
    
    newUser.save(function(err){
        res.status(200).send(newUser.toJSON());
    });
});

mongoose.connect(mongoDbConnectString);

const server = app.listen(port, function(){
    console.log('api listening on ', server.address().port);
});
