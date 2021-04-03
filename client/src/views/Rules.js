import React from 'react'

const Rules = () => {
    return (
        <div className="pic">
            <h2 className="title" style={{ color: "rgb(15 124 18)" }}>Rules</h2>
            <ul className="title" style={{color: "blue"}}>
                <li>Must be 21 or older to participate.</li>
                <li>Don't be a "douche".</li>
                <li>Don't make booze submissions or recipes that are pointless.</li>
                <li>Do enjoy responsibly!</li>
                <li>Please contact the creators of this website for your web application needs!</li>
            </ul>
            {/* <h3 className="title" style={{ color: "rgb(15 124 18)" }}>Contact Us</h3> */}
            <h2 className="title" >
                <a style={{ color: "rgb(15 124 18)" }} href="mailto:johnsjrmy@yahoo.com, kruse81@gmail.com, pbbeelendorf@gmail.com?subject=About 404 BoozeBot">Email Us</a></h2>
            <h4 style={{color: "blue"}}>Developer: Jeremy Johns email@: johnsjrmy@yahoo.com</h4>
            <h4 style={{color: "blue"}}>Developer: Ken Kruse email@: kruse81@gmail.com</h4>
            <h4 style={{color: "blue"}}>Developer: Patrick Beelendorf email@: pbbeelendorf@gmail.com</h4>
    
        </div>
    )
}

export default Rules
