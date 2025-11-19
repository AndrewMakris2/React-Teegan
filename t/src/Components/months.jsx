import React, { useState } from 'react';
import monthsData from '../Util/months';

const Months = () => {
    const [say, setSay] = useState(monthsData);

    return (
        <div className="months">
            <div className="flex">
                {say.map((item) => {
                    const { id, Image, Date, Memory, Favorite } = item;
                    return (
                        <div className="month-card" key={id}>
                            <img src={Image} alt="" />
                            <h3>{Date}</h3>
                            <p>{Memory}</p>
                            <p>{Favorite}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Months;
