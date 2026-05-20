import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import our_value_img from "../assets/images/our-value-img.jpg";
import Shopify_img from "../assets/images/Shopify-img.png";

const missionVision = [
   {
      icon: "fa-solid fa-bullseye",
      tag: "Mission",
      title: "We're more than marketers.",
      body: "No shortcuts, no guesswork. Just performance marketing that delivers tangible ROI. We help brands cut through the noise and scale with confidence.",
   },
   {
      icon: "fa-solid fa-earth-americas",
      tag: "Vision",
      title: "Empowering total dominance.",
      body: "We envision a future where every brand, big or small, has the tools and strategies to thrive online — making high-performance marketing accessible.",
   },
];

const shopifyFeatures = [
   { title: "Custom Shopify Design", desc: "Tailor-made and eye-catching Shopify stores." },
   { title: "Store Migration", desc: "Smooth migration of your existing store to Shopify." },
   { title: "Integration Services", desc: "Connect and optimise with powerful third-party apps." },
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

export default function Service() {
   return (
      <>
         <style>{`
        .awwwards-service {
          background: var(--clr-bg);
          padding: 4rem 0;
          overflow: hidden;
          perspective: 1500px;
          border-top: 1px solid var(--clr-border);
          border-bottom: 1px solid var(--clr-border);
        }
        .awwwards-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 1024px) {
           .awwwards-inner { grid-template-columns: 1fr; }
        }

        /* Large feature card */
        .bento-large {
           background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
           border: 1px solid rgba(255, 255, 255, 0.9);
           border-radius: var(--radius-2xl); padding: 3.5rem; overflow: hidden; position: relative;
           display: flex; flex-direction: column; justify-content: space-between;
           transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
           box-shadow: var(--shadow-sm);
        }
        .bento-large:hover { border-color: rgba(178,152,220,0.3); box-shadow: var(--shadow-lg); transform: translateY(-4px); }
        .bento-large h2 { font-size: clamp(2.4rem, 4vw, 3.2rem); font-weight: 900; color: var(--clr-text-main); line-height: 1.05; margin-bottom: 2rem; letter-spacing: -0.04em; }
        .bento-large h2 span { background: var(--grad-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .bento-large-img-wrapper { margin-top: 3rem; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.04); }
        .bento-large-img-wrapper img { width: 100%; height: 350px; object-fit: cover; }

        /* Small feature cards array */
        .bento-grid-right { display: flex; flex-direction: column; gap: 2rem; }
        .bento-small {
           background: var(--clr-surface); border: 1px solid var(--clr-border);
           border-radius: var(--radius-xl); padding: 2.5rem; flex: 1; transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
           box-shadow: var(--shadow-xs);
        }
        .bento-small:hover { border-color: var(--clr-border-hover); box-shadow: var(--shadow-md); transform: translateY(-4px) scale(1.01); }
        .bento-small i { font-size: 2rem; color: var(--clr-primary); margin-bottom: 1.5rem; }
        .bento-small h3 { font-size: 1.8rem; font-weight: 800; color: var(--clr-text-main); margin-bottom: 1rem; }
        .bento-small p { font-size: 1rem; color: var(--clr-text-secondary); line-height: 1.6; }

        .shopify-banner { background: linear-gradient(135deg, rgba(79,70,229,0.05) 0%, rgba(124,58,237,0.05) 100%); margin-top: 2rem; border-color: rgba(79,70,229,0.12) !important; display: flex; align-items: center; gap: 2rem; }
        @media (max-width: 768px) { .shopify-banner { flex-direction: column; } }
        `}</style>

         <section className="awwwards-service">
            <div className="awwwards-inner">
               <MagneticTilt className="bento-large">
                  <div>
                     <div className="ds-section-tag">Core Value Proposition</div>
                     <h2>Scalable. <br /><span>Measurable.</span><br />Relentless.</h2>
                  </div>
                  <div className="bento-large-img-wrapper">
                     <img src={our_value_img} alt="Our Values" />
                  </div>
               </MagneticTilt>

               <div className="bento-grid-right">
                  {missionVision.map((mv, i) => (
                     <MagneticTilt key={i} className="bento-small">
                        <i className={mv.icon} />
                        <div style={{ textTransform: 'uppercase', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--clr-primary)', marginBottom: '0.5rem' }}>{mv.tag}</div>
                        <h3>{mv.title}</h3>
                        <p>{mv.body}</p>
                     </MagneticTilt>
                  ))}
               </div>
            </div>

            {/* <div className="awwwards-inner" style={{ marginTop: "2rem", display: "block" }}>
               <MagneticTilt className="bento-small shopify-banner">
                  <div style={{ flex: 1 }}>
                     <img src={Shopify_img} alt="Shopify Dev" style={{ maxWidth: 200, marginBottom: "1rem" }} />
                     <h3 style={{ fontSize: "2.5rem" }}>eCommerce Built to Sell.</h3>
                     <p style={{ maxWidth: 500 }}>Turn your vision into an unstoppable eCommerce machine with our high-converting custom Shopify development strategies.</p>
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                     {shopifyFeatures.map((feat, i) => (
                        <div key={i} style={{ background: "rgba(255,255,255,0.8)", padding: "1.5rem", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)" }}>
                           <div style={{ color: "var(--clr-text-main)", fontWeight: 700, marginBottom: "0.5rem" }}>{feat.title}</div>
                           <div style={{ color: "var(--clr-text-secondary)", fontSize: "0.9rem" }}>{feat.desc}</div>
                        </div>
                     ))}
                  </div>

               </MagneticTilt>
            </div> */}
         </section>
      </>
   );
}