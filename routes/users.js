const express = require("express");
const router = express.Router();
const passport = require("passport");
const catchAsync = require('../utils/catchAsync');
const User = require("../models/user");

router.get("/register", (req, res) => {
	res.render("register");
});

router.post("/register", catchAsync(async (req, res, next) => {
	try {
		const {firstname,lastname,password,username,usertype} = req.body;
		const user = new User({firstname,lastname,username,usertype});
		const registeredUser = await User.register(user, password);
		req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Επιτυχής εγγραφή');
            res.redirect('/');
        })
	}
	catch(e) {
		req.flash("error", e.message);
		res.redirect("register");
	}
}));

router.get("/login", (req,res) => {
	res.render("login");
});

router.post("/login", passport.authenticate('local', {failureFlash: true, failureRedirect: "/login"}), (req,res) => {
    const redirectUrl = req.session.returnTo || '/';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;