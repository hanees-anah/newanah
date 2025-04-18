import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import InstagramReadMore from "./component/Instagram_readmore"
import Organic_search from "./Pages/Organic_search";


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




