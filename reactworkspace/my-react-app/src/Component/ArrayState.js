import React, { useState } from 'react';

const ArrayState = () => {
    let indianSweets = [{
        sweet: "Gulab Jamun",
        color: "Brown"
    },
    {
        sweet: "Rasnalai",
        color: "Cream"
    }]

    const updateSweets = () => {
        setChoco([{
            sweet: "Kaju Katli",
            color: "White"
        },
        {
            sweet: "Rasgulla",
            color: "Brown"
        }
        ])
    }

    const [choco, setChoco] = useState(indianSweets)
    return (
        <>
        <div className="first">
        {
            choco.map((sugar,index)=>{
                return(
                    <>
                    <h1 key={index}>{sugar.sweet}</h1>
                    <h1 key={index}>{sugar.color}</h1>
                    </>
                )
            })
        }
        <button className="btn btn-success"onClick={updateSweets}>Next List of Sweets</button>
        </div>
        </>
    )
}

export default ArrayState;