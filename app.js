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

// Renderfile
app.engine('.html', require('ejs').renderFile);

app.set('view engine', 'ejs');
app.set('views', __dirname);

// Load first page, MAIN
app.get('/', (req, res, next) => {
    res.redirect('/login');
});

// loggeed
global.logged; // session
global.usuario = ''; // nick
global.credito = ''; // current
const reset_session = (() => {
    global.logged = false;
});

setInterval(reset_session, 600000);
/* APP */
// Enable CSS get and post connections
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth', auth);
app.use('/', router);
app.use(function(req, res) { // Not found page
    // res.status(404).send({ url: req.originalUrl + ' not found' })
    res.status(404).render('./pages/404.ejs');
});




// Localhost config
app.listen(3000, '127.0.0.1');

// Console output
// timestamp = new Date();
console.log('yo, listen on port 3000, url: http://localhost:3000');