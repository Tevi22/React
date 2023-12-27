import React, { useState } from "react";

const Increment = () => {
    const[counter,setCounter] = useState(0)

    return (
        <>
            <div className="second">
                <p>useState in React Component</p>
                Counter: {counter}<br />
                <button ClassName="btn btn-primary" onClick={() => setCounter(() => counter + 1)}>Increment Counter</button><br></br>
                <button ClassName="btn btn-primary" onClick={() => setCounter(() => counter - 1)}>Decrement Counter</button>
            </div>
        </>
    )
}

export default Increment;