import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | ANAH Marketing</title>
      </Helmet>
       
      <style>{`
        .notfound-section {
          background: var(--clr-bg);
          min-height: calc(100vh - 72px);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 4rem 1.5rem;
        }
        .notfound-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 60% at 30% 40%, rgba(14, 165, 233, 0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 70% 60%, rgba(99, 102, 241, 0.07) 0%, transparent 60%);
        }
        .notfound-inner {
          text-align: center;
          position: relative;
          z-index: 1;
          max-width: 600px;
        }
        .notfound-big {
          font-size: clamp(7rem, 18vw, 12rem);
          font-weight: 900;
          line-height: 1;
          background: var(--grad-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.04em;
          margin-bottom: 0;
        }
        .notfound-inner h2 {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 700;
          color: var(--clr-text-main);
          margin: 0 0 1rem;
        }
        .notfound-inner p {
          color: var(--clr-text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
          max-width: 420px;
          margin: 0 auto 2.5rem;
        }
        .notfound-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `}</style>

      <section className="notfound-section" aria-label="404 Page not found">
        <div className="notfound-inner">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          >
            <div className="notfound-big">404</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Oops! Page Not Found</h2>
            <p>
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
            <div className="notfound-buttons">
              <a href="/" className="ds-btn-primary">
                Go Home &nbsp;<i className="fa-solid fa-house" />
              </a>
              <a href="/contact-us" className="ds-btn-ghost">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
