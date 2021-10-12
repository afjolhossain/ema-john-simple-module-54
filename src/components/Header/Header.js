import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.png';
import useFirebase from '../../useFirebase/useFirebase';
import './Header.css';


const Header = () => {
    const {user,logOut} = useFirebase();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                { user.email ?
                <button onClick={logOut}>LogOut</button>
                :
                    <NavLink to="/Login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;