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
                <p>Home <i class="fa-solid fa-circle"></i> <strong>{product.title}</strong></p>
            </article>
            <article className='content-pd'>
                <div className="photo">
                    photo
                </div>
                <div className="description">
                    <div className="text">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                    </div>
                    <div className="buttons">
                        <div className="price">
                            <span>Price</span>
                            <span>$ {product.price}</span>
                        </div>
                        <div className="quantity">
                            <span>Quantity</span>
                            <div className='addSubstract'>
                                <i class="fa-solid fa-minus"></i> <span>1</span> <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <button>Add to cart <i className="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default productDetails;