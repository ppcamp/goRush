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
    var sqlStatment = 'INSERT INTO logins(nome,senha,nick,credito,email) VALUES("' + f.userName + '","' + f.userPsswd + '","' + f.userNick + '",30,"' + f.userEmail + '");';

    con.connect(function(err) {
        if (err) throw err;
        console.log('Connected to db');
        con.query(sqlStatment, function(err, res, next) {
            console.log('Recorded, chck it');
            // inserto into historico
            sqlStatment = 'INSERT INTO historicoCompra(valor,logins_nick) VALUES(30,"' + f.userNick + '");';
            con.connect((err) => {
                con.query(sqlStatment, (err, res, next) => {
                    console.log('Historico recorded');
                    console.log(sqlStatment);
                });
            });
        });
    });
    return res.redirect('/');
});

// CHECK FROM TABLE
router.post('/login', urlencodedParser, (req, res, next) => {
    var f = req.body;
    var sqlStatment = 'select nick from logins where nick="' + f.userNick + '" AND senha="' + f.userPsswd + '";';

    con.connect((err) => {
        con.query(sqlStatment, (err, serverResponse, next) => {
            if (typeof serverResponse !== 'undefined' && serverResponse.length > 0) {
                console.log('Connected to db');
                global.logged = true;
                global.usuario = f.userNick;
                con.query('SELECT credito from logins where nick="' + f.userNick + '";', (err, r) => {
                    global.credito = r[0].credito.toString();
                });
                con.query('SELECT SUM(valor) FROM historicoCompra WHERE logins_nick="' + global.usuario + '";', (err, r) => {
                    global.usum = Object.values(r[0]);
                });

                return res.redirect('/home');
            } else return res.redirect('/login');
        });
    });
});

// Insert content
router.post('/insert/newcontent', urlencodedParser, (req, res, next) => {
    var f = req.body;
    var sqlStatment = 'INSERT INTO conteudo(titulo,texto,logins_nick) VALUES("' + f.newTitulo + '","' + f.newTexto + '","' + global.usuario + '");';
    con.connect((err) => {
        con.query(sqlStatment, (err, resposta) => {
            return res.redirect('/home');
            console.log('Recorded');
        });
    })
});

module.exports = router;

// INSERT INTO logins(nick,senha,nome) values("alow","te","ada");
// SELECT nome,senha FROM logins WHERE;