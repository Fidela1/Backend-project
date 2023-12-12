require('dotenv').config();
const User = require('../models/users');
const jwt = require('jsonwebtoken');

const signToken = id => {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

    const signup = async (req, res, next) => {
        const { username, email, password } = req.body;
        try {
        
        const newUser = new User({ username, email, password })
        const token = signToken(newUser._id)
            res.json({
                status: 'success',
                statusCode: 201,
                token,
                data: {
                    user: newUser
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Internal Server Error'
            });
        }
    };
  const login = async (req, res) => {
    const { email, password } = req.body;
  }

module.exports = {
    signup,
    login,
};
