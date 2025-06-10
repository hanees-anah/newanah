
import orginic from "../assets/images/social-media-trends.png"
import  instagram from"../assets/images/anah-2025.jpeg"
import keyword from "../assets/images/seo-blog.png"
import seo_2025 from "../assets/images/seo-img-2025.png"
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
import inner_header from "../assets/images/inner-header.png";
import React, { useEffect, useState } from "react";
import preloader from "../assets/images/preloader-img.png";


function Blog() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate load or wait for all images/resources to load
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 500); // Optional delay for smooth transition
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <>

            {isLoading && (
                <div className="preloader">
                    <div className="loading-container">
                        <div className="loading"></div>
                        <div id="loading-icon"><img src={preloader} alt="" /></div>
                    </div>
                </div>
            )}

            <div
                className="about-header-area"
                style={{
                    backgroundImage: `url(${inner_header})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <img src="assets/images/star2.png" alt="" className="star2 keyframe5" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>Our Blog</h1>
                                <a href="/">Home</a> <i className="fa-solid fa-angle-right"></i> <span>Our Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Area */}
            <div className="blog-top-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-top-boxarea">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="content-area heading2">
                                            <div className="tags-area">
                                                <ul>
                                                    <li><a href="#"><i className="fa-regular fa-user"></i> By Priyank Badjatya</a></li>
                                                    <li><a href="#"><i className="fa-solid fa-calendar-days"></i> May 29, 2025</a></li>
                                                </ul>
                                            </div>
                                            <h2>Top Social Media Marketing Trends for E-Commerce </h2>
                                            <div className="space8"></div>
                                            <div className="btn-area">
                                                <a href="/blog/social-media-marketing-trends-for-ecommerce" className="header-btn1">
                                                    View More <span><i className="fa-solid fa-arrow-right"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-5">
                                        <div className="images image-anime">
                                            <img alt="" src={orginic} className="full-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* News Section */}
            <section class="news-sec">
                <div class="blog1-scetion-area sp2 bg2">
                    <div class="container">
                        <div class="row">
                                <div class="col-md-4">
                                <div class="news-card align-items-center">
                                    <div class="news-media">
                                        <a href="/blog/latest-seo-trends"><img alt="" src={seo_2025} class="full-img" /></a>
                                    </div>
                                    <div class="content-info">
                                        <div class="post-date">May 28, 2025</div>
                                        <h4 class="dlab-title"><a href="/blog/latest-seo-trends">How SEO Has Evolved in 2025, and What to Do Now</a></h4>
                                        <p class="m-b20">The world of Search Engine Optimization (SEO) is always changing. As we move through 2025, </p>
                                        <a href="/blog/latest-seo-trends" class="news-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                               <div class="col-md-4">
                                <div class="news-card align-items-center">
                                    <div class="news-media">
                                        <a href="/blog/top-e-commerce-platforms-for-seo"><img alt="" src={keyword} class="full-img" /></a>
                                    </div>
                                    <div class="content-info">
                                        <div class="post-date">May 26, 2025</div>
                                        <h4 class="dlab-title"><a href="/blog/top-e-commerce-platforms-for-seo">Top E-commerce Platforms to Boost Your SEO in 2025</a></h4>
                                        <p class="m-b20">In today’s digital world, having an online store is just the beginning. To truly succeed,</p>
                                        <a href="/blog/top-e-commerce-platforms-for-seo" class="news-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="news-card align-items-center">
                                    <div class="news-media">
                                        <a href="/blog/performance-marketing-trends"><img alt="" src={instagram} class="full-img" /></a>
                                    </div>
                                    <div class="content-info">
                                        <div class="post-date">May 09, 2025</div>
                                        <h4 class="dlab-title"><a href="/blog/performance-marketing-trends">Performance Marketing in 2025: Top Channels to Watch and Leverage</a></h4>
                                        <p class="m-b20">Have you ever spotted an ad while scrolling Instagram reels and thought, “This is exactly what I needed”?</p>
                                        <a href="/blog/performance-marketing-trends" class="news-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                         
                        

                            {/* <div class="col-lg-12">
                                <div class="pagination-area">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination justify-content-center">
                                            <li class="page-item">
                                                <a class="page-link" href="#"><i class="fa-solid fa-angle-left"></i></a>
                                            </li>
                                            <li class="page-item"><a class="page-link active" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#"><i class="fa-solid fa-angle-right"></i></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <Consultation />
            <Footer />
        </>
    );
}

export default Blog;
