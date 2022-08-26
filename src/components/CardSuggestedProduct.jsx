import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardSuggestedProduct = ({ item }) => {
    const navigate = useNavigate();

    const title = item.title;
    const price = item.price;
    const img = item.productImgs[0];

    return (
        <article className='card-sug-product col-5 col-md-3' onClick={() => navigate(`/product/${item.id}`)}>
            <div className='container-img'>
                <img src={img}/>
            </div>
            <div className='content'>
                <p>{title}</p>
                <p>Price: ${price}</p>
            </div>
            <button>Buy</button>
        </article>
    );
};

export default CardSuggestedProduct;