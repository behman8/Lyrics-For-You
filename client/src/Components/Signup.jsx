import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ onLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        })
            .then((resp) => resp.json())
            .then((user) => user.errors ? setErrors(user.errors) : (onLogin(user), navigate('/')));
    }

    return(
        <div className="form">
            <div className="heading">
                <h2 className="login-header">Signup!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="form-control"
                    />
                    </div>
                    <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="form-control"
                    />
                    </div>
                    <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                    <input
                        type="password"
                        id="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        placeholder="Confirm Password"
                        className="form-control"
                    />
                    </div>
                    <button type="submit" className="float">Submit</button>
                    <p className="errors">{errors.join(", ")}</p>
                </form>
            </div>
        </div>
    );

};

export default Signup;