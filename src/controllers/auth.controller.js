const User = require('../models/users');

    const signup = async (req, res, next) => {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
    
        try {
            const newUser = await user.save();
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
