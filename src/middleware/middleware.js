const User = require('../models/users');

const checkIfUserExist = async (req, res, next) => {
const email = req.body.email;
const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered.' });
        }
        next();
    }
    module.exports = checkIfUserExist;