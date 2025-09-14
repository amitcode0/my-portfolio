import React, { useState } from "react";
import "../styles/Contact.css";
import supabase from "../config/supabase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Attempting to submit form with data:", formData);

      const { data, error } = await supabase.from("contact_messages").insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ]);

      console.log("Supabase response:", { data, error });

      if (error) {
        console.error("Supabase Error:", error);
        alert(
          `Failed to send message: ${error.message}. Please check the console for details.`
        );
      } else {
        console.log("Message sent successfully:", data);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error("JavaScript Error:", err);
      alert(
        `Error sending message: ${err.message}. Please check the console for details.`
      );
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm currently looking for new opportunities and would love to hear
              from you. Whether you have a question or just want to say hi, I'll
              try my best to get back to you!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>pamitak47@gmai.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>9987253584</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Nagpur, Maharashtra</span>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
