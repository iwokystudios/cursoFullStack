const connection = require('../config');

const usersCtrl = {};

usersCtrl.getUsers = (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM user', function (error, results, fields) {
        if (error) res.send(error);
        res.json(results);
    });
    connection.end();
}
usersCtrl.createUser = (req, res) => {
    // crear
}
usersCtrl.getUser = (req, res) => {
        // indicar id
}
usersCtrl.editUser = (req, res) => {
        // indicar id
}
usersCtrl.deleteUser = (req, res) => {
        // indicar id
}


module.exports = usersCtrl;