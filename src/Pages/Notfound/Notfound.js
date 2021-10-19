import React from 'react';
import { Link } from 'react-router-dom';
import noteFound from '../../images/404.jpg'
const Notfound = () => {
    return (
        <div>
            <img style={{width:'100%'}} src={noteFound} alt="" />
            <Link to="/home">
<button className="btn-primary">Go Back</button>

            </Link>
        </div>
    );
};

export default Notfound;