import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardPurchase = ({ item }) => {
    const navigate = useNavigate();

    const fecha = new Date(item.createdAt);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[fecha.getMonth()];
    const day = fecha.getDate();
    const year = fecha.getFullYear();

    const arrayProducts = item.cart.products;

    return (
        <article className='card-purcharse'>
            <div className='date-purcharse'>
                <strong>{month} {day}, {year}</strong>
            </div>
            <div className='items-purcharse'>
                {
                    arrayProducts.map(item => (
                        <div key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
                            <span>{item.title}</span>
                            <span>1</span>
                            <span><strong>{item.price}</strong></span>
                        </div>
                    ))
                }
            </div>
        </article>
    );
};

export default CardPurchase;