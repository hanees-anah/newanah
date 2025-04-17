import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from "./component/header.jsx";  

import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import MetaAds from "./Pages/MetaAds.jsx";
import Google from "./Pages/Googleads.jsx";
import EmailMarketing from "./Pages/EmailMarketing.jsx";
import WhatsappMarketing from "./Pages/Whatsappmarketing.jsx";
import SearchEngineOptimisation from "./Pages/Search_Engine_Optimisation.jsx";
import Websitedevelopment from "./Pages/Websitedevelopment.jsx";
import MobileDevelopment from "./Pages/Mobiledevelopment.jsx";
import ShopifyDevelopment from "./Pages/Shopfiydevelopment.jsx";
import Blog from "./Pages/Blog.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import ContactUS from "./Pages/ContactUs.jsx";
import Terms_Conditions from "./Pages/Terms_Conditions.jsx";
import Privacy_Policy from "./Pages/Privacy_Policy.jsx";
import View_more from "./Pages/View_more.jsx";
import Read_more from "./Pages/Read_more.jsx";
import Keywoed_reserach_reacd_more from "./Pages/Keywoed_reserach_reacd_more.jsx";
import InstagramReadMore from "./component/Instagram_readmore.jsx";
import Organic_search from "./Pages/organic_search.jsx";


function App() {

  return (
    <Router> 
      <Header />  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/metaads" element={<MetaAds/>}/>
        <Route path="/googleads" element={<Google/>}/>
        <Route path="/emailmarketing" element={<EmailMarketing/>}/>
        <Route path="/whatappmarketing" element={<WhatsappMarketing/>}/>
        <Route path="/Search_Engine_Optimisation" element={<SearchEngineOptimisation/>}/>
        <Route path="/Websitedevelopment" element={<Websitedevelopment/>}/>
        <Route path="/mobiledevelopmet" element={<MobileDevelopment/>}/>
        <Route path="/shopfiydevelopmet" element={<ShopifyDevelopment/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<ContactUS/>}/>
        <Route path="/terms_condition" element={<Terms_Conditions/>}/>
        <Route path="/Privacy_Policy" element={<Privacy_Policy/>}/>
        <Route path="/view_more" element={<View_more/>}/>
        <Route path="/read_more" element={<Read_more/>}/>
        <Route path="/keyword_read_more" element={<Keywoed_reserach_reacd_more/>}/>
        <Route path="/instagram_readmore" element={<InstagramReadMore/>}/>
        <Route path="/organic_search" element={<Organic_search/>}/>
      </Routes>
    </Router>
  );
}

export default App;




