// Router Constantes
const express = require('express');
const router = express.Router();
const con = require('./db');
const tb = require('./list');
// const tbb = require('./graph.js');

// Login Page or Main page
router.get('/login', function(req, res, next) {
    if (global.logged) {
        return res.redirect(301, '/home');
    }
    return res.render('login.ejs');
});
// Home Page
router.get('/home', function(req, res, next) {
    if (!global.logged) {
        return res.redirect('/login');
    } else {
        tb.list(req, res);
    }
});
// Profile Page
router.get('/profile', function(req, res, next) {
    if (!global.logged) {
        return res.redirect('/login');
    }
    return res.render('profile.ejs');
});
// Store page
router.get('/store', function(req, res, next) {
    if (!global.logged) {
        return res.redirect('/login');
    }
    return res.render('store.ejs');
});
// Insert new content page
router.get('/insert', (req, res, next) => {
    if (!global.logged) {
        return res.redirect('/login');
    }
    return res.render('insert.ejs');
});
// Help page
router.get('/help', (req, res, next) => {
    if (!global.logged) {
        return res.redirect('/login');
    }
    return res.render('help.ejs');
});

// EXIT
router.get('/exit', (req, res, next) => {
    global.logged = false;
    return res.redirect('/login');
});
module.exports = router;