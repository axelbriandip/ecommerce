import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { buyCartThunk, getMyCartThunk } from '../store/slices/myCart.slice';

const Nav = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(getMyCartThunk())
    }, [])

    const allCart = useSelector(state => state.cart);
    
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
                        {
                            allCart.map(item => (
                                <li key={item.id} onClick={() => navigate(`/product/${item.id}`)}>{item.title}</li>
                            ))
                        }
                    </ul>
                    <button onClick={() => dispatch(buyCartThunk())}>Add to cart</button>
                </Offcanvas.Body>
                </Offcanvas>
            </>
        </nav>
    );
};

export default Nav;