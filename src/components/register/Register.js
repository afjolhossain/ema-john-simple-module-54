import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="Login-Form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                <input type="email" name="" id="" placeholder="Your Email"/>
                <br />
                <input type="password" name="" id="" placeholder="Your Password" />
                <br />
                <input type="password" name="" id="" placeholder="Re-Entre Your Passord" />
                <br />
                <input type="submit" value="Submit" />
                </form>
               <p>Allready have an Account ? <Link to="/Login">Login</Link></p>
               <div>----------or---------</div>
               <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;