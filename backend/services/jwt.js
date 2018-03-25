const crypto = require('crypto');

exports.encode = function(payload, secret){
    const algorithm = 'HS256';
    
    const header = {
        type: 'JWT',
        alg: algorithm
    };
    
    const jwt = base64Encode(JSON.stringify(header)) + '.' + base64Encode(JSON.stringify(payload));
    return jwt + '.' +  sign(jwt, secret);
};


function sign(str, key){
    return crypto.createHmac('sha256', key).update(str).digest('base64');
}

function base64Encode(str){
    return new Buffer(str).toString('base64');
}
