import React, { useEffect } from 'react';
import '../css/home.css';
import CardProduct from './CardProduct';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';

const Products = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])
    const products = useSelector(state => state.products);
    return (
        <section className='section-products'>
            <div className='container-search'>
                <input type="text" placeholder='What are you looking for?'/>
                <button>S</button>
            </div>
            <div className='container-cards'>
                {
                    products.map(item => (
                        <CardProduct key={item.id} item={item} />
                    ))
                }
            </div>
        </section>
    );
};

export default Products;