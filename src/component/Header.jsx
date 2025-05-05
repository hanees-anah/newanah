import React from "react";
import preloader_img from "../assets/images/logo-img.png";


function Header() {
    return (
        <>
        <div className="homepage1-body">
            {/* Progress Bar */}
            <div className="paginacontainer">
                <div className="progress-wrap">
                    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                    </svg>
                </div>
            </div>

            {/* Header Section */}
            <header>
                <div className="header-area homepage1 header header-sticky d-none d-lg-block" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <a href="/">
                                            <img src={preloader_img} style={{ maxWidth: "180px" }} alt="Logo" />
                                        </a>
                                    </div>
                                    <div className="main-menu">
                                        <ul>
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/about">About Us</a></li>
                                            <li>
                                                <a href="#">Services <i className="fa-solid fa-angle-down"></i></a>
                                                <ul className="dropdown-padding">
                                                    <li><a href="/social-media-marketing-services">Meta Ads</a></li>
                                                    <li><a href="/google-ads-services">Google Ads</a></li>
                                                    <li><a href="/email-marketing-services">Email-Marketing</a></li>
                                                    <li><a href="/whatsapp-marketing-services">WhatsApp-Marketing</a></li>
                                                    <li><a href="/seo-company-in-india">Search Engine Optimisation </a></li>
                                                    <li><a href="/website-development-company">Website Development</a></li>
                                                    <li><a href="/mobile-app-development-company">Mobile App Development</a></li>
                                                    <li><a href="/shopify-development-services">Shopify Development</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/Blog">Blogs</a></li>
                                            <li><a href="/Portfolio">Portfolio</a></li>
                                            <li><a href="/contact-us">Contact Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="btn-area">
                                        <a href="/contact-us" className="header-btn1">
                                            Let's Talk <span><i className="fa-solid fa-arrow-right"></i></span>
                                        </a>
                                    </div>
                                    {/* <div className="header-search-form-wrapper">
                                        <div className="tx-search-close tx-close"><i className="fa-solid fa-xmark"></i></div>
                                        <div className="header-search-container"> */}
                                            {/* <form role="search" className="search-form">
                                                <input type="search" className="search-field" placeholder="Search …" name="s" />
                                                <button type="submit" className="search-submit">
                                                    <img src="https://seoc-html-v2.vercel.app/assets/img/icons/search-icons1.svg" alt="Search" />
                                                </button>
                                            </form> */}
                                        {/* </div>
                                    </div> */}
                                    <div className="body-overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <div className="mobile-header mobile-header1 d-block header-area d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <a href="/">
                                    <img src={preloader_img} style={{ maxWidth: "120px" }} alt="Logo" />
                                </a>
                            </div>
                            <div className="mobile-nav-icon dots-menu">
                                <i className="fa-solid fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className="mobile-sidebar mobile-sidebar1">
                <div className="logosicon-area">
                    <div className="logos">
                        <a href="/">
                            <img src={preloader_img} style={{ maxWidth: "120px" }} alt="Logo" />
                        </a>
                    </div>
                    <div className="menu-close">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className="mobile-nav mobile-nav1">
                    <ul className="mobile-nav-list nav-list1">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li>
                            <a href="#">Services <i className="fa-solid fa-angle-down"></i></a>
                            <ul className="dropdown-padding" style={{ display: "none" }}>
                                <li><a href="/social-media-marketing-services">Meta Ads</a></li>
                                <li><a href="/google-ads-services">Google Ads</a></li>
                                <li><a href="/whatsapp-marketing-services">WhatsApp Marketing</a></li>
                                <li><a href="/seo-company-in-india">SEO</a></li>
                                <li><a href="/website-development-company">Website Development</a></li>
                                <li><a href="/mobile-app-development-company">Mobile App Development</a></li>
                                <li><a href="/shopify-development-services">Shopify Development</a></li>
                            </ul>
                        </li>
                        <li><a href="/Blog">Blogs</a></li>
                        <li><a href="/Portfolio">Portfolio</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                    <div class="allmobilesection">
               <a href="/contact-us"  class="header-btn1">Get Started <span><i class="fa-solid fa-arrow-right"></i></span></a>
               <div class="single-footer">
                  <h3>Contact Info</h3>
                  <div class="footer1-contact-info">
                     <div class="contact-info-single">
                        <div class="contact-info-icon">
                           <i class="fa-solid fa-phone-volume"></i>
                        </div>
                        <div class="contact-info-text">
                           <a href="tel:+916376011249">+91-6376011249</a>
                        </div>
                     </div>
                     <div class="contact-info-single">
                        <div class="contact-info-icon">
                           <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class="contact-info-text">
                           <a href="marketing@anahmarketing.com">marketing@anahmarketing.com</a>
                        </div>
                     </div>
                     <div class="single-footer">
                        <h3>Our Location</h3>
                        <div class="contact-info-single">
                           <div class="contact-info-icon">
                              <i class="fa-solid fa-location-dot"></i>
                           </div>
                           <div class="contact-info-text">
                              <a href="info@example.com" >Plot No. 3-4, Krishna Enclave
                                 2nd Floor, Patrakar Colony Road
                                 Near The Narayan School, Mansarovar
                                 Jaipur, Rajasthan – 302020, India</a>
                           </div>
                        </div>
                     </div>
                     <div class="single-footer">
                        <h3>Social Links</h3>
                        <div class="social-links-mobile-menu">
                           <ul>
                              <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                              <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                              <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                              <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Header;
