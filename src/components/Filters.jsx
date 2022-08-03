import React from 'react';
import '../css/home.css';

const Filters = () => {
    return (
        <aside className='aside-filters'>
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Price
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <div>
                            <label htmlFor="">From</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">To</label>
                            <input type="text" />
                        </div>
                        <div>
                            <button>Filter price</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Category
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        <ul>
                            <li>Smart TV</li>
                            <li>Computers</li>
                            <li>Smartphones</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Filters;