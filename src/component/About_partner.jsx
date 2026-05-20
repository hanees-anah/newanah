import React from "react";
import Shopify_Logo from "../assets/images/Shopify_Logo.png";
import pragma_logo from "../assets/images/pragma_logo.png";
import razorpay from "../assets/images/razorpay-img.png";
import Whatmore from "../assets/images/Whatmore-img.png";
import engati from "../assets/images/engati-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function About_Partner() {
  const images = [
    Shopify_Logo,
    pragma_logo,
    razorpay,
    Whatmore,
    engati,
    Shopify_Logo, // Repeating for infinite loop effect
    pragma_logo,
    razorpay,
    Whatmore,
    engati,
  ];

  return (
    <>
      <div className="slider-section-area slider-inner sp5" style={{
        background: "#090815",
        padding: "60px 0",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Glowing Ambient Mesh Backdrop */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "150px",
          background: "radial-gradient(circle, rgba(92, 79, 229, 0.18) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(40px)"
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="sldier-head heading2">
                <h2 className="text-anime-style-2 text-white" style={{
                  fontSize: "1.75rem",
                  fontWeight: "800",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.2",
                  margin: 0
                }}>
                  Our Trusted<br /> Partners
                </h2>
              </div>
            </div>
            <div className="col-lg-9">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                freeMode={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={4000}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  992: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={img}
                      alt={`Partner-${index}`}
                      style={{
                        width: "100%",
                        height: "50px",
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)",
                        opacity: 0.75,
                        transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "1";
                        e.currentTarget.style.transform = "scale(1.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "0.75";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_Partner;
