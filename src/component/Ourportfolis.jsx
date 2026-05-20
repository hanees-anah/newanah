import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

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
import ethnicity from "../assets/images/ethnicity-logo.png";
import swtantra_logo from "../assets/images/swtantra-logo.png";
import rioz_logo from "../assets/images/rioz-logo.png";

const portfolioImages = [
  styleunion_logo, swtantra_logo, rioz_logo, teakwood_logo, baid_logo,
  woman_cart_logo, siddhayu_logo, chasehaul_logo, zari_logo, fabpersona_logo,
  autumnlane_logo, gritpro_logo, guniaa_logo, hallstattlife_logo, bysonnutrition_logo,
  magia_logo, juniper_logo, el_logo, spatikaclothing_logo, dishapublication_logo,
  ruchira_logo, holythread_logo, leheriya_logo, ethnicity,
];

export default function OurPortfolis() {
  return (
    <>
      <style>{`
        /* ── Portfolio Section ─────────────────── */
        .portfolio-section {
          background: #030014;
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }
        .portfolio-section::before {
          content: '';
          position: absolute;
          right: -200px; top: 50%;
          transform: translateY(-50%);
          width: 500px; height: 500px;
          background: radial-gradient(ellipse, rgba(168, 85, 247, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .portfolio-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .portfolio-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: end;
          margin-bottom: 3.5rem;
        }
        @media (max-width: 768px) {
          .portfolio-header { grid-template-columns: 1fr; }
        }
        .portfolio-header h2 {
          font-size: clamp(1.6rem, 3vw, 2.3rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin: 0.5rem 0 0;
        }
        .portfolio-header h2 em {
          font-style: normal;
          background: var(--grad-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .portfolio-header p {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.7;
          margin: 0;
        }
        .portfolio-brand-count {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 999px;
          padding: 0.3rem 0.8rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: #10b981;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }

        /* Slider track */
        .portfolio-slider-wrap {
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
        .portfolio-logo-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-md);
          padding: 1.25rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 90px;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .portfolio-logo-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(16, 185, 129, 0.3);
          transform: translateY(-3px);
        }
        .portfolio-logo-card img {
          max-height: 48px;
          max-width: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.75;
          transition: all 0.3s ease;
        }
        .portfolio-logo-card:hover img {
          filter: none;
          opacity: 1;
        }

        .portfolio-section .ds-btn-ghost {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff !important;
        }
        .portfolio-section .ds-btn-ghost:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--clr-primary);
          color: #ffffff !important;
          transform: translateY(-3px) scale(1.02);
        }

        .portfolio-cta {
          text-align: center;
          margin-top: 3rem;
        }
      `}</style>

      <section className="portfolio-section" aria-label="Our portfolio">
        <div className="portfolio-inner">
          {/* Header */}
          <div className="portfolio-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="ds-section-tag">Our Portfolio</div>
              <h2>Dare to Dream Big, <em>Embrace the Risks</em></h2>
              <div className="portfolio-brand-count">
                <i className="fa-solid fa-circle-check" />
                24+ Brands Scaled
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>
                Our portfolio reflects a journey of creativity and innovation. Every project is a testament
                to scaling brands through cutting-edge marketing solutions.
              </p>
              <div style={{ marginTop: "1.25rem" }}>
                <a href="/portfolio" className="ds-btn-ghost">
                  View Full Portfolio <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Slider */}
          <div className="portfolio-slider-wrap">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={3000}
              spaceBetween={16}
              breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
            >
              {portfolioImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="portfolio-logo-card">
                    <img src={img} alt={`Client brand ${i + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
