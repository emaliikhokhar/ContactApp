import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <Link to="/" className="navbar-brand ms-5 my-3">React Redux Contact App</Link>
        </nav>
    )
}

export default NavBar
