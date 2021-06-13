import React from 'react' 
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";


export default function Header({heading,title,nav}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/your-task-app/">{title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/your-task-app">Home</Link>
                            <Link className="nav-link" to="/your-task-app/about">About</Link>
                        </div>
                    </div>                  
                </div>
            </nav>
            { nav ?
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> :""}
        </div>
    )
}
Header.defaultProps={
    title:"title appears here",
    nav:false
}

Header.propTypes = {
    title: PropTypes.string,
    nav:PropTypes.bool
}
