import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCart = ({ item }) => {

    const navigate = useNavigate();

    return (
        <div className='item-cart' onClick={() => navigate(`/product/${item.id}`)}>
            <div className="header-item">
                <div className="text">
                    <p>{item.brand}</p>
                    <p>{item.title}</p>
                    <p>1</p>
                </div>
                <div className="delete">
                    <i class="fa-regular fa-trash-can"></i>
                </div>
            </div>
            <div className="price-item">
                <span>total: </span>
                <span>${item.price}</span>
            </div>
        </div>
    );
};

export default ItemCart;