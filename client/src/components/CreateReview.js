import React from 'react'



const CreateReview = props => {
    const { review, setReview, changeHandler, submitHandler, errors, setErrors} = props;

    const clearForm = () => {
        setReview({
            rating: 5,
        });
        setErrors({});
    }
    return (
        <div className="pic">
            {/* <h3>{booze.name}</h3> */}
            <form onSubmit={submitHandler}>
                <div className="form-group row">
                    <div className="form-group col-sm-6"> 
                        {
                            errors.rating ? 
                            <p className="col-sm-12">{errors.rating.message}</p>
                            :
                            ''
                        }
                        <label htmlFor="rating" className="col-sm-4">Rating:</label>
                        <select name="rating" onChange={changeHandler} value={review.rating} className="col-sm-2 form-control">
                            <option value={1}>1 Round</option>
                            <option value={2}>2 Rounds</option>
                            <option value={3}>3 Rounds</option>
                            <option value={4}>4 Rounds</option>
                            <option value={5}>5 Rounds</option>
                            <option value={6}>6 Rounds</option>
                            <option value={7}>7 Rounds</option>
                            <option value={8}>8 Rounds</option>
                            <option value={9}>9 Rounds</option>
                            <option value={10}>10 Rounds</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="form-group col-sm-6">
                        <button type="button" className="btn btn-secondary col-sm-3" onClick={clearForm}>Cancel</button>
                        <input type="submit" value="Submit" className="btn btn-primary col-sm-3"/>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default CreateReview;