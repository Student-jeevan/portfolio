import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("https://formsubmit.co/ajax/jeevanthitrya@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (response.ok) {
                alert("Thank you! Your message has been sent successfully.");
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert("Oops! Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Error sending message. Please check your internet connection and try again.");
        }
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>Whether you have a question, want to collaborate, or just say hi, my inbox is always open!</p>

                    <div className="contact-links">
                        <a href="mailto:jeevanthitrya@gmail.com" className="contact-link-card">
                            <FaEnvelope className="contact-icon" />
                            <div>
                                <h4>Email</h4>
                                <span>jeevanthitrya@gmail.com</span>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/jeevan-thitre/" target="_blank" rel="noreferrer" className="contact-link-card">
                            <FaLinkedin className="contact-icon" />
                            <div>
                                <h4>LinkedIn</h4>
                                <span>linkedin.com/in/Jeevansingh23</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your Message"
                                rows="5"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message <FaPaperPlane />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;
