import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeNav() {
    console.log('Hey now Nav bar')
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Todos</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Todo</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />
        </div>
    )
}