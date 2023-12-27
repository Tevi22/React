import React, {useState, useEffect} from 'react';

const Effect =()=>{
    const[counter, setCounter] = useState(0);
    const [data, setData]=useState("welcome all");
    // useEffect works when the document is mounted to the DOM
    useEffect(()=>{
        console.log("useEffect got powered")
        alert("Welcome");
    },[counter])
    
    const handleCounter =()=>{
        setCounter(counter +1);
    }

    const handleData =()=>{
        setData('Hello World!');
    }
    return(
        <>
        <h1>{counter}</h1>
        <button className="btn btn-warning my-3" onClick={handleCounter}>Counter</button>

        <h1>{data}</h1>
        <button className="btn btn-warning my-3" onClick={handleData}>Data Button</button>
        </>
    )
}

export default Effect;