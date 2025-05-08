import React from 'react';

import  organic_img from"../assets/images/organic-search-img.jpg"
import  instagram__img from"../assets/images/instagram_business.jpg"
import  keyword__img from"../assets/images/keyword-research-img.jpg"
import  seo__img from"../assets/images/seo-checklis-img.jpg"
import  bg1 from"../assets/images/pages-bg1.png"


function Brands_focous() {
    return (
        <div class="all-section-bg" style={{   backgroundImage: `url(${bg1})`, }}>
        
        <section className="news-sec">
            <div className="container">
                <div className="blog-header-area heading2 text-center mb-4 pb-4">
                    <img src="assets/images/star2.png" alt="" className="star2 keyframe5" />
                    <img src="assets/images/star2.png" alt="" className="star3 keyframe5" />
                    <h2 className="text-anime-style-3">
                        Brands That Focus Only on the Sell <br className="d-md-block d-none" /> Are No Longer Connecting.
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="1000">
                        Explore our blog to discover actionable insights, success stories, and <br className="d-md-block d-none" /> expert
                        advice that can help drive growth for your business.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="news-card row align-items-center">
                            <div className="news-media col-md-6">
                                <a href="/organic-search">
                                    <img alt="" src={organic_img} className="full-img" />
                                </a>
                            </div>
                            <div className="content-info col-md-6">
                                <div className="post-date">Feb 28, 2023</div>
                                <h4 className="dlab-title">
                                    <a href="/organic-search">
                                        Organic Search vs Paid Search: What’s the D...
                                    </a>
                                </h4>
                                <p className="m-b20">
                                    Every business knows the value of search and every business has its own point of view on organic
                                    search and paid search.
                                </p>
                                <a href="/organic-search" className="news-btn">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card row align-items-center">
                            <div className="news-media col-md-6">
                                <a href="/instagram-readmore">
                                    <img alt="" src={instagram__img} className="full-img" />
                                </a>
                            </div>
                            <div className="content-info col-md-6">
                                <div className="post-date">Jan 24, 2023</div>
                                <h4 className="dlab-title">
                                    <a href="/instagram-readmore">
                                        What's New on Instagram in 2023: How to Use T...
                                    </a>
                                </h4>
                                <p className="m-b20">
                                    In today’s era, almost everyone is looking for a platform where they can show up their goods and
                                    services to the interested audience.
                                </p>
                                <a href="/instagram-readmore" className="news-btn">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card row align-items-center">
                            <div className="news-media col-md-6">
                                <a href="/keyword-read-more">
                                    <img alt="" src={keyword__img} className="full-img" />
                                </a>
                            </div>
                            <div className="content-info col-md-6">
                                <div className="post-date">Dec 26, 2022</div>
                                <h4 className="dlab-title">
                                    <a href="/keyword-read-more">
                                        Keyword Research and its Related Factors...
                                    </a>
                                </h4>
                                <p className="m-b20">
                                    The process of finding and analyzing search teams that most people use to type in search engines is keyword research.
                                </p>
                                <a href="/keyword-read-more" className="news-btn">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card row align-items-center">
                            <div className="news-media col-md-6">
                                <a href="/read-more">
                                    <img alt="" src={seo__img} className="full-img" />
                                </a>
                            </div>
                            <div className="content-info col-md-6">
                                <div className="post-date">Nov 21, 2022</div>
                                <h4 className="dlab-title">
                                    <a href="/read-more">
                                        The Only SEO Checklist that Gives your eComme...
                                    </a>
                                </h4>
                                <p className="m-b20">
                                    Search Engine Optimization (SEO) is a process used to optimize the main content of your website. With optimization,
                                </p>
                                <a href="/read-more" className="news-btn">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Brands_focous;
