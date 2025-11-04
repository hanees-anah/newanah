import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import Shopify_Logo from "../assets/images/Shopify_Logo-pages.png"
import pragma_logo from "../assets/images/pragma_logo.png"
import razorpay from "../assets/images/razorpay-img.png"
import Whatmore from "../assets/images/Whatmore-img.png"
import engati from "../assets/images/engati-img.png"
import bg1 from "../assets/images/pages-bg1.png"
import bg6 from "../assets/images/graph.png"
import bgMobile from "../assets/images/mobile-graph.png"
import meta_laptop from "../assets/images/meta-laptop.png"
import about_anah from "../assets/images/about-anah.png"
import metaAdsImg2 from "../assets/images/meta-ads-img-2.png";
import meta_platform from "../assets/images/Meta-Platform.png"
import add_img from "../assets/images/meta-ads-img-2.png"
import star from "../assets/images/elements6.png"
import axios from "axios";
import { Autoplay } from "swiper/modules";
import Footer from '../component/Footer';
import { motion } from "framer-motion";
import swtantra_logo from "../assets/images/swtantra-logo.png"
import fabpersona_logo from "../assets/images/fabpersona_logo.png";
import leheriya_logo from "../assets/images/leheriya_logo.png";
import holythread_logo from "../assets/images/holythread_logo.png";
import rioz_logo from "../assets/images/rioz-logo.png"
import ruchiraLogo from '../assets/images/ruchira.png';
import chasehaulLogo from '../assets/images/chasehaul_logo.png';




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

const Meta = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    // company: '',
    city: '',
    // category: '',
    message: '',
      formType: "meta",  
  
  });
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const Monthly_Marketing_Spends = [
    { value: "", label: "Monthly Marketing Spend" },
    { value: "1-3 Lakh", label: "₹1 Lakh - ₹3 Lakh" },
    { value: "3-6 Lakh", label: "₹3 Lakh - ₹6 Lakh" },
    { value: "6-10 Lakh", label: "₹6 Lakh - ₹10 Lakh" },
    { value: "10-20 Lakh", label: "₹10 Lakh - ₹20 Lakh" },
    { value: "20-30 Lakh", label: "₹20 Lakh - ₹30 Lakh" },
  ];


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function CustomDropdown({ formData, setFormData, required }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (value) => {
      setFormData(prev => ({ ...prev, Monthly_Marketing_Spend: value }));
      setIsOpen(false);
    };

    
    return (
      <div
        ref={dropdownRef}
        className="relative w-full"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setIsOpen(false);
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        role="combobox"
        aria-controls="category-list"
        aria-label="Monthly Marketing Spend"
      >
        <button
          type="button"
          className="form-control w-full text-left py-2 border border-[#E6E6E6] shadow-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {Monthly_Marketing_Spends.find(c => c.value === formData.Monthly_Marketing_Spend)?.label || 'Monthly Marketing Spend'}
        </button>

        {isOpen && (
          <ul
            id="category-list"
            role="listbox"
            className="absolute z-10 w-full mt-1 max-h-60 overflow-auto border border-[#E6E6E6] bg-white shadow-lg"
          >
            {Monthly_Marketing_Spends?.map(({ value, label }) => (
              <li
              id
                key={value}
                role="option"
                aria-selected={formData.Monthly_Marketing_Spend === value}
                className={`cursor-pointer px-3 py-2 hover:bg-blue-100 ${value == "" ?  "bg-blue-200 font-semibold" : ""}`}
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

  const imagess = [
    swtantra_logo,
    fabpersona_logo,
    leheriya_logo,
    holythread_logo,
    rioz_logo,
    ruchiraLogo,
    chasehaulLogo,

  ];

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


  const roadmapSteps = [
    {
      title: 'Problem Statement Identification',
      description: 'Defining the optimum media-mix to amplify our message across the channels & basis TG affinity.',
    },
    {
      title: 'Defining The Roadmap',
      description: "Curating an integrated marketing approach (organic + inorganic) to improve brand's DTC journey for visibility and growth.",
    },
    {
      title: 'Media Planning & KPI Orientation',
      description: 'Defining the optimum media-mix to amplify our message across the channels & basis TG affinity.',
    },
    {
      title: 'Strategic Process Implementation',
      description: 'Breakdown content and media by timelines and buckets to achieve both strategic and tactical objectives. Calendar, Cadence, Optimization, etc.',
    },
    {
      title: 'Performance Marketing Measurement',
      description: 'Weekly/monthly analysis of what worked/didn’t work in line with the objectives and possible course correction required.',
    },
    {
      title: 'Reporting & Governance Mechanism',
      description: 'Reporting formats standardization with automated push. Monthly/Quarterly review with stakeholders to assess the impact against the assigned KPIs.',
    },
  ];


const handleSubmit = async (e) => {
  e.preventDefault();

  // Make sure formType is included in formData before sending
  console.log("Before submission:", formData);

  try {
     const response = await axios.post("https://anahmarketing.com:5000/send-email", formData);
     
    // const response = await axios.post("http://localhost:5000/send-email", formData);
    console.log("Response received:", response);

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    // Reset the form and ensure formType remains "meta"
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
      city: "",
      Brand_name: "",
      Website_URL: "",
      Monthly_Marketing_Spend: "",
      sendAutoReply: false,
      formType: "meta", // Make sure formType is reset
    });

  } catch (error) {
    console.error("Failed to send message:", error);
  } finally {
    setLoading(false);
  }
};




  // Data for the feature list - easy to modify or extend
  const deliverablesData = [
    {
      title: 'ROI Boost',
      description: 'A significant increase in the overall ROAS (return-on-ad-spend) & ROI (return-on-investment) from your current state of performance marketing results within the first quarter of partnering with us.',
    },
    {
      title: 'Higher CLTV',
      description: 'We leverage strategies, channels & touchpoints to get maximum customers come back for more without having to always depend on the AdTech platforms for growth.',
    },
    {
      title: 'Scale with Profitability',
      description: 'With our skin-in-the-game mindset, working with brands at the P&L level we peg our growth on the growth of our cohort of brands as a true blue partner.',
    },
  ];

  // A simple SVG checkmark icon component
  const CheckIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="check-icon"
    >
      <path
        d="M3 3H21V21H3V3Z"
        stroke="#E0E0E0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12L11 15L16 9"
        stroke="#00D084"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );




  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Teesre section ke liye data
  const stats = [
    { value: '10Cr', description: 'Add Spent Per Year', colorClass: 'green' },
    { value: '50Cr+', description: 'Revenue generated by our clients per year', colorClass: 'orange' },
    { value: '6X', description: 'ROAS to our clients', colorClass: 'blue' },
    { value: '50+', description: 'Brands', colorClass: 'red' }
  ];




  return (
    <>
      <div className="background-shape"></div>


      <main className="hero hero-top" style={{ backgroundImage: `url(${bg1})` }}>
        <section className="shopify-top-banner-sec" style={{ padding: 0 }}>
          <div className="container">
            {/* <div className="hero-content">
            <h1>Where Strategy Meets Performance — Scale Smarter with Meta Ads</h1>
            <div className="btn-area">
              <a href="/contact-us" className="header-btn1">
                Book Your Free Ad Audit <span><i className="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div> */}

            <div className="col-md-5">
              <div className=" contant-part">
                <div>
                  <img style={styles.Shopify} src={meta_platform} alt="Marketing" />
                  <h1>Where Strategy Meets Performance. Scale Smarter with Meta Ads</h1>
                  <p>
                    Our team blends creative strategy and data intelligence to optimize every ad, maximize conversions, and grow your brand with confidence
                  </p>

                </div>
                <div className="btnn-area mt-3 ">
                <a  href="#contactFormSection" className="header-btn1">
                  Book Your Free Ad Audit <span><i className="fa-solid fa-arrow-right"></i></span>
                </a>
              </div>

              </div>
            </div>

            <div className="hero-image-container">
              <img
                src={meta_laptop}
                alt="eCommerce Ads on Laptop"
                className="laptop-image"
              />

              {/* Floating Partner Cards */}


            </div>
          </div>
        </section>
      </main>


      <div className="slider-section-area sp5" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
              <div className="sldier-head heading2">
                <h2 className="text-anime-style-2">Our Brands <br /> Name</h2>
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
                {imagess.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Partner-${index}`}
                      className="img-fluid mx-auto d-block"
                      style={{
                        height: "100px",
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



      <section style={{ background: '#ffffff', paddingTop: '10px' }} class="here-section new-here">
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
                <h3>Full-Funnel Campaign Setup</h3>
                <p> We build campaigns that cover awareness, consideration, and conversion — ensuring consistent results across every customer stage.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-card">
                <div className="icon">💡</div>
                <h3>Creative Strategy & Ad Design</h3>
                <p> Every creative is strategically crafted to stop the scroll, spark curiosity, and convert instantly.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-card">
                <div className="icon">🖥️</div>
                <h3>Audience Targeting & Segmentation</h3>
                <p>We identify, segment, and target your most profitable audiences using Meta’s advanced tools and behavioral insights.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-card">
                <div className="icon">⚛️</div>
                <h3>Conversion Optimization</h3>
                <p>Data-driven optimization to reduce cost per acquisition and boost revenue without wasting ad spend.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-card">
                <div className="icon">📈</div>
                <h3>Retargeting & Remarketing</h3>
                <p> We re-engage potential buyers through smart retargeting funnels that boost repeat purchases and long-term loyalty.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-card">
                <div className="icon">🛠️</div>
                <h3>Performance Monitoring & Reporting</h3>
                <p>Transparent reports with clear metrics, insights, and next steps — so you always know your ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contactFormSection" className="shopify-top-banner-sec shopify-top-banner-sec-se">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="contant-part contant-part-color">
                <h1>Meta Ads Management That Drives Measurable Growth</h1>
                <p>
                  Our Meta ad experts design and optimize campaigns that convert clicks into conversions — from creative testing to audience scaling, every step drives ROI and sustainable growth.

                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-part">
                <div className="contact-form-area" style={{ padding: '25px' }}>
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
                          className="form-control"
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
                          className="form-control"
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
                          className="form-control"
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
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          style={styles.shopifyForm}
                          type="text"
                          name="Brand_name"
                          placeholder="Brand Name"
                          value={formData.Brand_name}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          style={styles.shopifyForm}
                          type="text"
                          name="Website_URL"
                          placeholder="Website URL"
                          value={formData.Website_URL}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                      {/* <div className="col-lg-6">
                        <input
                          style={styles.shopifyForm}
                          type="text"
                          name="Monthly_Marketing_Spend"
                          placeholder="Monthly Marketing Spend "
                          value={formData.Monthly_Marketing_Spend}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div> */}

                      <div className="col-lg-6 text-center ">

                        <CustomDropdown formData={formData} setFormData={setFormData} />


                      </div>

                      <div className="col-lg-6">
                        <input
                          style={styles.shopifyForm}
                          type="text"
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                      {/* <div className="col-lg-12 text-center">
                        <CustomDropdown formData={formData} setFormData={setFormData} />
                      </div> */}
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
                                            <div className="col-lg-6">
  {/* Hidden input field with value "Meta" */}
  <input
    type="hidden"
    name="meta_value"
    value="Meta"
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
                      <div className="col-lg-12 text-center">
                        <button
                          type="submit"
                          className="lnk header-btn1"
                          disabled={loading}
                        >
                          {loading ? 'Submitting...' : 'Submit'}{' '}
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

      <section className="deliver-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              {/* Left Column: Content */}
              <div className="deliver-content mb-4">
                <h2 className="section-title">What We Deliver</h2>
                {/* <p className="section-subtitle">
                      Turning Every Ad Rupee into Measurable Impact
                    </p> */}
                {/* <p className="section-intro">
                      At Anah Marketing, we focus on results that matter — revenue, ROAS, and brand growth.
                    </p> */}
                <div className="deliver-list">
                  <div className="deliver-item">
                    <CheckIcon />
                    <div className="item-text">
                      <h3>Data-Driven Growth</h3>
                      <p>Every decision is backed by analytics and performance insights, not assumptions.</p>
                    </div>
                  </div>

                  <div className="deliver-item">
                    <CheckIcon />
                    <div className="item-text">
                      <h3>Consistent Scaling</h3>
                      <p>We craft strategies to scale your campaigns sustainably, without breaking performance.</p>
                    </div>
                  </div>

                  <div className="deliver-item">
                    <CheckIcon />
                    <div className="item-text">
                      <h3>Creative Excellence</h3>
                      <p>Ad creatives designed to connect emotionally and convert consistently.</p>
                    </div>
                  </div>

                  <div className="deliver-item">
                    <CheckIcon />
                    <div className="item-text">
                      <h3>ROI-Centered Execution</h3>
                      <p>Every rupee you spend works toward tangible, trackable business outcomes.</p>
                    </div>
                  </div>

                  <div className="deliver-item">
                    <CheckIcon />
                    <div className="item-text">
                      <h3>Transparent Collaboration</h3>
                      <p>You get full visibility into your campaigns, results, and growth trajectory.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              {/* <img alt="" src={add_img} style={{ width: '100%', height: 'auto' }} /> */}


              <div className="about-auhtor-images">
                <img alt="" className="elements5 keyframe5" src={star} />
                <figure className="image-anime" style={{ clipPath: 'inset(0%)' }}>
                  <img alt="" src={add_img} style={{ width: '100%', height: 'auto' }} />
                </figure>
              </div>
            </div>




          </div>
        </div>
      </section>

      {/* SECTION 3: Multiply Revenue (UPDATED CODE YAHAN HAI)      */}

      <section className="revenue-section">
        <div className="container">
          <div className="row align-items-center">
            {/* === Left Side: Content === */}
            <div className="col-md-5">
              <div className="revenue-content mb-4">
                <span className="promise-tag">OUR PROMISE</span>
                {/* Naya H1 tag */}
                <h1>
                  At Anah Marketing & Innovations, we don’t just run ads — we build performance ecosystems.
                </h1>
                {/* Is H2 ke andar ab animating text aayega */}
                <h2 className="main-heading animating-text-container">
                  <span className="highlight-text" style={{ color: "#27ae60" }}>Results that matter</span>
                  <span className="highlight-text" style={{ color: "#f39c12" }}>Transparent communication</span>
                  <span className="highlight-text" style={{ color: "#0052cc" }}>Tailored strategy</span>
                  <span className="highlight-text" style={{ color: "#c0392b" }}>Commitment to growth</span>
                </h2>

              </div>
            </div>
            {/* === Right Side: Stats Grid (ye pehle jaisa hi hai) === */}
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-6">
                  <div className={`stat-card mb-4 ${stats[0].colorClass}`}>
                    <div className="stat-value">{stats[0].value}</div>
                    <div className="stat-description">{stats[0].description}</div>
                  </div>
                  <div className={`stat-card mb-4 ${stats[1].colorClass}`}>
                    <div className="stat-value">{stats[1].value}</div>
                    <div className="stat-description">{stats[1].description}</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={`stat-card mb-4 ${stats[2].colorClass}`}>
                    <div className="stat-value">{stats[2].value}</div>
                    <div className="stat-description">{stats[2].description}</div>
                  </div>
                  <div className={`stat-card mb-4 ${stats[3].colorClass}`}>
                    <div className="stat-value">{stats[3].value}</div>
                    <div className="stat-description">{stats[3].description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section style={{ background: "#ffffff" }}>
        <img
          src={isMobile ? bgMobile : bg6}
          alt="section visual"
          style={{
            width: "100%",
            height: "auto",
            display: "block", // removes bottom spacing
          }}
        />
      </section>

      <div className="slider-section-area sp5" style={{ background: '#ffffff' }}>
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


      {showPopup && (
        <motion.div
          className="modal-backdrop-custom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content-custom"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <div className="modal-icon">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully. We'll be in touch soon.</p>
          </motion.div>
        </motion.div>
      )}






      <Footer />
    </>
  );
};


export default Meta;
