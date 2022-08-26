import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { filterCategoriesThunk, getProductsThunk } from '../store/slices/products.slice';
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/slices/products.slice';

const Filters = () => {
    const dispatch = useDispatch()
    const [ categories, setCategories ] = useState([]);
    const [ to, setTo ] =  useState(0);
    const [ from, setFrom ] =  useState(0);

    const [ fixedProducts, setFixedProducts ] = useState([]);
    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
            .then(res => setFixedProducts(res.data.data.products));
    }, [])

    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`)
            .then(res => setCategories(res.data.data.categories))
    }, [])

    // filter categories
    const filterCategory = cat => {
        dispatch(filterCategoriesThunk(cat));
        setTo(0);
        setFrom(0);
    }
    
    // get all products
    const getAll = () => {
        dispatch(getProductsThunk())
        setTo(0);
        setFrom(0);
    }

    // filter prices
    const filterPrices = (to, from) => {
        if(from >= to) {
            dispatch(setProducts(fixedProducts));
            const array = [];
            for(let i = 0; i < fixedProducts.length; i++) {
                if(Number(fixedProducts[i].price) >= to && Number(fixedProducts[i].price) <= from) {
                    array.push(fixedProducts[i])
                }
            }
            dispatch(setProducts(array));
        } else {
            alert("'To' whould be higher than 'From'")
        }
    }

    return (
        <aside className='aside-filters col-12 col-md-3'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Price
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        <div>
                            <label htmlFor="from">From</label>
                            <input type="number" min={0} step='100' id='from' value={to} onChange={e => setTo(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="to">To</label>
                            <input type="number" min={0} step='100' id='to' value={from} onChange={e => setFrom(e.target.value)}/>
                        </div>
                        <div>
                            <button onClick={() => filterPrices(to, from)}>
                                <i className="fa-solid fa-filter"></i> Filter price
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Category
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        <ul>
                            <li onClick={getAll}>All</li>
                            {
                                categories.map(item => (
                                    <li key={item.id} onClick={() => filterCategory(`${item.id}`)}>{item.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Filters;