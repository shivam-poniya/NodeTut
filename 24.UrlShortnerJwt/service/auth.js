const jwt = require('jsonwebtoken')
const secret = "dsfkjsdhrtnq2krnkr32m4k532k4n2k3421ll"
function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, secret);
}

function getUser(token){
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}

module.exports={
    setUser,
    getUser
};