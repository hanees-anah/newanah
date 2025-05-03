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

// Moved logic to a wrapper inside Router
function AppWrapper() {
  const location = useLocation();
  const hideHeaderFooter = [
    "/", 
    "/about", 
    "/social-media-marketing-services", 
    "/google-ads-services", 
    "/email-marketing-services", 
    "/whatsapp-marketing-services", 
    "/seo-company-in-india", 
    "/website-development-company", 
    "/mobile-app-development-company", 
    "/shopify-development-services", 
    "/Blog", 
    "/Portfolio", 
    "/contact-us", 
    "/termscondition", 
    "/Privacy_Policy", 
    "/view_more", 
    "/read_more", 
    "/keyword_read_more", 
    "/instagram_readmore", 
    "/organic_search"
  ].includes(location.pathname);

  return (
    <>
      {hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/social-media-marketing-services" element={<MetaAds />} />
        <Route path="/google-ads-services" element={<Google />} />
        <Route path="/email-marketing-services" element={<EmailMarketing />} />
        <Route path="/whatsapp-marketing-services" element={<WhatsappMarketing />} />
        <Route path="/seo-company-in-india" element={<SearchEngineOptimisation />} />
        <Route path="/website-development-company" element={<Websitedevelopment />} />
        <Route path="/mobile-app-development-company" element={<MobileDevelopment />} />
        <Route path="/shopify-development-services" element={<ShopifyDevelopment />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/termscondition" element={<Terms_Conditions />} />
        <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
        <Route path="/view_more" element={<View_more />} />
        <Route path="/read_more" element={<Read_more />} />
        <Route path="/keyword_read_more" element={<Keywoed_reserach_reacd_more />} />
        <Route path="/instagram_readmore" element={<InstagramReadMore />} />
        <Route path="/organic_search" element={<Organic_search />} />
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
