import React from 'react';

const CardProduct = ({ item }) => {
    return (
        <div className='card-product'>
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
                    Buy
                </div>
            </div>
        </div>
    );
};

export default CardProduct;