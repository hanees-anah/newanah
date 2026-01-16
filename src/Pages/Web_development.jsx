
import React, { useState, useRef, useEffect } from "react";

import bg1 from "../assets/images/pages-bg1.png"
import cistom_development from "../assets/images/custom-development-img.png"
import { Helmet } from "react-helmet";
import preloader from "../assets/images/preloader-img.png";
import star2 from "../assets/images/star2.png";
import metaAdsImg1 from "../assets/images/website-development1.png";
import metaAdsImg2 from "../assets/images/website-development2.png";
import star1 from "../assets/images/star1.png";
import elements6 from "../assets/images/elements6.png";
import Partner from "../component/Partner";
import metaAds1 from "../assets/images/meta-ads-1.png";
import metaAds2 from "../assets/images/meta-ads-2.png";
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
import About_Partner from "../component/About_partner";
import { motion } from "framer-motion";
import cta_bg1 from "../assets/images/cta-bg1.png"
import cta_bg2 from "../assets/images/cta-bg2.png"
import online_shoppings from "../assets/images/online-shopping.png"
import styleunionLogo from '../assets/images/styleunion_logo.png';
import chasehaulLogo from '../assets/images/chasehaul_logo.png';
import gritproLogo from '../assets/images/gritpro_logo.png';
import guniaaLogo from '../assets/images/guniaa-logo.png';
import hallstattlifeLogo from '../assets/images/hallstattlife-logo.png';
import bysonnutritionLogo from '../assets/images/bysonnutrition-logo.png';
import magiaLogo from '../assets/images/magia_logo.png';
import womanCartLogo from '../assets/images/woman-cart-logo.png';
import teakwoodLogo from '../assets/images/teakwood-logo-img.png';
import juniperLogo from '../assets/images/juniper-logo.png';
import elLogo from '../assets/images/el-logoo.png';
import autumnlaneLogo from '../assets/images/autumnlane_logo.png';
import spatikaclothingLogo from '../assets/images/spatikaclothing_logo.png';
import dishapublicationLogo from '../assets/images/dishapublication_logo.png';
import fabpersonaLogo from '../assets/images/fabpersona_logo.png';
import baidLogo from '../assets/images/baid_logo.png';
import siddhayuLogo from '../assets/images/siddhayu_logo.png';
import zariLogo from '../assets/images/zari_logo.png';
import ruchiraLogo from '../assets/images/ruchira.png';
import holythreadLogo from '../assets/images/holythread_logo.png';
import leheriyaLogo from '../assets/images/leheriya_logo.png';
import fashiondwarLogo from '../assets/images/fashiondwar-logo.png';
import lavanyaLogo from '../assets/images/lavanya-logo.png';
import parenteyeLogo from '../assets/images/parenteye-logoo.png';
import jagoIndiaJagoLogo from '../assets/images/jago-india-jago-logo.png';
import Divi_logo from "../assets/images/divi-logoo.png"
import ethnicity from "../assets/images/ethnicity-logo.png";
import black_arrow from "../assets/images/arrow-icon-new.png"
import website_redesign_icon from "../assets/images/website-redesign-icon.png";
import app1 from "../assets/images/igs-design.webp"
import app2 from "../assets/images/aim-design.webp"
import user_experience from "../assets/images/user-experience-icon.png"
import content_icon from "../assets/images/content-icon.png"
import cavalry from "../assets/images/7cavalry-logo.png"
import swtantra from "../assets/images/swtantra-logo.png"
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import new1 from "../assets/images/new1.webp";



const categories = [
    { value: "", label: "Select Category" },
    { value: "Website Development", label: "Website Development" },
    { value: "Website Redesign", label: "Website Redesign" },
    { value: "Shopify App Development", label: "Shopify App Development" },
    { value: "Speed Optimization", label: "Speed Optimization" },
    { value: "Website Migration", label: "Website Migration" },
    { value: "Website Maintenance & Support", label: "Website Maintenance & Support" },
];

function CustomDropdown({ formData, setFormData, required }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (value) => {
        setFormData(prev => ({ ...prev, category: value }));
        setIsOpen(false);
    };

    return (
        <div
            ref={dropdownRef}
            className="relative w-full"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Escape") setIsOpen(false);
            }}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            role="combobox"
            aria-controls="category-list"
            aria-label="Select Category"
        >

            <button
                type="button"
                className="form-control w-full text-left py-2 border border-[#E6E6E6] shadow-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {categories.find(c => c.value === formData.category)?.label || "Select Category"}
            </button>

            {isOpen && (
                <ul
                    id="category-list"
                    role="listbox"
                    className="absolute z-10 w-full mt-1 max-h-60 overflow-auto border border-[#E6E6E6] bg-white shadow-lg"
                >
                    {categories.map(({ value, label }) => (
                        <li
                            key={value}
                            role="option"
                            aria-selected={formData.category === value}
                            className={`cursor-pointer px-3 py-2 hover:bg-blue-100 ${formData.category === value ? "bg-blue-200 font-semibold" : ""
                                }`}
                            onClick={() => handleSelect(value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handleSelect(value);
                                }
                            }}
                            tabIndex={0}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}


const Web_development = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        // Simulate load or wait for all images/resources to load
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 300); // Optional delay for smooth transition
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);



    const styles = {
        container: {
            position: "relative",
            minHeight: "100vh",
            overflow: "hidden",
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "black",
            paddingBottom: "4rem",
            display: "flex",
            flexDirection: "row",
        },

        backgroundCircle1: {
            position: "absolute",
            top: 0,
            right: 0,
            width: "70vw",
            height: "70vw",
            borderRadius: "50%",
            transform: "translate(25%, -25%)",
            zIndex: 0,
            pointerEvents: "none",

        },
        backgroundCircle2: {
            position: "absolute",
            top: 0,
            left: "50%",
            width: "50vw",
            height: "100vh",
            borderTopLeftRadius: "100%",
            zIndex: 0,
            pointerEvents: "none",

        },
        heroContent: {
            display: "flex",
            marginTop: "150px",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "5rem 1rem 3rem",
            position: "relative",
            zIndex: 10,
            width: "50%",
        },

        heroHeading2: {
            fontSize: "3rem",
            fontWeight: "700",
        },
        heroParagraph: {
            maxWidth: "60ch",
            fontSize: "1.125rem",
            marginTop: "2.5rem",
            padding: "0 1rem",
        },
        contactFormContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",

        },
        shopifyForm: {
            boxShadow: 'none',
            outline: 'none',
            borderColor: '#E6E6E6',
            padding: "12px"
        }
    };

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company: '',
        city: '',
        category: '',  // 👈 Yeh hona chahiye
        message: ''
    });
    const [showPopup, setShowPopup] = useState(false);
    // const handleChange = (e) => {


    //   const { name, value, type } = e.target;

    //   setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // console.log("======>",e.target);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault("formDataformData", formData);
        // console.log("formDataformData", formData)

        // 👇 Custom validation for category
        if (!formData.category) {
            alert("Please select a category");
            return;
        }

        setLoading(true);

        try {

            const response = await axios.post("https://anahmarketing.com:5000/send-email", formData);

            // const response = await axios.post("http://localhost:5000/send-email", formData);

            setShowPopup(true);

            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                message: "",
                city: "",
                company: "",
                category: "",

            });
        } catch (error) {
            console.error("Failed to send message", error);
        }
        finally {
            setLoading(false);
        }
    };


    return (
        <>
            <Helmet>
                <title>Best Shopify Website Development & Management Company in India</title>
                <meta
                    name="description"
                    content="Anah Marketing provides Shopify development & management services to build high-performing eCommerce stores with custom designs and seamless integrations."
                />
                <link rel="canonical" href="https://anahmarketing.com/shopify-development" />

            </Helmet>


            {isLoading && (
                <div className="preloader">
                    <div className="loading-container">
                        <div className="loading"></div>
                        <div id="loading-icon"><img src={preloader} alt="" /></div>
                    </div>
                </div>
            )}



            <section className="shopify-top-banner-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="contant-part">
                                <div>
                                    <img style={styles.Shopify} src={cistom_development} alt="Marketing" />
                                    <h1>
                                        Web Development & Management Services That Grow Your Business
                                    </h1>
                                    <p>
                                        We design, develop, and manage high-performing websites that help your business stand out online. As a leading provider of e-commerce and custom website solutions, we handle everything from tailored website development to ongoing maintenance, updates, and security. Our websites are fast, secure, mobile-friendly, and aligned with your business goals, so you can focus on growth while we manage the technology.                              </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="form-part">
                                <div className="contact-form-area shadow-none" style={{ padding: "25px" }}>
                                    <h4 className="text-center mb-4 text-black">Get In Touch</h4>

                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            <div className="col-lg-6">
                                                <input
                                                    type="text"
                                                    style={styles.shopifyForm}
                                                    name="first_name"
                                                    placeholder="First Name"
                                                    value={formData.first_name}
                                                    onChange={handleChange}
                                                    className="form-control  "
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    style={styles.shopifyForm}

                                                    type="text"
                                                    name="last_name"
                                                    placeholder="Last Name"
                                                    value={formData.last_name}
                                                    onChange={handleChange}
                                                    className="form-control  "
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    style={styles.shopifyForm}

                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="form-control  "
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    style={styles.shopifyForm}

                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="form-control  "
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    style={styles.shopifyForm}

                                                    type="text"
                                                    name="company"
                                                    placeholder="Company Name"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="form-control  "
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    style={styles.shopifyForm}

                                                    type="text"
                                                    name="city"
                                                    placeholder="City"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    className="form-control  "
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-12 text-center">

                                                <CustomDropdown formData={formData} setFormData={setFormData} />


                                            </div>
                                            <div className="col-lg-12">
                                                <textarea
                                                    style={styles.shopifyForm}

                                                    name="message"
                                                    placeholder="Your Message"
                                                    required
                                                    className="form-control"
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            <div className="col-lg-12 text-center">

                                                <button
                                                    type="submit"
                                                    className="lnk header-btn1"
                                                    disabled={loading} // submit hote time disable

                                                >
                                                    {loading ? "Submitting..." : "Submit"}{" "}
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


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
                                {/* <h2 className="text-anime-style-2">Data-Driven Meta Ads Strategy</h2> */}
                                <h2 className="text-anime-style-2">Professional Website Development Company for Custom Web Solutions</h2>
                                <p className="mb-4" data-aos="fade-left" data-aos-duration="1000">
                                    A website is more than just an online presence—it’s the foundation of your brand’s digital success. We design and develop high-performing websites that are not only visually stunning but also strategically built to drive conversions. With user-centric design, seamless functionality and optimized performance, we ensure your website engages visitors and turns them into loyal customers. Elevate your brand with a website that works as hard as you do.
                                </p>
                                <div className="btn-area" data-aos="fade-left" data-aos-duration="1200">
                                    <a href="/contact-us" className="header-btn1">
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


            <About_Partner />



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
                                    Speed, responsiveness and seamless functionality—these are the pillars of a high-performing website. We build mobile-friendly, lightning-fast websites that deliver an exceptional experience across all devices. With proper code, structured layouts and cutting-edge technology, we ensure your website not only looks great but also performs flawlessly, keeping users engaged and driving meaningful actions.
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


            <section className="even-better-section cta-section-area our-apps">
                <img alt="" class="cta-bg1 aniamtion-key-2" src={cta_bg1} />
                <img alt="" class="cta-bg2 aniamtion-key-1" src={cta_bg2} />
                {/* <img alt="" class="cta-bg2 aniamtion-key-1" src={cta_bg2} /> */}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="text-center">
                            <div className="content-part">
                                <h2 class="text-anime-style-2">Custom-Built Shopify Apps for Your Needs</h2>
                                <p class="text-white px-10">Along with our ready-to-use solutions, we also develop tailor-made Shopify apps to match your specific business requirements, helping you streamline operations, enhance customer experience, and grow your sales.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-6">
                            <div className="boxs-card">
                                <div class="icons mb-3">
                                    <img alt="" class="img-fluid" src={app1} />
                                    <h3>IGS DesignX</h3>
                                </div>
                                <p>IGS DesignX allows you to sell personalized products like T-shirts, mugs, posters, phone cases, and more without managing stock or production costs. Simply upload your designs, select items from the app’s catalog, and publish them to your Shopify store. Orders are fulfilled by our printing partner and shipped directly to your customers, all under your brand name.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="boxs-card">
                                <div class="icons mb-3">
                                    <img alt="" class="img-fluid" src={app2} />
                                    <h3>Advance Intelligence Inventory Management (AIIM)</h3>
                                </div>
                                <p>AIIM makes inventory management effortless. Search, filter, and sort product variants by stock levels. Update sales channels for products or collections individually or in bulk. Automatically arrange products based on stock availability and send back-in-stock notifications to customers. With AIIM, you’ll always have complete control over your store’s inventory.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="here-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 m-auto">
                            <div class="service2-header heading2 text-center">
                                <h2 class="text-anime-style-3">Here’s What We Do for You</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box-card">
                                <div className="icon">💼</div>
                                <h3>Complete Website Setup & Launch</h3>
                                <p>From initial concept to a live website, we handle everything, including design, development, and deployment.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-card">
                                <div className="icon">💡</div>
                                <h3>Custom Design Tailored to Your Brand</h3>
                                <p>We don’t use cookie-cutter templates. Your website will reflect your brand’s personality, values, and voice; clean, modern, and conversion-focused..</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-card">
                                <div className="icon">🖥️</div>
                                <h3>Mobile-Responsive & SEO-Friendly</h3>
                                <p>We build sites that look great on all devices and are structured to rank well in search engines from day one.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-card">
                                <div className="icon">⚛️</div>
                                <h3>Optimized for Growth</h3>
                                <p>We integrate tools and systems that support marketing, sales, analytics, and future scalability, ensuring your website evolves with your busines</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-card">
                                <div className="icon">📈</div>
                                <h3>Conversion-Driven Strategy & UX</h3>
                                <p>Every element of your site is designed with user experience and business goals in mind—guiding visitors toward action, increasing engagement, and maximizing conversions.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-card">
                                <div className="icon">🛠️</div>
                                <h3>Ongoing Maintenance & Support</h3>
                                <p>After launch, we provide proactive updates, performance monitoring, and technical support to keep your site fast, secure, and effective</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="even-better-section cta-section-area">
                <img alt="" class="cta-bg1 aniamtion-key-2" src={cta_bg1} />
                <img alt="" class="cta-bg2 aniamtion-key-1" src={cta_bg2} />
                <img alt="" class="cta-bg2 aniamtion-key-1" src={cta_bg2} />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="content-part">
                                <h2 class="text-anime-style-2">Already have a website?  &amp; Let’s Make Your Website Even Better</h2>
                                <p>If you have a website but it’s not delivering the results you expect, we’ll help you reimagine and restore it to become more engaging, impactful, and conversion-driven.</p>
                                <p>Here’s How We Help Improve and Elevate Your Site:</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-part">
                                <img alt="" class="img-fluid" src={online_shoppings} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="boxs-card">
                                <div class="icons mb-3">
                                    <img alt="" class="img-fluid" src={website_redesign_icon} />
                                </div>
                                <h3>Website Redesign & Enhancements</h3>
                                <p>We analyze your current design and user flow, then create a refreshed, more intuitive layout that keeps users engaged and encourages action.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="boxs-card">
                                <div class="icons mb-3">
                                    <img alt="" class="img-fluid" src={user_experience} />
                                </div>
                                <h3>Improved User Experience (UX)</h3>
                                <p>We enhance navigation, mobile responsiveness, and loading speed, giving your visitors a smoother and more satisfying experience</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="boxs-card">
                                <div class="icons mb-3">
                                    <img alt="" class="img-fluid" src={content_icon} />
                                </div>
                                <h3>Content & Visual Strategy</h3>
                                <p>From impactful visuals to persuasive messaging, we upgrade the way your brand communicates to build trust and drive conversions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            {/* new--------------- */}





            <section class="shopify-section mt-5">
                <div class="container">

                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <div class="service2-header heading2">
                                <h2 class="text-anime-style-3">Benefits of Choosing Anah Marketing</h2>
                            </div>
                            {/* <h2 className="mb-4 service2-header heading2">Benefits of Choosing Anah Marketing</h2> */}
                            <h4 className="mb-5">Working with us is more than just launching a Shopify store - it's about helping your brand succeed long-term:</h4>

                            <div class="shopify-list">
                                <ul>
                                    <li>
                                        <div class="shopify-content-part">
                                            <div class="left-arrow"><img src={black_arrow} /></div>
                                            <div class="text-item">
                                                <h3>Custom-Tailored Solutions</h3>
                                                <p>We take time to understand your business and create strategies that fit your unique needs and goals.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="shopify-content-part">
                                            <div class="left-arrow"><img src={black_arrow} /></div>
                                            <div class="text-item">
                                                <h3>Proven Expertise</h3>
                                                <p>Our experience working with D2C brands helps us deliver results that work.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="shopify-content-part">
                                            <div class="left-arrow"><img src={black_arrow} /></div>
                                            <div class="text-item">
                                                <h3>Ongoing Support</h3>
                                                <p>From the initial setup to ongoing optimization, we’re here to help you grow and succeed at every stage.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={new1} alt="Why Choose Us" />

                        </div>
                    </div>
                </div>
            </section>




            <section className="portfolio-section-page portfolio-sec">
                <div className="container">
                    <div className="service2-header heading2 text-center">
                        <h2 className="text-anime-style-3">We are home to 100+ brands, including</h2>
                        {/* <p data-aos="fade-up" data-aos-duration="1000">Our portfolio reflects a journey of creativity and innovation. Every project is a testament to scaling brands through cutting-edge marketing solutions.</p> */}
                    </div>
                    <div className="portfolio_bottom_part">
                        <ul className="nav nav-tabs  d-lg-flex" id="myTab" role="tablist">

                            {/* <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                  Development
                </button>
              </li> */}

                        </ul>
                        <div className="tab-content accordion" id="myTabContent">
                            <div className="tab-pane fade show active accordion-item" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" >
                                <div id="collapseOne" className="accordion-collapse collapse show d-lg-block" aria-labelledby="headingOne" data-bs-parent="#myTabContent">
                                    <div className="accordion-body">
                                        <div className="row text-align-center justify-content-center">
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={styleunionLogo} alt="Style Union" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={chasehaulLogo} alt="Chase Haul" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={ethnicity} alt="Bysonnutrition" />

                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={gritproLogo} alt="Grit Pro" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={guniaaLogo} alt="Guniaa" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={hallstattlifeLogo} alt="Hallstatt Life" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={bysonnutritionLogo} alt="Byson Nutrition" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={magiaLogo} alt="Magia" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={womanCartLogo} alt="Woman Cart" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={teakwoodLogo} alt="Teakwood" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={juniperLogo} alt="Juniper" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={elLogo} alt="EL" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={autumnlaneLogo} alt="Autumn Lane" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={spatikaclothingLogo} alt="Spatika Clothing" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={dishapublicationLogo} alt="Disha Publication" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={fabpersonaLogo} alt="Fab Persona" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={baidLogo} alt="Baid" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={siddhayuLogo} alt="Siddhayu" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={zariLogo} alt="Zari" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={ruchiraLogo} alt="Ruchira" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={holythreadLogo} alt="Holy Thread" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={leheriyaLogo} alt="Leheriya" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={fashiondwarLogo} alt="Fashion Dwar" />
                                                </div>
                                            </div>
                                            {/* <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={lavanyaLogo} alt="Lavanya" />
                        </div>
                      </div> */}
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={parenteyeLogo} alt="Parent Eye" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={jagoIndiaJagoLogo} alt="Jago India Jago" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={Divi_logo} alt="Styleunion" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={swtantra} alt="Styleunion" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-4">
                                                <div className="logo_src">
                                                    <img src={cavalry} alt="Styleunion" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


            <div class="cta-section-area Amazing-section">
                <img alt="" class="cta-bg1 aniamtion-key-2" src={cta_bg1} />
                <img alt="" class="cta-bg2 aniamtion-key-1" src={cta_bg2} />
                <img alt="" class="cta-bg2 aniamtion-key-1" src={cta_bg2} />
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 m-auto">
                            <div class="cta-header-area text-center sp4 heading2">
                                <h2 class="text-anime-style-3">Let’s Build Something Amazing Together</h2>
                                <p>Whether you need a brand-new website or a major upgrade to your existing one, Anah Marketing and Innovations is ready to help you stand out, convert more visitors, and grow with confidence.</p>
                                <p>Let’s talk about how we can elevate your digital presence today and into the future.</p>
                                <div class="btn-area text-center"><a href="#" class="header-btn1">Let's Talk <span><i class="fa-solid fa-arrow-right"></i></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />


        </>
    );
};

export default Web_development;
