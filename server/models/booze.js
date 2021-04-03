
const mongoose = require('mongoose');
const ReviewSchema = require('./review');

const BoozeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must enter a name for the imbibe."],
        minlength: [1, "Please enter a real name for the review."]
    },
    type: {
        type: String,
        enum: [
            'Domestic Beer', 'Import Beer', 'Micro Beer', 'White Wine', 
            'Red Wine', 'Misc Wine', 'Brandy', 'Cordials', 'Gin',
            'Rum', 'Tequila', 'Vodka', 'Whiskey', 'Misc Beverage'
            ],
        required: [true, "Please enter a alcohol type."],
        minlength: [3, "Type must be at least 3 characters in length."]
    },
    description: {
        type: String,
        required: [true, "You must leave a description of this Booze!"],
        minlength: [5, "Description must be at least 5 characters in length."]
    },
    reviews: [ReviewSchema]
}, { timestamps: true });

module.exports = mongoose.model("booze", BoozeSchema);