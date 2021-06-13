import React from 'react'

export const TodoItem = ({todoitem,onDelete}) => {
    return (
        <div className="text-center border border-dark rounded w-25 mx-auto my-2 pb-3 bg-warning shadow-sm">
            &nbsp;&nbsp; <h4>{todoitem.sr_no} &nbsp;
            {todoitem.task}</h4>
            {todoitem.Desc} <br/>
            <button className="btn btn-danger btn-sm" onClick={()=>onDelete(todoitem)}>Delete</button>
        </div>
    )
}
