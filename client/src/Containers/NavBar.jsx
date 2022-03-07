import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar({ onLogout, user }) {

    const navigate = useNavigate()
    
    function handleLogout() {
        fetch("/api/logout", {
            method: "DELETE",
        }).then(() => onLogout())
        navigate('/')
    }

    if(user) {
        return(
            <div>
                <nav className="navbar">
                <NavLink to="/" className="logo"><h1>Lyrics For You</h1></NavLink>
                    <div>
                        <ul className="all-links">
                            <div className="menu">
                                <li className="link"><NavLink to="/">Home</NavLink></li>
                                <li className="link"><NavLink to="/songs">Songs</NavLink></li>
                                <li className="link"><NavLink to="/users-songs">Yours</NavLink></li>
                                <li className="link"><NavLink to="/songs/new">Add Song</NavLink></li>
                                <li className="link"><NavLink to="/favorites">Favorites</NavLink></li>
                                <button onClick={handleLogout} className="buttons" >Logout</button>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    } else {
        return(
            <div>
                <nav className="navbar">
                <a href="/" className="logo"><h1>Lyrics For You</h1></a>
                    <div>
                        <ul className="all-links">
                            <div className="menu">
                                <li className="link"><NavLink to="/">Home</NavLink></li>
                                <li className="link"><NavLink to="/login">Login</NavLink></li>
                                <li className="link"><NavLink to="/signup">Signup</NavLink></li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};

export default NavBar;