import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import meta from "../assets/images/meta-mg.png";
import google_img from "../assets/images/google-img.png";
import email_img from "../assets/images/e-mail-img.png";
import wp_img from "../assets/images/wp-img.png";
import seo_img from "../assets/images/seo-img.png";

const results = [
  {
    channel: "Meta Ads", metric: "8x", metricLabel: "ROAS", color: "#1877F2", icon: "fa-brands fa-meta", img: meta,
    desc: "We achieved a 8x ROAS for a premium ethnic wear brand through smart targeting and data-driven strategies.",
    span: "col-span-2 row-span-2" // Large card
  },
  {
    channel: "Google Ads", metric: "4.5x", metricLabel: "ROAS", color: "#EA4335", icon: "fa-brands fa-google", img: google_img,
    desc: "Targeting high-intent audiences, we boosted conversions and digital presence.",
    span: "col-span-1 row-span-1"
  },
  {
    channel: "Email", metric: "4x", metricLabel: "ROAS", color: "#00C6AD", icon: "fa-regular fa-envelope", img: email_img,
    desc: "Smart messaging and irresistible offers boosted constant sales.",
    span: "col-span-1 row-span-1"
  },
  {
    channel: "WhatsApp", metric: "8.04x", metricLabel: "ROAS", color: "#25D366", icon: "fa-brands fa-whatsapp", img: wp_img,
    desc: "A plus-size fashion brand achieved a 8.04x ROAS through smart personalized outreach.",
    span: "col-span-1 row-span-2" // Tall card
  },
  {
    channel: "SEO", metric: "75.5%", metricLabel: "Traffic Growth", color: "#F59E0B", icon: "fa-solid fa-magnifying-glass", img: seo_img,
    desc: "Secured #1 rankings for high-intent keywords, enhancing search visibility.",
    span: "col-span-2 row-span-1" // Wide card
  },
];

const TiltCard = ({ item }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);

    // Dynamic mouse spotlight coordinates
    e.currentTarget.style.setProperty('--mouse-x', `${mouseX}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${mouseY}px`);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      className={`bento-card ${item.span}`}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", "--rc-color": item.color }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="bento-inner" style={{ transform: "translateZ(30px)" }}>
        <div className="bento-top">
          <div className="bento-badge">
            <i className={item.icon} style={{ color: item.color }} /> {item.channel}
          </div>
          <img src={item.img} alt={item.channel} className="bento-icon" />
        </div>
        <div className="bento-mid">
          <motion.div className="bento-metric" style={{ color: item.color }}
            initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
            {item.metric}
          </motion.div>
          <div className="bento-metric-label">{item.metricLabel}</div>
        </div>
        <p className="bento-desc">{item.desc}</p>
      </div>
    </motion.div>
  );
};

export default function Result() {
  return (
    <>
      <style>{`
        /* ── Bento Results V4 Aesthetic ──────────────────── */
        .results-section {
          background: linear-gradient(180deg, var(--clr-bg) 0%, var(--clr-navy) 100%);
          padding: 8rem 0;
          position: relative;
          overflow: hidden;
          perspective: 1200px;
        }
        .results-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .results-header {
          text-align: center;
          margin-bottom: 5rem;
        }
        .results-header h2 {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 900;
          color: var(--clr-text-main);
          margin: 0;
          letter-spacing: -0.03em;
        }
        .results-header h2 em {
          font-style: normal;
          background: var(--grad-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, minmax(240px, auto));
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr); grid-template-rows: auto; }
          .col-span-2 { grid-column: span 1; }
          .row-span-2 { grid-row: span 1; }
        }
        @media (max-width: 640px) {
          .bento-grid { grid-template-columns: 1fr; }
        }

        .col-span-2 { grid-column: span 2; }
        .row-span-2 { grid-row: span 2; }

        .bento-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(9, 9, 11, 0.06);
          border-radius: var(--radius-2xl);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: var(--shadow-sm);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .bento-card::before {
          content: ''; position: absolute; inset: 0; border-radius: var(--radius-2xl);
          background: radial-gradient(800px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255, 255, 255, 0.8), transparent 40%);
          z-index: 0; opacity: 0; transition: opacity 0.4s;
        }
        .bento-card:hover::before { opacity: 1; }
        .bento-card:hover {
          background: #ffffff;
          border-color: var(--rc-color);
          box-shadow: 0 24px 48px -12px rgba(9, 9, 11, 0.08);
          transform: translateY(-6px) scale(1.01);
        }
        
        .bento-inner {
            z-index: 1; position: relative; height: 100%; display: flex; flex-direction: column;
        }
        .bento-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: auto; }
        .bento-badge {
            background: rgba(0,0,0,0.03); border: 1px solid rgba(0,0,0,0.05);
            padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.85rem; font-weight: 700; color: var(--clr-text-main);
            display: flex; gap: 0.5rem; align-items: center;
        }
        .bento-icon { width: 40px; height: 40px; object-fit: contain; }
        
        .bento-mid { margin-top: 2.5rem; margin-bottom: 1rem; }
        .bento-metric { font-size: clamp(3rem, 4vw, 4.5rem); font-weight: 900; line-height: 1; letter-spacing: -0.04em; }
        .bento-metric-label { font-size: 0.9rem; color: var(--clr-text-secondary); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; margin-top: 0.5rem; }
        
        .bento-desc { font-size: 1rem; color: var(--clr-text-secondary); line-height: 1.6; margin: 0; }
        `}</style>

      {/* <section className="results-section">
        <div className="results-inner">
          <div className="results-header">
            <motion.div className="ds-section-tag" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Proven Impact
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              Expect <em>Unreasonable</em> Results.
            </motion.h2>
          </div>

          <div className="bento-grid">
            {results.map((item, index) => (
              <TiltCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}