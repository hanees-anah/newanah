import React from "react";
import headerimg from "../assets/images/banner-main-img.png"
import header1 from "../assets/images/header-imgbg-new.png"
import idea from "../assets/images/idea.png"
import promotion from "../assets/images/promotion.png"
import network from "../assets/images/network.png"
import header from "../assets/images/header-bg1.png"
import { Helmet } from "react-helmet";


function Index() {
    return (
        <>

            <Helmet>
                <title>Best Digital Marketing Agency | SEO, PPC & Social Media Services</title>
                <meta
                    name="description"
                    content="Anah Marketing offers ROI-focused SEO, PPC, Meta Ads & Web Design services. Boost your growth—book a free digital marketing consultation today!"
                />
                <link rel="canonical" href="https://anahmarketing.com/" />
            </Helmet>

            <div className="hero1-section-area" style={{
                backgroundImage: `url(${header})`,
            }}>



                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="header-main-content heading1">
                                <h5>India’s #1 Performance Marketing Agency for D2C Brands</h5>
                                <h1 className="text-anime-style-2">Ignite Clicks, Shoot up Conversions, Thrive Fast!</h1>
                                <p data-aos="fade-left" data-aos-duration="1000">
                                    We are a results-driven performance marketing agency helping brands scale fast with data-backed strategies, precision-targeted paid media, and innovative brand storytelling.
                                    From SEO to social media and high-converting ad campaigns, we craft strategies that don’t just drive traffic—they drive growth, conversions, and long-term success.
                                </p>
                                <p><strong>Let’s build your growth engine.</strong></p>
                                <div className="btn-area" data-aos="fade-left" data-aos-duration="1200">
                                    <a href="/contact-us" className="header-btn1">
                                        Contact Now<span><i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header-images-area">
                                <div className="main-images-area">
                                    <div className="img1">
                                        <img src={headerimg} alt="" data-aos="zoom-in" data-aos-duration="1000" />
                                    </div>
                                    <div className="img2">
                                        <img src={header1} alt="" />
                                    </div>
                                    <div className="icons-area">
                                        <img src={idea} alt="" className="sound-icons1 aniamtion-key-1" />
                                        <img src={idea} alt="" className="lite-icons1 aniamtion-key-1" />

                                    </div>
                                    <div className="auhtor-images">
                                        <img src={promotion} alt="" className="header-author-img1 aniamtion-key-2" />
                                        <img src={network} alt="" className="header-author-img2 aniamtion-key-2" />
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

export default Index;
