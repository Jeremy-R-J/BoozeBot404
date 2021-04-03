import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react'
import CreateRecipe from '../components/CreateRecipe';
import background from "../barPics/BarBlackObsidian.jpg";

const NewRecipe = () => {
    const [recipe, setRecipe] = useState({
        name: "",
        build: "",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        ingredient5: "",
        ingredient6: "",
        ingredient7: "",
        ingredient8: "",
        ingredient9: ""
    });
    const [errors, setErrors] = useState({
        name: null,
        build: null,
        ingredient1: null,
        ingredient2: null,
        ingredient3: null,
        ingredient4: null,
        ingredient5: null,
        ingredient6: null,
        ingredient7: null,
        ingredient8: null,
        ingredient9: null
    });

    const changeHandler = e => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/recipe', recipe)
            .then(response => {
                if(response.data.message === "error"){
                    setErrors(response.data.errors);
                } else {
                    navigate('/');
                }
            })
    }

    return (
        <div className="pic" style={{ backgroundImage: `url(${background})` }}>
            <h6 className="title" style={{color: "blue"}}>Add a Recipe</h6>
            <CreateRecipe
                recipe={ recipe }
                inputHandler={ changeHandler }
                submitHandler={ submitHandler }
                errors={ errors }
            />
        </div>
    )
}

export default NewRecipe;