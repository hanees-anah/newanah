import React from 'react';

import organic_img from "../assets/images/anah-2025.jpeg"
import instagram__img from "../assets/images/seo-blog.png"
import seo_2025 from "../assets/images/seo-img-2025.png"
import seo__img from "../assets/images/seo-checklis-img.jpg"
import bg1 from "../assets/images/pages-bg1.png"


function Brands_focous() {
    return (
        <div class="all-section-bg" style={{ backgroundImage: `url(${bg1})`, }}>

            <section className="news-sec">
                <div className="container">
                    <div className="blog-header-area heading2 text-center mb-4 pb-4">
                        <img src="assets/images/star2.png" alt="" className="star2 keyframe5" />
                        <img src="assets/images/star2.png" alt="" className="star3 keyframe5" />
                        <h2 className="text-anime-style-3">
                            Our Latest Blogs
  
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
                          <div className="col-md-6">
                            <div className="news-card row align-items-center">
                                <div className="news-media col-md-6">
                                    <a href="/blog/top-e-commerce-platforms-for-seo">
                                        <img alt="" src={instagram__img} className="full-img" />
                                    </a>
                                </div>
                                <div className="content-info col-md-6">
                                    <div className="post-date">May 26, 2025</div>
                                    <h4 className="dlab-title">
                                        <a href="/blog/top-e-commerce-platforms-for-seo">
                                            Top E-commerce Platforms to Boost Your SEO in 2025
                                        </a>
                                    </h4>
                                    <p className="m-b20">
                                        In today’s digital world, having an online store is just the beginning. To truly succeed, your store needs to rank high on search engines and attract visitors who will buy from you.
                                    </p>
                                    <a href="/blog/top-e-commerce-platforms-for-seo" className="news-btn">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                         <div className="col-md-6">
                            <div className="news-card row align-items-center">
                                <div className="news-media col-md-6">
                                    <a href="/blog/latest-seo-trends">
                                        <img alt="" src={seo_2025} className="full-img" />
                                    </a>
                                </div>
                                <div className="content-info col-md-6">
                                    <div className="post-date">May 28, 2025</div>
                                    <h4 className="dlab-title">
                                        <a href="/blog/latest-seo-trends">
                                        How SEO Has Evolved in 2025, and What to Do Now
                                        </a>
                                    </h4>
                                    <p className="m-b20">
                                       The world of Search Engine Optimization (SEO) is always changing. As we move through 2025, some key changes have reshaped how SEO works and what matters most. 
                                    </p>
                                    <a href="/blog/latest-seo-trends" className="news-btn">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="news-card row align-items-center">
                                <div className="news-media col-md-6">
                                    <a href="/blog/performance-marketing-trends">
                                        <img alt="" src={organic_img} className="full-img" />
                                    </a>
                                </div>
                                <div className="content-info col-md-6">
                                    <div className="post-date">May 09, 2025</div>
                                    <h4 className="dlab-title">
                                        <a href="/blog/performance-marketing-trends">
                                            Performance Marketing in 2025: Top Channels to Watch and Leverage
                                        </a>
                                    </h4>
                                    <p className="m-b20">
                                        Have you ever spotted an ad while scrolling Instagram reels and thought, “This is exactly what I needed”?
                                    </p>
                                    <a href="/blog/performance-marketing-trends" className="news-btn">
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
