import React, {useState} from 'react';

// Speader operator

let data = ["one","two", "three"];
let data2 = ["four", 'five','six'];
let data3 = [...data, ...data2];
console.log(data3)

const ObjectState = () => {
    const [fruits, setFruits] = useState({
        name: "Mango",
        color: "Yellow",
        taste: "Sweet"
    })

    const handleFruits = () =>{
        //using spreader operator to copy fruit array and change name
        setFruits({...fruits, 
            name: "Apple",
            taste: "Sour"
    })
    /*
        setFruits({
            name: "Apple",
            color: "Red",
            taste: "Sweet and Sour"
    })
    */
    }
    return (
        <>
        <h2>{fruits.name}</h2>
        <h2>{fruits.color}</h2>
        <h2>{fruits.taste}</h2>
        <button onClick={handleFruits}>Update List</button>
        </>
    )
}

export default ObjectState;