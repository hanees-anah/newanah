import star1 from "../assets/images/star1.png";
import inner_header from "../assets/images/inner-header.png";
import elements6 from "../assets/images/elements6.png";
import Shopify_img3 from "../assets/images/Shopify-img3.png";
import pragma_logo from "../assets/images/pragma_logo.png";
import razorpay_img from "../assets/images/razorpay-img.png";
import Shopify_img1 from "../assets/images/Shopify-img1.png";
import Shopify_img2 from "../assets/images/Shopify-img2.png";
import whatmore_img from "../assets/images/Whatmore-img.png";
import engati_img from "../assets/images/engati-img.png";
import star2_img from "../assets/images/star1.png";
import star1_img from "../assets/images/star2.png";

import Shopify_img4 from "../assets/images/Shopify-img4.png";
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
import About_Partner from "../component/About_partner";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import preloader from "../assets/images/preloader-img.png";
import { Helmet } from "react-helmet";


function ShopifyDevelopment() {
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

      <Helmet>
        <title>Shopify Development Services | Top Web Development Company</title>
        <meta
          name="description"
          content="Are you looking for Shopify Development Services? Anah Marketing delivers custom, high-converting stores that help your business grow online with expert web development."
        />
      </Helmet>

      {isLoading && (
        <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon"><img src={preloader} alt="" /></div>
          </div>
        </div>
      )}

      <div
        className="about-header-area"
        style={{
          backgroundImage: `url(${inner_header})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={star1} alt="" className="star2 keyframe5" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-inner-header heading9 text-center">
                <h1>Shopify Development</h1>
                <a href="/">Home</a> <i className="fa-solid fa-angle-right"></i>
                <span> Services </span>
                <i className="fa-solid fa-angle-right"></i>
                <span>Shopify Development</span>
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
                    src={Shopify_img4}
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
                <h2 className="text-anime-style-2">
                  Transform Your Ecommerce Vision into Reality
                </h2>
                <p>
                  Your online store isn't just a website—it's your brand's
                  powerhouse. At Anah Marketing, we craft stunning,
                  high-performing Shopify stores that don’t just look good but
                  sell like crazy!
                </p>
                <br />
                <p>
                  From sleek designs to seamless shopping experiences, we help
                  brands launch, scale, and thrive in the Ecommerce space.
                  Whether you're starting fresh or revamping your store, we've
                  got you covered!
                </p>
                <p>
                  <strong>
                    Want to turn visitors into loyal customers? Let’s make it
                    happen!
                  </strong>
                </p>
                <div className="btn-area">
                  <a href="/contact-us" className="header-btn1">
                    Contact Now
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="about-auhtor-images">
                <img src={elements6} alt="" className="elements5 keyframe5" />
                <motion.figure
                  initial={{ clipPath: "inset(0% 100% 0% 0%)" }} // Image fully hidden (right side se)
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // Dheere dheere left to right reveal
                  transition={{ duration: 2, ease: "easeInOut" }} // Slow transition
                  className="image-anime"
                >

                  <img
                    src={Shopify_img3}
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

      {/* Works Section */}
      <div className="works-inner-section-area services-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="about-all-images-area">
                <img src={star1_img} alt="" class="elements12 keyframe5" />
                <img src={star2_img} alt="" class="elements13 keyframe5" />
                <div class="row">
                  <div class="col-lg-12">
                    <div class="img1 ">
                      <div class="space100"></div>
                      <img src={Shopify_img1} alt="" />
                      <div class="space100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="works-header-area heading2 specing2">
                <h2>Shopify, Built Your Way</h2>
                <p>
                  At Anah Marketing, we create high-performing Shopify stores designed to stand out and sell. From custom designs to conversion-optimized layouts, we ensure a seamless shopping experience. Our expertise in payment integrations, mobile-first designs, and SEO helps you rank higher and drive organic traffic. Plus, with hassle-free Shopify migration, switching platforms is smooth and downtime-free. Your brand deserves more than just a store—it deserves a Shopify powerhouse!
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center order-2">
            <div className="col-lg-8">
              <div className="works-header-area heading2">
                <h2>Shopify Design & Performance Optimization</h2>
                <p>
                  A high-performing Shopify store is more than just good design—it’s about speed, usability and seamless shopping experiences. We optimize every element, from fast-loading pages to intuitive navigation, ensuring your store keeps visitors engaged and drives conversions. With SEO best practices, mobile responsiveness and smooth integrations, we help your Shopify store rank higher, attract more customers and maximize sales.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-all-images-area">
                <img src={star1_img} alt="" class="elements12 keyframe5" />
                <img src={star2_img} alt="" class="elements13 keyframe5" />
                <div class="row">
                  <div class="col-lg-12">
                    <div class="img1 ">
                      <div class="space100"></div>
                      <img src={Shopify_img2} alt="" />
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

export default ShopifyDevelopment;
