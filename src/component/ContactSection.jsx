import React, { useState } from "react";
import axios from "axios";
import star__img from "../assets/images/star2.png";
import pages_bg1 from "../assets/images/pages-bg1.png";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    city:""
  });

  const [showModal, setShowModal] = useState(false); // For success popup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    await axios.post(
      "https://anahmarketing.com/send-email",
      JSON.stringify(formData), // Convert to JSON string
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    setShowModal(true); // Show popup on success
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      city: ""
    });

  } catch (error) {
    alert("Failed to send message. Please try again.");
    console.error("Submit error:", error);
  }
};


  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className="all-section-bg"
      style={{ backgroundImage: `url(${pages_bg1})` }}
    >
      <div className="contact1-section-area sp6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="contact-header-area text-center heading2">
                <img src={star__img} alt="star" className="star2 keyframe5" />
                <img src={star__img} alt="star" className="star3 keyframe5" />
                <h2 className="text-anime-style-3">
                  Have a project in mind?
                  <br className="d-md-block d-none" />
                  Let’s talk with us now
                </h2>
                <p>
                  From expert marketing and creative design to innovative
                  development, we turn your vision into impactful results.
                  <br className="d-md-block d-none" />
                  Let’s collaborate to build something extraordinary—reach out
                  to us today!
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-5"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <div className="contact-info-area">
                <h3>Contact Info</h3>
                <p>
                  We're here to help! Whether you have questions or need expert
                  guidance on scaling your business, our team is ready to assist
                  you.
                </p>
                <div className="space32"></div>
                <div className="contact-auhtor-box">
                  <div className="icons">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="content">
                    <h4>Our Location</h4>
                    <p>
                      Plot No. 3-4, Krishna Enclave
                      2nd Floor, Patrakar Colony Road
                      Near The Narayan School, Mansarovar
                      Jaipur, Rajasthan – 302020, India
                    </p>
                  </div>
                </div>
                <div className="space18"></div>
                <div className="contact-auhtor-box">
                  <div className="icons">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="content">
                    <h4>Phone Number</h4>
                    <a href="tel:+916376011249">+91-6376011249</a>
                  </div>
                </div>
                <div className="space40"></div>
                <div className="contact-auhtor-box">
                  <div className="icons">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="content">
                    <h4>Email Address</h4>
                    <a href="mailto:marketing@anahmarketing.com">
                      marketing@anahmarketing.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-7"
              data-aos="zoom-out"
              data-aos-duration="1200"
            >
              <div className="contact-boxarea">
                <h3 className="text-center">Get In Touch</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                          required
                          onChange={handleChange}
                          value={formData.first_name}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                          required
                          onChange={handleChange}
                          value={formData.last_name}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                          onChange={handleChange}
                          value={formData.email}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          required
                          onChange={handleChange}
                          value={formData.phone}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          required
                          onChange={handleChange}
                          value={formData.company}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="text"
                          name="city"
                          placeholder="City"
                          required
                          onChange={handleChange}
                          value={formData.city}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-area">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          required
                          onChange={handleChange}
                          value={formData.message}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-area text-center" >
                        <button type="submit" className="lnk header-btn1">
                          Submit{" "}
                          <span>
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ SUCCESS POPUP */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-backdrop-custom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content-custom"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="modal-icon">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h4>Message Sent!</h4>
              <p>Thanks for reaching out. We’ll get back to you soon.</p>
              <button className="btn btn-success mt-3" onClick={handleCloseModal}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ContactSection;
