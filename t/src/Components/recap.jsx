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
        'This shouldve been the first sign that i would never win in minigolf, but if i have to lose to anyone, im glad it was you.🩷',
    },
    {
      src: Two,
      title: 'First Day Trip Together',
      text:
        'Our first time to sedona together, and i had an amazing time even thought i was supoer out of shape, we ended up getting lost, and got sun burnt super bad. But it was all worth it and id do it again in a heartbeat.🩷',
    },
    {
      src: Three,
      title: 'Gym Together',
      text:
        'This is just a cute picutre before the gym we took together, i dont remeber what we hit that day but all i know now is I cant make you look "Boxy" in photos 🩷',
    },
    {
      src: Four,
      title: 'ASU Game Day',
      text:
        'This was a super fun day where we went to the ASU game, got to hangout, watch the team win, and oh yeah you got your Pom Poms 🩷',
    },
    {
      src: Five,
      title: 'Boo Basket',
      text:'Although this is just a picture of us with a boo basket, this means more to me because it was two days after the fight on my birthday. Although i was super nervous and scared to be there im super happy that we were able to make it past it. 🩷',
    },
    {
      src: Six,
      title: 'Tanning Together',
      text:
        "Before you i never would have ever tanned but with you its fun and relaxing. Plus you look good and make me look good by having me not be pasty white year round. 🩷",
    },
    {
      src: Seven,
      title: 'Halloween Night',
      text:
        'First halloween together and we have an amazing time, driving two hours to tucson and getting to hangout with Aidan and Collete. Only thing i had an issue with is why i wasnt a bird. 🩷',
    },
    {
      src: Eight,
      title: 'First time in Canam',
      text:
        'This was actually a super fun time, my first itme riding in one of a canam. Even though i was super nervous at first, it ended up being a blast and i would love to do it again with you.🩷',
    },
    {
      src: Nine,
      title: 'Boat Trip',
      text:
        'First few days of us dating you and your parents invited me out to the boat and i embarresed myself enough by 1. Failing surfing way to many times, 2. Asking you out way to early that you werent even sure, and 3. having my butt almost fall out of my swimsuit in front of your entire family lol',
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
