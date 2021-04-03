const mongoose = require('mongoose');
const ReviewSchema = require('./review');

const BoozeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must enter a name for the recipe you want to add."],
        minlength: [2, "Please enter at least 2 characters."]
    },
    build: {
        type: String,
        required: [true, "You must leave detailed directions to make the cocktail!"],
        minlength: [10, "Description must be at least 10 characters in length."]
    },
    ingredient1: {
        type: String,
        required: [false, ""],
    },
    ingredient2: {
        type: String,
        required: [false, ""],
    },
    ingredient3: {
        type: String,
        required: [false, ""],
    },
    ingredient4: {
        type: String,
        required: [false, ""],
    },
    ingredient5: {
        type: String,
        required: [false, ""],
    },
    ingredient6: {
        type: String,
        required: [false, ""],
    },
    ingredient7: {
        type: String,
        required: [false, ""],
    },
    ingredient8: {
        type: String,
        required: [false, ""],
    },
    ingredient9: {
        type: String,
        required: [false, ""],
    },
    reviews: [ReviewSchema]
}, { timestamps: true });

module.exports = mongoose.model("best_booze", BoozeSchema);