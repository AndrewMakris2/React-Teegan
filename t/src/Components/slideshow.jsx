import React from 'react';
import Recap from '../Components/recap';

const Slideshow = () => {
  return (
    
    <div className='Recap'>
        <div>
            <h1 className='header4'>Recap of Our Dates</h1>
        </div>
        <div className="slideshow-Movies">
            <div className="Movie-DIV-HOLDER">
                <Recap />
            </div>
        </div>
    </div>
    
  );
};

export default Slideshow;
