require('dotenv').config();
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const signToken = id => {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

    const signup = async (req, res) => {
        const { username, email, password } = req.body;
        try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered.' });
        }
        const hashedPassword = await bcrypt.hash(password, 8);
        const newUser = new User({ username, email, password: hashedPassword })
        await newUser.save();
        
            res.json({
                status: 'success',
                statusCode: 201,
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
    try {
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email.' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password.' });
        }
        const token = signToken(user._id);
        res.json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }

  }

module.exports = {
    signup,
    login,
};
