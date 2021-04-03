import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import RecipeInfo from '../components/RecipeInfo';
import CreateReview from '../components/CreateReview';

import DeleteRecipe from '../components/DeleteRecipe';

const RecipeView = props => {
    const { id } = props;
    const [recipe, setRecipe] = useState({
        reviews: []
    });
    const [review, setReview] = useState({
    
        rating: 5,
    
    });
    const [reviewErrors, setReviewErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipe/${id}`)
            .then(response => {
                if(response.data.message === "success" && response.data.results === null){
                    navigate('/');
                } else {
                    let gottenRecipe = response.data.results;
                    gottenRecipe.reviews.sort((a,b) => b.rating - a.rating);
                    console.log(gottenRecipe)
                    setRecipe(gottenRecipe);
                }
            })
            .catch(err => console.log(err));
    }, [])

    const changeHandler = e => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/recipe/${id}/review`, review)
            .then(response => {
                if(response.data.message === "error"){
                    console.log(response.data.errors);
                    setReviewErrors(response.data.errors);
                } else {
                    let gottenRecipe = response.data.results;
                    gottenRecipe.reviews.sort((a,b) => b.rating - a.rating);
                    setRecipe(gottenRecipe);
                    setReview({
                        rating: 5,
                    });
                    setReviewErrors({});
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <RecipeInfo recipe={recipe}/>
            <CreateReview 
                recipe={recipe}
                review={review} 
                setReview={setReview}
                changeHandler={changeHandler} 
                errors={reviewErrors} 
                setErrors={setReviewErrors}
                submitHandler={submitHandler} 
            />
            <DeleteRecipe
            id={id} 
            />
        </div>
    )
}

export default RecipeView