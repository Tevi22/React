import React from 'react';
import "../index.css"

const InternalStyle = () => {
    const design = {
        color: "red",
        textAlign: "center",
        textTRransform: "capitalize",
        backgroundColor: "Yellow"

    }
    return(
        <>
        <h1 style={design}>Internal styling applied</h1>
        <p className={"first"}>We are going to apply external styles</p>
        </>
    )
}

export default InternalStyle