const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

UserSchema.methods.toJSON = function(){
    const user = this.toObject();
    delete user.password;
    console.log(user);
    return user;
};

UserSchema.methods.comparePasswords = function(password, callback){
    bcrypt.compare(password, this.password, callback)
};

UserSchema.pre('save', function(next){
    
    const user = this;
    
    if(!user.isModified('password')) return next();
    
    bcrypt.genSalt(10, function(err, salt){
        if (err) {
            return next(err);
        }
        
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});


module.exports = mongoose.model('User', UserSchema);
