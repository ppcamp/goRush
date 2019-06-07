const con = require('../routes/db');
const express = require('express');
const bodyParser = require('body-parser');

var router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// INSERT TABLE
router.post('/signup', urlencodedParser, (req, res, next) => {
    var f = req.body;
    var sqlStatment = 'INSERT INTO logins(nome,senha,nick) VALUES("' + f.userName + '","' + f.userPsswd + '","' + f.userNick + '");';

    con.connect(function(err) {
        console.log('Connected to db');
        con.query(sqlStatment, function(err, res, next) {
            console.log('Recorded, chck it');
        });
    });
    return res.redirect('/');
});

// CHECK FROM TABLE
router.post('/login', urlencodedParser, (req, res, next) => {
    var f = req.body;
    var sqlStatment = 'select nick from logins where nick="' + f.userNick + '" AND senha="' + f.userPsswd + '";';

    con.connect((err) => {
        con.query(sqlStatment, (err, res, next) => {
            if (typeof res !== 'undefined' && res.length > 0) {
                console.log('Connected to db');
                global.logged = true;
                global.user = f.userNick;
            }
        });
    });

    return res.redirect('/home');
});


module.exports = router;

// INSERT INTO logins(nick,senha,nome) values("alow","te","ada");
// SELECT nome,senha FROM logins WHERE;