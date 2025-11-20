import React from "react";

const video = () => {
  return (
    <section id="future-plans" className="future-plans">
      <div className="future-plans__inner">
        {/* Heading */}
        <div className="future-plans__header">
          <h2 className="future-plans__title">Our Future Plans ✨</h2>
          <p className="future-plans__subtitle">
            Just a few of the moments I’m excited to share with you. 
            This is only the beginning of everything we’re going to do together.
          </p>
        </div>

        {/* Cards */}
        <div className="future-plans__grid">
          {/* Card 1 */}
          <div className="future-card">
            <h3 className="future-card__title">Trips We’ll Take ✈️</h3>
            <ul className="future-card__list">
              <li>A weekend escape to Antelope Canyon — hiking, exploring, and just getting lost together.</li>
              <li>A spring break adventure somewhere warm, fun, and full of memories waiting to happen.</li>
              <li>A dream trip to that place we always bring up… one day, Greece is going to be ours.</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="future-card">
            <h3 className="future-card__title">Dates I’m Planning 💕</h3>
            <ul className="future-card__list">
              <li>A full day spa retreat where we unwind, relax, and escape together.</li>
              <li>A surprise at-home date night that I plan from start to finish, perfectly romantic just for us.</li>
              <li>Taking you to a concert so you can finally experience one — and I get to be the one beside you when you do.</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="future-card">
            <h3 className="future-card__title">Little Life Moments 🌙</h3>
            <ul className="future-card__list">
              <li>More nights staying up talking about everything and nothing.</li>
              <li>Being there for you on your best and worst days.</li>
              <li>Celebrating all your wins, big or small, right beside you.</li>
            </ul>
          </div>
        </div>

        {/* Bottom quote / promise */}
        <div className="future-plans__footer">
          <p className="future-plans__quote">
            I don’t know exactly where life will take us, 
            but I know I want you there for every step, every memory, and every late-night laugh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default video;
