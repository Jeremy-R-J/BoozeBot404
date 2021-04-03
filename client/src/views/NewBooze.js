import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react'
import CreateBooze from '../components/CreateBooze';
import background from "../barPics/BarBlackObsidian.jpg";

const NewBooze = () => {
    const [booze, setBooze] = useState({
        name: "",
        type: "",
        description: ""
    });
    const [errors, setErrors] = useState({
        name: null,
        type: null,
        description: null
    });

    const changeHandler = e => {
        setBooze({
            ...booze,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/booze', booze)
            .then(response => {
                if(response.data.message === "error"){
                    setErrors(response.data.errors);
                } else {
                    navigate('/');
                }
            })
    }

    return (
        <html className="pic">
        <body style={{ backgroundImage: `url(${background})` }} >
            <h6 className="title" style={{color: "blue"}}>Add A Booze!!</h6>
            <CreateBooze
                booze={ booze }
                inputHandler={ changeHandler }
                submitHandler={ submitHandler }
                errors={ errors }
            />
        </body>
        </html>
    )
}

export default NewBooze;