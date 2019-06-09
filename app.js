"use strict";

var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    socket = require('socket.io'),
    url = require('url'),
    path = require('path');


// login routes
var auth = require('./routes/auth');
// pages routes
var router = require('./routes/index');

var app = express();
var server = http.createServer(app);


/* APP */
// Enable CSS get and post connections
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth', auth);
app.use('/', router);
// Load first page, MAIN
app.get('/', (req, res, next) => {
    res.redirect('/login');
});

app.use(function(req, res) { // Not found page
    // res.status(404).send({ url: req.originalUrl + ' not found' })
    res.status(404).render('./404.ejs');
});
// Renderfile
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.set('views', path.join(__dirname, 'views'));





// loggeed
global.logged; // session
global.usuario = ''; // nick
global.credito = ''; // current
global.usum = ''; // sum of buy
const reset_session = (() => {
    global.logged = false;
});

setInterval(reset_session, 600000);





// Localhost config
// const exec = require('child_process').execSync;
var serverIp = '192.168.0.102';
// var getServerIp = exec('ip address | grep -i "inet " | grep -v 127 | grep -E "[0-9.]{10,}"', 'sync', (err, stdout, stderr) => {
// if (err) console.log(err);
// var pattern = '[0-9.]{10,}';
// console.log((stdout.match(pattern))[0]);
// serverIp = (stdout.match(pattern))[0];
// console.log(serverIp)
// });

app.listen(3000, serverIp | 'http://localhost', function() {
    console.log('Application worker\turl: http://%s:3000\tPID: %s', serverIp, process.pid);
});