import React, { useState, useEffect, useRef } from 'react';
import bg1 from "../assets/images/pages-bg1.png"
import black_arrow from "../assets/images/arrow-icon-new.png"
import new1 from "../assets/images/new1.webp";
import preloader from "../assets/images/preloader-img.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import Shopify_Logo from "../assets/images/Shopify_Logo-pages.png"
// import pragma_logo from "../assets/images/pragma_logo.png"
// import razorpay from "../assets/images/razorpay-img.png"
// import Whatmore from "../assets/images/Whatmore-img.png"
// import engati from "../assets/images/engati-img.png"




import Footer from '../component/Footer';
import Header from '../component/Header';
import About_Partner from '../component/About_partner';

const styles = {
    container: {
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'black',
        paddingBottom: '4rem',
        display: 'flex',
        flexDirection: 'row',
    },
    backgroundCircle1: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '70vw',
        height: '70vw',
        borderRadius: '50%',
        transform: 'translate(25%, -25%)',
        zIndex: 0,
        pointerEvents: 'none',
    },
    backgroundCircle2: {
        position: 'absolute',
        top: 0,
        left: '50%',
        width: '50vw',
        height: '100vh',
        borderTopLeftRadius: '100%',
        zIndex: 0,
        pointerEvents: 'none',
    },
    heroContent: {
        display: 'flex',
        marginTop: '150px',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '5rem 1rem 3rem',
        position: 'relative',
        zIndex: 10,
        width: '50%',
    },
    heroHeading2: {
        fontSize: '3rem',
        fontWeight: '700',
    },
    heroParagraph: {
        maxWidth: '60ch',
        fontSize: '1.125rem',
        marginTop: '2.5rem',
        padding: '0 1rem',
    },
    contactFormContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
    },
    shopifyForm: {
        boxShadow: 'none',
        outline: 'none',
        borderColor: '#E6E6E6',
        padding: '12px',
    },
};

// const images = [
//     Shopify_Logo,
//     pragma_logo,
//     razorpay,
//     Whatmore,
//     engati,
//     Shopify_Logo, // Repeating to create an infinite loop effect
//     pragma_logo,
//     razorpay,
//     Whatmore,
//     engati,
// ];

const ParentEye = () => {


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



    // ----------------------form submit handler------------------------

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log("formDataformData", formData);

        try {
            const response = await axios.post(
                "https://anahmarketing.com:5000/send-email",

                //  "http://localhost:5000/send-email",


                JSON.stringify(formData), // Convert to JSON string
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            setShowPopup(true);

            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                message: "",
                city: "",
                company: "",
                formType: "contact",
            });

            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
        } catch (error) {
            console.error("Failed to send message", error);
        }
        finally {
            setLoading(false);  // <-- yaha pe lagana hai
        }
    };


    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
        city: "",
        companyname: "",
        formType: "contact",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

// -----------------------end of form submit handler------------------------

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

             

            <main className="hero hero-top" style={{ backgroundImage: `url(${bg1})` }}>
                <section className="shopify-top-banner-sec" style={{ padding: 0 }}>
                    <div className="container">
                        <div className="col-md-5">
                            <div className=" contant-part">
                                <div>
                                    <img style={styles.Shopify} src="	https://www.parenteye.in/frontend/img/logo.png" alt="Marketing" />
                                    <h1>ParentEye—India’s Smart School ERP for Seamless Parent-Teacher Communication</h1>
                                    <p>
                                        Easily monitor student progress, attendance, and assignments while staying instantly connected with parents—everything in one powerful education management platform.
                                    </p>

                                </div>
                                <div className="btnn-area mt-3 ">
                                    <a href="#contactFormSection" className="header-btn1">
                                        Book a Demo <span><i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="hero-image-container">
                            <img
                                src="https://www.parenteye.in/frontend/img/parent-eye-banner-1.png"
                                alt="eCommerce Ads on Laptop"
                                className="laptop-image"
                            />

                            {/* Floating Partner Cards */}


                        </div>
                    </div>
                </section>
            </main>

            <About_Partner />

            <section style={{ background: '#ffffff', paddingTop: '10px' }} class="here-section new-here">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 m-auto">
                            <div class="service2-header heading2 text-center mt-3">
                                <h2 class="text-anime-style-3">Core Features of ParentEye School ERP</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box-card">
                                <div className="icon">👤</div>
                                <h3>Student Profile</h3>
                                <p>Centralized student records including academics, attendance, achievements, and more.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-card">
                                <div className="icon">📅</div>
                                <h3>Student Attendance</h3>
                                <p> Track attendance effortlessly with automated updates and real-time reports.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-card">
                                <div className="icon">✍️</div>
                                <h3>Students Leave</h3>
                                <p>Enable students to apply for leave digitally with easy approvals and tracking. </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-card">
                                <div className="icon">💳</div>
                                <h3>Online Fee Payment </h3>
                                <p>Simplify fee collection with secure online payments and digital receipts.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-card">
                                <div className="icon">⏰</div>
                                <h3>Timetable</h3>
                                <p>Organize class schedules for students and staff with flexible adjustments. </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-card">
                                <div className="icon">🏫</div>
                                <h3>Classes </h3>
                                <p>Manage and organize all classes, subjects, and instructors with a streamlined class management system. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact-main-inner-area sp1 shopify-top-banner-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading2 contact-header">
                                <h5>Contact Us</h5>
                                <h2>Get in Touch with Anah Marketing – We Value Your Connection!</h2>
                                <p>
                                  Stay informed, engaged, and empowered with ParentEye—a smart school management ERP platform that strengthens collaboration between schools, teachers, parents, and students. Together, we build a smarter, more connected education future.
                                </p>
                                <div className="space50"></div>
                            </div>
                        </div>

                        <div class="col-lg-1"></div>
                        <div className="col-lg-5">
                            <div className="contact-form-area">
                                <h4>Get In Touch</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="input-area">
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    placeholder="First Name"
                                                    value={formData.first_name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="input-area">
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    placeholder="Last Name"
                                                    value={formData.last_name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="input-area">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="input-area">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input-area">
                                                <input
                                                    type="text"
                                                    name="company"
                                                    placeholder="Company name"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input-area">
                                                <input
                                                    type="text"
                                                    name="city"
                                                    placeholder="City"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>


                                        <div className="col-lg-12">
                                            <div className="input-area">
                                                <textarea
                                                    name="message"
                                                    placeholder="Your Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            {/* Hidden input field with value "Meta" */}
                                            <input
                                                type="hidden"
                                                name="contact_value"
                                                value="contact"
                                            />

                                            {/* Other visible fields */}
                                            {/* <input
    style={styles.shopifyForm}
    type="text"
    name="last_name"
    placeholder="Last Name"
    value={formData.last_name}
    onChange={handleChange}
    className="form-control"
    required
  /> */}
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="input-area">
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
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="shopify-section mt-5">
                <div class="container">

                    <div class="row align-items-center">

                        <div class="col-md-7">
                            <div class="service2-header heading2">
                                <h2 class="text-anime-style-3">What is ParentEye ERP Software?</h2>
                            </div>

                            <div class="shopify-list">
                                <ul>
                                    <li>
                                        <div class="shopify-content-part">
                                            <div class="left-arrow"><img src={black_arrow} /></div>
                                            <div class="text-item">
                                                <p>ParentEye is a smart school management system and CRM that strengthens school-parent relationships by offering features like real-time attendance updates, homework alerts, online fee payments, and exam results.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="shopify-content-part">
                                            <div class="left-arrow"><img src={black_arrow} /></div>
                                            <div class="text-item">
                                                <p>It simplifies administration with automated tracking, digital communication, and centralized data storage—acting as complete student monitoring software and a student information management system for modern schools.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="shopify-content-part">
                                            <div class="left-arrow"><img src={black_arrow} /></div>
                                            <div class="text-item">
                                                <p>Insightful reports and dashboards help administrators and teachers make informed decisions. With a mobile-friendly app, ParentEye keeps parents, students, and teachers connected—promoting transparency, engagement, and operational efficiency.</p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src="https://www.parenteye.in/frontend/img/What-is-ParentEye-ERP-Software.png" alt="Why Choose Us" />

                        </div>

                    </div>
                </div>
            </section>

            <section class="shopify-section mt-5">
                <div class="container">

                    <div class="row align-items-center">
                        <div className="col-md-5">
                            <img src="https://www.parenteye.in/frontend/img/online-learning-course-img.png" alt="Why Choose Us" />

                        </div>
                        <div class="col-md-7">
                            <div class="service2-header heading2">
                                <h2 class="text-anime-style-3">Why Choose ParentEye ERP Software?</h2>
                            </div>
                            {/* <h2 className="mb-4 service2-header heading2">Benefits of Choosing Anah Marketing</h2> */}
                            <h4 className="mb-5">ParentEye makes school management efficient and effortless. Here’s why it’s the trusted ERP and CRM for schools across India.</h4>

                            <div class="shopify-list">
                                <ul>
                                    <li>
                                        <div class="shopify-content-part">
                                            <div class="left-arrow"><img src={black_arrow} /></div>
                                            <div class="text-item">
                                                <h3>Task Reminders</h3>
                                                <p>Principals and school management receive reminders for assigned tasks, ensuring timely completion in order of priority through our school management software.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="shopify-content-part">
                                            <div class="left-arrow"><img src={black_arrow} /></div>
                                            <div class="text-item">
                                                <h3>Online Classes</h3>
                                                <p>Schedule online classes effortlessly through ParentEye, ensuring continuous learning from anywhere.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="shopify-content-part">
                                            <div class="left-arrow"><img src={black_arrow} /></div>
                                            <div class="text-item">
                                                <h3>School Diary</h3>
                                                <p>Stay updated with school activities, assignments, and announcements in real time.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="shopify-content-part">
                                            <div class="left-arrow"><img src={black_arrow} /></div>
                                            <div class="text-item">
                                                <h3>Real-Time Communication</h3>
                                                <p>Instantly message between teachers and parents for quick updates and suppor</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )

}

export default ParentEye;