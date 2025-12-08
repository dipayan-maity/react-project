import React from 'react';
import SectionTitle from './SectionTitle';

const testimonialsData = [
  {
    id: 1,
    text: "I've been using this product for 3 months now and it has completely transformed my daily routine. The quality is exceptional and the customer service is outstanding!",
    name: "Sarah Johnson",
    role: "Marketing Director",
    avatar: "../images/testi1.jpg",
    rating: 5,
    highlight: false,
  },
  {
    id: 2,
    text: "This is by far the best purchase I've made this year. The attention to detail and craftsmanship is remarkable. I've already recommended it to all my friends!",
    name: "Michael Chen",
    role: "Software Engineer",
    avatar: "../images/testi2.jpg",
    rating: 5,
    highlight: true,
  },
  {
    id: 3,
    text: "I was hesitant at first due to the price, but this product has exceeded all my expectations. The value for money is incredible and it has made my life so much easier.",
    name: "Emily Rodriguez",
    role: "Graphic Designer",
    avatar: "../images/testi3.jpg",
    rating: 4.5,
    highlight: false,
  },
];

const testimonialsStats = [
  { id: 1, value: "4.9/5", label: "Average Rating" },
  { id: 2, value: "10K+", label: "Reviews" },
  { id: 3, value: "98%", label: "Recommend" },
  { id: 4, value: "50+", label: "Countries" },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${testimonial.highlight ? 'testimonial-highlight' : ''}`}
          >
            <div className="testimonial-content">
              <p>{testimonial.text}</p>
            </div>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <div className="rating">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                  {testimonial.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

   

   
    </div>
  );
};

export default Testimonials;
