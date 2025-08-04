import React from "react";
import star2 from "../assets/images/star2.png";
import innerHeader from "../assets/images/inner-header.png";
import star1 from "../assets/images/star1.png";
import elements6 from "../assets/images/elements6.png";
import websiteDev1 from "../assets/images/website-development1.png";
import websiteDev2 from "../assets/images/website-development2.png";
import websiteDev3 from "../assets/images/website-development3.png";
import websiteDev4 from "../assets/images/website-development4.png";
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
import About_Partner from "../component/About_partner";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import preloader from "../assets/images/preloader-img.png";
import { Helmet } from "react-helmet";



function Websitedevelopment() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate load or wait for all images/resources to load
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Optional delay for smooth transition
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
      <Helmet>
        <title>Best Web Design & Development Company in India</title>
        <meta
          name="description"
          content="Need a website that stands out? Let Anah Marketing, the best web design and development company in India, create a site that’s beautiful, easy to use, and converts!"
        />
                          <link rel="canonical" href="https://anahmarketing.com/website-development-company"/>

      </Helmet>

      {isLoading && (
        <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon"><img src={preloader} alt="" /></div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div
        className="about-header-area"
        style={{
          backgroundImage: `url(${innerHeader})`,
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
                <h1>Website Development</h1>
                <a href="/">Home</a> <i className="fa-solid fa-angle-right"></i>
                <span> Services </span>
                <i className="fa-solid fa-angle-right"></i>
                <span>Website Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
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
                    src={websiteDev1}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </motion.figure>
                <img src={star1} alt="" className="star1 keyframe5" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-content-area heading2">
                {/* <h2 className="text-anime-style-2">
                  End-to-End Website Development Solution
                </h2> */}
                 <h2 className="text-anime-style-2">
                 Professional Website Development Company for Custom Web Solutions
                </h2>
                <p class="mb-4" data-aos="fade-left" data-aos-duration="1000">
                  A website is more than just an online presence—it’s the foundation of your brand’s digital success. We design and develop high-performing websites that are not only visually stunning but also strategically built to drive conversions. With user-centric design, seamless functionality and optimized performance, we ensure your website engages visitors and turns them into loyal customers. Elevate your brand with a website that works as hard as you do
                </p>
                <div class="btn-area" data-aos="fade-left" data-aos-duration="1200">
                  <a href="/contact-us" className="header-btn1">
                    Contact Now<span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="about-auhtor-images">
                <img src={elements6} alt="" className="elements5 keyframe5" />
                <motion.figure
                  initial={{ clipPath: "inset(0% 100% 0% 0%)" }} // Image fully hidden (right side se)
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // Dheere dheere left to right reveal
                  transition={{ duration: 2, ease: "easeInOut" }} // Slow transition
                  className="image-anime"
                >

                  <img
                    src={websiteDev2}
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



      {/* Work Section */}
      <div className="works-inner-section-area services-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div class="about-all-images-area">
                <img src={star2} alt="" class="elements12 keyframe5" />
                <img src={star1} alt="" class="elements13 keyframe5" />
                <div class="row">
                  <div class="col-lg-12">
                    <div class="img1 ">
                      <div class="space100"></div>
                      <img src={websiteDev3} alt="" />
                      <div class="space100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="works-header-area heading2 specing2">
                <h2>Custom Web Design & Development</h2>
                <p>
                  Your brand is unique, and your website should be too. We create custom websites tailored to your business goals, combining creativity with functionality. From intuitive navigation to responsive design, every element is carefully crafted to enhance user experience and maximize engagement. Whether it’s an eCommerce store or a commercial website, we build scalable solutions that grow with your business.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center order-2">
            <div className="col-lg-8">
              <div className="works-header-area heading2">
                <h2>Performance-Optimized & Mobile-First Approach</h2>
                <p>
                  Speed, responsiveness and seamless functionality—these are the pillars of a high-performing website. We build mobile-friendly, lightning-fast websites that deliver an exceptional experience across all devices. With proper code, structured layouts and cutting-edge technology, we ensure your website not only looks great but also performs flawlessly, keeping users engaged and driving meaningful actions
                </p>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="about-all-images-area">
                <img src={star2} alt="" class="elements12 keyframe5" />
                <img src={star1} alt="" class="elements13 keyframe5" />
                <div class="row">
                  <div class="col-lg-12">
                    <div class="img1 ">
                      <div class="space100"></div>
                      <img src={websiteDev4} alt="" />
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

export default Websitedevelopment;
