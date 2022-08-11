import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { buyCartThunk, getMyCartThunk } from '../store/slices/myCart.slice';
import ItemCart from './ItemCart';

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

    const token = localStorage.getItem('token');

    return (
        <nav>
            <Link to='/'><strong className='logo'>e-commerce</strong></Link>
            <div className="buttons">
                <Link to='/login'>
                    <i className="fa-solid fa-user"></i>
                </Link>
                {
                    token !== '' && (
                        <>
                        <Link to='/purchases'><i className="fa-solid fa-shop"></i></Link>
                        <Link to='/purchases' onClick={handleShow}><i className="fa-solid fa-cart-shopping"></i></Link>
                        </>
                    )
                }
            </div>
            <>
                <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title className='title-sidebar'>
                    <h1>My cart</h1>
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='body-sidebar'>
                    {
                        allCart.map(item => (
                            <ItemCart key={item.id} item={item}/>
                        ))
                    }
                    <button onClick={() => dispatch(buyCartThunk())}>Add to cart</button>
                </Offcanvas.Body>
                </Offcanvas>
            </>
        </nav>
    );
};

export default Nav;