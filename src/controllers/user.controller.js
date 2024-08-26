const Users = require("../models/users")

const getAllUsers = async (req,res,send) => {
    const users = await Users.find();
    res.send(users);
};
const getUser = async (req,res,send) => {
    id  = req.params.id;
    const users = await Users.findone({_id: req.params.id});
    res.json({
        status: 'success',
        statusCode: 201,
        data: {
            user: users
        }
    });
};

module.exports = {
    getAllUsers,
    getUser
};