import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Helmet } from "react-helmet";
import axios from "axios";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Consultation from "../component/Consultation";

const MagneticTilt = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div className={className} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div style={{ transform: "translateZ(20px)", height: "100%" }}>{children}</div>
    </motion.div>
  );
};

export default function ContactUS() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroText = useTransform(scrollYProgress, [0, 0.2], ["0%", "80%"]);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "", last_name: "", email: "", phone: "",
    message: "", city: "", company: "", formType: "contact",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://anahmarketing.com:5000/send-email",
        JSON.stringify(formData),
        { headers: { "Content-Type": "application/json" } }
      );
      setShowPopup(true);
      setFormData({ first_name: "", last_name: "", email: "", phone: "", message: "", city: "", company: "", formType: "contact" });
      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={containerRef} style={{ background: "var(--clr-bg)" }}>
      <Helmet>
        <title>Contact Anax Marketing | Let's Grow Your Brand</title>
        <meta name="description" content="Get in touch with Anax Marketing for expert digital marketing, SEO, and web development solutions tailored to your goals." />
        <link rel="canonical" href="https://anahmarketing.com/contact-us" />
      </Helmet>



      <style>{`
        .awwwards-contact-hero {
          min-height: 50vh; display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden; border-bottom: 1px solid rgba(0,0,0,0.05); background: var(--clr-bg);
        }
        .awwwards-contact-hero::before {
          content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 50% 100%, rgba(178, 152, 220, 0.15), transparent 60%);
        }
        .hero-content {
          text-align: center; position: relative; z-index: 1; max-width: 900px; padding-top: 4rem;
        }
        .hero-content h1 {
          font-size: clamp(3rem, 6vw, 5rem); font-weight: 900; color: var(--clr-text-main); margin-bottom: 1rem;
          letter-spacing: -0.04em; line-height: 1.1;
        }
        .hero-content h1 span { background: var(--grad-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

        .awwwards-contact-main { padding: 6rem 0; overflow: hidden; perspective: 1500px; background: var(--clr-navy-2); }
        .contact-grid {
          max-width: 1400px; margin: 0 auto; padding: 0 2rem; display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem; align-items: start;
        }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; }
        }

        .info-panel {
          background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: var(--radius-xl); padding: 3rem; display: flex; flex-direction: column; gap: 1.5rem;
          box-shadow: var(--shadow-sm); transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .info-panel:hover { box-shadow: var(--shadow-md); transform: translateY(-4px) scale(1.02); background: var(--clr-surface); }
        .info-panel h2 { font-size: 2rem; font-weight: 900; color: var(--clr-text-main); line-height: 1.2; letter-spacing: -0.02em; }
        .info-panel p { font-size: 1.05rem; color: var(--clr-text-secondary); line-height: 1.8; margin-bottom: 1rem; }

        .info-item {
          display: flex; gap: 1.5rem; padding: 2.2rem; background: rgba(255, 255, 255, 0.4); border: 1px solid var(--clr-border);
          border-radius: 16px; transition: 0.4s cubic-bezier(0.23, 1, 0.32, 1); align-items: flex-start;
        }
        .info-item:hover { background: #ffffff; box-shadow: var(--shadow-sm); border-color: rgba(178, 152, 220, 0.4); transform: translateX(4px); }
        .info-item i { width: 50px; height: 50px; border-radius: 14px; background: rgba(178, 152, 220, 0.15); color: var(--clr-primary); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
        .info-item h4 { font-size: 0.8rem; font-weight: 800; color: var(--clr-text-muted); text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.1em; }
        .info-item div { font-size: 1.05rem; color: var(--clr-text-main); font-weight: 500; }

        .form-panel {
          background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: var(--radius-xl); padding: 3.5rem;
          box-shadow: var(--shadow-sm);
        }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        @media (max-width: 640px) { .form-grid { grid-template-columns: 1fr; } }
        .form-full { grid-column: 1 / -1; }

        .awwwards-input {
          width: 100%; background: var(--clr-surface); border: 1px solid var(--clr-border); border-radius: 12px;
          padding: 1rem 1.2rem; color: var(--clr-text-main); font-size: 1.05rem; outline: none; transition: 0.3s; font-family: var(--font-primary);
        }
        .awwwards-input:focus { border-color: var(--clr-primary); box-shadow: 0 0 0 4px rgba(178, 152, 220, 0.15); }
        .awwwards-input::placeholder { color: var(--clr-text-muted); }
        
        .awwwards-submit {
          display: inline-flex; align-items: center; justify-content: center; gap: 0.8rem; width: 100%;
          background: var(--grad-primary); color: #fff; border: none; border-radius: var(--radius-full); padding: 1.2rem;
          font-size: 1.1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; transition: 0.3s; margin-top: 1rem;
        }
        .awwwards-submit:hover { transform: translateY(-3px) scale(1.02); box-shadow: var(--shadow-primary); }

        .cpf-modal-backdrop {
          position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(10px); z-index: 99999;
          display: flex; align-items: center; justify-content: center; padding: 1rem;
        }
        .cpf-modal {
          background: #ffffff; border: 1px solid var(--clr-border); border-radius: 24px; padding: 3rem 2rem; max-width: 400px; width: 100%; text-align: center; box-shadow: var(--shadow-lg);
        }
          @media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .awwwards-contact-main {
    padding: 3.5rem 0;
  }

  .contact-grid {
    padding: 0 1rem;
    gap: 2rem;
  }

  /* PANEL FIXES */
  .info-panel,
  .form-panel {
    padding: 1.5rem;
    border-radius: 18px;
  }

  /* TEXT SCALE DOWN */
  .info-panel h2,
  .form-panel h2 {
    font-size: 1.6rem !important;
  }

  .info-panel p {
    font-size: 0.95rem;
  }

  /* INFO ITEMS STACK BETTER */
  .info-item {
    flex-direction: column;
    gap: 0.8rem;
    padding: 1rem;
  }

  .info-item i {
    width: 42px;
    height: 42px;
    font-size: 1rem;
  }

  /* FORM GRID */
  .form-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .awwwards-input {
    font-size: 0.95rem;
    padding: 0.9rem 1rem;
  }

  .awwwards-submit {
    padding: 1rem;
    font-size: 1rem;
  }
}

/* SMALL MOBILE */
@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .info-panel,
  .form-panel {
    padding: 1.2rem;
  }

  .info-item div {
    font-size: 0.95rem;
    word-break: break-word;
  }
}
      `}</style>

      <section className="awwwards-contact-hero">
        <motion.div className="hero-content" style={{ y: yHeroText, opacity: opacityHeroText }}>
          <h1>Connect With <span>Anax</span></h1>
          <div className="ds-section-tag">Let's Ignite Your Growth</div>
        </motion.div>
      </section>

      <section className="awwwards-contact-main">
        <div className="contact-grid">
          <MagneticTilt className="info-panel">
            <div className="ds-section-tag" style={{ alignSelf: 'flex-start' }}>Contact Details</div>
            <h2>Got an ambitious project?</h2>
            <p>We work exclusively with brands ready to dominate. If you're looking for standard metrics and mediocre results, we're not the agency for you. If you want explosive growth, reach out directly.</p>

            <div className="info-item">
              <i className="fa-solid fa-map-location-dot" />
              <div>
                <h4>Headquarters</h4>
                <div>E1/B1 Extension, Mohan Cooperative Industrial Estate, Mathura Rd, Delhi 110044</div>
              </div>
            </div>

            <div className="info-item">
              <i className="fa-solid fa-envelope" />
              <div>
                <h4>Electronic Mail</h4>
                <div>info@anaxmarketing.com<br />marketing@anaxmarketing.com</div>
              </div>
            </div>

            <div className="info-item">
              <i className="fa-solid fa-phone" />
              <div>
                <h4>Direct Line</h4>
                <div>+91-8810620925</div>
              </div>
            </div>
          </MagneticTilt>

          <motion.div className="form-panel" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--clr-text-main)", marginBottom: "2.5rem", letterSpacing: "-0.03em" }}>Initiate Protocol.</h2>
            <form onSubmit={handleSubmit} className="form-grid">
              <div><input type="text" name="first_name" placeholder="First Name *" className="awwwards-input" value={formData.first_name} onChange={handleChange} required /></div>
              <div><input type="text" name="last_name" placeholder="Last Name *" className="awwwards-input" value={formData.last_name} onChange={handleChange} required /></div>
              <div><input type="email" name="email" placeholder="Business Email *" className="awwwards-input" value={formData.email} onChange={handleChange} required /></div>
              <div><input type="tel" name="phone" placeholder="Phone Number *" className="awwwards-input" value={formData.phone} onChange={handleChange} required /></div>
              <div className="form-full"><input type="text" name="company" placeholder="Company Website" className="awwwards-input" value={formData.company} onChange={handleChange} /></div>
              <div className="form-full"><input type="text" name="city" placeholder="City" className="awwwards-input" value={formData.city} onChange={handleChange} /></div>
              <div className="form-full">
                <textarea name="message" placeholder="Tell us about your brand goals..." className="awwwards-input" style={{ minHeight: "120px", resize: "none" }} value={formData.message} onChange={handleChange} required />
              </div>
              <div className="form-full">
                <button type="submit" className="awwwards-submit" disabled={loading}>
                  {loading ? (
                    <i className="fa-solid fa-spinner fa-spin" />
                  ) : (
                    <>Send Transmission <i className="fa-solid fa-arrow-right" /></>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}

      <Consultation />
      <div
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8995688816303!2d75.7379177762447!3d26.843146463075207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db499629171c3%3A0xda22b92b58afbdb2!2siGlobe%20Solutions!5e0!3m2!1sen!2sin!4v1779272278578!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{
            border: 0,
            filter: "grayscale(0.2)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <Footer />

      <AnimatePresence>
        {showPopup && (
          <motion.div className="cpf-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="cpf-modal" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
              <i className="fa-solid fa-circle-check" style={{ fontSize: "4rem", color: "#0ea5e9", marginBottom: "1.5rem" }} />
              <h2 style={{ fontSize: "2rem", color: "var(--clr-text-main)", marginBottom: "0.5rem" }}>Transmission Sent.</h2>
              <p style={{ color: "var(--clr-text-secondary)" }}>Our growth engineers will review your details and contact you shortly.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
