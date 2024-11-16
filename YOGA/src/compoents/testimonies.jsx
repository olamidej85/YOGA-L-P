import React from 'react';
import './Testimonies.css';

function Testimonies() {
  const testimonialsTop = [
    { id: 1, image: "/images/trainer 1.jfif" },
    { id: 2, image: "/images/trainer 2.jfif" },
    { id: 3, image: "/images/trainer 3.jfif" },
    { id: 4, image: "/images/trainer 4.jfif" },
    { id: 5, image: "/images/trianer 5.jfif" },
  ];

  const testimonialsBottom = [
    { id: 6, image: "/images/trainer 6.jpg" },
    { id: 7, image: "/images/trainer 7.jfif" },
    { id: 8, image: "/images/trainer 8.jpg" },
    { id: 9, image: "/images/trainer 9.jpg" },
    { id: 10, image: "/images/trainer 10.webp" },
  ];
  const highlightedTestimonial = {
    name: "Cynthia R.",
    title: "Graphic Designer",
    text: "Joining this yoga community has been life-changing. The instructors are incredibly knowledgeable, and the classes have helped me find inner peace and improve my flexibility.",
    image: "/images/cythai.jpg"
  };


  return (
    <section className="testimonials">
      <h2>Student Testimonials</h2>
      <p>See how our members have reduced stress and enhanced well-being with our support and guidance.</p>
      <div className="testimonial-content">
      <div className="testimonial-images-container">
          {testimonialsTop.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-image scatter-image-top-${index + 1}`}>
              <img src={testimonial.image} alt={`Testimonial ${index + 1}`} />
            </div>
          ))}
        </div>
        
        <div className="highlighted-testimonial">
          <div className="testimonial-card">
            <img src={highlightedTestimonial.image} alt={highlightedTestimonial.name} className="testimonial-profile-pic" />
            <p>“{highlightedTestimonial.text}”</p>
            <h4>{highlightedTestimonial.name}</h4>
            <p>{highlightedTestimonial.title}</p>
          </div>
        </div>
        
        <div className="testimonial-images-container-bottom">
          {testimonialsBottom.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-image scatter-image-bottom-${index + 1}`}>
              <img src={testimonial.image} alt={`Testimonial ${index + 6}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonies;
