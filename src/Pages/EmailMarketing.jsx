import React from "react";
import innerHeader from "../assets/images/inner-header.png";
import star1 from "../assets/images/star1.png";
import star2 from "../assets/images/star2.png";
import elements6 from "../assets/images/elements6.png";
import emailMarketing1 from "../assets/images/email-marketing1.png";
import emailMarketing2 from "../assets/images/email-marketing2.png";
import emailMarketing3 from "../assets/images/email-marketing3.png";
import emailMarketing4 from "../assets/images/email-marketing4.png";
import shopifyLogo from "../assets/images/Shopify_Logo.png";
import pragmaLogo from "../assets/images/pragma_logo.png";
import razorpayImg from "../assets/images/razorpay-img.png";
import whatmoreImg from "../assets/images/Whatmore-img.png";
import engatiImg from "../assets/images/engati-img.png";
import Consultation from "../component/Consultation";
import Footer from "../component/footer";
import About_Partner from "../component/about_partner";
import { motion } from "framer-motion";
import  { useEffect,useState } from "react";
import preloader from "../assets/images/preloader-img.png";


function EmailMarketing() {

      const [isLoading, setIsLoading] = useState(true);
      
          useEffect(() => {
              // Simulate load or wait for all images/resources to load
              const handleLoad = () => {
                  setTimeout(() => {
                      setIsLoading(false);
                  }, 1000); // Optional delay for smooth transition
              };
      
              if (document.readyState === "complete") {
                  handleLoad();
              } else {
                  window.addEventListener("load", handleLoad);
              }
      
              return () => window.removeEventListener("load", handleLoad);
          }, []);

    return (
        <>
        {isLoading && (
            <div className="preloader">
                <div className="loading-container">
                    <div className="loading"></div>
                    <div id="loading-icon"><img src={preloader} alt="" /></div>
                </div>
            </div>
        )}

            {/* Header Section */}
            <div
                className="about-header-area"
                style={{
                    backgroundImage: `url(${innerHeader})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <img src={star2} alt="Star Decoration" className="star2 keyframe5" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>Email Marketing</h1>
                                <a href="/">Home</a>
                                <i className="fa-solid fa-angle-right"></i>
                                <span> Services </span>
                                <i className="fa-solid fa-angle-right"></i>
                                <span>Email Marketing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Email Marketing Content */}
            <div className="about1-section-area pt-4 mt-4 sp6">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="about-images">
                            <motion.figure
                                    initial={{ clipPath: "inset(0% 100% 0% 0%)" }} // Image fully hidden (right side se)
                                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // Dheere dheere left to right reveal
                                    transition={{ duration: 2, ease: "easeInOut" }} // Slow transition
                                    className="image-anime"
                                >
                                
                                    <img
                                        src={emailMarketing1}
                                        alt=""
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </motion.figure>
                                <img src={star1} alt="Star Decoration" className="star1 keyframe5" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-content-area heading2">
                                <h2 className="text-anime-style-2">Turn Clicks into Clients with Impactful Emails</h2>
                                <p className="mb-4" data-aos="fade-left" data-aos-duration="1000">
                                    A well-crafted email isn’t just another message—it’s a powerful touchpoint that builds relationships and drives action.
                                    We create data-backed email marketing strategies that turn one-time visitors into loyal customers. From welcome sequences
                                    to re-engagement campaigns, every email is designed to capture attention and maximize conversions.
                                </p>
                                <div className="btn-area" data-aos="fade-left" data-aos-duration="1200">
                                    <a href="/contact" className="header-btn1">
                                        Contact Now<span><i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="about-auhtor-images">
                                <img src={elements6} alt="Design Element" className="elements5 keyframe5" />
                                <motion.figure
                                    initial={{ clipPath: "inset(0% 100% 0% 0%)" }} // Image fully hidden (right side se)
                                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // Dheere dheere left to right reveal
                                    transition={{ duration: 2, ease: "easeInOut" }} // Slow transition
                                    className="image-anime"
                                >
                                
                                    <img
                                        src={emailMarketing2}
                                        alt=""
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                      </motion.figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <About_Partner />


            {/* Work Strategy Section */}
            <div className="works-inner-section-area services-page">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="about-all-images-area">
                                <img src={star2} alt="Star Decoration" className="elements12 keyframe5" />
                                <img src={star1} alt="Star Decoration" className="elements13 keyframe5" />
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="img1 ">
                                            <div class="space100"></div>
                                            <img src={emailMarketing3} alt="Targeting Strategy" />
                                            <div class="space100"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="works-header-area heading2 specing2">
                                <h2>Precision Targeting with Smart Automation</h2>
                                <p>
                                    Sending generic emails is a thing of the past. We use advanced segmentation and automation
                                    to deliver personalized messages based on client behavior, preferences, and engagement history.
                                    Whether it’s abandoned cart recovery, lead nurturing, or exclusive offers, your audience receives
                                    the right message at the perfect time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center order-2">
                        <div className="col-lg-8">
                            <div className="works-header-area heading2">
                                <h2>Test, Optimize, and Lead</h2>
                                <p>
                                    Effective email marketing goes beyond high open rates—it’s about real, measurable results.
                                    We continuously refine subject lines, content, and call-to-actions using various testing
                                    and performance analytics, ensuring more engagement, higher conversions, and a stronger return on investment for your business.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-all-images-area">
                                <img src={star2} alt="Star Decoration" className="elements12 keyframe5" />
                                <img src={star1} alt="Star Decoration" className="elements13 keyframe5" />
                                <div class="row">
                      <div class="col-lg-12">
                        <div class="img1 ">
                            <div class="space100"></div>
                            <img src={emailMarketing4} alt="Optimization Strategy" />
                            <div class="space100"></div>
                        </div>
                      </div>
                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Consultation />
            <Footer />
        </>
    );
}

export default EmailMarketing;
