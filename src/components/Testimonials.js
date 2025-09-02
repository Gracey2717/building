import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      text: "This company did an amazing job on our project!",
      author: "Happy Client",
      image: "" // later: put image path here
    },
    {
      text: "Highly recommend their services.",
      author: "Satisfied Customer",
      image: "" // later: put image path here
    }
  ];

  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            {/* placeholder image area */}
            <div className="testimonial-img">
              {/* later replace with <img src={t.image} alt={t.author}/> */}
            </div>
            <p className="testimonial-text">"{t.text}"</p>
            <h4 className="testimonial-author">- {t.author}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
