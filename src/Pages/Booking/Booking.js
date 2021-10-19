import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId}=useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);
    const eachDetails = details.find(td => td.id == serviceId)

    return (
        <div>
            <h2>This is Booking : {serviceId}</h2>
           

<h5 className="card-title">{eachDetails?.name}</h5>
<img src={eachDetails?.img} className=" img-fluid" alt="..." />

        </div>
    );
};

export default Booking;