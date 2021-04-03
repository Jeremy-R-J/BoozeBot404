import React from 'react'

const ReviewInfo = props => {
    const { review } = props;
    return (
        <div className="row col-sm-8 offset-sm-2">
            <div className="col-sm-4">
                <h3>{review.name}</h3>  
            </div>
            <div className="col-sm-8">
                <p>{review.review}</p>
                <p>Rating: {review.rating} Barstools</p>
            </div>
        </div>
    )
}

export default ReviewInfo