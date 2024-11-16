import React from 'react';
import './FirstSection.css';

function FirstSection() {
  return (
    <section className="first">
      <div className="first-content">
      <p className='p1'>Mind-Body-Soul Balance</p>
        <h2>Achieve balance in mind, body, and soul.</h2>
        <p>Embrace a journey that balances your physical strength, mental clarity, and inner peace through the practice of yoga. Our holistic approach to yoga not only rejuvenate the body but also nourishes the mind and uplifts the spirit, creating a balanced foundation for a healthier, more centered life.</p>
        </div>
      <div className="first-image">
        <img src="\images\trianer_5-removebg-preview.png" alt="Yoga Pose" />
      </div>
    </section>
  );
}

export default FirstSection;
