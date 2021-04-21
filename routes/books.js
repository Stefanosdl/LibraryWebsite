const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");
const { isLoggedIn } = require('../middleware/middleware');

const { reviewSchema } = require("../schemas.js");

const Book = require("../models/books");
const Review = require("../models/review");
const Question = require("../models/questions");

router.get("/", catchAsync(async (req, res) => {
    const books = await Book.find({});
    res.render("books/index", { books })
}));

router.get("/:id", catchAsync(async (req,res) => {
	const book = await Book.findById(req.params.id).populate("reviews").populate("questions").exec();
    if (!book) {
        req.flash("error", "Δεν υπάρχει το συγκεκριμένο βιβλίο!");
        return res.redirect("/books");
    }
    res.render("books/show", { book });
}));

router.post("/:id/review", isLoggedIn, catchAsync(async (req, res) => {
    const book = await Book.findById(req.params.id);
    const review = new Review(req.body.review);
    book.reviews.push(review);
    await review.save();
    await book.save();
    res.redirect(`/books/${book._id}`);
}));

router.post("/:id/question", isLoggedIn, catchAsync(async (req, res) => {
    const book = await Book.findById(req.params.id);
    const question = new Question(req.body.question);
    book.questions.push(question);
    await question.save();
    await book.save();
    res.redirect(`/books/${book._id}`);
}));

router.put("/:id", isLoggedIn, catchAsync(async (req, res) => {
    const book = await Book.findById(req.params.id).populate("questions");
    const question = new Question(req.body.question);
    const curQuestion = await Question.findById(req.body.question.id);
    const updated = await Question.findByIdAndUpdate(curQuestion.id, { ...req.body.question});

    await question.save();
    await book.save();
    res.redirect(`/books/${book._id}`);
}));


module.exports = router;