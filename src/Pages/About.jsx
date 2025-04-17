import React, { useEffect, useState } from "react";
import star2 from "../assets/images/star2.png";
import inner_header from "../assets/images/inner-header.png";
import Partner from "../component/Partner";
import Service from "../component/Service";
import WorkArea from "../component/Work_area";
import Footer from "../component/footer";
import About_Partner from "../component/about_partner";
import Consultation from "../component/Consultation";
import about from "../assets/images/about-us-img2.png";
import star1 from "../assets/images/star1.png";
import elements6 from "../assets/images/elements6.png";
import about1 from "../assets/images/about-us-img1.png";
import our_value_img from "../assets/images/our-value-img.jpg";
import Shopify_img from "../assets/images/Shopify-img.png";
import { motion } from "framer-motion";
import preloader from "../assets/images/preloader-img.png";

function About() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 800); // Optional: small delay to smooth the transition
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
            {/* Preloader */}
            {isLoading && (
                <div className="preloader fade-out">
                    <div className="loading-container">
                        <div className="loading"></div>
                        <div id="loading-icon"><img src={preloader} alt="" /></div>
                    </div>
                </div>
            )}

            {/* Page Content */}
         
                    <div className="paginacontainer">
                        <div className="progress-wrap">
                            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                            </svg>
                        </div>
                    </div>

                    <div
                        className="about-header-area"
                        style={{
                            backgroundImage: `url(${inner_header})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        <img src={star2} alt="Star" className="star2 keyframe5" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 m-auto">
                                    <div className="about-inner-header heading9 text-center">
                                        <h1>About Us</h1>
                                        <a href="/">Home</a> <i className="fa-solid fa-angle-right"></i> <span>About Us</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about1-section-area pt-4 sp6">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="about-images">
                                        <motion.figure
                                            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                                            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                                            transition={{ duration: 2, ease: "easeInOut" }}
                                            className="image-anime"
                                        >
                                            <img src={about} alt="" style={{ width: "100%", height: "auto" }} />
                                        </motion.figure>
                                        <img src={star1} alt="" className="star1 keyframe5" />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="about-content-area heading2">
                                        <h2 className="text-anime-style-2">Welcome to Anah Marketing & Innovations</h2>
                                        <p className="mb-4" data-aos="fade-left" data-aos-duration="1000">
                                            At Anah Marketing & Innovations, we don’t just market brands—we create data-driven growth strategies that drive measurable success.
                                        </p>
                                        <p data-aos="fade-left" data-aos-duration="1000">
                                            With expertise in meta-ads, google ads, Social Media Marketing and Web Development, we help brands increase visibility, engage their audience and maximize revenue.
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
                                        <img src={elements6} alt="" className="elements5 keyframe5" />
                                        <motion.figure
                                            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                                            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                                            transition={{ duration: 2, ease: "easeInOut" }}
                                            className="image-anime"
                                        >
                                            <img src={about1} alt="" style={{ width: "100%", height: "auto" }} />
                                        </motion.figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space60"></div>
                    <About_Partner />
                    <WorkArea />

                    <div className="service2-section-area sp6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 m-auto">
                                    <div className="service2-header heading2 text-center">
                                        <img src={star2} alt="" className="star2 keyframe5" />
                                        <img src={star2} alt="" className="star3 keyframe5" />
                                        <h2 className="text-anime-style-3">
                                            Skyrocket Your ROAS with Data-Driven <br className="d-md-block d-none" />
                                            Performance Marketing!
                                        </h2>
                                        <p data-aos="fade-up" data-aos-duration="1000">
                                            We specialize in high-impact strategies that maximize visibility, <br className="d-md-block d-none" />
                                            engagement and conversions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-7">
                                    <div className="images-content-area" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="img1">
                                            <img src={our_value_img} alt="" />
                                        </div>
                                        <div className="content-area">
                                            <h5>Our Value</h5>
                                            <a href="/about" className="text text-anime-style-2">Turn Clicks into Conversions with Strategic Marketing</a>
                                            <p data-aos="fade-up" data-aos-duration="1000" className="text-white">
                                                Scaling a brand isn’t just about ads—it’s about structured content, audience insights and constant optimization.
                                            </p>
                                            <div className="btn-area" data-aos="fade-up" data-aos-duration="1200">
                                                <a href="/about" className="header-btn1">
                                                    View More <span><i className="fa-solid fa-arrow-right"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="arrow-area">
                                            <a href="/about"><i className="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="service-all-boxes">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-6">
                                                <div className="service2-auhtor-boxarea" data-aos="zoom-out" data-aos-duration="1000">
                                                    <div className="arrow">
                                                        <a href="/about"><i className="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                    <div className="content-area">
                                                        <h5>Our Mission</h5>
                                                        <a href="/about">We’re more than marketers—we’re your growth partners</a>
                                                        <p>No shortcuts, no guesswork. Just performance marketing that delivers tangible ROI.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="service2-auhtor2-boxarea" data-aos="zoom-out" data-aos-duration="1200">
                                                    <div className="arrow">
                                                        <a href="/about"><i className="fa-solid fa-arrow-right"></i></a>
                                                    </div>
                                                    <div className="content-area">
                                                        <h5>Our Vision</h5>
                                                        <a href="/about">Empowering brands to dominate the digital space</a>
                                                        <p>We envision a future where every brand has the tools and strategies to thrive online.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="shopify-section">
                        <div className="container">
                            <div className="heading2">
                                <h2 className="text-anime-style-2">Simplify the Experience, Beautify your Online Store and Multiply your Business using Shopify.</h2>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <div className="shopify-list">
                                        <ul>
                                            <li>
                                                <div className="shopify-content-part">
                                                    <div className="left-arrow"><img src="assets/images/black-arrow.svg" /></div>
                                                    <div className="text-item">
                                                        <h3>Custom Shopify Design & Development</h3>
                                                        <p>Tailor-made Shopify stores to convert visitors into customers.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="shopify-content-part">
                                                    <div className="left-arrow"><img src="assets/images/black-arrow.svg" /></div>
                                                    <div className="text-item">
                                                        <h3>Shopify Store Migration</h3>
                                                        <p>Seamless migration of your current store to Shopify with expert support.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="shopify-content-part">
                                                    <div className="left-arrow"><img src="assets/images/black-arrow.svg" /></div>
                                                    <div className="text-item">
                                                        <h3>Shopify Integration Services</h3>
                                                        <p>Integrate your store with 3rd-party apps for enhanced functionality.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={Shopify_img} className="img-responsive right-img" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <Consultation />
                    <Footer />
                </>
    );
}

export default About;
