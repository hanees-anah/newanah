import mobile_app_development1 from "../assets/images/mobile-app-development1.png";
import star1 from "../assets/images/star1.png";
import elemenrts6 from "../assets/images/elements6.png";
import mobile_app_development2 from "../assets/images/mobile-app-development2.png";
import star2 from "../assets/images/star2.png";
import mobile_app_development3 from "../assets/images/mobile-app-development3.png";
import mobile_app_development4 from "../assets/images/mobile-app-development4.png";
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
import innerHeader from "../assets/images/inner-header.png";
import About_Partner from "../component/About_partner";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import preloader from "../assets/images/preloader-img.png";
import { Helmet } from "react-helmet";


function MobileDevelopment() {
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
                <title>Best Web Design & Development Company in India</title>
                <meta
                    name="description"
                    content="Build Android & iOS apps with Anah Marketing, a top app development company in India—custom app design & development for secure, scalable solutions."
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
                    backgroundImage: `url(${innerHeader})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <img src="assets/images/star2.png" alt="" className="star2 keyframe5" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>Mobile App Development</h1>
                                <a href="/">Home</a> <i className="fa-solid fa-angle-right"></i> <span> Services </span> <i className="fa-solid fa-angle-right"></i> <span>Mobile App Development</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="about1-section-area pt-4 mt-4 sp6">
                <div className="container">
                    <div className="row align-items-center">
                        <div class="col-lg-4">
                            <div class="about-images">
                                <motion.figure
                                    initial={{ clipPath: "inset(0% 100% 0% 0%)" }} // Image fully hidden (right side se)
                                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // Dheere dheere left to right reveal
                                    transition={{ duration: 2, ease: "easeInOut" }} // Slow transition
                                    className="image-anime"
                                >
                                    <img
                                        src={mobile_app_development1}
                                        alt=""
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </motion.figure>
                                {/* <img src={mobile_app_development1} alt="" /> */}

                                <img src={star1} alt="" class="star1 keyframe5" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-content-area heading2">
                                <h2 className="text-anime-style-2">Innovative Mobile App Development Solutions</h2>
                                <p className="mb-4">Embrace your business with innovative mobile applications. Our team specializes in designing and developing high-performance apps that enhance user engagement and drive business growth. From concept to launch, we ensure your app stands out in the competitive digital landscape.</p>
                                <a href="/contact-us" className="header-btn1">
                                    Contact Now<span><i className="fa-solid fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="about-auhtor-images">
                                <img src={elemenrts6} alt="" class="elements5 keyframe5" />
                                <motion.figure
                                    initial={{ clipPath: "inset(0% 100% 0% 0%)" }} // Image fully hidden (right side se)
                                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // Dheere dheere left to right reveal
                                    transition={{ duration: 2, ease: "easeInOut" }} // Slow transition
                                    className="image-anime"
                                >
                                    <img
                                        src={mobile_app_development2}
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
                    {[
                        {
                            title: "Custom Strategy & Planning",
                            img: mobile_app_development3,
                            text: "We craft tailored mobile app strategies based on in-depth market research and user behavior analysis. Our approach ensures that your app aligns with your business goals, delivering a seamless user experience and maximizing performance."
                        },
                        {
                            title: "Performance Optimization & Security",
                            img: mobile_app_development4,
                            text: "We fine-tune your app to deliver exceptional speed, responsiveness and security. Our experts optimize code, improve backend efficiency and enhance security protocols to ensure a smooth, secure and scalable application."
                        }
                    ].map((section, index) => (
                        <div key={index} className="row align-items-center">
                            <div className={`col-lg-8 ${index % 2 === 1 ? "order-lg-2" : ""}`}>
                                <div className="works-header-area heading2">
                                    <h2>{section.title}</h2>
                                    <p>{section.text}</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="about-all-images-area">
                                    <img src={star2} alt="" className="elements12 keyframe5" />
                                    <img src={star1} alt="" className="elements13 keyframe5" />
                                    <div className="img1">
                                        <div className="space100"></div>
                                        <img src={section.img} alt={section.title} />
                                        <div className="space100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <Consultation />
            <Footer />
        </>
    );
}

export default MobileDevelopment;
