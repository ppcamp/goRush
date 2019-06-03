var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    socket = require('socket.io'),
    url = require('url'),
    path = require('path');

// router cons
var router = express.Router();
router.get('/profile', function(req, res, next) {
    res.render('./input')
})

var app = express();
var server = http.createServer(app);

// Renderfile
app.engine('.html', require('ejs').renderFile);

// WHY????
app.set('view engine', 'html');
app.set('views', __dirname);

// Enable CSS get and post connections
app.use(express.static(path.join(__dirname, 'public')));

// Enable routing, i.e., conn with other pages
app.use('/', router);

// Not found page
app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

// Load first page, MAIN
app.get('/', function(req, res) {
    res.render('./index');
})

// Localhost config
app.listen(3000, '127.0.0.1');

// Console output
console.log('yo, listen on port 3000, time ');