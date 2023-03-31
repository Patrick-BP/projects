import React, { useState } from 'react'
import axios from 'axios'
export default function FormComponent() {
    const [input, setinput] = useState({title:"", body:""})

  const submitHandler = (event)=>{
    event.preventDefault();
    console.log(input);
    const res = axios.post("http://localhost:3000/addpost",input);

  }
const handleChange = (event)=>{
  const {name, value} = event.target
    setinput((prev)=>({...prev,[name]: value}))
}



  return (
    <div>
        
        <form onSubmit={submitHandler}>
            <input type="text" name="title" value={input.title} onChange={handleChange}/>
            <input type="text" name="body" value={input.body} onChange={handleChange}/>
            <button type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}
