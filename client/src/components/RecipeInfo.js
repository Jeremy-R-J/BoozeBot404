import React, { useState, useEffect } from "react";
import ReviewInfo from "./ReviewInfo";
import { Router, Link } from "@reach/router";


const RecipeInfo = (props) => {
    const { recipe } = props;
    const [ingredients, setIngredients] = useState([]);
    
    console.log(recipe)
    useEffect(() => {
        console.log(recipe)
        const tempArr = [];
        const keys = Object.keys(recipe);
        for (const key of keys) {
            if (key.includes("ingredient") && recipe[key]) {
                tempArr.push(recipe[key]);
            }
        }
        setIngredients(tempArr);
        console.log(tempArr);
    }, [recipe]);

    console.log(recipe.reviews);
    let sum = 0;
    for (let i = 0; i < recipe.reviews.length; i++) {
        sum += recipe.reviews[i].rating[0];
    }
    let avgRating = Math.floor(sum / recipe.reviews.length);
    console.log(avgRating);

    return (
        
            <div className="row">
                <span className="border border-success">
                    <h6 className="title">
                        <Link style={{ color: "blue" }} to={`/recipe/${recipe._id}/review`}>
                            {recipe.name}
                        </Link>
                    </h6>
                    <p style={{ color: "rgb(15 124 18)" }}>Directions: {recipe.build}</p>
                    {ingredients.map((ing, i) => {
                        return (
                            <p key={i} style={{ color: "rgb(15 124 18)" }}>
                                Ingredients: {ing}
                            </p>
                        );
                    })}
                    
                    <h6 style={{ color: "rgb(15 124 18)" }}>
                        Average Rating:{" "}
                        {recipe.reviews.length === 0
                            ? 0
                            : [...Array(avgRating)].map((item, i) => (
                                <span style={{ color: "pink" }}>
                                    <ion-icon name="wine-sharp"></ion-icon>
                                </span>
                            ))}{" "} Rounds </h6>
                </span>
            </div>
        
    );
};

export default RecipeInfo;
