import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <header>
                <nav className='navbar-md'>
                    <Link to="/login">Login</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/fav">Favorites</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header