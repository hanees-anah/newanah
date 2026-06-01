import React from "react";
import logo from "../assets/images/logo-img.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Shopify", href: "/shopify-development" },
  { label: "Meta Ads", href: "/meta-ads" },
];

const serviceLinks = [
  { label: "Meta Ads", href: "/social-media-marketing-services" },
  { label: "Google Ads", href: "/google-ads-services" },
  { label: "Email Marketing", href: "/email-marketing-services" },
  { label: "WhatsApp Marketing", href: "/whatsapp-marketing-services" },
  { label: "SEO Services", href: "/seo-company" },
  { label: "Website Development", href: "/website-development-company" },
  { label: "Mobile App Dev", href: "/mobile-app-development-company" },
];

export default function Footer() {

  return (
    <>
      <style>{`
        .awwwards-footer {
          background: var(--clr-bg);
          position: relative;
          overflow: hidden;
          padding-top: 6rem;
        }
        .awwwards-footer::before {
            content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: var(--grad-primary);
        }
        .footer-grid {
          max-width: 1400px; margin: 0 auto; padding: 0 2rem 4rem;
          display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 4rem; position: relative; z-index: 1;
        }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) { .footer-grid { grid-template-columns: 1fr; gap: 3rem; } }

        .footer-brand img { height: 155px;  filter: none; }
        .footer-brand p { color: #6d7c90; line-height: 1.8; margin-bottom: 1.5rem; max-width: 320px; font-size: 1.05rem; }
        .social-row { display: flex; gap: 1rem; }
        .social-row a { 
            width: 45px; height: 45px; border-radius: var(--radius-full); background: rgba(255, 255, 255, 0.03); 
            border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; 
            color: #6d7c90; font-size: 1.2rem; transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1); display: inline-flex; justify-content: center; align-items: center;
        }
        .social-row a:hover { background: var(--clr-primary); color: #6d7c90; border-color: var(--clr-primary); transform: translateY(-5px) scale(1.05); }

        .footer-col h4 { color: #000; font-size: 1rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 2rem; }
        .footer-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; }
        .footer-col ul li a { color: #6d7c90; text-decoration: none; font-size: 0.95rem; transition: 0.3s; font-weight: 500; }
        .footer-col ul li a:hover { color: #000; padding-left: 6px; }

        .contact-item { display: flex; gap: 1rem; margin-bottom: 1.5rem; align-items: flex-start; }
        .contact-item i { width: 40px; height: 40px; border-radius: var(--radius-full); background: rgba(255, 255, 255, 0.04); color: #818cf8; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
        .contact-item div { color: #94a3b8; line-height: 1.6; font-size: 0.95rem;}
        .contact-item strong { color: #000; display: block; margin-bottom: 0.2rem; font-weight: 700; }

        /* Minimalist Bottom Bar */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2rem 0;
          margin-top: 4rem;
          background: #010007;
        }
        .footer-bottom-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .footer-copy {
          color: #fff;
          font-size: 0.875rem;
          font-weight: 400;
        }
        .footer-legal {
          display: flex;
          gap: 2rem;
        }
        .footer-legal a {
          color: #fff;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .footer-legal a:hover {
          color: #fff;
        }
        @media (max-width: 640px) {
          .footer-bottom-inner {
            flex-direction: column;
            text-align: center;
          }
          .footer-legal {
            justify-content: center;
            gap: 1.5rem;
          }
        }
      `}</style>

      <footer className="awwwards-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Anax Marketing" />
            <p>We architect digital ecosystems that turn brands into market leaders. Your true growth partner.</p>
            <div className="social-row">
              <a href="#"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#"><i className="fa-brands fa-instagram" /></a>
              <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Intelligences</h4>
            <div className="contact-item">
              <i className="fa-solid fa-map-location-dot" />
              <div><strong>Headquarters</strong>E1/B1 Extension, Mohan Cooperative Industrial Estate, Mathura Rd, Delhi 110044</div>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-envelope" />
              <div><strong>Email Us</strong>info@anaxmarketing.com<br />marketing@anaxmarketing.com</div>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-phone" />
              <div><strong>Let's Talk</strong>+91-8810620925</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <span className="footer-copy">
              © {new Date().getFullYear()} Anax Marketing. All rights reserved.
            </span>
            <div className="footer-legal">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-condition">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
