import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react'; // Fixed import
import './Contact.css'; // Import the CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Got a question? Send me a message, and I'll get back to you soon.</p>

      <div className="contact-sections">
        {/* Contact Info */}
        <div className="contact-info-container">
        <div className="contact-info">
            <div className="contact-info-header">
            <h2>Get in Touch</h2>
            <p>Have something to discuss? Send me a message and let' talk. </p>
            </div>
          <div className="info-item">
            <div className="icon-container">
              <MapPin />
            </div>
            <div className="info-content">
              <h3>Location</h3>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-container">
              <Phone />
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>0792 748 289</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-container">
              <Mail />
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>njambim695@gmail.com.com</p>
            </div>
          </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              placeholder="Your message"
              required
            />
          </div>

          <button type="submit">
            <Send />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contact;
