import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Helmet } from "react-helmet";
import headerimg from "../assets/images/banner-main-img.png";

const stats = [
  { value: "8x", label: "Avg. ROAS" },
  { value: "50+", label: "Brands Scaled" },
  { value: "₹10Cr+", label: "Ad Spend Managed" },
  { value: "98%", label: "Client Retention" },
];

export default function Index() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const mouseX = useSpring(0, { damping: 25, stiffness: 100, mass: 1 });
  const mouseY = useSpring(0, { damping: 25, stiffness: 100, mass: 1 });

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set((e.clientX - centerX) * 0.04);
    mouseY.set((e.clientY - centerY) * 0.04);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <Helmet>
        <title>Best Digital Marketing Agency | SEO, PPC &amp; Social Media</title>
        <meta name="description" content="Anax Marketing offers ROI-focused SEO, PPC, Meta Ads &amp; Web Design services." />
        <link rel="canonical" href="https://anahmarketing.com/" />
      </Helmet>

      <style>{`
        /* ── Hero — Premium Light SaaS ──────────────────────────────── */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: var(--clr-bg);
          overflow: hidden;
          padding-top: 72px; /* account for fixed header */
        }
        .hero-bg-mesh {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 65% 75% at 75% 35%, rgba(178, 152, 220, 0.12) 0%, transparent 55%),
            radial-gradient(ellipse 55% 65% at 15% 75%, rgba(229, 179, 187, 0.1) 0%, transparent 55%),
            radial-gradient(ellipse 40% 50% at 50% 10%, rgba(255, 209, 186, 0.08) 0%, transparent 50%),
            var(--grad-hero);
          z-index: 0;
        }
        /* Subtle dot grid */
        .hero-dot-grid {
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(178, 152, 220, 0.12) 1px, transparent 1px);
          background-size: 36px 36px;
          z-index: 0;
          opacity: 0.6;
        }
        .hero-orb {
          position: absolute; border-radius: 50%;
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .hero-orb-1 {
          width: 600px; height: 600px;
          background: rgba(178, 152, 220, 0.18);
          top: -200px; right: 5%;
          animation: ds-float 14s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 500px; height: 500px;
          background: rgba(229, 179, 187, 0.15);
          bottom: -150px; left: 0;
          animation: ds-float 18s ease-in-out infinite reverse;
        }
        .hero-orb-3 {
          width: 350px; height: 350px;
          background: rgba(163, 196, 188, 0.12);
          top: 30%; left: 40%;
          animation: ds-float 10s ease-in-out infinite;
        }

        .hero-inner {
          max-width: 1340px; margin: 0 auto; padding: 5rem 2rem 5rem;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; gap: 4rem;
          position: relative; z-index: 1; width: 100%;
        }
        @media (max-width: 1024px) {
          .hero-inner { grid-template-columns: 1fr; gap: 3rem; text-align: center; padding: 3rem 1.5rem 4rem; }
          .hero-image-col { order: -1; }
        }

        /* Tag pill */
        .hero-tag {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(178, 152, 220, 0.25);
          color: var(--clr-primary);
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 0.5rem 1.4rem; border-radius: 999px; margin-bottom: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .hero-tag-dot {
          width: 6px; height: 6px;
          background: var(--clr-primary);
          border-radius: 50%;
          animation: pulse-dot 1.8s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(1.4); }
        }

        .hero-headline {
          font-size: clamp(2.8rem, 6vw, 5.2rem);
          font-weight: 900; line-height: 1.05;
          color: var(--clr-text-main);
          margin-bottom: 1.5rem;
          letter-spacing: -0.04em;
        }
        .hero-headline span {
          background: var(--grad-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub {
          font-size: 1.1rem; color: var(--clr-text-muted); line-height: 1.8;
          margin-bottom: 2.5rem; max-width: 480px;
        }
        @media (max-width: 1024px) { .hero-sub { margin: 0 auto 2.5rem; } }

        .hero-cta-group { display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap; }
        @media (max-width: 1024px) { .hero-cta-group { justify-content: center; } }

        /* Stats grid */
        .bento-stats {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 3.5rem;
        }
        .bento-stat-card {
          background: var(--clr-surface);
          backdrop-filter: blur(12px);
          border: 1px solid var(--clr-border);
          padding: 1.5rem; border-radius: var(--radius-lg);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;
          box-shadow: var(--shadow-sm);
        }
        .bento-stat-card:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: rgba(79,70,229,0.2);
          box-shadow: 0 12px 28px rgba(79,70,229,0.1);
        }
        .bento-stat-val {
          font-size: 2.2rem; font-weight: 900;
          line-height: 1; margin-bottom: 0.35rem;
          background: var(--grad-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bento-stat-label {
          font-size: 0.8rem; color: var(--clr-text-muted);
          text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600;
        }

        /* Hero image */
        .hero-img-container { position: relative; display: flex; justify-content: center; align-items: center; }
        .hero-main-img { max-width: 100%; filter: drop-shadow(0 32px 64px rgba(79,70,229,0.12)); }

        /* Float badge */
        .glass-badge {
          position: absolute;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(20px);
          border: 1px solid var(--clr-border);
          border-radius: 16px; padding: 0.9rem 1.2rem;
          display: flex; align-items: center; gap: 0.9rem;
          box-shadow: var(--shadow-md); z-index: 2;
        }
          /* ── Tablet ───────────────────────── */
@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 4rem 1.5rem;
  }

  .hero-image-col {
    order: -1;
  }

  .hero-sub {
    margin: 0 auto 2rem;
  }

  .hero-cta-group {
    justify-content: center;
  }
}

/* ── Mobile Only ─────────────────── */
@media (max-width: 768px) {

  .hero-section {
    min-height: auto;
    padding-top: 90px;
    padding-bottom: 3rem;
  }

  .hero-inner {
    padding: 2rem 1.2rem 3rem;
    gap: 2.5rem;
  }

  .hero-headline {
    font-size: clamp(2.2rem, 9vw, 3.2rem);
    line-height: 1.15;
    margin-bottom: 1rem;
  }

  .hero-sub {
    font-size: 0.95rem;
    line-height: 1.7;
    max-width: 100%;
    margin-bottom: 2rem;
  }

  .hero-tag {
    margin-bottom: 1.5rem;
  }

  .hero-cta-group {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    width: 100%;
  }

  .hero-cta-group a,
  .hero-cta-group button {
    width: 100%;
    justify-content: center;
  }

  .bento-stats {
    grid-template-columns: 1fr;
    margin-top: 2.5rem;
  }

  .bento-stat-card {
    padding: 1.2rem;
  }

  .bento-stat-val {
    font-size: 1.8rem;
  }

  .hero-main-img {
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
  }

  /* Reduce background effects only on mobile */
  .hero-orb {
    opacity: 0.4;
    filter: blur(60px);
  }

  .hero-orb-1 {
    width: 280px;
    height: 280px;
  }

  .hero-orb-2 {
    width: 220px;
    height: 220px;
  }

  .hero-orb-3 {
    width: 160px;
    height: 160px;
  }

  .hero-dot-grid {
    opacity: 0.3;
  }

  /* Floating badge fix */
  .glass-badge {
    transform: scale(0.85);
  }
}
      `}</style>

      <motion.section ref={heroRef} className="hero-section">
        <motion.div className="hero-bg-mesh" style={{ y: yBg, opacity: opacityBg }} />
        <div className="hero-dot-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        <div className="hero-inner">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="hero-tag">
              <div className="hero-tag-dot" />
              Next-Gen Growth Partner
            </div>
            <h1 className="hero-headline">
              Scale Beyond <br /><span>Expectations</span>
            </h1>
            <p className="hero-sub">
              We don't just run ads — we architect exponential growth ecosystems for premium brands ready to dominate their market.
            </p>
            <div className="hero-cta-group">
              <a href="/contact-us" className="ds-btn-primary">Ignite Growth <i className="fa-solid fa-arrow-right" /></a>
              <a href="/portfolio" className="ds-btn-ghost">View Case Studies</a>
            </div>

            <div className="bento-stats">
              {stats.map((stat, i) => (
                <motion.div key={i} className="bento-stat-card"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                >
                  <div className="bento-stat-val">{stat.value}</div>
                  <div className="bento-stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="hero-img-container hero-image-col"
            style={{ x: mouseX, y: mouseY, scale: scaleImage }}
          >
            <motion.img
              src={headerimg}
              alt="Data driven marketing"
              className="hero-main-img"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              className="glass-badge"
              style={{ bottom: "8%", left: "-8%" }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <div style={{
                background: "var(--grad-primary)", width: 40, height: 40,
                borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.1rem", color: "#fff", flexShrink: 0
              }}>
                <i className="fa-solid fa-chart-line" />
              </div>
              <div>
                <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.2 }}>98%</div>
                <div style={{ color: "#94a3b8", fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
