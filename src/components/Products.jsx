import React from 'react';
import '../css/home.css';
import CardProduct from './CardProduct';

const Products = () => {
    return (
        <section className='section-products'>
            <div className='container-search'>
                <input type="text" placeholder='What are you looking for?'/>
                <button>S</button>
            </div>
            <div className='container-cards'>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </div>
        </section>
    );
};

export default Products;