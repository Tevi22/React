import React, {useRef, useState,} from 'react';

const Reference = ()=>{
    const textRef = useRef(null)
    const [text,setText] = useState('React')
    const handleColor = () =>{
        textRef.current.style.color = 'green';
        textRef.current.value = 'JS';

    }
    
    return(
        <>
        <input ref={textRef} type='text' value={text} onChange={(e)=>(setText(e.target.value))} className='m-5'/>
        <button onClick={handleColor}>Change Color</button>
        </>
    )
}

export default Reference; 