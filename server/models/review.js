const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: [true, "You may not leave an anonymous review."]
    // },
    rating: {
        type: [Number, "quit it you drunk"],
        required: [true, "Leave a rating, you lazy drunk."],
        min: [1, "Rating must be at least 1 barstools"],
        max: [10, "Rating cannot be more than 10 barstools"]
    }, 
    // review: {
    //     type: String,
    //     required: [true, "Stop drinking and write a review?"],
    //     minlength: [5, "Please write at least 5 characters."]
    // }
})

module.exports = ReviewSchema;