// src/components/FAQ.js

import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleOpen = (i) => {
    if (open === i) {
      setOpen(null);
    } else {
      setOpen(i);
    }
  };

  const faqData = [
    {
      question: 'What is Yoga?',
      answer: 'Yoga is a mind and body practice with historical origins in ancient Indian philosophy. It combines physical postures, breathing exercises, and meditation to promote mental and physical well-being.'
    },
    {
      question: 'What are the benefits of Yoga?',
      answer: 'Yoga improves flexibility, strength, and posture. It helps reduce stress, anxiety, and depression, and can enhance mindfulness and overall mental well-being.'
    },
    {
      question: 'How often should I practice Yoga?',
      answer: 'For beginners, practicing 2-3 times per week is a good start. As you progress, you may increase your practice to daily sessions for better results. The frequency depends on your goals and schedule.'
    },
    {
      question: 'What should I wear to a Yoga class?',
      answer: 'Wear comfortable, breathable clothing that allows you to move freely. Yoga attire should be fitted enough to stay in place during poses, but flexible enough to provide ease of movement.'
    },
    {
      question: 'Do I need to be flexible to start Yoga?',
      answer: 'No, flexibility is not a requirement for starting yoga. With regular practice, you will gradually improve your flexibility. Yoga is about progress, not perfection.'
    },
    {
      question: 'Can anyone do Yoga?',
      answer: 'Yes, yoga is accessible to all ages and fitness levels. Some styles are more beginner-friendly, while others may be more intense. Always listen to your body and consult with an instructor if you’re new to yoga.'
    },
  ];

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq__container">
        {faqData.map((item, i) => (
          <div key={i} className="faq__item">
            <div className="faq__question" onClick={() => toggleOpen(i)}>
              <h2>{item.question}</h2>
              <span>{open === i ? 'x' : '+'}</span>
            </div>
            {open === i && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
