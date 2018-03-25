const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

const User = mongoose.model('User', {
    email: String,
    password: String
});

app.post('/register', function(req, res){
    
    const user = req.body;
    
    console.log(user);
    
    const newUser = new User({
        email: user.email,
        password: user.password
    });
    
    newUser.save(function(err){
        res.status(200).json(newUser);
    });
});

mongoose.connect(mongoDbConnectString);

const server = app.listen(port, function(){
    console.log('api listening on ', server.address().port);
});
