import React, { useState } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(null);

  // Title + text per image
const slides = [
  {
    src: One,
    title: 'Losing at Mini Golf',
    text:
      'This should’ve been the first sign that I would never win in mini golf, but if I have to lose to anyone, I’m glad it was you.🩷',
  },
  {
    src: Two,
    title: 'First Day Trip Together',
    text:
      'Our first time to Sedona together, and I had an amazing time even though I was super out of shape. We ended up getting lost and got sunburnt super bad. But it was all worth it and I’d do it again in a heartbeat.🩷',
  },
  {
    src: Three,
    title: 'Gym Together',
    text:
      'This is just a cute picture before the gym we took together. I don’t remember what we hit that day but all I know now is I can’t make you look "Boxy" in photos. 🩷',
  },
  {
    src: Four,
    title: 'ASU Game Day',
    text:
      'This was a super fun day where we went to the ASU game, got to hang out, watched the team win, and oh yeah — you got your Pom Poms. 🩷',
  },
  {
    src: Five,
    title: 'Boo Basket',
    text:
      'Although this is just a picture of us with a boo basket, this means more to me because it was two days after the fight on my birthday. Although I was super nervous and scared to be there, I’m super happy that we were able to make it past it. 🩷',
  },
  {
    src: Six,
    title: 'Tanning Together',
    text:
      "Before you, I never would have ever tanned, but with you it's fun and relaxing. Plus, you look good and make me look good by having me not be pasty white year-round. 🩷",
  },
  {
    src: Seven,
    title: 'Halloween Night',
    text:
      'First Halloween together and we had an amazing time, driving two hours to Tucson and getting to hang out with Aidan and Collete. Only thing I had an issue with is why I wasn’t a bird. 🩷',
  },
  {
    src: Eight,
    title: 'Lake Horseshoe',
    text:
      'This was actually a super fun time, my first time riding in a Can-Am. Even though I was super nervous at first, it ended up being a blast and I would love to do it again with you.🩷',
  },
  {
    src: Nine,
    title: 'Boat Trip',
    text:
      'First few days of us dating, you and your parents invited me out to the boat and I embarrassed myself enough by 1. failing surfing way too many times, 2. asking you out way too early when you weren’t even sure, and 3. having my butt almost fall out of my swimsuit in front of your entire family lol',
  },
];

  const closeModal = () => setActiveIndex(null);

  return (
    <div>
      <h1 className="header4">Recap of the past few months</h1>

      {/* 3D Slideshow Section */}
      <section id="slideshow">
        <div className="entire-content">
          <div className="content-carrousel">
            {slides.map((slide, index) => (
              <figure className="shadow" key={index}>
                <img
                  className="IMAGE_MOVIE"
                  src={slide.src}
                  alt={slide.title}
                  onClick={() => setActiveIndex(index)}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {activeIndex !== null && (
        <div className="recap-modal-overlay" onClick={closeModal}>
          <div
            className="recap-modal"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h3>
              <span className="recap-modal-heart">♥</span>
              {slides[activeIndex].title}
            </h3>
            <p>{slides[activeIndex].text}</p>

            <button className="recap-modal-close" onClick={closeModal}>
              Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recap;
