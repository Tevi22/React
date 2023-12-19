import React from 'react';

const Property = (props) => {
    console.log(props);
    return (
        <>
            <h1>The image is {props.imgSr}</h1>
            <h1>The image is {props.dta}</h1>
            <h3>You have selected {props.city}</h3>
            <h3>You number is {props.mob}</h3>
            <h3>{props.objT.greet}</h3>
        </>
    )

}

export default Property