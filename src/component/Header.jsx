import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import logo from "../assets/images/logo-img.png"; // Assuming this logo looks good on light or needs a filter

const services = [
  { label: "Meta Ads", href: "/social-media-marketing-services" },
  { label: "Google Ads", href: "/google-ads-services" },
  { label: "Email Marketing", href: "/email-marketing-services" },
  { label: "WhatsApp Marketing", href: "/whatsapp-marketing-services" },
  { label: "Search Engine Optimisation", href: "/seo-company" },
  { label: "Website Development", href: "/website-development-company" },
  { label: "Mobile App Development", href: "/mobile-app-development-company" },
  { label: "Shopify Development", href: "/shopify-development-services" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Blogs", href: "/blog" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mServicesOpen, setMServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  /* Scroll dynamic intensity for Dark Glass Island */
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 100], ["rgba(9, 8, 21, 0.75)", "rgba(15, 13, 30, 0.88)"]);
  const navBorder = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0.08)", "rgba(255, 255, 255, 0.12)"]);
  const navFilter = useTransform(scrollY, [0, 100], ["blur(16px)", "blur(24px)"]);
  const navShadow = useTransform(scrollY, [0, 100], ["0 8px 32px rgba(0, 0, 0, 0.25)", "0 8px 32px rgba(0, 0, 0, 0.35)"]);

  /* Close drawer on route change */
  useEffect(() => { setDrawerOpen(false); }, [location]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setServicesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adjust logo to be visible in light mode if it's currently a white logo
  // Using CSS filter to invert or hue shift based on asset availability.

  const isActive = (href) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <style>{`
        /* ── Navbar (Floating Pill) ──────────────────────────────── */
            .anah-nav {
          position: fixed;
          top: 1.5rem; left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 3rem);
          max-width: 1200px;
          z-index: 9999;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          background: #fff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-sm);
        }
        .anah-nav.scrolled {
          background: rgba(9, 8, 21, 0.88);
          box-shadow: var(--shadow-md);
          border-color: rgba(255, 255, 255, 0.12);
          top: 1rem;
        }
        .anah-nav-inner {
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* ── Logo ───────────────────────────────────── */
        .anah-logo img {
          max-height: 44px;
          width: auto;
          display: block;
          filter: none; /* Premium clean white logo rendering */
        }

        /* ── Desktop Nav Links ──────────────────────── */
        .anah-nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          list-style: none;
          margin: 0; padding: 0;
        }
        .anah-nav-links > li { position: relative; }
        .anah-nav-links > li > a,
        .anah-nav-links > li > button {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: #000000;
          font-size: 0.9rem;
          font-weight: 500;
          font-family: var(--font-primary);
          text-decoration: none;
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          border: none;
          background: none;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .anah-nav-links > li > a:hover,
        .anah-nav-links > li > button:hover {
          color: #ffffff;
          background: var(--grad-primary);
        }
        .anah-nav-links > li > a.active,
        .anah-nav-links > li > button.active {
          color: #ffffff;
          background: var(--grad-primary);
          font-weight: 600;
        }
        .anah-chevron {
          font-size: 0.7rem;
          transition: transform 0.25s;
        }
        .anah-chevron.open { transform: rotate(180deg); }

        /* ── Dropdown ───────────────────────────────── */
        .anah-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 240px;
          background: rgba(9, 8, 21, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 0.5rem;
          box-shadow: 0 16px 48px rgba(0,0,0,0.4);
          z-index: 10;
        }
        .anah-dropdown a {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 1rem;
          border-radius: 9px;
          color: #e2e8f0;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .anah-dropdown a::before {
          content:'';
          width:6px; height:6px;
          border-radius:50%;
          background: var(--clr-primary);
          flex-shrink:0;
          opacity:0;
          transition: opacity 0.2s;
        }
        .anah-dropdown a:hover {
          background: rgba(92, 79, 229, 0.15);
          color: #ffffff;
        }
        .anah-dropdown a:hover::before { opacity:1; }

        /* ── CTA Button ─────────────────────────────── */
        .anah-nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--grad-primary);
          color: #fff !important;
          font-size: 0.875rem;
          font-weight: 600;
          font-family: var(--font-primary);
          padding: 0.6rem 1.6rem;
          border-radius: 999px;
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: var(--shadow-primary);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .anah-nav-cta:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: var(--shadow-primary-lg);
          color: #fff !important;
        }
        .anah-nav-cta svg { transition: transform 0.25s; }
        .anah-nav-cta:hover svg { transform: translateX(3px); }

        /* ── Hamburger ──────────────────────────────── */
        .anah-hamburger {
          display: none;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          width: 42px; height: 42px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          color: #000000;
          font-size: 1.1rem;
          transition: background 0.2s;
        }
        .anah-hamburger:hover { background: rgba(255, 255, 255, 0.08); }

        /* ── Mobile Drawer ──────────────────────────── */
        .anah-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 10000;
        }
        .anah-drawer {
          position: fixed;
          top: 0; right: 0;
          width: min(340px, 90vw);
          height: 100dvh;
          background: #eceaf2;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          z-index: 10001;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.5);
        }
        .anah-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .anah-drawer-close {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255, 255, 255, 0.04);
          border: none; border-radius: 8px;
          color: #000; cursor: pointer; font-size: 1rem;
          transition: background 0.2s;
        }
        .anah-drawer-close:hover { background: rgba(255, 255, 255, 0.08); }
        .anah-drawer-nav {
          flex: 1;
          padding: 1rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .anah-drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          border-radius: 10px;
          color: #000;
          font-size: 0.95rem;
          font-weight: 500;
          font-family: var(--font-primary);
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          cursor: pointer;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
        }
        .anah-drawer-link:hover,
        .anah-drawer-link.active {
          background: var(--grad-primary);
          color: #ffffff;
        }
        .anah-drawer-services {
          padding: 0.25rem 0 0.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0; 
          border-left: 2px solid rgba(92, 79, 229, 0.4);
          margin-left: 1rem;
        }
        .anah-drawer-services a {
          display: block;
          padding: 0.6rem 0.75rem;
          color: #94a3b8;
          font-size: 0.88rem;
          font-weight: 500;
          font-family: var(--font-primary);
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.2s, color 0.2s;
        }
        .anah-drawer-services a:hover {
          color: #ffffff;
          background: rgba(92, 79, 229, 0.1);
        }
        .anah-drawer-footer {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .anah-drawer-contact {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #000;
          font-size: 0.85rem;
          font-family: var(--font-primary);
          text-decoration: none;
          transition: color 0.2s;
        }
        .anah-drawer-contact:hover { color: #ffffff; }
        .anah-drawer-contact-icon {
          width: 32px; height: 32px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          display: flex; align-items: center; justify-content: center;
          color: #000;
          flex-shrink: 0;
          font-size: 0.8rem;
        }

        /* ── Social Row ─────────────────────────────── */  
        .anah-drawer-social {
          display: flex; gap: 0.5rem; margin-top: 0.25rem;
        }
        .anah-drawer-social a {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          display: flex; align-items: center; justify-content: center;
          color: #000;
          font-size: 0.9rem;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .anah-drawer-social a:hover {
          background: rgba(92, 79, 229, 0.15);
          color: #ffffff;
          border-color: rgba(92, 79, 229, 0.4);
        }

        /* ── Responsive breakpoint ──────────────────── */
        @media (max-width: 991px) {
          .anah-nav-links,
          .anah-nav-cta { display: none !important; }
          .anah-hamburger { display: flex; }
        }
      `}</style>

      {/* ── Fixed Navbar ─────────────────────────── */}
      <motion.nav
        className={`anah-nav ${scrolled ? "scrolled" : ""}`}
        style={{ backgroundColor: "#fff", borderBottomColor: navBorder, backdropFilter: navFilter, boxShadow: navShadow, position: "fixed" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="anah-nav-inner">

          {/* Logo */}
          <a href="/" className="anah-logo" aria-label="ANAH Marketing – Home">
            <img src={logo} alt="ANAH Marketing" />
          </a>

          {/* Desktop Links */}
          <ul className="anah-nav-links">
            {navLinks.slice(0, 2).map((l) => (
              <li key={l.href}>
                <a href={l.href} className={isActive(l.href) ? "active" : ""}>{l.label}</a>
              </li>
            ))}

            {/* Services dropdown */}
            <li ref={dropdownRef}>
              <button
                className={services.some(s => isActive(s.href)) ? "active" : ""}
                onClick={() => setServicesOpen(o => !o)}
                aria-expanded={servicesOpen}
              >
                Services
                <i className={`fa-solid fa-chevron-down anah-chevron${servicesOpen ? " open" : ""}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className="anah-dropdown"
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                  >
                    {services.map((s) => (
                      <a key={s.href} href={s.href} onClick={() => setServicesOpen(false)}>{s.label}</a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {navLinks.slice(2, 4).map((l) => (
              <li key={l.href}>
                <a href={l.href} className={isActive(l.href) ? "active" : ""}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="/contact-us" className="anah-nav-cta">
            Let's Talk
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Hamburger */}
          <button className="anah-hamburger" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ────────────────────────────── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="anah-drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              className="anah-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
            >
              {/* Header */}
              <div className="anah-drawer-header">
                <a href="/" className="anah-logo">
                  <img src={logo} alt="ANAH Marketing" />
                </a>
                <button className="anah-drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>

              {/* Nav */}
              <nav className="anah-drawer-nav">
                <a href="/" className={`anah-drawer-link${location.pathname === "/" ? " active" : ""}`}>
                  Home
                </a>
                <a href="/about-us" className={`anah-drawer-link${isActive("/about-us") ? " active" : ""}`}>
                  About Us
                </a>

                {/* Services accordion */}
                <button
                  className={`anah-drawer-link${services.some(s => isActive(s.href)) ? " active" : ""}`}
                  onClick={() => setMServicesOpen(o => !o)}
                >
                  Services
                  <i className={`fa-solid fa-chevron-down anah-chevron${mServicesOpen ? " open" : ""}`} />
                </button>
                <AnimatePresence>
                  {mServicesOpen && (
                    <motion.div
                      className="anah-drawer-services"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      style={{ overflow: "hidden" }}
                    >
                      {services.map((s) => (
                        <a key={s.href} href={s.href}>{s.label}</a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <a href="/blog" className={`anah-drawer-link${isActive("/blog") ? " active" : ""}`}>Blogs</a>
                <a href="/portfolio" className={`anah-drawer-link${isActive("/portfolio") ? " active" : ""}`}>Portfolio</a>
                <a href="/contact-us" className={`anah-drawer-link${isActive("/contact-us") ? " active" : ""}`}>Contact Us</a>

                <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                  <a href="/contact-us" className="ds-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    Let's Talk &nbsp;
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </nav>

              {/* Footer info */}
              <div className="anah-drawer-footer">
                <a href="tel:+916376011249" className="anah-drawer-contact">
                  <span className="anah-drawer-contact-icon"><i className="fa-solid fa-phone" /></span>
                  +91-6376011249
                </a>
                <a href="mailto:marketing@anahmarketing.com" className="anah-drawer-contact">
                  <span className="anah-drawer-contact-icon"><i className="fa-regular fa-envelope" /></span>
                  marketing@anahmarketing.com
                </a>
                <div className="anah-drawer-social">
                  <a href="https://www.facebook.com/people/Anah-marketing/61575241095643/" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/ami_performance/" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Navbar spacer so content doesn't go under the fixed nav */}
      {/* <div style={{ height: "115px" }} /> */}
    </>
  );
}
