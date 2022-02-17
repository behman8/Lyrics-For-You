import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("")
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
            .then((user) => user.username ? (onLogin(user), navigate('/')) : setErrors(user.errors))
    }

    return(
        <div className="form">
            <div className="heading">
                <h2 className="login-header">Login!</h2>
                <form onSubmit={handleSubmit} action='#'>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Username'
                            className="form-control"
                        />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="form-control"
                        />
                    </div>
                        <button type="submit" className="float">Login</button>
                        <p className="errors">{errors}</p>
                </form>
            </div>
        </div>
    )

};

export default Login;