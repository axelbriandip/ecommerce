import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardProduct = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div className='card-product' onClick={() => navigate(`/product/${item.id}`)}>
            <div className="container-img">
                <img src={item.productImgs[0]}/>
            </div>
            <hr />
            <h3>{item.title}</h3>
            <div className='footer-card'>
                <div className="price">
                    <span>Price</span>
                    <span>${item.price}</span>
                </div>
                <div className='btn-buy'>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;