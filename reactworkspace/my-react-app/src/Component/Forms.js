import React,{useState} from "react";

const Forms = () =>{
    // State variables for form fields and data storage
    const [fname,setFname]= useState('');
    const [place,setPlace]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const[storeData,setStoreData]= useState([]);

    // Function to update 'fname' state on input change
    const formData = (e) =>{
        setFname(e.target.value);
    }

    // Function to handle form submission
    const handleSubmit = (e)=>{
        e.preventDefault();

        // Create a new data object
        const newInfo = {fname, place,email,password};

        // Update 'storeData' state with new data
        setStoreData([...storeData,newInfo]);

        // Clear form fields after submission
        setFname("");
        setPlace("");
        setEmail('');
        setPassword('');
    }
    return(
        <>
        <div className="container my-5 text-center">
            <form onSubmit={handleSubmit}>
                <div>
                    <input className="my-3 w-50" type='text' value={fname} placeholder="Enter your Name" onChange={formData}></input>
                </div>
                <div>
                    <input className="my-3 w-50" type='text' value={email} placeholder="Enter your Email" onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>
                <div>
                    <input className="my-3 w-50" type='text' value={password} placeholder="Enter your Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                <div>
                <input className="my-3 w-50" type='text' value={place} placeholder="Enter your Place" onChange={(e)=>{setPlace(e.target.value)}}></input>
                </div>
                <button className='btn btn-info'>Submit</button>
            </form>
            <div className="my-5">
                {storeData.map((data,index)=>{
                    return(
                        <div key={index}>
                        <h1>I am {data.fname}</h1>
                        <h1>{data.place}</h1>
                        <h1>{data.email}</h1>
                        <h1>{data.password}</h1>
                    </div>
                    )
                })}
            </div>
        </div>
        </>
        
    )
}

export default Forms