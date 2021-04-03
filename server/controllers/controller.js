const Booze = require('../models/booze');
const Recipe = require('../models/recipe');

module.exports = {
    // C
    createBooze: (req,res) => {
        // check if a booze with that name exists
        // if not, add it. if yes, error
        Booze.exists({ name: req.body.name })
            .then(exists => exists ? Promise.reject({ errors: { name: { message: "A booze with that name exists." } } }) : Booze.create(req.body))
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    createReview: (req,res) => {
            Booze.findOneAndUpdate({ _id: req.params.id },{$addToSet:{reviews:req.body}}, { new: true, runValidators: true })
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => {
                console.log(err);
                if(err.errors){
                    res.json({ message: "error", errors: err.errors.reviews.errors })
                } else {
                    res.json({ message: "error", errors: err})
                }
            });
    },
    // R
    getAllBoozes: (req,res) => {
        Booze.find()
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    getOneBooze: (req,res) => {
        Booze.findById(req.params.id)
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    // U
    updateBooze: (req,res) => {
        Booze.exists({ name: req.body.name, _id: { $ne: req.params.id }})
            .then(exists => exists ? 
                Promise.reject({ errors: { name: { message: "Another booze with that name exists"}}}) 
                : Booze.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }))
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    // D
    deleteBooze: (req,res) => {
        Booze.remove({ _id: req.params.id })
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", results: err }));
    },

    // C
    createRecipe: (req,res) => {
        // check if a recipe with that name exists
        // if not, add it. if yes, error
        Recipe.exists({ name: req.body.name })
            .then(exists => exists ? Promise.reject({ errors: { name: { message: "A recipe with that name exists." } } }) : Recipe.create(req.body))
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    createReviewRecipe: (req,res) => {
        Recipe.findOneAndUpdate({ _id: req.params.id },{$addToSet:{reviews:req.body}}, { new: true, runValidators: true })
        .then(data => res.json({ message: "success", results: data }))
        .catch(err => {
            console.log(err);
            if(err.errors){
                res.json({ message: "error", errors: err.errors.reviews.errors })
            } else {
                res.json({ message: "error", errors: err})
            }
        });
},
    // R
    getAllRecipes: (req,res) => {
        Recipe.find()
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    getOneRecipe: (req,res) => {
        Recipe.findById(req.params.id)
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    // U
    updateRecipe: (req,res) => {
        Recipe.exists({ name: req.body.name, _id: { $ne: req.params.id }})
            .then(exists => exists ? 
                Promise.reject({ errors: { name: { message: "Another recipe with that name exists"}}}) 
                : Recipe.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }))
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    // D
    deleteRecipe: (req,res) => {
        Recipe.remove({ _id: req.params.id })
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", results: err }));
    }
}