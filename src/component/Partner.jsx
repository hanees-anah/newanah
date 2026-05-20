import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

import about from "../assets/images/about-us-img-2.png";
import about1 from "../assets/images/about-us-img-1.png";

// Marquee logos
import Shopify_Logo from "../assets/images/Shopify_Logo.png";
import pragma_logo from "../assets/images/pragma_logo.png";
import razorpay from "../assets/images/razorpay-img.png";
import Whatmore from "../assets/images/Whatmore-img.png";
import engati from "../assets/images/engati-img.png";
import { col } from "framer-motion/client";

const partnerLogos = [Shopify_Logo, pragma_logo, razorpay, Whatmore, engati, Shopify_Logo, pragma_logo, razorpay, Whatmore, engati];

// Use custom 3D magnetic tilt wrapper for images
const MagneticTilt = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div className={className} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div style={{ transform: "translateZ(40px)", width: "100%", height: "100%" }}>{children}</div>
    </motion.div>
  );
};

export default function Partner() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  // Parallax logic
  const img1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const img2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div ref={containerRef}>
      <style>{`
                 /* ── Partners Marquee Light SaaS ─────────────────────── */
                .marquee-section {
                    background: var(--clr-bg); padding: 3rem 0; border-top: 1px solid rgba(9, 9, 11, 0.05);
                    border-bottom: 1px solid rgba(9, 9, 11, 0.05);  align-items: center; overflow: hidden;
                }
                .marquee-title { font-size: 1.5rem; font-weight: 800; color: var(--clr-text-main); white-space: nowrap;display: flex;
    align-items: center;
    justify-content: center; }
                .marquee-title span { background: var(--grad-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-left:5px}
                
                .marquee-track {margin-top: 15px;
                    display: flex; gap: 4rem; align-items: center; white-space: nowrap;
                    animation: marquee 30s linear infinite;
                    mask-image: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
                    -webkit-mask-image: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
                }
                @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                
                .marquee-track img { height: 45px; width: auto; filter: grayscale(1) opacity(0.5); transition: 0.3s; }
                .marquee-track img:hover { filter: grayscale(0) opacity(1); }

                /* ── About Section Light ─────────────────────── */
                .awwwards-about {
                    background: var(--clr-surface); padding: 8rem 0; overflow: hidden; position: relative;
                }
                .awwwards-about::after {
                    content: ''; position: absolute; top: 30%; left: 50%; width: 600px; height: 600px;
                    background: radial-gradient(circle, rgba(178, 152, 220, 0.1), transparent 70%); transform: translate(-50%, -50%); pointer-events: none; z-index: 0;
                }
                
                .about-grid {
                    max-width: 1400px; margin: 0 auto; padding: 0 2rem; display: grid; grid-template-columns: 1fr 1.2fr 1fr;
                    align-items: center; gap: 4rem; position: relative; z-index: 1; perspective: 1500px;
                }
                @media (max-width: 1024px) { .about-grid { grid-template-columns: 1fr; text-align: center; } .img-left, .img-right { display: none; } }

                .img-container { position: relative; border-radius: 24px; overflow: hidden; }
                .img-container img { width: 100%; height: 100%; object-fit: cover; }
                
                .about-text-center h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; line-height: 1.1; margin-bottom: 2rem; letter-spacing:-0.03em; color: var(--clr-text-main); }
                .about-text-center h2 span { background: var(--grad-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .about-text-center p { font-size: 1.1rem; color: var(--clr-text-secondary); line-height: 1.8; margin-bottom: 2rem; font-weight: 500; }
            
/* Tablet fix */
@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }

  
}
@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }

  .img-left,
  .img-right {
    display: block; /* keep images */
  }

  .about-grid {
    justify-items: center;
  }
}
/* Mobile fix */
@media (max-width: 768px) {
  .img-container {
    width: 90%;
    max-width: 380px; /* increased from 280px */
    margin: 0 auto;
  }

  .img-container img {
    width: 100%;
    height: auto;
    display: block;
  }

  .about-grid {
    padding: 0 1rem;
  }
}

/* Small mobile */
@media (max-width: 480px) {
  .about-text-center h2 {
    font-size: 1.5rem;
  }
}

`}</style>

      <section className="marquee-section">
        <div className="marquee-title">Trusted by <span> Industry Leaders </span></div>
        <div className="marquee-track">
          {/* Double array for seamless loop */}
          {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
            <img key={idx} src={logo} alt="Partner" />
          ))}
        </div>
      </section>

      <section className="awwwards-about">
        <div className="about-grid">
          <motion.div className="img-left" style={{ y: img1Y }}>
            <MagneticTilt className="img-container">
              <img src={about1} alt="About ANAH" />
              {/* <div style={{ position: "absolute", bottom: -20, right: -20, width: 80, height: 80, background: "var(--grad-primary)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", color: "#fff", boxShadow: "0 10px 30px rgba(178, 152, 220, 0.3)" }}>
                <i className="fa-solid fa-rocket" />
              </div> */}
            </MagneticTilt>
          </motion.div>

          <div className="about-text-center">
            <div className="ds-section-tag" style={{ margin: "0 auto 1.5rem" }}>Who We Are</div>
            <h2>We Don't Just Play The Game. <br /><span>We Change It.</span></h2>
            <p>
              ANAH Marketing was forged on the belief that transparency, data, and relentless optimization are the only metrics that matter. No fluff. Just absolute performance.
            </p>
            <p>
              With over ₹10Cr+ in ad spend managed, we engineer high-velocity growth systems for exclusive brands demanding extreme results.
            </p>
            <a href="/about-us" className="ds-btn-primary" style={{ display: "inline-flex" }}>Discover Our DNA</a>
          </div>

          <motion.div className="img-right" style={{ y: img2Y }}>
            <MagneticTilt className="img-container">
              <img src={about} alt="Performance" />
              {/* <div style={{ position: "absolute", top: -20, left: -20, width: 80, height: 80, background: "var(--clr-primary)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", color: "#fff", boxShadow: "0 10px 30px rgba(178, 152, 220, 0.3)" }}>
                <i className="fa-solid fa-chart-line" />
              </div> */}
            </MagneticTilt>
          </motion.div>
        </div>
      </section>
    </div>
  );
}