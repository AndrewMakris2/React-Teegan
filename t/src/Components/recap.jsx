import React from 'react';

// ✅ Import the images directly relative to THIS file
import One from '../Images/one.jpeg';
import Two from '../Images/two.jpeg';
import Three from '../Images/three.jpeg';
import Four from '../Images/four.jpg';
import Five from '../Images/five.jpeg';
import Six from '../Images/six.jpg';
import Seven from '../Images/seven.jpeg';
import Eight from '../Images/eight.jpeg';
import Nine from '../Images/nine.jpeg';

const Recap = () => {
  return (
    <div>
      <h1 className='header4'>Recap of the past few months</h1>
      {/* 3D Slideshow Section */}
      <section id="slideshow">
        <div className="entire-content">
          <div className="content-carrousel">
            <figure className="shadow">
              <img className="IMAGE_MOVIE" src={One} alt="slide 1" />
            </figure>
            <figure className="shadow">
              <img className="IMAGE_MOVIE" src={Two} alt="slide 2" />
            </figure>
            <figure className="shadow">
              <img className="IMAGE_MOVIE" src={Three} alt="slide 3" />
            </figure>
            <figure className="shadow">
              <img className="IMAGE_MOVIE" src={Four} alt="slide 4" />
            </figure>
            <figure className="shadow">
              <img className="IMAGE_MOVIE" src={Five} alt="slide 5" />
            </figure>
            <figure className="shadow">
              <img className="IMAGE_MOVIE" src={Six} alt="slide 6" />
            </figure>
            <figure className="shadow">
              <img className="IMAGE_MOVIE" src={Seven} alt="slide 7" />
            </figure>
            <figure className="shadow">
              <img className="IMAGE_MOVIE" src={Eight} alt="slide 8" />
            </figure>
            <figure className="shadow">
              <img className="IMAGE_MOVIE" src={Nine} alt="slide 9" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recap;
