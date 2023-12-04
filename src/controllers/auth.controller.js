const User = require('../models/users');

    const signup = async (req, res, next) => {
        const { username, email, password } = req.body;
        try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered.' });
        }
        
        const newUser = new User({ username, email, password })
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
  

module.exports = {
    signup,
};
