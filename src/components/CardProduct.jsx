import React from 'react';
import tv from '../img/tv.jpg';

const CardProduct = () => {
    return (
        <div className='card-product'>
            <div className="container-img">
                <img src={tv}/>
            </div>
            <hr />
            <h3>Samsung 50 inches 4K Ultra HD Smart LED TV</h3>
            <div className='footer-card'>
                <div className="price">
                    <span>Price</span>
                    <span>$570.00</span>
                </div>
                <div className='btn-buy'>
                    Buy
                </div>
            </div>
        </div>
    );
};

export default CardProduct;