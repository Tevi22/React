import React, {useState} from "react";
import axios from 'axios';

const AxiosPost = ()=>{
    // State to manage input values
    const [dataInput,setDataInput] = useState({
        firstNm: "",
        lastNm: ""
    })

    // Function to handle input changes
    const handleChange = (e) =>{
        setDataInput({...dataInput,[e.target.name]:e.target.value})
    }

    // Function to handle form submission
    const handleSubmit = (e) =>{
        e.preventDefault();

        // Making a POST request using Axios
        axios.post("http://localhost:4000/data/",dataInput)
            .then((res)=>console.log(res.dataInput))
            .catch((err)=>console.log(err))

    }
    return(
        <>
        <div className="third">
            <h1>Axios POST Method</h1>
            {/* Input fields controlled by state */}
        <input name='firstNm' type="text" placeholder="First Name" value={dataInput.firstNm} onChange={handleChange}></input><br></br>
        <input name='lastNm' type="text" placeholder="Last Name" value={dataInput.lastNm} onChange={handleChange}></input><br></br>

        {/* Button to trigger form submission */}
        <button type="button" onClick={handleSubmit}>Submit</button>

        </div>
        </>
    )
}

export default AxiosPost;