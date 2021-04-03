import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import BoozeInfo from '../components/BoozeInfo';
import CreateReview from '../components/CreateReview';
import Delete from '../components/Delete';

const BoozeView = props => {
    const { id } = props;
    const [booze, setBooze] = useState({
        reviews: []
    });
    const [review, setReview] = useState({
        // name: "",
        rating: 5,
        // review: ""
    });
    const [reviewErrors, setReviewErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/booze/${id}`)
            .then(response => {
                if(response.data.message === "success" && response.data.results === null){
                    navigate('/');
                } else {
                    let gottenBooze = response.data.results;
                    gottenBooze.reviews.sort((a,b) => b.rating - a.rating);
                    setBooze(gottenBooze);
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
        axios.post(`http://localhost:8000/api/booze/${id}/review`, review)
            .then(response => {
                if(response.data.message === "error"){
                    console.log(response.data.errors);
                    setReviewErrors(response.data.errors);
                } else {
                    console.log(response)
                    let gottenBooze = response.data.results;
                    gottenBooze.reviews.sort((a,b) => b.rating - a.rating);
                    setBooze(gottenBooze);
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
            <BoozeInfo booze={booze}/>
            <CreateReview 
                review={review} 
                setReview={setReview}
                changeHandler={changeHandler} 
                errors={reviewErrors} 
                setErrors={setReviewErrors}
                submitHandler={submitHandler} 
            />
            <Delete
            id={id}
            />
        </div>
    )
}

export default BoozeView;