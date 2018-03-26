const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User.js');
// const jwt = require('./services/jwt.js');
const jwt = require('jwt-simple');

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
    
    const newUser = new User({
        email: user.email,
        password: user.password
    });
    
    newUser.save(function(err){
        createSendToken(newUser, res);
    });
});

app.post('/login', function(req, res){
    req.user = req.body;
    
    const searchUser = {
        email: req.user.email
    }
    
    User.findOne(searchUser, function(err, user){
        if (err) {
            throw err;
        }
        
        if(!user){
            res.status(401).send({
                message: 'Wrong email/password'
            });
        }
            
        user.comparePasswords(req.user.password, function(err, isMatch){
            if(err){
                throw err;
            }
            if(!isMatch){
                res.status(401).send({
                    message: 'Wrong email/password Mismatch'
                });
            }            
            createSendToken(user, res);
        });
        
    });
});

function createSendToken(user, res){
    const payload = {
        sub: user.id
    };
    

    
    const token = jwt.encode(payload, "shhh...");
    
    res.status(200).send({
            user: user.toJSON(),
            token
        }
    );
}

const jobs = [
    'Cook',
    'SuperHero',
    'Unicorn Wisperer',
    'Toast Inspector'
];

app.get('/jobs', function(req, res){
    
    if(!req.headers.authorization){
        return res.status(401).send({
            message: 'You are not authorized'
        });
    }
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.decode(token, "shhh...");
    
    if(!payload.sub){
        res.status(401).send({
            message: 'Authentication failed'
        });
    }
    
    res.json(jobs);
});

mongoose.connect(mongoDbConnectString);

const server = app.listen(port, function(){
    console.log('api listening on ', server.address().port);
});
