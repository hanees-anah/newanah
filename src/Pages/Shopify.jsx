import React from "react";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import new1 from "../assets/images/new1.webp";
import { ArrowRight } from "lucide-react";
import bg1 from "../assets/images/pages-bg1.png"
// import bg2 from "../assets/images/shopify-banner.jpg"
import Shopify_Logo from "../assets/images/Shopify_Logo.png"
import pragma_logo from "../assets/images/pragma_logo.png"
import razorpay from "../assets/images/razorpay-img.png"
import Whatmore from "../assets/images/Whatmore-img.png"
import engati from "../assets/images/engati-img.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import Footer from "../component/Footer";
// import OurPortfolis from "../component/Ourportfolis";




// ------------------------------------


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
import elLogo from '../assets/images/el-logo.png';
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
import parenteyeLogo from '../assets/images/parenteye-logo.png';
import jagoIndiaJagoLogo from '../assets/images/jago-india-jago-logo.png';
import Divi_logo from "../assets/images/divi-logo.png"
import ethnicity from "../assets/images/ethnicity-logo.png";
import black_arrow from "../assets/images/arrow-icon-new.png"


// -------------------------------------




const images = [
  Shopify_Logo,
  pragma_logo,
  razorpay,
  Whatmore,
  engati,
  Shopify_Logo, // Repeating to create an infinite loop effect
  pragma_logo,
  razorpay,
  Whatmore,
  engati,
];



const Shopify = () => {
  const styles = {
    container: {
      position: "relative",
      minHeight: "100vh",
      overflow: "hidden",
      backgroundImage: `url(${bg1})`,
      // backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat", // optional, but often needed
      color: "black",
      paddingBottom: "4rem",
      display: "flex",
      flexDirection: "row",
    },


    // .homepage1-body .header-area.homepage1
    //  {
    //     position: unset;
    // }

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
    heroHeading1: {
      fontSize: "7.25rem",
      fontWeight: "900",
    },
    heroHeading2: {
      fontSize: "4rem",
      fontWeight: "900",
      lineHeight: 1,
      marginTop: "1rem",
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
  };

  const styless = {
    section: {
      background: `url(${bg1})`,
      padding: '60px 140px',
      textAlign: 'center',
    },
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
      flexWrap: 'wrap',
      overflowX: 'auto',
      padding: '0 60px', // 👈 adds space on both sides
      boxSizing: 'border-box',
    },
    item: {
      width: '220px',
      flex: '0 0 auto',
      padding: '20px',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '10px',
    },
    icon: {
      fontSize: '40px',
      color: '#f44336',
      marginBottom: '20px',
    },
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginBottom: '10px',
    },
    description: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.5',
    },
    introTitle: {
      fontSize: '44px',
      fontWeight: 'bold',
      marginBottom: '40px',
    },
  };



  const features = [
    {
      icon: '💼',
      title: 'Complete Website Setup & Launch ',
      description:
        'From initial concept to a live website, we handle everything, including design, development, and deployment. ',
    },
    {

      icon: '💡',
      title: 'Custom Design Tailored to Your Brand ',
      description:
        'We don’t use cookie-cutter templates. Your website will reflect your brand’s personality, values, and voice; clean, modern, and conversion-focused.',
    },
    {
      icon: '🖥️',
      title: 'Mobile-Responsive & SEO-Friendly ',
      description:
        'We build sites that look great on all devices and are structured to rank well in search engines from day one. ',
    },
    {
      icon: '⚛️',
      title: 'Optimized for Growth ',
      description:
        'We integrate tools and systems that support marketing, sales, analytics, and future scalability, ensuring your website evolves with your busines',
    },
    {

      icon: '🛠️',
      title: 'Ongoing Maintenance & Support ',
      description:
        'After launch, we provide proactive updates, performance monitoring, and technical support to keep your site fast, secure, and effective',
    },
  ];


  return (
    <>

      <div class="shopify-top-banner" style={styles.container}>
        <div style={styles.backgroundCircle1} />
        <div style={styles.backgroundCircle2} />

        <div style={styles.heroContent}>
          <h1 style={styles.heroHeading1}>SHOPIFY</h1>
          <h1 style={styles.heroHeading2}>
            From Idea to Online Store, We Make Shopify Simple
          </h1>
          <p style={styles.heroParagraph}>
            Unlock the full potential of your DTC brand with a Shopify store
            designed to convert your audience into loyal customers, even when you
            sleep.
          </p>
        </div>

        <div style={styles.contactFormContainer}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form-area bg-light rounded-4 p-4 shadow-sm">
                <h4 className="text-center mb-4 text-black">Get In Touch</h4>
                <form>
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-12 text-center">
                      <select
                        name="category"
                        required
                        className="form-control w-100"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select Category
                        </option>
                        <option value="speed-optimize">Speed Optimize</option>
                        <option value="redesign">Redesign</option>
                        <option value="app-development">App Development</option>
                      </select>
                    </div>

                    <div className="col-lg-12">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="form-control"
                        rows={4}
                      ></textarea>
                    </div>
                    <div className="col-lg-12 text-center">
                      <button type="submit" className="lnk header-btn1">
                        Submit{" "}
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

      {/* slider---- */}

      {/* Partners Slider */}
      <div className="slider-section-area sp5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
              <div className="sldier-head heading2">
                <h2 className="text-anime-style-2">Our Trusted <br /> Partners</h2>
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <Swiper
                modules={[Autoplay]}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  576: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  992: { slidesPerView: 5 },
                }}
                spaceBetween={30}
                loop={true}
                freeMode={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={4000}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Partner-${index}`}
                      className="img-fluid mx-auto d-block"
                      style={{
                        height: "60px",
                        objectFit: "contain",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>



      {/* slider---- */}

      {/* Section 2 */}
      <div className="works-inner-section-area services-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="about-all-images-area">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="img1">
                      <img src={product2} alt="Marketing" />
                      <div className="space100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="works-header-area heading2 specing2">
                <h2>Shopify is more than just an eCommerce platform</h2>
                <p>
                  •	Enhanced Functionality: Unlock new features and customize your store with a wide range of apps.<br />
                  •	User-Friendly Interface: Manage your store effortlessly, even without technical expertise.<br />
                  •	Robust Security: Ensure your customer data is protected with top-tier security features.<br />
                  •	Scalability: Grow your business with a platform that adapts to your needs.<br />

                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center order-2">
            <div className="col-lg-6">
              <div className="works-header-area heading2">
                <h2>Get your online store up and running the right way</h2>
                <p>
                  •	Full Shopify store setup from start to finish<br />
                  •	Homepage, product pages, cart, and checkout customization<br />
                  •	SEO-friendly structure for better search visibility<br />
                  •	Clean, scalable, and conversion-optimized build<br />

                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-all-images-area">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="img1">
                      <img src={product1} alt="Email Strategy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Final Section - Card Grid */}
      <section
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "5rem 11rem",
        }}
      >
        <h2
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            marginBottom: "4rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            textAlign: "center",
          }}
        >
          Shopify Optimization, Analytics & Tracking
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "space-between",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              flex: "1 1 30%",
              backgroundColor: "#171717",
              padding: "2.5rem",
              borderRadius: "1rem",
              border: "1px solid #3f3f3f",
              minWidth: "280px",
              boxSizing: "border-box",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
              Data & <br /> Technology
            </h3>
            <p style={{ color: "#a3a3a3", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              •	Site speed optimization for better user experience
            </p>
            <ArrowRight color="#ef4444" />
          </div>

          {/* Card 2 */}
          <div
            style={{
              flex: "1 1 30%",
              backgroundColor: "#171717",
              padding: "1.5rem",
              borderRadius: "1rem",
              border: "1px solid #3f3f3f",
              minWidth: "280px",
              boxSizing: "border-box",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
              Strategy & <br /> Implementation
            </h3>
            <p style={{ color: "#a3a3a3", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              •	Conversion Rate Optimization (CRO) strategies.
            </p>
            <ArrowRight color="#ef4444" />
          </div>

          {/* Card 3 */}
          <div
            style={{
              flex: "1 1 30%",
              backgroundColor: "#171717",
              padding: "1.5rem",
              borderRadius: "1rem",
              border: "1px solid #3f3f3f",
              minWidth: "280px",
              boxSizing: "border-box",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
              Design & <br /> Development
            </h3>
            <p style={{ color: "#a3a3a3", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              •	Analytics setup and reporting (GA4, Shopify Reports, Pixels)
            </p>
            <ArrowRight color="#ef4444" />
          </div>
        </div>
      </section>


      {/* new--------------- */}

      <section style={styless.section}>
        <div>
          <h2 style={styless.introTitle}>Here’s What We Do for You</h2>
        </div>

        <div style={styless.container}>
          {features.map((feature, index) => (
            <div key={index} style={styless.item}>
              <div style={styless.icon}>{feature.icon}</div>
              <h3 style={styless.title}>{feature.title}</h3>
              <p style={styless.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>



      <section class="shopify-section mt-5">
        <div class="container">

          <div class="row align-items-center">
            <div class="col-md-8">
              <h1 className="mb-5">Simplify the Experience, Beautify your Online Store and Multiply your Business using Shopify.</h1>

              <div class="shopify-list">
                <ul>
                  <li>
                    <div class="shopify-content-part">
                      <div class="left-arrow"><img src={black_arrow} /></div>
                      <div class="text-item">
                        <h3>Custom Shopify Design &amp; Development</h3>
                        <p>Custom-Tailored Solutions: We take time to understand your business and create strategies that fit your unique needs and goals.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="shopify-content-part">
                      <div class="left-arrow"><img src={black_arrow} /></div>
                      <div class="text-item">
                        <h3>Shopify Store Migration</h3>
                        <p>Proven Expertise: Our experience working with DTC brands helps us deliver results that work.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="shopify-content-part">
                      <div class="left-arrow"><img src={black_arrow} /></div>
                      <div class="text-item">
                        <h3>Shopify Integration Services</h3>
                        <p>Ongoing Support: From the initial setup to ongoing optimization, we’re here to help you grow and succeed at every stage</p>
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
              <div className="tab-pane fade show active accordion-item" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
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
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={lavanyaLogo} alt="Lavanya" />
                        </div>
                      </div>
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
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>



      {/* slider----- */}

      {/* <OurPortfolis />  */}
      {/* slider----- */}



      {/* new------------ */}
      {/* 
      <div className="works-inner-section-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="works-header-area heading2">

                <h2>Benefits of Choosing Anah Marketing</h2>
                <div className="space32"></div>



                <div className="content">
                  <p>Custom-Tailored Solutions: We take time to understand your business and create strategies that fit your unique needs and goals.</p>
                </div>


                <div className="space20"></div>


                <div className="content">
                  <p>Proven Expertise: Our experience working with DTC brands helps us deliver results that work.</p>
                </div>


                <div className="space20"></div>


                <div className="content">
                  <p>Ongoing Support: From the initial setup to ongoing optimization, we’re here to help you grow and succeed at every stage</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-all-images-area">

                <div className="row">
                  <div className="col-12">
                    <img src={new1} alt="Why Choose Us" />

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> */}













      <Footer />
    </>
  );
};

export default Shopify;
