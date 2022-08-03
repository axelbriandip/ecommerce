import React from 'react';
import Filters from './Filters';
import Products from './Products';
import '../css/home.css';

const home = () => {
    return (
        <main className="main">
            <Filters/>
            <Products/>
        </main>
    );
};

export default home;