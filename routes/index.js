// Router Constantes
const express = require('express');
const router = express.Router();

// Login Page or Main page
router.get('/login', function(req, res, next) {
    if (global.logged) {
        return res.redirect(301, '/home');
    }
    return res.render('./pages/login.ejs');
});
// Home Page
router.get('/home', function(req, res, next) {
    if (!global.logged) {
        return res.redirect('/login');
    }
    return res.render('./pages/home.ejs');
});
// Profile Page
router.get('/profile', function(req, res, next) {
    if (!global.logged) {
        return res.redirect('/login');
    }
    return res.render('./pages/profile.ejs');
});
// Store page
router.get('/store', function(req, res, next) {
    if (!global.logged) {
        return res.redirect('/login');
    }
    return res.render('./store.ejs');
});

module.exports = router;