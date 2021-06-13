import React from 'react'

export const Footer = () => {
    let styleshee={
        padding:"10px",
        position:"fixed",
        bottom:"0",
        width:"100%",
        textalign:"center"
        
    }
    return (
        <div >
            <p className="bg-dark text-light m-0" style={styleshee}> &copy; todos_list.com</p>
        </div>
    )
}
