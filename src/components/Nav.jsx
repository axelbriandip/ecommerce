import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';

const Nav = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <nav>
            <Link to='/'><strong className='logo'>e-commerce</strong></Link>
            <div className="buttons">
                <Link to='/login'>
                    <i className="fa-solid fa-user"></i>
                </Link>
                <Link to='/purchases'><i className="fa-solid fa-shop"></i></Link>
                <Link to='/purchases' onClick={handleShow}><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <>
                <Offcanvas show={show} onHide={handleClose} placement='end'>
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