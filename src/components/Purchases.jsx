import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPurchases } from '../store/slices/purchases.slice';
import axios from 'axios';
import getConfig from '../utils/getConfig';
import CardPurchase from './CardPurchase';

const Purchases = () => {

    const dispatch = useDispatch();

    /*
    Tuve que hacer de esta manera porque con el thunk me saltaba el siguiente error..
    "Uncaught TypeError: Cannot read properties of undefined (reading 'type')"
    */
    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`, getConfig())
            .then(res => dispatch(setPurchases(res.data.data.purchases)))
    }, [])

    const allPurchases = useSelector(state => state.purchases);
    // console.log(allPurchases[0]);
    return (
        <section className='section-purchases'>
            <article className="path">
                <p>Home <i className="fa-solid fa-circle"></i> <strong>purchases</strong></p>
            </article>
            <h4>My purchases</h4>
            {
                allPurchases.map(item => (
                    <CardPurchase key={item.id} item={item}/>
                ))
            }
        </section>
    );
};

export default Purchases;