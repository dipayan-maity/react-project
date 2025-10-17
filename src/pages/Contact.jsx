import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane, FaMapMarkedAlt } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(`Thank you ${formData.firstName}! Your message has been sent successfully. We'll contact you at ${formData.email} soon.`);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <div className="contact-section">
      <SectionTitle
        title="Contact Us"
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        alignment="center"
        showLine={true}
      />

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Fill out the form and our team will get back to you within 24 hours. Or contact us using the details below.</p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div className="contact-details">
                <h4>Our Location</h4>
                <p>123 Design Street, Creative City, CC 10101</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon"><FaPhoneAlt /></div>
              <div className="contact-details">
                <h4>Phone Number</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon"><FaEnvelope /></div>
              <div className="contact-details">
                <h4>Email Address</h4>
                <p>hello@example.com</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link"><FaFacebookF /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
            <a href="#" className="social-link"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" className="form-control" value={formData.firstName} onChange={handleChange} placeholder="John" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" className="form-control" value={formData.lastName} onChange={handleChange} placeholder="Doe" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="john.doe@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" className="form-control" value={formData.subject} onChange={handleChange} placeholder="How can we help you?" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" className="form-control" value={formData.message} onChange={handleChange} placeholder="Please describe your inquiry in detail..." required />
            </div>

            <button type="submit" className="btn">Send Message <FaPaperPlane /></button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>

      <div className="map-section">
        <div className="map-container">
          <div className="map-overlay">
            <FaMapMarkedAlt />
            <p>Interactive Map Location</p>
          </div>
        </div>
        <div className="business-hours">
          <h4>Business Hours</h4>
          <div className="hours-list">
            <div className="hour-item">
              <div className="day">Monday - Friday</div>
              <div className="time">9:00 AM - 6:00 PM</div>
            </div>
            <div className="hour-item">
              <div className="day">Saturday</div>
              <div className="time">10:00 AM - 4:00 PM</div>
            </div>
            <div className="hour-item">
              <div className="day">Sunday</div>
              <div className="time">Closed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
