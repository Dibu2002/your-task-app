import React from 'react'
import { TodoItem } from './TodoItem.js'

export const Todos = (props) => {
    let Style ={
        color:"black",
    }
    return (
        <div style={Style}>
            {props.todos.length===0 ? "no todos to display":
            props.todos.map((todo,index) => {
                return <TodoItem todoitem={todo} onDelete={props.onDelete} key={index}/>

            })}
        </div>
    )

}
