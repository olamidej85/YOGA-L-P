import React from 'react';
import './FirstSection.css';

function FirstSection() {
  return (
    <section className="first">
      <div className="first-content">
      <p className='p1'>Mind-Body-Soul Balance</p>
        <h2>Achieve balance in mind, body, and soul.</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Semper malesuada ut ullamcorper sed tortor curabitur.</p>
      </div>
      <div className="first-image">
        <img src="\images\trianer_5-removebg-preview.png" alt="Yoga Pose" />
      </div>
    </section>
  );
}

export default FirstSection;
