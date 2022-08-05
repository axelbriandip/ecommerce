import React, { useEffect, useState } from 'react';
import '../css/home.css';
import CardProduct from './CardProduct';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsThunk, filterProductsThunk } from '../store/slices/products.slice';

const Products = () => {
    const dispatch = useDispatch();
    // get all products
    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])
    const products = useSelector(state => state.products);
    // filter for title products
    const [ searchValue, setSearchValue ] = useState('');
    const filterProducts = () => {
        dispatch(filterProductsThunk(searchValue))
    }
    return (
        <section className='section-products'>
            <div className='container-search'>
                <input
                type="text"
                placeholder='What are you looking for?'
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                />
                <button onClick={filterProducts}>S</button>
            </div>
            <div className='container-cards'>
                {
                    products.map(item => (
                        <CardProduct key={item.id} item={item}/>
                    ))
                }
            </div>
        </section>
    );
};

export default Products;