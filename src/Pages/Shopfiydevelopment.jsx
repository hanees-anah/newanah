import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Consultation from "../component/Consultation";
import About_Partner from "../component/About_partner";

import Shopify_img1 from "../assets/images/Shopify-img1.png";
import Shopify_img2 from "../assets/images/Shopify-img2.png";
import Shopify_img3 from "../assets/images/Shopify-img3.png";
import Shopify_img4 from "../assets/images/Shopify-img4.png";
import preloader from "../assets/images/preloader-img.png";

function ShopifyDevelopment() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setTimeout(() => setIsLoading(false), 500);
    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      
       <Helmet>
        <title>Top Shopify Web Development Company – Anah Marketing</title>
        <meta
          name="description"
          content="Get expert Shopify development services from a leading Shopify web design & eCommerce development company—custom solutions to grow your store."
        />
        <link rel="canonical" href="https://anahmarketing.com/shopify-development-services" />
      </Helmet>

      {isLoading && (
        <div className="preloader">
          <div className="loading-container">
            <div className="loading" />
            <div id="loading-icon"><img src={preloader} alt="" /></div>
          </div>
        </div>
      )}

      <style>{`
        /* ── Service Page Hero ─────────────────────────── */
        .svc-hero {
          background: var(--clr-navy);
          padding: 6rem 1.5rem 5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .svc-hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 100%, rgba(79, 70, 229, 0.08) 0%, transparent 70%);
        }
        .svc-hero-inner {
          position: relative; z-index: 1; max-width: 800px; margin: 0 auto;
        }
        .svc-title {
          font-size: clamp(2.3rem, 5vw, 4rem);
          font-weight: 900; color: var(--clr-text-main);
          margin: 0.75rem 0 1rem; line-height: 1.1;
          letter-spacing: -0.03em;
        }
        .svc-title span {
          background: var(--grad-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .svc-breadcrumb {
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          font-size: 0.85rem; color: var(--clr-text-muted);
          margin-top: 1.5rem;
        }
        .svc-breadcrumb a { color: var(--clr-text-secondary); text-decoration: none; transition: color 0.2s; }
        .svc-breadcrumb a:hover { color: var(--clr-primary); }

        /* ── Service Intro ────────────────────────────── */
        .svc-intro {
          background: var(--clr-navy-2);
          padding: 6rem 0;
        }
        .svc-intro-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 1.5rem;
          display: grid; grid-template-columns: 1fr 1.2fr 0.8fr; gap: 3rem; align-items: center;
        }
        @media (max-width: 1024px) {
          .svc-intro-inner { grid-template-columns: 1fr 1fr; }
          .svc-intro-img3 { display: none; }
        }
        @media (max-width: 768px) {
          .svc-intro-inner { grid-template-columns: 1fr; gap: 2rem; }
        }
        .svc-intro-content h2 {
          font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 800; color: var(--clr-text-main);
          line-height: 1.2; margin-bottom: 1.25rem;
        }
        .svc-intro-content p {
          color: var(--clr-text-secondary); font-size: 0.95rem; line-height: 1.75;
          margin-bottom: 1.5rem;
        }
        .svc-img-card {
          border-radius: var(--radius-xl); overflow: hidden;
        }
        .svc-img-card img { width: 100%; height: auto; display: block; }

        /* ── Service Details ──────────────────────────── */
        .svc-details {
          background: var(--clr-navy);
          padding: 6rem 0;
        }
        .svc-details-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 1.5rem;
          display: flex; flex-direction: column; gap: 6rem;
        }
        .svc-feature-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
        }
        .svc-feature-row.reverse { direction: rtl; }
        .svc-feature-row.reverse > * { direction: ltr; }
        @media (max-width: 900px) {
          .svc-feature-row { grid-template-columns: 1fr; gap: 2.5rem; text-align: center; }
          .svc-feature-row.reverse { direction: ltr; }
        }
        .svc-feature-content h3 {
          font-size: clamp(1.6rem, 2.5vw, 2rem); font-weight: 800; color: var(--clr-text-main);
          margin-bottom: 1rem;
        }
        .svc-feature-content p {
          color: var(--clr-text-secondary); font-size: 0.95rem; line-height: 1.75; margin: 0;
        }
        .svc-feature-img {
          position: relative;
          background: #ffffff;
          border: 1px solid var(--clr-border);
          border-radius: var(--radius-xl);
          padding: 2rem;
          text-align: center;
        }
        .svc-feature-img::before {
          content: ''; position: absolute; top: 10%; right: 10%;
          width: 200px; height: 200px; border-radius: 50%;
          background: rgba(14, 165, 233, 0.1); filter: blur(40px); z-index: 0;
        }
        .svc-feature-img img {
          position: relative; z-index: 1; max-width: 100%; height: auto;
          border-radius: var(--radius-md); box-shadow: var(--shadow-sm);
        }
          @media (max-width: 1024px) {
  .svc-intro-inner {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .svc-intro-img3 {
    display: none;
  }
}

@media (max-width: 768px) {
  .svc-intro {
    padding: 4rem 0;
  }

  .svc-intro-inner {
    grid-template-columns: 1fr;
    padding: 0 1rem;
    gap: 2rem;
  }

  /* IMAGE CENTER FIX */
  .svc-img-card {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .svc-img-card img {
    width: 80%;
    max-width: 280px;
    height: auto;
    border-radius: 18px;
    display: block;
  }

  /* TEXT FIX */
  .svc-intro-content {
    text-align: left;
  }

  .svc-intro-content h2 {
    font-size: 1.6rem !important;
    line-height: 1.2;
  }

  .svc-intro-content p {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .ds-section-tag {
    font-size: 0.75rem;
  }

  .ds-btn-primary {
    width: 100%;
    text-align: center;
  }
}

/* SMALL MOBILE */
@media (max-width: 480px) {
  .svc-img-card img {
    width: 70%;
    max-width: 240px;
  }

  .svc-intro-content h2 {
    font-size: 1.4rem !important;
  }
}
  
      `}</style>

      {/* Hero Section */}
      <section className="svc-hero">
        <div className="svc-hero-inner">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="ds-section-tag" style={{ margin: "0 auto 0.75rem" }}>Services</div>
            <h1 className="svc-title">Shopify <span>Development</span></h1>
            <p style={{ color: "var(--clr-text-secondary)", fontSize: "1rem", lineHeight: "1.7", maxWidth: "600px", margin: "0 auto" }}>
              Get expert Shopify development services from a leading Shopify web design & eCommerce agency to scale your store.
            </p>
            <div className="svc-breadcrumb">
              <a href="/">Home</a> <i className="fa-solid fa-chevron-right" style={{ fontSize: "0.6rem" }} />
              <span>Services</span> <i className="fa-solid fa-chevron-right" style={{ fontSize: "0.6rem" }} />
              <span style={{ color: "var(--clr-primary)" }}>Shopify</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="svc-intro">
        <div className="svc-intro-inner">
          <motion.div className="svc-img-card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={Shopify_img4} alt="Shopify Setup" />
          </motion.div>

          <motion.div className="svc-intro-content" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="ds-section-tag">Scalable eCommerce</div>
            <h2>Trusted Shopify Web Development Company</h2>
            <p>
              Your online store isn't just a website—it's your brand's powerhouse. At Anah Marketing, we craft stunning, high-performing Shopify stores that don’t just look good but sell like crazy!
            </p>
            <p>
              From sleek designs to seamless shopping experiences, we help brands launch, scale, and thrive in the eCommerce space. Whether you're starting fresh or revamping your store, we've got you covered.
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <a href="/contact-us" className="ds-btn-primary">
                Build My Store <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </motion.div>

          <motion.div className="svc-img-card svc-intro-img3" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src={Shopify_img3} alt="Shopify Analytics" />
          </motion.div>
        </div>
      </section>

      {/* Partner Logo Marquee */}
      <About_Partner />

      {/* Details / Work Area */}
      <section className="svc-details">
        <div className="svc-details-inner">
          {/* Row 1 */}
          <div className="svc-feature-row">
            <motion.div className="svc-feature-img" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <img src={Shopify_img1} alt="Shopify Features" />
            </motion.div>
            <motion.div className="svc-feature-content" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="ds-section-tag"><i className="fa-brands fa-shopify" style={{ marginRight: "0.25rem" }} /> Phase 1</div>
              <h3>Shopify, Built Your Way</h3>
              <p>
                We create high-performing Shopify stores designed to stand out and sell. From custom designs to conversion-optimized layouts, we ensure a seamless shopping experience. Our expertise in payment integrations, mobile-first designs, and SEO helps you rank higher and drive organic traffic.
              </p>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="svc-feature-row reverse">
            <motion.div className="svc-feature-img" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <img src={Shopify_img2} alt="Shopify Optimization" />
            </motion.div>
            <motion.div className="svc-feature-content" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="ds-section-tag"><i className="fa-solid fa-rocket" style={{ marginRight: "0.25rem" }} /> Phase 2</div>
              <h3>Shopify Design &amp; Performance Optimization</h3>
              <p>
                A high-performing Shopify store is about speed, usability, and seamless shopping experiences. We optimize every element, from fast-loading pages to intuitive navigation, ensuring your store keeps visitors engaged. With SEO best practices and integrations, we help you maximize sales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Consultation />
      <Footer />
    </>
  );
}

export default ShopifyDevelopment;
