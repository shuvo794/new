import React from 'react';
import mechanic1 from '../../../images/mechanic/01 (1).jpg'
import mechanic2 from '../../../images/mechanic/01.jpg'
import mechanic3 from '../../../images/mechanic/06 (1).jpg'
import mechanic4 from '../../../images/mechanic/06.jpg'
import mechanic5 from '../../../images/mechanic/06 (2).jpg'
import Expert from '../Expert/Expert';


const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: 'Test Depart Meant'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: 'Our Team'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: 'Xray'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: 'Xray'
    },
    {
        img: mechanic5,
        name: 'Sakib Anderson',
        expertize: 'Test departMent'
    },
]

const Experts = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-2"  id="expert">Test Expart</h2>
            <div className="row mt-5">
                {
                    experts.map(expert=><Expert
                    key={expert.name}
                    expert={expert}
                    
                    ></Expert>)
                }

            </div>
        </div>
    );
};

export default Experts;