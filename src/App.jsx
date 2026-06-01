import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import React, { useEffect } from 'react';
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./component/CustomCursor";
import PageTransition from "./component/PageTransition";

import Header from "./component/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import MetaAds from "./Pages/MetaAds";
import Google from "./Pages/Googleads";
import EmailMarketing from "./Pages/EmailMarketing";
import WhatsappMarketing from "./Pages/Whatsappmarketing";
import SearchEngineOptimisation from "./Pages/Search_Engine_Optimisation";
import Websitedevelopment from "./Pages/Websitedevelopment";
import MobileDevelopment from "./Pages/Mobiledevelopment";
import ShopifyDevelopment from "./Pages/Shopfiydevelopment";
import Blog from "./Pages/Blog";
import Portfolio from "./Pages/Portfolio";
import ContactUS from "./Pages/ContactUs";
import Terms_Conditions from "./Pages/Terms_Conditions";
import Privacy_Policy from "./Pages/Privacy_Policy";
import View_more from "./Pages/View_more";
import Read_more from "./Pages/Read_more";
import Keywoed_reserach_reacd_more from "./Pages/Keywoed_reserach_reacd_more";
import InstagramReadMore from "./component/Instagram_readmore";
import Organic_search from "./Pages/Organic_search";
import NotFound from "./Pages/Not_found";
import Shopify from "./Pages/Shopify";
import Meta from "./Pages/Meta";
import ParentEye from "./Pages/ParentEye";
import Web_dev from "./Pages/Web_dev";
import PerformanceMarketing from "./Pages/PerformanceMarketing";
import ThankYou from "./Pages/ThankYou";

function ScrollToTopAndReinit() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      // Re-trigger AOS if loaded
      if (window.AOS) {
        window.AOS.refresh();
      }

      // Re-run GSAP scroll-triggered text animations
      const gsap = window.gsap;
      const SplitText = window.SplitText;
      const ScrollTrigger = window.ScrollTrigger;

      if (gsap && SplitText) {
        if (ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);
          // Kill existing ScrollTriggers to prevent duplicates on route change
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }

        // 1. Re-init text-anime-style-1
        document.querySelectorAll('.text-anime-style-1').forEach((element) => {
          if (element.split) {
            element.split.revert();
          }
          let staggerAmount = 0.05,
              delayValue = 0.5;

          element.split = new SplitText(element, { type: "chars, words" });
          gsap.from(element.split.words, {
            duration: 1,
            delay: delayValue,
            x: 20,
            autoAlpha: 0,
            stagger: staggerAmount,
            scrollTrigger: { trigger: element, start: "top 85%" },
          });
        });

        // 2. Re-init text-anime-style-2
        document.querySelectorAll('.text-anime-style-2').forEach((element) => {
          if (element.split) {
            element.split.revert();
          }
          let staggerAmount = 0.05,
              translateXValue = 20,
              delayValue = 0.5,
              easeType = "power2.out";

          element.split = new SplitText(element, { type: "chars, words" });
          gsap.from(element.split.chars, {
            duration: 1,
            delay: delayValue,
            x: translateXValue,
            autoAlpha: 0,
            stagger: staggerAmount,
            ease: easeType,
            scrollTrigger: { trigger: element, start: "top 85%" },
          });
        });

        // 3. Re-init text-anime-style-3
        document.querySelectorAll('.text-anime-style-3').forEach((element) => {
          if (element.split) {
            element.split.revert();
          }

          element.split = new SplitText(element, {
            type: "lines,words,chars",
            linesClass: "split-line",
          });
          gsap.set(element, { perspective: 400 });

          gsap.set(element.split.chars, {
            opacity: 0,
            x: "50",
          });

          gsap.to(element.split.chars, {
            scrollTrigger: { trigger: element, start: "top 90%" },
            x: "0",
            y: "0",
            rotateX: "0",
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.02,
          });
        });

        // Refresh all ScrollTriggers after resetting them
        if (ScrollTrigger) {
          ScrollTrigger.refresh();
        }
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function AppWrapper() {
  const location = useLocation();
  const hideHeaderFooterPaths = [
    "/",
    "/about-us",
    "/social-media-marketing-services",
    "/google-ads-services",
    "/email-marketing-services",
    "/whatsapp-marketing-services",
    "/seo-company",
    "/website-development-company",
    "/mobile-app-development-company",
    "/shopify-development-services",
    "/blog",
    "/portfolio",
    "/contact-us",
    "/terms-condition",
    "/privacy-policy",
    "/shopify-development",
    "/meta-ads",
    "/parenteye",
    "/web-development",
  ];

  const hideHeaderFooter = hideHeaderFooterPaths.includes(location.pathname) || location.pathname.startsWith("/blog/");

  // Wrap component with PageTransition globally
  const w = (Component) => <PageTransition><Component /></PageTransition>;

  return (
    <>
      <ScrollToTopAndReinit />
      <CustomCursor />

      <AnimatePresence mode="wait">
        <Header/>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={w(Home)} />
          <Route path="/about-us" element={w(About)} />
          <Route path="/social-media-marketing-services" element={w(MetaAds)} />
          <Route path="/google-ads-services" element={w(Google)} />
          <Route path="/email-marketing-services" element={w(EmailMarketing)} />
          <Route path="/whatsapp-marketing-services" element={w(WhatsappMarketing)} />
          <Route path="/seo-company" element={w(SearchEngineOptimisation)} />
          <Route path="/website-development-company" element={w(Websitedevelopment)} />
          <Route path="/mobile-app-development-company" element={w(MobileDevelopment)} />
          <Route path="/shopify-development-services" element={w(ShopifyDevelopment)} />
          <Route path="/blog" element={w(Blog)} />
          <Route path="/portfolio" element={w(Portfolio)} />
          <Route path="/contact-us" element={w(ContactUS)} />
          <Route path="/terms-condition" element={w(Terms_Conditions)} />
          <Route path="/privacy-policy" element={w(Privacy_Policy)} />
          <Route path="/view-more" element={w(View_more)} />
          <Route path="/blog/:slug" element={w(Keywoed_reserach_reacd_more)} />
          <Route path="/shopify-development" element={w(Shopify)} />
          <Route path="/meta-ads" element={w(Meta)} />
          <Route path="/parenteye" element={w(ParentEye)} />
          <Route path="/web-development" element={w(Web_dev)} />
          <Route path="/performance-marketing" element={w(PerformanceMarketing)} />
          <Route path="/thank-you" element={w(ThankYou)} />

          {/* ✅ Redirects */}
          <Route path="/keyword-read-more" element={<Navigate to="/" replace />} />
          <Route path="/read-more" element={<Navigate to="/" replace />} />
          <Route path="/instagram-readmore" element={<Navigate to="/" replace />} />
          <Route path="/Privacy_Policy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/view_more" element={<Navigate to="/" replace />} />
          <Route path="/Read_more" element={<Navigate to="/" replace />} />
          <Route path="/keyword_read_more" element={<Navigate to="/" replace />} />
          <Route path="/blog/marketing@anaxmarketing.com" element={<Navigate to="/blog" replace />} />
          <Route path="/blog/info@example.com" element={<Navigate to="/blog" replace />} />
          <Route path="/instagram_readmore" element={<Navigate to="/" replace />} />
          <Route path="/marketing@anaxmarketing.com" element={<Navigate to="/" replace />} />

          <Route path="*" element={w(NotFound)} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
