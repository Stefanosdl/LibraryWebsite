const express = require("express");
const router = express.Router({ mergeParams: true });

const Book = require("../models/books");
const Review = require("../models/review");

const { reviewSchema } = require("../schemas.js");


const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(",")
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

router.post("/", validateReview, catchAsync(async (req, res) => {
    const book = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    book.reviews.push(review);
    await review.save();
    await book.save();
    res.redirect("/books/${book._id}");
}));

router.delete("/:reviewId", catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Η διαγραή έγινε με επιτυχία!")
    res.redirect("/books/${id}");
}));

module.exports = router;