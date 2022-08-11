import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCartThunk } from '../store/slices/myCart.slice';

const ItemCart = ({ item }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deletedItem = id => {
        dispatch(deleteCartThunk(id))
    }

    return (
        <div className='item-cart'>
            <div className="header-item">
                <div className="text">
                    <p onClick={() => navigate(`/product/${item.id}`)}>{item.brand}</p>
                    <p>{item.title}</p>
                    <p>1</p>
                </div>
                <div className="delete">
                    <i onClick={() => deletedItem(item.id)} className="fa-regular fa-trash-can"></i>
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