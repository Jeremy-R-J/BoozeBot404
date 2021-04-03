import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const Delete = props => {
    const { id } = props;

    const deleteThing = () => {
        axios.delete(`http://localhost:8000/api/booze/${id}`)
            // .then(res => {
            //     setAllBooze(allBooze.filter(booze => booze._id !== id));
            // })
            .then(res => navigate('/'))
            
            .catch(err => console.log(err))
    }
    return (
        <div>
            <button type="button" className="btn btn-danger col-sm-2" onClick={ deleteThing }>Delete</button>
        </div>
    )
}
export default Delete;