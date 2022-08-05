import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../store/slices/isLoading.slice';

const productDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [ product, setProduct ] = useState({});
    useEffect(() => {
        dispatch(setIsLoading(true));
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
        .then(res => setProduct(res.data.data.product))
        .finally(() => dispatch(setIsLoading(false)));
    }, [])
    return (
        <section className='section-pd'>
            <article className="path">
                <p>Home - <strong>{product.title}</strong></p>
            </article>
        </section>
    );
};

export default productDetails;