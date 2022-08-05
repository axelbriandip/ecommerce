import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/'><strong className='logo'>e-commerce</strong></Link>
            <div className="buttons">
                <Link to='/login'><i className="fa-solid fa-user"></i></Link>
                <Link to='/purchases'><i className="fa-solid fa-shop"></i></Link>
                <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
        </nav>
    );
};

export default Nav;