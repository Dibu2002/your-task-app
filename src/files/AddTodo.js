import React,{useState} from 'react'

export default function AddTodo(props) {
    const[title,settitle]=useState('')
    const[desc,setdesc]=useState('')

    const submit=(e)=>
        {            
            // console.log(e);
            e.preventDefault();
            
            if(!title || !desc)
                alert("title or description cannot be empty")
            else
               { 
                props.addTodo(title,desc);
                settitle('');
                setdesc('');
               }
           
        }
    return (
        <div className="w-75 mx-auto">  
            <h2>Add Todo</h2>
            <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                <input type="text" className="form-control" value={title} onChange={(e)=>settitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Todo Desc</label>
                <input type="text" className="form-control" value={desc} onChange={(e)=>setdesc(e.target.value)} id="exampleInputPassword1"/>
            </div>
            <button type="submit"  className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}
