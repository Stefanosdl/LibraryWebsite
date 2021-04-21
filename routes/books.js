const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");
const mongoose = require("mongoose")

const { reviewSchema } = require("../schemas.js");

const Book = require("../models/books");
const Review = require("../models/review");

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(",")
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

router.get("/", catchAsync(async (req, res) => {
    const books = await Book.find({});
    res.render("books/index", { books })
}));

router.get("/:id", catchAsync(async (req,res) => {
	const book = await Book.findById(req.params.id).populate("reviews");
    if (!book) {
        req.flash("error", "Δεν υπάρχει το συγκεκριμένο βιβλίο!");
        return res.redirect("/books");
    }
    res.render("books/show", { book });
}));

router.post("/:id", validateReview, catchAsync(async (req, res) => {
    const book = await Book.findById(req.params.id);
    const review = new Review(req.body.review);
    book.reviews.push(review);
    await review.save();
    await book.save();

    res.redirect(`/books/${book._id}`);
}));

module.exports = router;