import React from "react";
import shopifyLogo from "../assets/images/inner-header.png";
import star2 from "../assets/images/star2.png";
import star1 from "../assets/images/star1.png";
import elements6 from "../assets/images/elements6.png";
import seo1 from "../assets/images/seo1.png";
import seo2 from "../assets/images/seo2.png";
import seo3 from "../assets/images/seo3.png";
import seo4 from "../assets/images/seo4.png";
import shopifyImg from "../assets/images/Shopify_Logo.png";
import pragmaImg from "../assets/images/pragma_logo.png";
import razorpayImg from "../assets/images/razorpay-img.png";
import whatmoreImg from "../assets/images/Whatmore-img.png";
import engatiImg from "../assets/images/engati-img.png";
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
import About_Partner from "../component/About_partner";
import { motion } from "framer-motion";
import  { useEffect ,useState} from "react";
import preloader from "../assets/images/preloader-img.png";
import { Helmet } from "react-helmet";



function SearchEngineOptimisation() {
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
                <title>Top SEO Company in India | Best SEO Agency for Organic Growth</title>
                <meta
                    name="description"
                    content="Looking for the best SEO company in India? Anah Marketing offers expert SEO services to help your business rank higher and grow online."
                    />
            </Helmet>

      {/* HERO AREA */}
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
          backgroundImage: `url(${shopifyLogo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={star2} alt="Star Decoration" className="star2 keyframe5" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-inner-header heading9 text-center">
                <h1>Search Engine Optimisation</h1>
                <a href="/">Home</a> <i className="fa-solid fa-angle-right"></i>
                <span> Services </span>
                <i className="fa-solid fa-angle-right"></i>
                <span>Search Engine Optimisation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
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
                                        src={seo1}
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
                <h2 className="text-anime-style-2">
                  Comprehensive SEO & Digital Marketing Solutions
                </h2>
                <p data-aos="fade-left" data-aos-duration="1000">
                At Anah Marketing & Innovation, we go beyond basic SEO—we build comprehensive digital marketing strategies that drive measurable growth. With our expertise, we ensure your brand ranks higher, attract quality traffic and converts more efficiently. Our approach blends data-driven insights with innovative techniques to maximize online visibility and business impact. From advanced SEO strategies to performance-driven marketing, we create tailored solutions that align with your business objectives, helping you stay ahead in the digital landscape.
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
                <img src={elements6} alt="SEO Insights" className="elements5 keyframe5" />
                <motion.figure
                                    initial={{ clipPath: "inset(0% 100% 0% 0%)" }} // Image fully hidden (right side se)
                                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // Dheere dheere left to right reveal
                                    transition={{ duration: 2, ease: "easeInOut" }} // Slow transition
                                    className="image-anime"
                                >
                                
                                    <img
                                        src={seo2}
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


      {/* WORK SECTION */}
      <div className="works-inner-section-area services-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="about-all-images-area">
                <img src={star2} alt="Star Element" className="elements12 keyframe5" />
                <img src={star1} alt="Star Element" className="elements13 keyframe5" />
                <div className="row">
                  <div className="col-lg-12">
                    <div className="img1">
                      <div className="space100"></div>
                      <img src={seo3} alt="Keyword Research" />
                      <div className="space100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="works-header-area heading2 specing2">
                <h2>SEO Service: Keyword Research & Strategy</h2>
                <p>
                Successful SEO starts with understanding what your audience is searching for. Our keyword research and strategy process identify high-intent search terms that connect you with the right audiences at the right time. We analyse search trends, study your competitors and uncover the keywords that will drive targeted & organic traffic to your site. By aligning your content with user intent, we help you gain a competitive edge, boost visibility and turn searches into sales.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center order-2">
            <div className="col-lg-8">
              <div className="works-header-area heading2">
                <h2>SEO Service: Technical SEO</h2>
                <p>
                A strong technical foundation is essential for SEO success. We optimize your website’s structure to ensure faster load times, seamless mobile responsiveness, and efficient search engine crawling. From fixing indexing issues to enhancing site speed, we implement technical improvements that boost your search rankings, user experience and overall site performance. With our technical SEO expertise, we make sure your website is not just discoverable but also built for long-term success.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-all-images-area">
                <img src={star2} alt="Star Element" className="elements12 keyframe5" />
                <img src={star1} alt="Star Element" className="elements13 keyframe5" />
                <div className="row">
                  <div className="col-lg-12">
                    <div className="img1">
                      <div className="space100"></div>
                      <img src={seo4} alt="Technical SEO" />
                      <div className="space100"></div>
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

export default SearchEngineOptimisation;
