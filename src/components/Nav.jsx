import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import getCartThunk from '../store/slices/Cart.slice';

const Nav = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        // dispatch(getCartThunk())
    }

    // useEffect(() => {
    //     dispatch(getCartThunk())
    // }, [])

    return (
        <nav>
            <Link to='/'><strong className='logo'>e-commerce</strong></Link>
            <div className="buttons">
                <Link to='/login'><i className="fa-solid fa-user"></i></Link>
                <Link to='/purchases'><i className="fa-solid fa-shop"></i></Link>
                <Link to='/purchases' onClick={handleShow}><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <>
                <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <h1>title sidebar</h1>
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                </Offcanvas.Body>
                </Offcanvas>
            </>
        </nav>
    );
};

export default Nav;