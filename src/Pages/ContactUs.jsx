import React, { useState, useEffect } from "react";
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
import axios from "axios";
import star2 from "../assets/images/star2.png";
import inner_header from "../assets/images/inner-header.png";
import preloader from "../assets/images/preloader-img.png";
import header from "../assets/images/inner-header.png";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";


function ContactUS() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    city: "",
    companyname: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  // console.log("formDataformData", formData);

  try {
    const response = await axios.post(
      "https://anahmarketing.com:5000/send-email",
       JSON.stringify(formData), // Convert to JSON string
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    setShowPopup(true);

    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
      city: "",
      company: "",
    });

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  } catch (error) {
    console.error("Failed to send message", error);
  }
};


  return (
    <>

          <Helmet>
                    <title>Contact Anah Marketing | Let's Grow Your Brand</title>
                    <meta
                        name="description"
                        content="Have a project in mind? Get in touch with Anah Marketing for expert digital marketing, SEO, and web development solutions tailored to your goals."
                    />
                      <link rel="canonical" href="https://anahmarketing.com/contact-us"/>
                </Helmet>

      {isLoading && (
        <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon">
              <img src={preloader} alt="" />
            </div>
          </div>
        </div>
      )}

      <div
        className="about-header-area"
        style={{
          backgroundImage: `url(${header})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={star2} alt="" className="star2 keyframe5" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-inner-header heading9 text-center">
                <h1>Contact Us</h1>
                <a href="/">Home</a> <i className="fa-solid fa-angle-right"></i> <span>Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-main-inner-area sp1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading2 contact-header">
                <h5>Contact Us</h5>
                <h2>Get in Touch with Anah Marketing – We Value Your Connection!</h2>
                <p>
                  At Anah Marketing, we’re not just about business—we’re about building relationships,
                  crafting success stories and turning ideas into reality! Whether you have a bold new
                  idea, a fiery question or just need expert guidance, we’re just a message away and
                  ready to help.
                </p>
                <p>
                  We believe in real conversations, real solutions and real growth—no automated replies,
                  no waiting—just a team that genuinely cares about your brand’s success!
                </p>

                <div className="space32"></div>
                <div className="number-address-area">
                  <div className="phone-number">
                    <div className="img1">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="content">
                      <p>Phone Number</p>
                      <a href="tel:+916376011249"><span>+91-6376011249</span></a>
                    </div>
                  </div>

                  <div className="phone-number m-0">
                    <div className="img1">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="content">
                      <p>Email Address</p>
                      <a href="mailto:marketing@anahmarketing.com"><span>marketing@anahmarketing.com</span></a>
                    </div>
                  </div>
                </div>

                <div className="space50"></div>
                <div className="number-address-area2">
                  <div className="phone-number">
                    <div className="img1">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="content">
                      <a href="#">
                        Plot No. 3-4, Krishna Enclave 2nd Floor, Patrakar Colony Road Near The Narayan
                        School, Mansarovar Jaipur, Rajasthan – 302020, India
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="contact-form-area">
                <h4>Get In Touch</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                          value={formData.first_name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                          value={formData.last_name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="text"
                          name="company"
                          placeholder="Company name"
                          value={formData.company}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input
                          type="text"
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>


                    <div className="col-lg-12">
                      <div className="input-area">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="input-area">
                        <button type="submit" className="lnk header-btn1">
                          Submit <span><i className="fa-solid fa-arrow-right"></i></span>
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

      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d529.1825657126805!2d75.74022841039599!3d26.843076137703576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5ca4ee47603%3A0x254d1fecb795f06e!2sParentEye!5e0!3m2!1sen!2sin!4v1744263079750!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {showPopup && (
        <motion.div
          className="modal-backdrop-custom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content-custom"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <div className="modal-icon">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully. We'll be in touch soon.</p>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  );
}

export default ContactUS;
