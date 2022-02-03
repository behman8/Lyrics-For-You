import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                username,
                password
            }),
        })
            .then((resp) => resp.json())
            .then((user) => onLogin(user))
            navigate('/')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login!</h2>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )

};

export default Login;