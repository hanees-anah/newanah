import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Import images
import styleunion_logo from "../assets/images/styleunion_logo.png";

import chasehaul_logo from "../assets/images/chasehaul_logo.png";
import gritpro_logo from "../assets/images/gritpro_logo.png";
import guniaa_logo from "../assets/images/guniaa-logo.png";
import hallstattlife_logo from "../assets/images/hallstattlife-logo.png";
import bysonnutrition_logo from "../assets/images/bysonnutrition-logo.png";
import magia_logo from "../assets/images/magia_logo.png";
import woman_cart_logo from "../assets/images/woman-cart-logo.png";
import teakwood_logo from "../assets/images/teakwood-logo-img.png";
import juniper_logo from "../assets/images/juniper-logo.png";
import el_logo from "../assets/images/el-logo.png";
import autumnlane_logo from "../assets/images/autumnlane_logo.png";
import spatikaclothing_logo from "../assets/images/spatikaclothing_logo.png";
import dishapublication_logo from "../assets/images/dishapublication_logo.png";
import fabpersona_logo from "../assets/images/fabpersona_logo.png";
import baid_logo from "../assets/images/baid_logo.png";
import siddhayu_logo from "../assets/images/siddhayu_logo.png";
import zari_logo from "../assets/images/zari_logo.png";
import ruchira_logo from "../assets/images/ruchira.png";
import holythread_logo from "../assets/images/holythread_logo.png";
import leheriya_logo from "../assets/images/leheriya_logo.png";
import bg1 from "../assets/images/pages-bg1.png";
import ethnicity from "../assets/images/ethnicity-logo.png";

// Image Array
const portfolioImages = [
  styleunion_logo,
  chasehaul_logo,
  gritpro_logo,
  guniaa_logo,
  hallstattlife_logo,
  bysonnutrition_logo,
  magia_logo,
  woman_cart_logo,
  teakwood_logo,
  juniper_logo,
  el_logo,
  autumnlane_logo,
  spatikaclothing_logo,
  dishapublication_logo,
  fabpersona_logo,
  baid_logo,
  siddhayu_logo,
  zari_logo,
  ruchira_logo,
  holythread_logo,
  leheriya_logo,
  ethnicity
];

function OurPortfolis() {
  return (
    <>
      <div class="all-section-bg" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="slider-section-area sp5 our_portfolio_sec_slider">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="content-part">
                  <div className="common-heading-left heading18">
                    <h5>Our Portfolio</h5>
                    <div className="heading2 mt-2">
                      <h2 className="m-0 text-anime-style-3">
                        Dare to Dream Big, Embrace the Risks
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="content-part">
                  <div className="common-heading-top">
                    <p>
                      Our portfolio reflects a journey of creativity and
                      innovation. Every project is a testament to scaling brands
                      through cutting-edge marketing solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Auto-Moving Slider */}
            <article className="slider-images-area px-4 py-6">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={3000}
                spaceBetween={20}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
              >
                {portfolioImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="img1">
                      <img
                        src={img}
                        alt={`Portfolio-${index}`}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurPortfolis;
