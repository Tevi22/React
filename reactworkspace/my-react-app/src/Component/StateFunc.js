import React, {useState} from "react";


const StateFunc = () => {
    const [switchVal, setSwitchVal] = useState("Lights On");

    const switchOff = () =>{
        setSwitchVal("Lights Off");
    }

    const switchOn = () =>{
        setSwitchVal("Lights On");
    }

    return (
        <>
        <div className= "first">
        <div className="container my-5">
            <h1>{switchVal}</h1>
            <button className="btn btn-success" onClick={switchOff}>Click to Switch Off</button>
            <br></br>
            <br></br>
            <button className="btn btn-success" onClick={switchOn}>Click to Switch On</button>
        </div>
        </div>
        </>
    )
}

export default StateFunc;