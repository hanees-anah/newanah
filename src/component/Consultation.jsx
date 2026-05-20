import React from "react";
import { motion } from "framer-motion";

export default function Consultation() {
  return (
    <>
      <style>{`
        /* ── CTA Section — Premium Luminous Light ──────────────────────── */
        .cta-section {
          position: relative;
          overflow: hidden;
          padding: 7rem 0;
          background: linear-gradient(135deg, #ffffff 0%, var(--clr-surface) 100%);
          border-top: 1px solid var(--clr-border);
          border-bottom: none;
        }
        /* Softer, luminous light gradients */
        .cta-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 80% at 20% 50%, rgba(92, 79, 229, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 70% at 80% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 60%);
        }
        /* Subtle grey dot grid */
        .cta-grid {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(rgba(9, 9, 11, 0.04) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.8;
        }
        .cta-orb-1 {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(92, 79, 229, 0.08) 0%, transparent 70%);
          top: -200px; left: -150px;
          animation: ds-float 10s ease-in-out infinite;
          pointer-events: none;
        }
        .cta-orb-2 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%);
          bottom: -150px; right: -100px;
          animation: ds-float 12s ease-in-out infinite reverse;
          pointer-events: none;
        }
        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
          padding: 0 1.5rem;
          text-align: center;
        }
        .cta-inner h2 {
          font-size: clamp(1.9rem, 4vw, 3rem);
          font-weight: 900;
          color: var(--clr-text-main);
          line-height: 1.15;
          margin: 0.75rem 0 1.25rem;
          letter-spacing: -0.03em;
        }
        .cta-inner h2 em {
          font-style: normal;
          background: var(--grad-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-inner p {
          color: var(--clr-text-secondary);
          font-size: 1rem;
          line-height: 1.75;
          margin: 0 auto 2.5rem;
          max-width: 520px;
        }
        .cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .cta-section .ds-btn-ghost {
          background: rgba(9, 9, 11, 0.02);
          border: 1px solid var(--clr-border-strong);
          color: var(--clr-text-main) !important;
        }
        .cta-section .ds-btn-ghost:hover {
          background: var(--clr-surface);
          border-color: var(--clr-primary);
          color: var(--clr-primary) !important;
          transform: translateY(-3px) scale(1.02);
        }
        /* Trust signals row */
        .cta-trust-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 3.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--clr-border);
        }
        .cta-trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--clr-text-muted);
          font-size: 0.83rem;
          font-weight: 500;
        }
        .cta-trust-item i { color: var(--clr-primary); }      .cta-trust-item i { color: var(--clr-primary); }
      `}</style>

      <section className="cta-section" aria-label="Call to action">
        <div className="cta-bg" />
        <div className="cta-grid" />
        <div className="cta-orb-1" />
        <div className="cta-orb-2" />

        <div className="cta-inner">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="ds-section-tag" style={{ margin: "0 auto 0.75rem" }}>Ready to Scale?</div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Ready to Scale Your Brand with<br />
            <em>Performance Marketing?</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            From Meta Ads and Google Ads to website development, we do exactly what a top-tier agency
            does — smarter, faster, and ROI-focused.
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            <a href="/contact-us" className="ds-btn-primary" style={{ fontSize: "1rem", padding: "0.9rem 2.4rem" }}>
              Let's Talk &nbsp;<i className="fa-solid fa-arrow-right" />
            </a>
            <a href="/portfolio" className="ds-btn-ghost" style={{ fontSize: "1rem", padding: "0.9rem 2.4rem" }}>
              View Our Work
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            className="cta-trust-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {[
              { icon: "fa-solid fa-shield-halved", label: "No long-term contracts" },
              { icon: "fa-solid fa-chart-line", label: "ROI-focused strategies" },
              { icon: "fa-solid fa-clock", label: "24h response time" },
              { icon: "fa-solid fa-star", label: "50+ brands scaled" },
            ].map(t => (
              <div className="cta-trust-item" key={t.label}>
                <i className={t.icon} />
                <span>{t.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}