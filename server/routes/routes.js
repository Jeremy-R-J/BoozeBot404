const controller = require('../controllers/controller');

module.exports = app => {
    // C
    app.post('/api/booze', controller.createBooze);
    app.post('/api/recipe', controller.createRecipe);
    app.post('/api/booze/:id/review', controller.createReview);
    app.post('/api/recipe/:id/review', controller.createReviewRecipe);
    // R
    
    app.get('/api/booze', controller.getAllBoozes);
    app.get('/api/recipe', controller.getAllRecipes);
    app.get('/api/booze/:id', controller.getOneBooze);
    app.get('/api/recipe/:id', controller.getOneRecipe);
    // U
    app.patch('/api/booze/:id', controller.updateBooze);
    app.patch('/api/recipe/:id', controller.updateRecipe);
    // D
    app.delete('/api/booze/:id', controller.deleteBooze);
    app.delete('/api/recipe/:id', controller.deleteRecipe);
}