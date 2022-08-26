import React from 'react';
import Filters from './Filters';
import Products from './Products';

const home = () => {
    return (
        <main className="main row">
            <Filters/>
            <Products/>
        </main>
    );
};

export default home;