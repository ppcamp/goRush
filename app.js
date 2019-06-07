var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    socket = require('socket.io'),
    url = require('url'),
    path = require('path');

var auth = require('./auth');

/* ========================================================== */

// PG
/* const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'gorush',
    password: 'postgres',
    port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'gorush',
    password: 'postgres',
    port: 5432,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
}) */

/* ========================================================== */

// router cons
var router = express.Router();
router.get('/profile', function(req, res, next) {
    res.render('./input')
})
router.get('/404', function(req, res, next) {
    res.render('./404')
})
router.get('/store', function(req, res, next) {
    res.render('./index')
})
router.get('/newUser', function(req, res, next) {
    res.render('./newUser')
})
router.get('/login', function(req, res, next) {
    res.render('./login.html')
})

/* ========================================================== */


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

// Load first page, MAIN
app.get('/', function(req, res) {
    res.render('./index');
})

// APP
app.use('/auth', auth);


// Not found page
app.use(function(req, res) {
    // res.status(404).send({ url: req.originalUrl + ' not found' })
    res.status(404).render('./404.html')
});

// Localhost config
app.listen(3000, '127.0.0.1');

// Console output
// timestamp = new Date();
console.log('yo, listen on port 3000');