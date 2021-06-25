import React, {useEffect, useState} from 'react'

function Notes() {
    const[notes,setNotes]=useState([{
        title:'',
        content:''
    }])

    useEffect(()=> {
        fetch('/notes').then(res=>{
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes))
    })
    return (
        <div className="container mt-5 d-flex flex-row flex-wrap">
            
            {notes.map(note=>{
                return(
                    <div>
                        <div className="card" style={{width: "18rem", margin:"10px", background:"bisque"}}>
                        <div className="card-body">
                            <h5 class="card-title">{note.title}</h5>                            
                            <p class="card-text">{note.content}</p>
                        
                        </div>
                        
                    </div>
                    </div>
                    

                )
            })}
        </div>
    )
}

export default Notes
