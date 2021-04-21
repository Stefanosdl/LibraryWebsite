const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");

const Book = require("../models/books");

router.get("/", catchAsync(async (req, res) => {
    const books = await Book.find({});
    res.render("books/index", { books })
}));

router.get("/:id", catchAsync(async (req,res) => {
	const book = await Book.findById(req.params.id);
    if (!book) {
        req.flash("error", "Δεν υπάρχει το συγκεκριμένο βιβλίο!");
        return res.redirect("/books");
    }
    res.render("books/show", { book });
}));

module.exports = router;