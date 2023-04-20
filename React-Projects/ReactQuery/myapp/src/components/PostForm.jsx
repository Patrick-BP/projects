import React, { useState } from 'react'

export default function PostForm({onSubmit, initialValue}) {
    const [post, setpost] = useState({
        title:initialValue.title ||"",
        body:initialValue.body ||""
    });
    
        const renderField = (label) => {
         return   <div>
                <label>{label}</label>
                <input  type="text" onChange={handleChangeInput} name={label.toLowerCase()} value={post[label.toLowerCase()]} />
            </div>
        }

    const handleChangeInput = (e) => {
        const {value, name} = e.target
        setpost({
            ...post,
            [name]:value
        })
    }
        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit(post)
            setpost({
                title:  "",
                body:  ""
            })
        }
      return (
        <form>
            {renderField("Title")}
            {renderField("Body")}
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      )
}
