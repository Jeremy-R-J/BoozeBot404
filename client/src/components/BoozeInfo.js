import React from 'react'
import ReviewInfo from './ReviewInfo';
import {Router, Link} from '@reach/router';

const BoozeInfo = props => {
    const { booze  }= props;
    console.log(booze.reviews)
    let sum=0;
    for (let i=0; i<booze.reviews.length ; i++){
        sum+=booze.reviews[i].rating[0]
    }
    let avgRating=Math.floor(sum/booze.reviews.length)
    console.log(avgRating)

    return (
        <>
        <div className="row">
            <span className="border border-success">
                <h6><Link className="title" style={{color: "blue"}} to={`/booze/${booze._id}/review`}>{booze.name}</Link></h6>
                <p style={{color: "rgb(15 124 18)"}}>Type: {booze.type}</p>
                <p style={{color: "rgb(15 124 18)"}}>Description: {booze.description}</p>
                <p style={{color: "rgb(15 124 18)"}}>Avg Rating: { booze.reviews.length === 0 ? 0 :[...Array(avgRating)].map((item,i)=><span style={{color: "pink"}}><ion-icon name="wine-sharp"></ion-icon></span>) }  Rounds</p>
            </span>
        </div>

        </>
    )
}

export default BoozeInfo;