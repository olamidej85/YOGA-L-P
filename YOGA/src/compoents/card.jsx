import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({ title, description, image, ctaText, showCTA, showEmailInput }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const viewImage = () => {
    navigate(`/view-image/${title}`, { state: { imageSrc: image, title: title } });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
        <div className="card-text">
          <h3>{title}</h3>
          {description && <p>{description}</p>}
          {showCTA && <button onClick={viewImage}>{ctaText}</button>}
          
        
          {showEmailInput && (
            <div className="email-signup">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="email-input"
              />
              <button className="get-started-button">Get Started</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
