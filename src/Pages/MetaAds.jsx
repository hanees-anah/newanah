import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Helmet } from "react-helmet";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Consultation from "../component/Consultation";
import About_Partner from "../component/About_partner";

import metaAdsImg1 from "../assets/images/meta-ads-img-1.png";
import metaAdsImg2 from "../assets/images/meta-ads-img-2.png";
import metaAds1 from "../assets/images/meta-ads-1.png";
import metaAds2 from "../assets/images/meta-ads-2.png";

const MagneticTilt = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div className={className} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
      <div style={{ transform: "translateZ(30px)", height: "100%" }}>{children}</div>
    </motion.div>
  );
};

export default function MetaAds() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroText = useTransform(scrollYProgress, [0, 0.3], ["0%", "80%"]);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} style={{ background: "var(--clr-bg)", overflow: "hidden" }}>
      <Helmet>
        <title>Meta Ads Services | Best Social Media Marketing Agency</title>
        <meta name="description" content="Grow your online presence with Anah Marketing's Meta ads! Partner with a top social media agency for effective, results-driven campaigns." />
        <link rel="canonical" href="https://anahmarketing.com/social-media-marketing-services" />
      </Helmet>

       

      <style>{`
                /* ── Service V3 Light Theme ──────────────────────── */
                .svc-v2-hero {
                    min-height: 70vh; display: flex; align-items: center; justify-content: center;
                    position: relative; border-bottom: 1px solid rgba(0,0,0,0.05); background: var(--clr-bg);
                }
                .svc-v2-hero::before {
                    content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 50% 100%, rgba(178, 152, 220, 0.12), transparent 70%);
                }
                .hero-content {
                    text-align: center; position: relative; z-index: 1; max-width: 900px; padding-top: 4rem;
                }
                .hero-content h1 {
                    font-size: clamp(3.5rem, 7vw, 6rem); font-weight: 900; color: var(--clr-text-main); margin-bottom: 1rem;
                    letter-spacing: -0.04em; line-height: 1.1; display: flex; flex-direction: column; align-items: center;
                }
                .hero-content h1 span { background: var(--grad-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

                .svc-v2-intro { padding: 8rem 0; perspective: 1500px; }
                .intro-grid {
                    max-width: 1400px; margin: 0 auto; padding: 0 2rem; display: flex; grid-template-columns: 1fr 1.2fr; gap: 4rem; align-items: center;
                }
                @media (max-width: 1024px) { .intro-grid { grid-template-columns: 1fr; } }

                .intro-bento {
                    background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(12px); border-radius: 30px; padding: 3rem; display: flex; flex-direction: column; gap: 1.5rem; transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                    ;
                }
                .intro-bento:hover { border-color: rgba(178, 152, 220, 0.3); ; transform: translateY(-4px) scale(1.02); }
                .intro-bento h2 { font-size: 2.5rem; font-weight: 900; color: var(--clr-text-main); line-height: 1.1; letter-spacing: -0.02em; }
                .intro-bento p { font-size: 1.1rem; color: var(--clr-text-secondary); line-height: 1.8; margin: 0; }

                .intro-image-stack { position: relative; }
                .img-primary { border-radius: 24px; overflow: hidden;}
                .img-primary img { width: 100%; height: auto; display: block; }

                .svc-v2-details { padding: 6rem 0 10rem; }
                .details-grid {
                    max-width: 1400px; margin: 0 auto; padding: 0 2rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem;
                }
                @media (max-width: 900px) { .details-grid { grid-template-columns: 1fr; } }
                
                .feature-bento {
                    background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 30px; padding: 3rem; display: flex; flex-direction: column; gap: 1.5rem; transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); position: relative; overflow: hidden;
                    box-shadow: var(--shadow-sm);
                }
                .feature-bento:hover { border-color: rgba(178, 152, 220, 0.3); transform: translateY(-5px); box-shadow: var(--shadow-lg); background: var(--clr-surface); }
                .feature-bento::before {
                    content: ''; position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: rgba(178, 152, 220, 0.15); filter: blur(40px); border-radius: 50%; z-index: 0;
                }
                .feature-icon-wrap { position: relative; z-index: 1; border-radius: 20px; overflow: hidden; height: 250px; margin-bottom: 1rem; border: 1px solid rgba(0,0,0,0.03); }
                .feature-icon-wrap img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
                .feature-bento:hover .feature-icon-wrap img { transform: scale(1.05); }

                .feature-bento h3 { position: relative; z-index: 1; font-size: 2rem; font-weight: 800; color: var(--clr-text-main); margin: 0; }
                .feature-bento p { position: relative; z-index: 1; font-size: 1.05rem; color: var(--clr-text-secondary); line-height: 1.7; margin: 0; }
            @media (max-width: 1024px) {
  .intro-grid {
    flex-direction: column;
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .svc-v2-intro {
    padding: 4rem 0;
  }

  .intro-grid {
    padding: 0 1rem;
    gap: 2rem;
  }

  /* IMAGE FIX */
  .intro-image-stack {
    width: 100%;
  }

  .img-primary {
    width: 100%;
    border-radius: 18px;
  }

  .img-primary img {
    width: 100%;
    height: auto;
    display: block;
  }

  /* TEXT PANEL FIX */
  .intro-bento {
    padding: 1.5rem;
    border-radius: 18px;
  }

  .intro-bento h2 {
    font-size: 1.6rem !important;
    line-height: 1.2;
  }

  .intro-bento p {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  /* BUTTON FIX */
  .intro-bento a {
    width: 100%;
    text-align: center;
  }
}

/* SMALL MOBILE */
@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }

  .intro-bento {
    padding: 1.2rem;
  }

  .intro-bento h2 {
    font-size: 1.4rem !important;
  }
}
  @media (max-width: 768px) {
  .img-primary {
    width: 70%;
    max-width: 260px;
    margin: 0 auto;
  }
}
            `}</style>

      <section className="svc-v2-hero">
        <motion.div className="hero-content" style={{ y: yHeroText, opacity: opacityHeroText }}>
          <div className="ds-section-tag" style={{ margin: "0 auto 1.5rem" }}>Service</div>
          <h1>Meta <span>Ads</span></h1>
          <p style={{ color: "var(--clr-text-secondary)", fontSize: "1.1rem", lineHeight: "1.7", maxWidth: "600px", margin: "1.5rem auto 0" }}>
            Supercharge your brand. We design data-driven ad architectures globally recognized for extreme scaling and unmatched ROAS.
          </p>
        </motion.div>
      </section>

      <section className="svc-v2-intro">
        <div className="intro-grid">
          <MagneticTilt className="intro-image-stack">
            <div className="img-primary">
              <img src={metaAdsImg1} alt="Meta Ads Marketing" />
            </div>
          </MagneticTilt>

          <MagneticTilt className="intro-bento">
            <div className="ds-section-tag" style={{ alignSelf: "flex-start" }}>Targeted Growth</div>
            <h2>Algorithmic Supremacy.</h2>
            <p>
              Meta Ads aren't just about clicks—they're about real business growth. We craft data-driven ad strategies that cut through the noise and put your brand in front of the right audience.
            </p>
            <p>
              With precise targeting, compelling creatives, and continuous optimization, we engineer campaigns that relentlessly drive conversion. Whether scaling revenue or capturing unparalleled market share.
            </p>
            <a href="/contact-us" className="ds-btn-primary" style={{ alignSelf: "flex-start", marginTop: "1rem" }}>
              Deploy Strategy <i className="fa-solid fa-arrow-right" />
            </a>
          </MagneticTilt>
        </div>
      </section>

      <About_Partner />

      <section className="svc-v2-details">
        <div className="details-grid">
          <MagneticTilt className="feature-bento">
            <div className="ds-section-tag" style={{ alignSelf: "flex-start" }}>Phase 1</div>
            <div className="feature-icon-wrap">
              <img src={metaAds1} alt="Audience Research & Targeting" />
            </div>
            <h3>Deep-Target Architecture</h3>
            <p>We leverage Meta's advanced targeting algorithms to pinpoint high-intent audiences. Our methodology bypasses superficial metrics, focusing strictly on behaviors and demographics that guarantee hyper-engagement and maximum yield on ad spend.</p>
          </MagneticTilt>

          <MagneticTilt className="feature-bento">
            <div className="ds-section-tag" style={{ alignSelf: "flex-start" }}>Phase 2</div>
            <div className="feature-icon-wrap" style={{ background: "rgba(0,198,173,0.05)" }}>
              <img src={metaAds2} alt="Ad Creatives & Optimization" style={{ objectFit: "contain" }} />
            </div>
            <h3>Creative Iteration Loops</h3>
            <p>A great ad commands action. We deploy high-converting visual assets paired with persuasive psychological hooks. Through aggressive multivariate A/B testing and algorithmic learning, we isolate the highest performing creative combinations.</p>
          </MagneticTilt>
        </div>
      </section>

      <Consultation />
      <Footer />
    </div>
  );
}
