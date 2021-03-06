import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle} = useAuth();
    const Location = useLocation();
    return (
        <div className="Login-Form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                   <input type="email" name="" id="" placeholder="Your Email" />
                   <br />
                   <input type="password" name="" id="" placeholder="Please Entre Your Password" />
                   <br />
                   <input type="submit" value="Submit" />
                </form>
                <p>New To Ema-Jhon? <Link to="register">Create Account</Link></p>
                <div>------------------or---------------</div>
            <button onClick={signInUsingGoogle} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;