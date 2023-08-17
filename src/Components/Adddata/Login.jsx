import React, { useState } from 'react'
import Style from './Login.module.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navi = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { username, password }
        sessionStorage.setItem('auth', JSON.stringify(data))
        navi('/')
    };

    return (
        <div>
            <div className={ Style.login_form }>
                <h2>Login Form</h2>
                <form onSubmit={ handleSubmit }>
                    <div className={ Style.form_group }>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={ username }
                            onChange={ handleUsernameChange }
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={ password }
                            onChange={ handlePasswordChange }
                            required
                        />
                    </div>
                    <button type="submit">Login</button>



                </form>
            </div>
        </div>
    )
}

export default Login