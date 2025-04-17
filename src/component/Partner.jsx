import about from "../assets/images/about-us-img-2.png"
import star1 from "../assets/images/star1.png"
import elements6 from "../assets/images/elements6.png"
import about1 from "../assets/images/about-us-img-1.png"
import Meta from "../assets/images/Meta-Ads.png"
import Shopify_Logo from "../assets/images/Shopify_Logo.png"
import pragma_logo from "../assets/images/pragma_logo.png"
import razorpay from "../assets/images/razorpay-img.png"
import Whatmore from "../assets/images/Whatmore-img.png"
import engati from "../assets/images/engati-img.png"
import Email from "../assets/images/Email-Marketing.png"
import Google from "../assets/images/Google-Ads.png"
import WhatsApp from "../assets/images/WhatsApp-Marketing.png"
import Seo from "../assets/images/seo.png"
import Website from "../assets/images/Website-Development.png"
import bg1 from "../assets/images/pages-bg1.png"
import Mobile_App_Development from "../assets/images/Mobile-App-Development.png"
import Service from "./Service"
import Header from "./header"
import Index from "./index"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

// import  WhatsApp from"../assets/images/WhatsApp-Marketing.png"
// import  seo from"../assets/images/seo.png"
// import  Website from"../assets/images/Website-Development.png"
// import  Mobile_App_Development from"../assets/images/Mobile-App-Development.png"

function Partner() {


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


  const services = [
    {
      img: Meta,
      link: "/metaads",
      title: "Meta Ads: Capture & Convert",
      desc: "Unlock the power of Meta’s ecosystem to drive engagement, generate leads and accelerate sales with high-converting campaigns.",
    },
    {
      img: Google,
      link: "/googleads",
      title: "Google Ads: Clicks to Conversions",
      desc: "Capture high-intent audience with optimized Google Ads. Our search, display and shopping campaigns boost visibility, attract qualified traffic and maximize ROI with strategic bidding and precise targeting.",
    },
    {
      img: Email,
      link: "/emailmarketing",
      title: "Email Marketing: Engage, Nurture, Convert",
      desc: "Turn emails into powerful connections. We create personalized email campaigns that engage your audience, encourage action and build lasting loyalty.",
    },
    {
      img: WhatsApp,
      link: "/whatappmarketing",
      title: "WhatsApp Marketing: Instant Engagement",
      desc: "Engage customers where they’re most active. Use WhatsApp to build relationships, send offers and drive conversions in real time.",
    },
    {
      img: Seo,
      link: "/Search_Engine_Optimisation",
      title: "Search Engine Optimization",
      desc: "Outrank the competition and attract right people with strategic SEO that improves rankings, increases traffic and drives long-term growth.",
    },
    {
      img: Website,
      link: "/Websitedevelopment",
      title: "Website Development",
      desc: "Empower your brand with a cutting-edge website that meets user expectations and strengthens your digital presence.",
    },
    {
      img: Mobile_App_Development,
      link: "/mobiledevelopmet",
      title: "Mobile App Development",
      desc: "Expand your reach and boost revenue with high-performance mobile apps designed to add value and enhance user experience.",
    },
  ];


  return (
    <div
      className="all-section-bg"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
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
  
      {/* About Section */}
      <div className="about1-section-area pt-4 sp6">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="about-images">
                <motion.figure
                  initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="image-anime"
                >
                  <img
                    src={about}
                    alt=""
                    className="img-fluid"
                  />
                </motion.figure>
                <img src={star1} alt="" className="star1 keyframe5 img-fluid" />
              </div>
            </div>
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="about-content-area heading2">
                <h2 className="text-anime-style-2">Welcome to Anah Marketing & Innovations</h2>
                <p className="mb-4" data-aos="fade-left" data-aos-duration="1000">
                  At Anah Marketing & Innovations, we don’t just market brands—we create data-driven growth strategies that drive measurable success.
                </p>
                <p data-aos="fade-left" data-aos-duration="1000">
                  With expertise in meta-ads, google ads, Social Media Marketing and Web Development, we help brands increased visibility, engage their audience and maximize revenue...
                </p>
                <div className="btn-area" data-aos="fade-left" data-aos-duration="1200">
                  <a href="/about" className="header-btn1">
                    View More <span><i className="fa-solid fa-arrow-right"></i></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="about-auhtor-images">
                <img src={elements6} alt="" className="elements5 keyframe5 img-fluid" />
                <motion.figure
                  initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="image-anime"
                >
                  <img
                    src={about1}
                    alt=""
                    className="img-fluid"
                  />
                </motion.figure>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Services Section */}
      <div className="service12-section-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-header space-margin60 heading18 heading2">
                <h5>Our Service</h5>
                <div className="space16"></div>
                <h2 className="text-anime-style-2">
                  We move from counting numbers to creating<br/>actions that lead to real impact.
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-12 our-service-outer-section">
            <div className="service-slider">
              <Swiper
                modules={[Autoplay]}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={2500}
                freeMode={true}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="service12-boxarea">
                      <div className="icons mb-3">
                        <img
                          src={service.img}
                          alt={service.title}
                          className="img-fluid"
                          style={{ width: "80px", height: "80px", objectFit: "contain" }}
                        />
                      </div>
                      <div className="content">
                        <a href={service.link}>{service.title}</a>
                        <p className="mt-2">{service.desc}</p>
                        <a href={service.link} className="readmore mt-2 d-block">
                          Learn More <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  

}

export default Partner;