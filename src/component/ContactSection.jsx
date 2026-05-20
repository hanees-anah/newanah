import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    city: "",
    formType: "contact",
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://anahmarketing.com:5000/send-email",
        JSON.stringify(formData),
        { headers: { "Content-Type": "application/json" } }
      );
      setShowModal(true);
      setFormData({
        first_name: "", last_name: "", email: "", phone: "",
        company: "", message: "", city: "", formType: "contact",
      });
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <style>{`
        /* ── Contact Section ──────────────────── */
        .contact-section {
          background: #030014;
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }
        .contact-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(92, 79, 229, 0.4), transparent);
        }
        /* Glow */
        .contact-section::after {
          content: '';
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%,-50%);
          width: 800px; height: 800px;
          background: radial-gradient(ellipse, rgba(92, 79, 229, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }
        .contact-heading {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .contact-heading h2 {
          font-size: clamp(1.7rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin: 0.75rem 0 1rem;
        }
        .contact-heading h2 em {
          font-style: normal;
          background: var(--grad-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-heading p {
          color: #fff;
          font-size: 0.92rem;
          line-height: 1.7;
          max-width: 560px;
          margin: 0 auto;
        }

        /* Split layout */
        .contact-body {
          display: grid;
          grid-template-columns: 1fr 1.7fr;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-body { grid-template-columns: 1fr; }
        }

        /* Info panel */
        .contact-info-panel {
          background: rgba(255, 255, 255, 13%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-xl);
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.3);
        }
        .contact-info-panel h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.5rem;
        }
        .contact-info-panel > p {
          color: #ffffff;
          font-size: 0.875rem;
          line-height: 1.65;
          margin: 0 0 1rem;
        }
        .contact-box {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid #fff;
          border-radius: var(--radius-md);
          transition: all 0.25s ease;
        }
        .contact-box:hover {
          background: rgba(92, 79, 229, 0.1);
          border-color: rgba(92, 79, 229, 0.3);
        }
        .contact-box-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          display: flex; align-items: center; justify-content: center;
          color: #818cf8;
          font-size: 0.95rem;
          flex-shrink: 0;
        }
        .contact-box-text h4 {
          font-size: 0.78rem;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin: 0 0 0.25rem;
        }
        .contact-box-text a,
        .contact-box-text p {
          font-size: 0.875rem;
          color: #e2e8f0;
          text-decoration: none;
          margin: 0;
          line-height: 1.5;
          transition: color 0.2s ease;
        }
        .contact-box-text a:hover { color: #ffffff; }

        /* Form panel */
        .contact-form-panel {
          background: rgb(255 255 255 / 13%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-xl);
          padding: 2.25rem;
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.3);
        }
        .contact-form-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 1.75rem;
          text-align: center;
        }

        /* Form grid */
        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 560px) {
          .contact-form-grid { grid-template-columns: 1fr; }
        }
        .contact-form-grid .full-col { grid-column: 1 / -1; }

        /* Input wrapper: floating label */
        .contact-input-wrap {
          position: relative;
        }
        .contact-input-wrap input,
        .contact-input-wrap textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid #fff;
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          color: #ffffff;
          font-size: 0.875rem;
          font-family: var(--font-primary);
          outline: none;
          transition: all 0.25s ease;
          resize: none;
        }
        .contact-input-wrap textarea { min-height: 120px; }
        .contact-input-wrap input::placeholder,
        .contact-input-wrap textarea::placeholder {
          color: #fff;
        }
        .contact-input-wrap input:focus,
        .contact-input-wrap textarea:focus {
          border-color: #5c4fe5;
          background: rgba(92, 79, 229, 0.05);
          box-shadow: 0 0 0 3px rgba(92, 79, 229, 0.25);
        }

        /* Submit button */
        .contact-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          background: var(--grad-primary);
          color: #fff;
          border: none;
          border-radius: var(--radius-full);
          padding: 0.9rem 2rem;
          font-size: 0.95rem;
          font-weight: 700;
          font-family: var(--font-primary);
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-primary);
          margin-top: 0.5rem;
          position: relative;
          overflow: hidden;
        }
        .contact-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: var(--shadow-primary-lg);
        }
        .contact-submit:disabled { opacity: 0.7; cursor: not-allowed; }
        .contact-submit .spinner {
          width: 18px; height: 18px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          border-radius: 50%;
          animation: ds-spin-slow 0.75s linear infinite;
        }

        /* Modal */
        .contact-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(9, 8, 21, 0.8);
          backdrop-filter: blur(8px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .contact-modal-card {
          background: #030014;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-xl);
          padding: 2.5rem 2rem;
          max-width: 400px;
          width: 100%;
          text-align: center;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);
        }
        .contact-modal-icon {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem;
          color: #10b981;
          margin: 0 auto 1.5rem;
        }
        .contact-modal-card h4 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.5rem;
        }
        .contact-modal-card p {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0 0 1.5rem;
        }
        .contact-modal-close {
          background: var(--grad-primary);
          color: #fff;
          border: none;
          border-radius: var(--radius-full);
          padding: 0.7rem 2rem;
          font-size: 0.9rem;
          font-weight: 600;
          font-family: var(--font-primary);
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-primary);
        }
        .contact-modal-close:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-primary-lg);
        }
      `}</style>

      <section className="contact-section" id="contact" aria-label="Contact us">
        <div className="contact-inner">
          {/* Heading */}
          <div className="contact-heading">
            <div className="ds-section-tag" style={{ margin: "0 auto 0.75rem" }}>Get In Touch</div>
            <h2>Have a project in mind?<br /><em>Let's talk with us now</em></h2>
            <p>
              From expert marketing and creative design to innovative development, we turn your vision into
              impactful results. Let's collaborate to build something extraordinary.
            </p>
          </div>

          <div className="contact-body">
            {/* Info panel */}
            <motion.div
              className="contact-info-panel"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Contact Info</h3>
              <p>We're here to help! Whether you have questions or need expert guidance on scaling your business, our team is ready.</p>

              <div className="contact-box">
                <div className="contact-box-icon"><i className="fa-solid fa-location-dot" /></div>
                <div className="contact-box-text">
                  <h4>Our Location</h4>
                  <p>Plot No. 3-4, Krishna Enclave, 2nd Floor, Patrakar Colony Road, Near The Narayan School, Mansarovar, Jaipur – 302020, India</p>
                </div>
              </div>

              <div className="contact-box">
                <div className="contact-box-icon"><i className="fa-solid fa-phone" /></div>
                <div className="contact-box-text">
                  <h4>Phone Number</h4>
                  <a href="tel:+916376011249">+91-6376011249</a>
                </div>
              </div>

              <div className="contact-box">
                <div className="contact-box-icon"><i className="fa-regular fa-envelope" /></div>
                <div className="contact-box-text">
                  <h4>Email Address</h4>
                  <a href="mailto:marketing@anahmarketing.com">marketing@anahmarketing.com</a>
                </div>
              </div>
            </motion.div>

            {/* Form panel */}
            <motion.div
              className="contact-form-panel"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="contact-form-title">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <div className="contact-input-wrap">
                    <input type="text" name="first_name" placeholder="First Name" required
                      onChange={handleChange} value={formData.first_name} />
                  </div>
                  <div className="contact-input-wrap">
                    <input type="text" name="last_name" placeholder="Last Name" required
                      onChange={handleChange} value={formData.last_name} />
                  </div>
                  <div className="contact-input-wrap">
                    <input type="email" name="email" placeholder="Email Address" required
                      onChange={handleChange} value={formData.email} />
                  </div>
                  <div className="contact-input-wrap">
                    <input type="tel" name="phone" placeholder="Phone Number" required
                      onChange={handleChange} value={formData.phone} />
                  </div>
                  <div className="contact-input-wrap">
                    <input type="text" name="company" placeholder="Company Name" required
                      onChange={handleChange} value={formData.company} />
                  </div>
                  <div className="contact-input-wrap">
                    <input type="text" name="city" placeholder="City" required
                      onChange={handleChange} value={formData.city} />
                  </div>
                  <div className="contact-input-wrap full-col">
                    <textarea name="message" placeholder="Your Message" required
                      onChange={handleChange} value={formData.message} />
                  </div>
                  <input type="hidden" name="contact_value" value="contact" />
                  <div className="full-col">
                    <button type="submit" className="contact-submit" disabled={loading}>
                      {loading
                        ? <><span className="spinner" /> Submitting...</>
                        : <>Submit &nbsp;<i className="fa-solid fa-arrow-right" /></>
                      }
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="contact-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="contact-modal-card"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
            >
              <div className="contact-modal-icon">
                <i className="fa-solid fa-circle-check" />
              </div>
              <h4>Message Sent!</h4>
              <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
              <button className="contact-modal-close" onClick={handleCloseModal}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactSection;
