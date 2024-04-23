const db = require('../config/db');

exports.getAllUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
};


