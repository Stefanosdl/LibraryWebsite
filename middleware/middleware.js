module.exports.isLoggedIn = (req,res,next) => {
	if (!req.isAuthenticated()) {
		req.session.returnTo = req.originalUrl;
		req.flash("error", "Πρέπει να συνδεθείτε πρώτα!");
		return res.redirect("/login");
	}
	next();
}