import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../store/slices/isLoading.slice';

const productDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const allProducts = useSelector(state => state.products);
    const [ product, setProduct ] = useState({});
    const [ suggestedProducts, setSuggestedProducts ] = useState([]);

    useEffect(() => {
        // dispatch(setIsLoading(true));
        // axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
        // .then(res => setProduct(res.data.data.product))
        // .finally(() => dispatch(setIsLoading(false)));
        const productFind = allProducts.find(item => item.id == id)
        setProduct(productFind);
        const filter = allProducts.filter(item => item.category?.id == productFind.category?.id);
        setSuggestedProducts(filter);
    }, [])
    console.log(suggestedProducts)

    // INDEX PHOTO
    const [ indexPhoto, setIndexPhoto ] = useState(0);
    const addIndexPhoto = () => {
        if(indexPhoto == 0 || indexPhoto == 1) {
            setIndexPhoto(indexPhoto + 1)
        }
    }
    const substractIndexPhoto = () => {
        if(indexPhoto == 1 || indexPhoto == 2) {
            setIndexPhoto(indexPhoto - 1)
        }
    }
    // QUANTITY
    const [ quantity, setQuantity ] = useState(1);
    const addQuantity = () => {
        setQuantity(quantity + 1)
    }
    const substractQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <section className='section-pd'>
            <article className="path">
                <p>Home <i className="fa-solid fa-circle"></i> <strong>{product?.title}</strong></p>
            </article>
            <article className='content-pd'>
                <div className="photo">
                    <div className="photo-main">
                        <i onClick={substractIndexPhoto} className={ indexPhoto == 0 ? 'fa-solid fa-circle-arrow-left arrow-disabled' : 'fa-solid fa-circle-arrow-left' }></i>
                        <img src={product?.productImgs?.[indexPhoto]}/>
                        <i onClick={addIndexPhoto} className={ indexPhoto == 2 ? 'fa-solid fa-circle-arrow-right arrow-disabled' : 'fa-solid fa-circle-arrow-right' }></i>
                    </div>
                    <div className="photo-others">
                        <div className={ indexPhoto == 0 ? 'photoSelect' : '' }>
                            <img src={product?.productImgs?.[0]}/>
                        </div>
                        <div className={ indexPhoto == 1 ? 'photoSelect' : '' }>
                            <img src={product?.productImgs?.[1]}/>
                        </div>
                        <div className={ indexPhoto == 2 ? 'photoSelect' : '' }>
                            <img src={product?.productImgs?.[2]}/>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div className="text">
                        <h1>{product?.title}</h1>
                        <p>{product?.description}</p>
                    </div>
                    <div className="buttons">
                        <div className="price">
                            <span>Price</span>
                            <span>$ {product?.price}</span>
                        </div>
                        <div className="quantity">
                            <span>Quantity</span>
                            <div className='addSubstract not-selectable'>
                                <i onClick={substractQuantity} className={ quantity == 1 ? 'fa-solid fa-minus arrow-disabled' : 'fa-solid fa-minus' }></i>
                                <span>{quantity}</span>
                                <i onClick={addQuantity} className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <button>Add to cart <i className="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
            </article>
            <ul>
                {
                    suggestedProducts.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
        </section>
    );
};

export default productDetails;