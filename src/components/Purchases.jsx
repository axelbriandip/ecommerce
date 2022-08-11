import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPurchases, getPurchasesThunk } from '../store/slices/purchases.slice';
import axios from 'axios';
import getConfig from '../utils/getConfig';

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

    const purchases = useSelector(state => state.purchases);

    return (
        <section className='section-purchases'>
            <ul>
                {
                    purchases.map(item => (
                        <li key={item.id}>id purchase: {item.id}</li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Purchases;