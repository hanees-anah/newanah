import React from "react";
import googleAds1 from "../assets/images/google-ads1.png";
import googleAds2 from "../assets/images/google-ads2.png";
import googleAds3 from "../assets/images/google-ads3.png";
import googleAds4 from "../assets/images/google-ads4.png";
import star1 from "../assets/images/star1.png";
import star2 from "../assets/images/star2.png";
import elements6 from "../assets/images/elements6.png";
import innerHeader from "../assets/images/inner-header.png";
import metaAdsImg1 from "../assets/images/meta-ads1.png";  // Ensure these exist
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
import About_Partner from "../component/About_partner";
import { motion } from "framer-motion";
import  { useEffect,useState } from "react";
import preloader from "../assets/images/preloader-img.png";







function Google() {
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
            {/* Header Section */}

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
                                <h1>Google Ads</h1>
                                <a href="/">Home</a>
                                <i className="fa-solid fa-angle-right"></i>
                                <span> Services </span>
                                <i className="fa-solid fa-angle-right"></i>
                                <span>Google Ads</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Ads Content Section */}
            <div className="about1-section-area pt-4 mt-4 sp6">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Image */}
                        <div className="col-lg-4">
                            <div className="about-images">
                            <motion.figure
                                    initial={{ clipPath: "inset(0% 100% 0% 0%)" }} // Image fully hidden (right side se)
                                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // Dheere dheere left to right reveal
                                    transition={{ duration: 2, ease: "easeInOut" }} // Slow transition
                                    className="image-anime"
                                >
                                
                                    <img
                                        src={googleAds1}
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

                        {/* Content Section */}
                        <div className="col-lg-5">
                            <div className="about-content-area heading2">
                                <h2 className="text-anime-style-2">High-Performance Google Ads Solutions</h2>
                                <p className="mb-4" data-aos="fade-left" data-aos-duration="1000">
                                    Maximize your brand’s reach with precision-targeted Google Ads. 
                                    We create data-driven campaigns that put your business in front of 
                                    the right audience at the right time. From search ads to display and 
                                    shopping campaigns, we design strategies that drive traffic, generate 
                                    leads, and boost conversions. With continuous optimization and performance 
                                    tracking, we ensure your ad spend delivers maximum ROI, fueling measurable business growth.
                                </p>
                                <div className="btn-area" data-aos="fade-left" data-aos-duration="1200">
                                    <a href="/contact" className="header-btn1">
                                        Contact Now<span><i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
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
                                        src={googleAds2}
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
         

            <About_Partner/>

            {/* Google Ads Strategy Section */}
            <div className="works-inner-section-area services-page">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="about-all-images-area">
                                <img src={star2} alt="Star" className="elements12 keyframe5" />
                                <img src={star1} alt="Star" className="elements13 keyframe5" />
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="img1">
                                        <div className="space100"></div>
                                            <img src={googleAds3} alt="Google Ads 3" />
                                            <div className="space100"></div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="works-header-area heading2 specing2">
                                <h2>Google Ads Strategy & Keyword Targeting</h2>
                                <p>Effective advertising starts with the right keywords. Our experts conduct in-depth keyword research to identify high-intent search terms that align with your business goals. By strategically structuring campaigns, we ensure your ads appear to users actively searching for your products or services. Smart bidding, audience segmentation, and competitor analysis help us refine your strategy for optimal reach and conversion potential.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center order-2 mt-5">
                        <div className="col-lg-8">
                            <div className="works-header-area heading2">
                                <h2>Campaign Optimization & Performance Scaling</h2>
                                <p>A great ad campaign isn’t just launched—it’s continuously optimized. We analyze performance data, refine targeting, and adjust bidding strategies to maximize results. Through A/B testing, audience insights, and conversion tracking, we fine-tune every aspect of your campaign to lower costs and increase efficiency, ensuring a scalable, high-performing Google Ads strategy that delivers consistent growth and profitability.</p>
                                <div className="space16"></div>

                                </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="about-all-images-area">
                                <img src={star2} alt="Star" className="elements12 keyframe5" />
                                <img src={star1} alt="Star" className="elements13 keyframe5" />
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="img1">
                                            <img src={googleAds4} alt="Google Ads 4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space100"></div>

                    </div>
                </div>
            </div>

            <Consultation/>
            <Footer/>
        </>
    );
}

export default Google;
