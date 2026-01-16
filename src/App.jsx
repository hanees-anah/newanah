import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from 'react';
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
import { Navigate } from "react-router-dom";
import Meta from "./Pages/Meta";
import ParentEye from "./Pages/ParentEye";
import Web_dev from "./Pages/Web_dev";




// Moved logic to a wrapper inside Router
function AppWrapper() {
  const location = useLocation();
  // const hideHeaderFooter = [
  //   "/", 
  //   "/about-us", 
  //   "/social-media-marketing-services", 
  //   "/google-ads-services", 
  //   "/email-marketing-services", 
  //   "/whatsapp-marketing-services", 
  //   "/seo-company", 
  //   "/website-development-company", 
  //   "/mobile-app-development-company", 
  //   "/shopify-development-services", 
  //   "/blog", 
  //   "/portfolio", 
  //   "/contact-us", 
  //   "/terms-condition", 
  //   "/privacy-policy", 
  //   // "/blog/social-media-marketing-trends-for-ecommerce", 
  //   // "/blog/social-media-marketing-trends-for-ecommerce", 
  //   // "/blog/latest-seo-trends", 
  //   // "/blog/top-e-commerce-platforms-for-seo", 
  //   // "/blog/performance-marketing-trends",
  //    "/shopify-development",
  //    "/blog/:slug"

  // ].includes(location.pathname);
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
    "/web-development"
  ];

  const hideHeaderFooter = hideHeaderFooterPaths.includes(location.pathname) || location.pathname.startsWith("/blog/");


  // ].some(path => location.pathname.startsWith(path));


  return (
    <>
      {hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/social-media-marketing-services" element={<MetaAds />} />
        <Route path="/google-ads-services" element={<Google />} />
        <Route path="/email-marketing-services" element={<EmailMarketing />} />
        <Route path="/whatsapp-marketing-services" element={<WhatsappMarketing />} />
        <Route path="/seo-company" element={<SearchEngineOptimisation />} />
        <Route path="/website-development-company" element={<Websitedevelopment />} />
        <Route path="/mobile-app-development-company" element={<MobileDevelopment />} />
        <Route path="/shopify-development-services" element={<ShopifyDevelopment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/terms-condition" element={<Terms_Conditions />} />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
        <Route path="/view-more" element={<View_more />} />
        <Route path="/blog/:slug" element={<Keywoed_reserach_reacd_more />} />
        <Route path="/shopify-development" element={<Shopify />} />
        <Route path="/meta-ads" element={<Meta/>}/>
        <Route path="/parenteye" element={<ParentEye/>}/>
         <Route path="/web-development" element={<Web_dev/>}/>

        {/* ✅ Redirects */}
        <Route path="/keyword-read-more" element={<Navigate to="/" replace />} />
        <Route path="/read-more" element={<Navigate to="/" replace />} />
        <Route path="/instagram-readmore" element={<Navigate to="/" replace />} />
        <Route path="/Privacy_Policy" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="/view_more" element={<Navigate to="/" replace />} />
        <Route path="/Read_more" element={<Navigate to="/" replace />} />
        <Route path="/keyword_read_more" element={<Navigate to="/" replace />} />
        <Route path="/blog/marketing@anahmarketing.com" element={<Navigate to="/blog" replace />} />
        <Route path="/blog/info@example.com" element={<Navigate to="/blog" replace />} />
        <Route path="/instagram_readmore" element={<Navigate to="/" replace />} />
        <Route path="/marketing@anahmarketing.com" element={<Navigate to="/" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
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


