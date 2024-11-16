import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#" className="footer-contact">Have questions? Contact us.</a>
      <div className="footer-spacer"></div>
      <div className="footer-links">
        <div className="footer-column">
          <a href="#">Yoga FAQ</a>
          <a href="#">Class Schedules</a>
        </div>
        <div className="footer-column">
          <a href="#">Membership Plans</a>
          <a href="#">Instructors</a>
        </div>
        <div className="footer-column">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-column">
          <a href="#">Yoga Blog</a>
          <a href="#">Community Events</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
