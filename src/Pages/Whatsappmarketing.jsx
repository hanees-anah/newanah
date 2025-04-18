import shopifyLogo from "../assets/images/inner-header.png";
import pragmaLogo from "../assets/images/pragma_logo.png";
import star2 from "../assets/images/star2.png";
import star1 from "../assets/images/star1.png";
import elements6 from "../assets/images/elements6.png";
import whatsappMarketing2 from "../assets/images/whatsapp-marketing2.png";
import whatsappMarketing1 from "../assets/images/whatsapp-marketing1.png";
import whatsappMarketing3 from "../assets/images/whatsapp-marketing3.png";
import whatsappMarketing4 from "../assets/images/whatsapp-marketing4.png";
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
import About_Partner from "../component/About_partner";
import { motion } from "framer-motion";
import  { useEffect ,useState} from "react";
import preloader from "../assets/images/preloader-img.png";



function WhatsappMarketing() {
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
            {/* Hero Section */}
            <div 
                className="about-header-area" 
                style={{ 
                    backgroundImage: `url(${shopifyLogo})`, 
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center" 
                }}
            >
                <img src={star2} alt="" className="star2 keyframe5" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>WhatsApp Marketing</h1>
                                <a href="/">Home</a> 
                                <i className="fa-solid fa-angle-right"></i>
                                <span> Services </span>
                                <i className="fa-solid fa-angle-right"></i> 
                                <span>WhatsApp Marketing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="about1-section-area mt-4 pt-4 sp6">
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
                                        src={whatsappMarketing1}
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
                                <h2 className="text-anime-style-3">Instant Engagement, Maximum Impact</h2>
                                <p>In a world where attention spans are shrinking, WhatsApp marketing ensures your message gets delivered, seen, and acted upon—instantly. We craft high-converting WhatsApp campaigns that drive real-time engagement, spark conversations, and boost conversions like never before.</p>
                                <div className="btn-area">
                                    <a href="/contact" className="header-btn1">
                                        Contact Now<span><i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="about-author-images">
                                <img src={elements6} alt="" className="elements5 keyframe5" />
                                <motion.figure
                                    initial={{ clipPath: "inset(0% 100% 0% 0%)" }} // Image fully hidden (right side se)
                                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // Dheere dheere left to right reveal
                                    transition={{ duration: 2, ease: "easeInOut" }} // Slow transition
                                    className="image-anime"
                                >
                                
                                    <img
                                        src={whatsappMarketing2}
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


            {/* Work Process Section */}
            <div className="works-inner-section-area services-page mt-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="about-all-images-area">
                                <img src={star2} alt="" className="elements12 keyframe5" />
                                <img src={star1} alt="" className="elements13 keyframe5" />
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="img1">
                                        <div class="space100"></div>
                                            <img src={whatsappMarketing3} alt="Marketing 3" />
                                            <div class="space100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="works-header-area heading2 specing2">
                                <h2>Hyper-Personalized Conversations at Scale</h2>
                                <p>The days of generic promotions are over. We help you build one-on-one connections at scale using automated yet personalized messaging, interactive chat flows, and segmented broadcasts. Whether it's promotions, customer support, or re-engagement, your audience gets the right message at the right time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center order-2">
                        <div className="col-lg-8">
                            <div className="works-header-area heading2">
                                <h2>Automate, Analyze, and Accelerate Growth</h2>
                                <p>Power up your WhatsApp marketing with automation that works around the clock. From smart chat flows to drip sequences and engagement tracking, we optimize every interaction to boost response rates and maximize ROI. No more guesswork—just strategic execution that drives long-term growth.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-all-images-area">
                                <img src={star2} alt="" className="elements12 keyframe5" />
                                <img src={star1} alt="" className="elements13 keyframe5" />
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="img1">
                                        <div class="space100"></div>
                                            <img src={whatsappMarketing4} alt="Marketing 4" />
                                            <div class="space100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </div>

            <Consultation/>
            <Footer/>
        </>
    );
}

export default WhatsappMarketing;
