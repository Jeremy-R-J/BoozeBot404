import React from 'react'
import { navigate } from '@reach/router';

const CreateRecipe = props => {
    const { recipe, errors, inputHandler, submitHandler, DeleteBtn } = props;

    return (
        <form onSubmit={ submitHandler }>
            <div className="form-group row">
                {
                    errors.name ?
                    <span className="col-sm-12">{errors.name.message}</span>
                    : ''
                }
                <label style={{color: "blue"}}  htmlFor="name" className="col-sm-2">Name: </label>
                <input style= {{borderColor: "green"}} type="text" name="name" onChange={ e => inputHandler(e)} className="col-sm-4 " value={recipe.name}/>
            </div>
            <div className="form-group row">
                {
                    errors.description ?
                    <span className="col-sm-12">{errors.description.message}</span>
                    : ''
                }
                <label htmlFor="build" className="col-sm-2" style={{color: "blue"}}>Build it: </label>
                <textarea style= {{borderColor: "green"}} name="build" onChange={ e => inputHandler(e)} className="col-sm-4 " rows="2" value={recipe.build}></textarea>
            </div>
            <div className="form-group row">
                {
                    errors.style ?
                    <span className="col-sm-12">{errors.style.message}</span>
                    : ''
                }
                <label htmlFor="ingredient1" className="col-sm-2" style={{color: "blue"}}>Ingredient 1: </label>
                <input style= {{borderColor: "green"}} type="text" name="ingredient1" className="col-sm-4 " value={recipe.ingredient} onChange={ e => inputHandler(e) }/>
            </div>
            
            <div className="form-group row">
                {
                    errors.style ?
                    <span className="col-sm-12">{errors.style.message}</span>
                    : ''
                }
                <label htmlFor="ingredient2" className="col-sm-2" style={{color: "blue"}}>Ingredient 2: </label>
                <input style= {{borderColor: "green"}} type="text" name="ingredient2" className="col-sm-4 " value={recipe.ingredient} onChange={ e => inputHandler(e) }/>
            </div>
            <div className="form-group row">
                {
                    errors.style ?
                    <span className="col-sm-12">{errors.style.message}</span>
                    : ''
                }
                <label htmlFor="ingredient3" className="col-sm-2" style={{color: "blue"}}>Ingredient 3: </label>
                <input style= {{borderColor: "green"}} type="text" name="ingredient3" className="col-sm-4 " value={recipe.ingredient} onChange={ e => inputHandler(e) }/>
            </div>
            <div className="form-group row">
                {
                    errors.style ?
                    <span className="col-sm-12">{errors.style.message}</span>
                    : ''
                }
                <label htmlFor="ingredient4" className="col-sm-2" style={{color: "blue"}}>Ingredient 4: </label>
                <input style= {{borderColor: "green"}} type="text" name="ingredient4" className="col-sm-4 " value={recipe.ingredient} onChange={ e => inputHandler(e) }/>
            </div>
            <div className="form-group row">
                {
                    errors.style ?
                    <span className="col-sm-12">{errors.style.message}</span>
                    : ''
                }
                <label htmlFor="ingredient5" className="col-sm-2" style={{color: "blue"}}>Ingredient 5: </label>
                <input style= {{borderColor: "green"}} type="text" name="ingredient5" className="col-sm-4 " value={recipe.ingredient} onChange={ e => inputHandler(e) }/>
            </div>
            <div className="form-group row">
                {
                    errors.style ?
                    <span className="col-sm-12">{errors.style.message}</span>
                    : ''
                }
                <label htmlFor="ingredient6" className="col-sm-2" style={{color: "blue"}}>Ingredient 6: </label>
                <input style= {{borderColor: "green"}} type="text" name="ingredient6" className="col-sm-4 " value={recipe.ingredient} onChange={ e => inputHandler(e) }/>
            </div>
            <div className="form-group row">
                {
                    errors.style ?
                    <span className="col-sm-12">{errors.style.message}</span>
                    : ''
                }
                <label htmlFor="ingredient7" className="col-sm-2" style={{color: "blue"}}>Ingredient 7: </label>
                <input style= {{borderColor: "green"}} type="text" name="ingredient7" className="col-sm-4 " value={recipe.ingredient} onChange={ e => inputHandler(e) }/>
            </div>
            <div className="form-group row">
                {
                    errors.style ?
                    <span className="col-sm-12">{errors.style.message}</span>
                    : ''
                }
                <label htmlFor="ingredient8" className="col-sm-2" style={{color: "blue"}}>Ingredient 8: </label>
                <input style= {{borderColor: "green"}} type="text" name="ingredient8" className="col-sm-4 " value={recipe.ingredient} onChange={ e => inputHandler(e) }/>
            </div>
            <div className="form-group row">
                {
                    errors.style ?
                    <span className="col-sm-12">{errors.style.message}</span>
                    : ''
                }
                <label htmlFor="ingredient9" className="col-sm-2" style={{color: "blue"}}>Ingredient 9: </label>
                <input style= {{borderColor: "green"}} type="text" name="ingredient9" className="col-sm-4 " value={recipe.ingredient} onChange={ e => inputHandler(e) }/>
            </div>
            <div className="form-group row">
                {
                    DeleteBtn ?
                    DeleteBtn
                    :
                    ''
                } 
                <button style={{borderColor: "rgb(15 124 18)"}} type="button" className="btn btn-primary col-sm-3" onClick={ () => navigate('/') }>Reset</button>
                <input style= {{borderColor: "blue"}} type="submit" value="Add Recipe" className="btn btn-success col-sm-3"/>
            </div>
        </form>
    )
}

export default CreateRecipe;