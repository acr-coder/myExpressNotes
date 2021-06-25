import React, { useState } from 'react'
import axios from 'axios'

function CreateNote() {
    const [input,setInput] = useState({
        title: "",
        content:''
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setInput(prevstate => {
            return{
               ...prevstate,
                [name]:value
            }
        })
    }
    const handleClick = (e)=>{
        e.preventDefault();
        const newNote = {
            title: input.title,
            content:input.content
        }
        console.log(input);
        axios.post('http://localhost:3001/create',newNote)
    }
    return (
        <div className="container ">
            <h1>Create Note Page</h1>
            <form>
                <div className="form-group m-1">
                    <input value={input.title}
                    onChange={handleChange}
                    name="title" 
                    autoComplete="off" 
                    type="text" className="form-control" />
                </div>
                <div className="form-group m-1">
                    <textarea value={input.content}
                    onChange={handleChange}
                    name="content" 
                    autoComplete="off" 
                    className="form-control "/>
                </div>
                <button onClick={handleClick}
                className="btn btn-lg btn-info m-1">Add Note</button>
            </form>
        </div>
    )
}

export default CreateNote
