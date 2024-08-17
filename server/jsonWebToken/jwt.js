const jwt = require('jsonwebtoken')

const generateToken = (userData) => {
    const secretKey = process.env.JWT_SECRET_KEY
    return jwt.sign(userData, secretKey,{expiresIn:'30d'});
}

module.exports = generateToken