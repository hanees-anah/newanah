import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
import Header from "../component/Header";
import preloader from "../assets/images/preloader-img.png";

// IMPORTS
import inner_header from "../assets/images/inner-header.png";
import star2 from "../assets/images/star2.png";
import styleunion_logo from "../assets/images/styleunion_logo.png";
import chasehaul_logo from "../assets/images/chasehaul_logo.png";
import gritpro_logo from "../assets/images/gritpro_logo.png";
import guniaa_logo from "../assets/images/guniaa-logo.png";
import hallstattlife_logo from "../assets/images/hallstattlife-logo.png";
import bysonnutrition_logo from "../assets/images/bysonnutrition-logo.png";
import magia_logo from '../assets/images/magia_logo.png';
import womanCartLogo from '../assets/images/woman-cart-logo.png';
import teakwoodLogo from '../assets/images/teakwood-logo-img.png';
import juniperLogo from '../assets/images/juniper-logo.png';
import elLogo from '../assets/images/el-logoo.png';
import autumnlane_logo from '../assets/images/autumnlane_logo.png';
import spatikaclothing_logo from '../assets/images/spatikaclothing_logo.png';
import dishapublication_logo from '../assets/images/dishapublication_logo.png';
import fabpersona_logo from '../assets/images/fabpersona_logo.png';
import baidLogo from '../assets/images/baid_logo.png';
import siddhayuLogo from '../assets/images/siddhayu_logo.png';
import zari_logo from '../assets/images/zari_logo.png';
import ruchira from '../assets/images/ruchira.png';
import holythread_logo from '../assets/images/holythread_logo.png';
import leheriya_logo from '../assets/images/leheriya_logo.png';
import fashiondwar_logo from '../assets/images/fashiondwar-logo.png';
import lavanya_logo from '../assets/images/lavanya-logo.png';
import parenteyeLogo from '../assets/images/parenteye-logoo.png';
import jagoIndiaJagoLogo from '../assets/images/jago-india-jago-logo.png';
import Divi_logo from "../assets/images/divi-logoo.png";
import swtantra_logo from "../assets/images/swtantra-logo.png"
import rioz_logo from "../assets/images/rioz-logo.png"
import ethnicity from "../assets/images/ethnicity-logo.png";

const ALL_LOGOS = [
  { img: swtantra_logo, name: "Swtantra", tags: ["digital", "development"] },
  { img: rioz_logo, name: "Rioz", tags: ["digital", "development"] },
  { img: teakwoodLogo, name: "Teakwood", tags: ["digital", "development"] },
  { img: baidLogo, name: "Baid", tags: ["development"] },
  { img: womanCartLogo, name: "Woman Cart", tags: ["digital", "mobile"] },
  { img: chasehaul_logo, name: "Chase Haul", tags: ["digital", "development"] },
  { img: styleunion_logo, name: "Style Union", tags: ["digital", "development"] },
  { img: ethnicity, name: "Ethnicity", tags: ["digital", "development"] },
  { img: fabpersona_logo, name: "Fab Persona", tags: ["digital", "development"] },
  { img: gritpro_logo, name: "Grit Pro", tags: ["digital", "development"] },
  { img: guniaa_logo, name: "Guniaa", tags: ["digital", "development"] },
  { img: hallstattlife_logo, name: "Hallstatt Life", tags: ["digital", "development"] },
  { img: bysonnutrition_logo, name: "Byson Nutrition", tags: ["digital", "development"] },
  { img: magia_logo, name: "Magia", tags: ["digital", "development"] },
  { img: juniperLogo, name: "Juniper", tags: [] },
  { img: elLogo, name: "EL", tags: ["development"] },
  { img: autumnlane_logo, name: "Autumn Lane", tags: ["digital", "development"] },
  { img: spatikaclothing_logo, name: "Spatika Clothing", tags: ["digital", "development"] },
  { img: dishapublication_logo, name: "Disha Publication", tags: ["digital", "development"] },
  { img: siddhayuLogo, name: "Siddhayu", tags: [] },
  { img: zari_logo, name: "Zari", tags: ["digital", "development"] },
  { img: ruchira, name: "Ruchira", tags: ["digital", "development"] },
  { img: holythread_logo, name: "Holy Thread", tags: ["digital", "development"] },
  { img: leheriya_logo, name: "Leheriya", tags: ["digital", "development"] },
  { img: fashiondwar_logo, name: "Fashion Dwar", tags: ["digital", "development"] },
  { img: lavanya_logo, name: "Lavanya", tags: ["digital", "development"] },
  { img: parenteyeLogo, name: "Parent Eye", tags: ["mobile"] },
  { img: jagoIndiaJagoLogo, name: "Jago India Jago", tags: ["mobile"] },
  { img: Divi_logo, name: "Divi", tags: ["digital", "development"] }
];

function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const handleLoad = () => setTimeout(() => setIsLoading(false), 300);
    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const filteredLogos = ALL_LOGOS.filter((l) => {
    if (filter === "all") return true;
    return l.tags.includes(filter);
  });

  return (
    <>
      
       <Helmet>
        <title>Our Work | Digital Marketing Portfolio – Anah Marketing</title>
        <meta
          name="description"
          content="Explore Anah Marketing's portfolio of SEO, web design, and eCommerce success stories. See how we drive real growth for brands across industries."
        />
        <link rel="canonical" href="https://anahmarketing.com/portfolio" />
      </Helmet>

      {isLoading && (
        <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon"><img src={preloader} alt="" /></div>
          </div>
        </div>
      )}

      <style>{`
        /* ── Portfolio Hero ─────────────────────────── */
        .port-hero {
          background: var(--clr-navy); padding: 6rem 1.5rem 4rem; text-align: center;
          border-bottom: 1px solid rgba(0,0,0,0.06); position: relative; overflow: hidden;
        }
        .port-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: var(--clr-text-main); margin-bottom: 1rem; }
        .port-title span { background: var(--grad-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        
        /* ── Portfolio Grid ─────────────────────────── */
        .port-body { background: linear-gradient(180deg, var(--clr-bg) 0%, var(--clr-navy) 100%); padding: 5rem 0; min-height: 50vh; }
        .port-filter-tabs {
          display: flex; justify-content: center; gap: 1rem; margin-bottom: 3.5rem; flex-wrap: wrap; padding: 0 1.5rem;
        }
        .port-filter-btn {
          background: rgba(255, 255, 255, 0.5); color: var(--clr-text-secondary); border: 1px solid rgba(255, 255, 255, 0.8);
          padding: 0.6rem 1.5rem; border-radius: var(--radius-full); font-weight: 600; cursor: pointer; transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          font-family: inherit; font-size: 0.9rem;
          box-shadow: var(--shadow-sm); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
        }
        .port-filter-btn:hover, .port-filter-btn.active {
          background: var(--clr-primary); color: #ffffff; border-color: var(--clr-primary);
          box-shadow: var(--shadow-md); transform: translateY(-2px);
        }

        .port-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.5rem; max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;
        }
        .port-card {
          background: #ffffff; border: 1px solid rgba(0,0,0,0.05);
          border-radius: var(--radius-lg); padding: 2rem;
          display: flex; align-items: center; justify-content: center;
          height: 140px; transition: all 0.3s ease; position: relative; overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .port-card::before {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at center, rgba(14, 165, 233, 0.05) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .port-card:hover { transform: translateY(-3px); border-color: rgba(14, 165, 233, 0.3); box-shadow: var(--shadow-md); }
        .port-card:hover::before { opacity: 1; }
        .port-card img { max-width: 100%; max-height: 100%; object-fit: contain; filter: grayscale(1) opacity(0.6); transition: all 0.3s ease; position: relative; z-index: 1; }
        .port-card:hover img { filter: grayscale(0) opacity(1); transform: scale(1.05); }

        /* Emulate empty state */
        .port-empty { text-align: center; color: var(--clr-text-muted); grid-column: 1 / -1; padding: 3rem 0; font-size: 1.1rem; }
      `}</style>

      {/* Hero */}
      <section className="port-hero">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="ds-section-tag" style={{ margin: "0 auto 1rem" }}>Our Work</div>
          <h1 className="port-title">Latest <span>Projects</span></h1>
          <p style={{ color: "var(--clr-text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            Our portfolio reflects a journey of creativity and innovation. Every project is a testament to scaling brands through cutting-edge marketing solutions.
          </p>
        </motion.div>
      </section>

      {/* Body */}
      <section className="port-body">
        {/* Filters */}
        <div className="port-filter-tabs">
          <button className={`port-filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Projects</button>
          <button className={`port-filter-btn ${filter === 'digital' ? 'active' : ''}`} onClick={() => setFilter('digital')}>Digital Marketing</button>
          <button className={`port-filter-btn ${filter === 'development' ? 'active' : ''}`} onClick={() => setFilter('development')}>Development</button>
          <button className={`port-filter-btn ${filter === 'mobile' ? 'active' : ''}`} onClick={() => setFilter('mobile')}>Mobile App</button>
        </div>

        {/* Grid */}
        <motion.div className="port-grid" layout>
          {filteredLogos.map((logo, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={logo.name + index}
              className="port-card"
            >
              <img src={logo.img} alt={logo.name} title={logo.name} />
            </motion.div>
          ))}
          {filteredLogos.length === 0 && (
            <div className="port-empty">No projects found for this category.</div>
          )}
        </motion.div>
      </section>

      <Consultation />
      <Footer />
    </>
  );
}

export default Portfolio;
