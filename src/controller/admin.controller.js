const Controller = {}
const Admin = require('../models/user.model');

Controller.adminPanel = async (req, res) => {
    const _id = req.decodedToken.userID;
    const admin = await Admin.findOne({ _id}, {_id:  0, password: 0});

    res.json(admin);
}

module.exports = Controller;