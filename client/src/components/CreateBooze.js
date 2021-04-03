import React from 'react'
import { navigate } from '@reach/router';

const CreateBooze = props => {
    const { booze, errors, inputHandler, submitHandler, DeleteBtn} = props;

    return (
        <form onSubmit={ submitHandler }>
            <div className="form-group row" style={{margin: "3px"}}>
                {
                    errors.name ?
                    <span className="col-sm-12">{errors.name.message}</span>
                    : ''
                }
                <label style={{color: "blue"}} htmlFor="name" className="col-sm-2">Name: </label>
                <input style={{borderColor: "green"}} type="text" name="name" onChange={ e => inputHandler(e)} className="col-sm-4 " value={booze.name}/>
            </div>
            
            <div className="form-group row" style={{margin: "3px"}}>
                {
                    errors.type ?
                    <span className="col-sm-12">{errors.type.message}</span>
                    : ''
                }
                <label style={{color: "blue"}} htmlFor="type" className="col-sm-2">Type: </label>
                <select style={{borderColor: "green"}} name="type" className="col-sm-4" onChange={ e => inputHandler(e) }>
                    <option style={{color: "blue"}} value=" Make a selection">Make a Selection</option>
                    <option style={{color: "blue"}} value="Domestic Beer">Domestic Beer</option>
                    <option style={{color: "blue"}} value="Import Beer">Import Beer</option>
                    <option style={{color: "blue"}} value="Micro Beer">Micro Beer</option>
                    <option style={{color: "blue"}} value="Red Wine">Red Wine</option>
                    <option style={{color: "blue"}} value="White Wine">White Wine</option>
                    <option style={{color: "blue"}} value="Misc Wine">Misc Wine</option>
                    <option style={{color: "blue"}} value="Brandy">Brandy</option>
                    <option style={{color: "blue"}} value="Cordials">Cordials</option>
                    <option style={{color: "blue"}} value="Gin">Gin</option>
                    <option style={{color: "blue"}} value="Rum">Rum</option>
                    <option style={{color: "blue"}} value="Tequila">Tequila</option>
                    <option style={{color: "blue"}} value="Vodka">Vodka</option>
                    <option style={{color: "blue"}} value="Whiskey">Whiskey</option>
                    <option style={{color: "blue"}} value="Misc Beverage">Misc Beverage</option>
                </select>
            </div>
            
            <div className="form-group row" style={{margin: "3px"}}>
                {
                    errors.description ?
                    <span className="col-sm-12">{errors.description.message}</span>
                    : ''
                }
                <label style={{color: "blue"}} htmlFor="description" className="col-sm-2">Description: </label>
                <textarea style={{borderColor: "green"}} name="description" onChange={ e => inputHandler(e)} className="col-sm-4 " rows="3" value={booze.description}></textarea>
            </div>
            
            <div className="form-group row">
                {
                    DeleteBtn ?
                    DeleteBtn
                    :
                    ''
                } 
                <button style={{borderColor: "green"}} type="button" className="btn btn-primary col-sm-2" onClick={ () => navigate('/') }>Reset</button>
                <input style={{borderColor: "blue"}} type="submit" value="Add Booze" className="btn btn-success col-sm-2"/>
            </div>
        </form>
    )
}

export default CreateBooze;