import React from 'react';
import '../css/nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/'><strong className='logo'>e-commerce</strong></Link>
            <div className="buttons">
                <Link to='/login'><i>User</i></Link>
                <Link to='/purchases'><i>Store</i></Link>
                <Link to='/cart'><i>Cart</i></Link>
            </div>
        </nav>
    );
};

export default Nav;