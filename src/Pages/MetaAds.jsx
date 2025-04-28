import React from "react";
import star2 from "../assets/images/star2.png";
import inner_header from "../assets/images/inner-header.png";
import metaAdsImg1 from "../assets/images/meta-ads-img-1.png";
import metaAdsImg2 from "../assets/images/meta-ads-img-2.png";
import star1 from "../assets/images/star1.png";
import elements6 from "../assets/images/elements6.png";
import Partner from "../component/Partner";
import metaAds1 from "../assets/images/meta-ads-1.png";
import metaAds2 from "../assets/images/meta-ads-2.png";
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
import About_Partner from "../component/About_partner";
import { motion } from "framer-motion";
import  { useEffect,useState } from "react";
import preloader from "../assets/images/preloader-img.png";
import { Helmet } from "react-helmet";


function MetaAds() {
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
                <title>Meta Ads Services | Best Social Media Marketing Agency</title>
                <meta
                    name="description"
                    content="Grow your online presence with Anah Marketing's Meta ads! Partner with a top social media agency for effective, results-driven campaigns and real growth."
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
            {/* Header Section */}
            <div 
                className="about-header-area" 
                style={{
                    backgroundImage: `url(${inner_header})`, 
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
                                <h1>Meta Ads</h1>
                                <a href="/">Home</a> 
                                <i className="fa-solid fa-angle-right"></i>
                                <span> Services </span>
                                <i className="fa-solid fa-angle-right"></i> 
                                <span> Meta Ads</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

   


            {/* Meta Ads Content Section */}
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
                                        src={metaAdsImg1}
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

                        {/* Content Section */}
                        <div className="col-lg-5">
                            <div className="about-content-area heading2">
                                <h2 className="text-anime-style-2">Data-Driven Meta Ads Strategy</h2>
                                <p className="mb-4" data-aos="fade-left" data-aos-duration="1000">
                                    Meta Ads aren’t just about clicks—they’re about real business growth. 
                                    We craft data-driven ad strategies that cut through the noise and put 
                                    your brand in front of the right audience. With precise targeting, 
                                    compelling creatives, and continuous optimization, we ensure every 
                                    ad spend turns into tangible results. Whether it’s scaling sales, 
                                    boosting leads, or driving brand awareness, we make Meta Ads work for you.
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
                                <img src={elements6} alt="" className="elements5 keyframe5" />
                                <motion.figure
                                    initial={{ clipPath: "inset(0% 100% 0% 0%)" }} // Image fully hidden (right side se)
                                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // Dheere dheere left to right reveal
                                    transition={{ duration: 2, ease: "easeInOut" }} // Slow transition
                                    className="image-anime"
                                >
                                
                                    <img
                                        src={metaAdsImg2}
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


            {/* Working Area */}
            <div className="works-inner-section-area services-page">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="about-all-images-area">
                                <img src={star2} alt="" className="elements12 keyframe5" />
                                <img src={star1} alt="" className="elements13 keyframe5" />
                                <div className="row">
                                    <div className="col-12">
                                        <div className="img1">
                                            <div className="space100"></div>
                                            <img src={metaAds1} alt="Meta Ads Audience Research" />
                                            <div className="space100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="works-header-area heading2 specing2">
                                <h2>Audience Research & Targeting</h2>
                                <p>
                                    Reaching the right people at the right time is the key to success. 
                                    We leverage Meta’s advanced targeting tools to pinpoint high-intent audiences 
                                    based on their interests, behaviors, and demographics. Our strategy encompasses 
                                    a broad range of audience segments that increase engagement and maximize return on investment.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center order-2">
                        <div className="col-lg-8">
                            <div className="works-header-area heading2">
                                <h2>Ad Creatives & Performance Optimization</h2>
                                <p>
                                    A great ad doesn’t just capture attention—it drives action. 
                                    We craft visually compelling creatives and persuasive messaging that resonate with your audience. 
                                    By leveraging A/B testing, real-time analytics, and data-backed strategies, we continuously refine 
                                    campaigns for peak performance. We ensure your budget is allocated efficiently, focusing on high-impact 
                                    opportunities that deliver the best results ensuring higher conversions, reduced costs, and scalable business growth.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="about-all-images-area">
                                <img src={star2} alt="" className="elements12 keyframe5" />
                                <img src={star1} alt="" className="elements13 keyframe5" />
                                <div className="row">
                                    <div className="col-12">
                                        <div className="img1">
                                            <div className="space100"></div>
                                            <img src={metaAds2} alt="Meta Ads Performance Optimization" />
                                            <div className="space100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Consultation/>
            <Footer/>
        </>
    );
}

export default MetaAds;
