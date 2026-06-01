import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Helmet } from "react-helmet";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Consultation from "../component/Consultation";
import Partner from "../component/Partner";
import WorkArea from "../component/Work_area";
import About_Partner from "../component/About_partner";
import about from "../assets/images/about-us-img2.png";
import about1 from "../assets/images/about-us-img1.png";

const stats = [
  { value: "50+", label: "Brands Scaled" },
  { value: "₹10Cr+", label: "Ad Spend Managed" },
  { value: "8x", label: "Average ROAS" },
  { value: "98%", label: "Client Retention" },
];

const values = [
  { icon: "fa-solid fa-bullseye", title: "Our Mission", body: "No shortcuts, no guesswork. Just performance marketing that delivers tangible ROI. We help brands cut through the noise and scale with confidence." },
  { icon: "fa-solid fa-earth-americas", title: "Our Vision", body: "We envision a future where every brand, big or small, has the tools and strategies to thrive online — making high-performance marketing accessible." },
  { icon: "fa-solid fa-chart-line", title: "Our Value", body: "Scaling a brand isn't just about ads—it's about structured content, audience insights, and constant optimization for sustainable growth." },
];

const MagneticTilt = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div className={className} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div style={{ transform: "translateZ(40px)", height: "100%" }}>{children}</div>
    </motion.div>
  );
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const yHeroText = useTransform(scrollYProgress, [0, 0.2], ["0%", "150%"]);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const img1Y = useTransform(scrollYProgress, [0.1, 0.4], ["15%", "-15%"]);
  const img2Y = useTransform(scrollYProgress, [0.1, 0.4], ["-15%", "15%"]);

  return (
    <div ref={containerRef} style={{ background: "var(--clr-bg)" }}>
      <Helmet>
        <title>About Anax Marketing | Your Digital Growth Partner</title>
        <meta name="description" content="Discover Anax Marketing – a results-driven digital marketing agency." />
        <link rel="canonical" href="https://anahmarketing.com/about-us" />
      </Helmet>

      <style>{`
                .awwwards-hero {
                    min-height: 80vh; display: flex; align-items: center; justify-content: center;
                    position: relative; overflow: hidden; border-bottom: 1px solid rgba(0,0,0,0.05);
                }
                .awwwards-hero::before {
                    content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 50% 100%, rgba(178, 152, 220, 0.15), transparent 60%);
                }
                .hero-content {
                    text-align: center; position: relative; z-index: 1; max-width: 900px;
                }
                .hero-content h1 {
                    font-size: clamp(3rem, 6vw, 5rem); font-weight: 900; color: var(--clr-text-main); margin-bottom: 1rem;
                    letter-spacing: -0.04em; line-height: 1.1;
                }
                .hero-content h1 span { background: var(--grad-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                
                .awwwards-intro {
                    padding: 8rem 0; overflow: hidden; perspective: 1500px; background: var(--clr-navy);
                }
                .intro-grid {
                    max-width: 1400px; margin: 0 auto; padding: 0 2rem; display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem; align-items: center;
                }
                @media (max-width: 1024px) {
                    .intro-grid { grid-template-columns: 1fr; }
                }
                .photo-stack { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
                .photo-card { border-radius: 20px; overflow: hidden; }
                .photo-card img { width: auto; height: auto; object-fit: cover; filter: none; transition: 0.5s; }
                .photo-card:hover img { transform: scale(1.05); }

                .text-content h2 { font-size: 3rem; font-weight: 900; color: var(--clr-text-main); margin-bottom: 2rem; line-height: 1.1; letter-spacing: -0.03em; }
                .text-content p { font-size: 1.1rem; color: var(--clr-text-secondary); line-height: 1.8; margin-bottom: 1.5rem; }

                .awwwards-stats {
                    padding: 6rem 0; border-top: 1px solid rgba(0,0,0,0.05); border-bottom: 1px solid rgba(0,0,0,0.05); background: #ffffff;
                }
                .stats-grid {
                    max-width: 1400px; margin: 0 auto; padding: 0 2rem; display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem;
                }
                @media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
                .stat-box { text-align: center; }
                .stat-num { font-size: 4rem; font-weight: 900; background: var(--grad-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.5rem; line-height: 1; }
                .stat-lbl { font-size: 0.9rem; font-weight: 700; color: var(--clr-text-muted); text-transform: uppercase; letter-spacing: 0.1em; }

                .awwwards-values { padding: 8rem 0; background: var(--clr-navy-2); }
                .values-grid {
                    max-width: 1400px; margin: 0 auto; padding: 0 2rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;
                }
                @media (max-width: 900px) { .values-grid { grid-template-columns: 1fr; } }
                .bento-value {
                    background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 24px; padding: 3rem;
                    display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start; transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                    box-shadow: var(--shadow-sm);
                }
                .bento-value:hover { border-color: rgba(178, 152, 220, 0.4); box-shadow: var(--shadow-md); transform: translateY(-4px) scale(1.02); background: var(--clr-surface); }
                .bento-value i { font-size: 2.5rem; color: var(--clr-primary); background: rgba(178, 152, 220, 0.15); padding: 1.2rem; border-radius: 16px; }
                .bento-value h3 { font-size: 1.8rem; font-weight: 800; color: var(--clr-text-main); }
                .bento-value p { font-size: 1.05rem; color: var(--clr-text-secondary); line-height: 1.7; margin: 0; }
          
          `}</style>

       

      <section className="awwwards-hero">
        <motion.div className="hero-content" style={{ y: yHeroText, opacity: opacityHeroText }}>
          <h1>The Architects of <br /><span>Digital Growth</span></h1>
          <div className="ds-section-tag">About Us</div>
        </motion.div>
      </section>

      <section className="awwwards-intro">
        <div className="intro-grid">
          <div className="text-content">
            <h2>We build ecosystems, <br />not just campaigns.</h2>
            <p>At Anax Marketing, we are driven by one singular objective: exponential scaling. We reject vanity metrics and superficial growth hacks in favor of robust, data-backed architectures that stand the test of time.</p>
            <p>Since our inception, we have partnered with over 50 visionary brands, deploying over ₹5Cr+ in strategic ad spends while maintaining an industry-leading 98% retention rate.</p>
          </div>
          <div className="photo-stack">
            <motion.div className="photo-card" style={{ y: img1Y, height: "400px" }}>
              <img src={about1} alt="Team 1" />
            </motion.div>
            <motion.div className="photo-card" style={{ y: img2Y, height: "300px", marginTop: "100px" }}>
              <img src={about} alt="Team 2" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="awwwards-stats">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div key={i} className="stat-box" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ type: "spring", delay: i * 0.1 }} viewport={{ once: true }}>
              <div className="stat-num">{s.value}</div>
              <div className="stat-lbl">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="awwwards-values">
        <div className="values-grid">
          {values.map((v, i) => (
            <MagneticTilt key={i} className="bento-value">
              <i className={v.icon} />
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </MagneticTilt>
          ))}
        </div>
      </section>

      <WorkArea />
      <Partner />
      <Consultation />
      <Footer />
    </div>
  );
}
