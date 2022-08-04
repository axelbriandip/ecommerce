import React, { useEffect, useState } from 'react';
import '../css/home.css';
import axios from 'axios';

const Filters = () => {
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`)
            .then(res => setCategories(res.data.data.categories))
    }, [])

    return (
        <aside className='aside-filters'>
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
                            <input type="number" min={0} step='100' id='from' />
                        </div>
                        <div>
                            <label htmlFor="to">To</label>
                            <input type="number" min={0} step='100' id='to' />
                        </div>
                        <div>
                            <button>Filter price</button>
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
                            {
                                categories.map(item => (
                                    <li key={item.id}>{item.name}</li>
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