import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RecipeInfo from '../components/RecipeInfo';
import BoozeInfo from '../components/BoozeInfo';

const Dashboard = () => {
    const [booze, setBooze] = useState([]);
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/booze')
            .then(response => setBooze(response.data.results.sort((a,b)=>a.name<b.name?-1:a.name>b.name?1:0)))
            .catch(err => console.log("Something went wrong: ", err));
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipe')
            .then(response => setRecipe(response.data.results.sort((a,b)=>a.name<b.name?-1:a.name>b.name?1:0)))
            .catch(err => console.log("Something went wrong: ", err));
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-sm-6">
                    <h4 style={{ color: "rgb(15 124 18)" }} className="title">Boozes</h4>
                    {
                        booze.map((item, i) =>
                            <BoozeInfo booze={item} key={i} />
                        )
                    }                
                </div>
                <div className="col-sm-6">
                    <h4 style={{ color: "rgb(15 124 18)" }} className="title">Cocktail Recipes</h4>
                    {
                        recipe.map((item, i) =>
                            <RecipeInfo recipe={item} key={i} />
                        )
                    }                
                </div>
            </div>
        </>
    )
}

export default Dashboard;
