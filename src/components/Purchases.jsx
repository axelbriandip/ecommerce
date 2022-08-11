import React, { useEffect } from 'react';
import build_img from '../img/build.png';
import axios from 'axios';
import getConfig from '../utils/getConfig';

const Purchases = () => {
    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`, getConfig())
            // .then(res => console.log(res.data.data.purchases))
    }, [])

    return (
        <section className='section-purchases'>
            <img src={build_img}/>
            <h1>Building purchases</h1>
        </section>
    );
};

export default Purchases;