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
      <div className="slider-section-area slider-inner sp5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="sldier-head heading2">
                <h2 className="text-anime-style-2 text-white">
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
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Partner-${index}`}
                      style={{
                        width: "100%",
                        height: "60px",
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)",
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
