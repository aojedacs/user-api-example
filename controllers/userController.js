const User = require('../models/user');

exports.getAllUsers = (req, res) => {
    User.getAllUsers((err, rows) => {
        if (err){
            res.code(203)
            console.log("Ocurrio yb errir ")
        };
        res.json(rows);
    });
};