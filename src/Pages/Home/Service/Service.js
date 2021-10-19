import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css'
const Service = ({service}) => {
    const {id,name,price,description,img}=service;
    return (
        <div >
           
        <div className="service pb-3">
            <img src={img} alt="" />
            <h2>Name:{name}</h2>
<h3>Visit:{price}</h3>
<p className="px-3">{description}</p>
<Link to={`/booking/${id}`}>
<button className="btn-warning">add {name}</button>
</Link>
        </div>
        </div>
    );
};

export default Service;