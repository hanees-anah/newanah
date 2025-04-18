
import orginic from "../assets/images/organic-search-img.jpg"
import instagram from "../assets/images/instagram_business.jpg"
import keyword from "../assets/images/keyword-research-img.jpg"
import seo from "../assets/images/seo-checklis-img.jpg"
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
            }, 1000); // Optional delay for smooth transition
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
                                                    <li><a href="#"><i className="fa-regular fa-user"></i> By Admin</a></li>
                                                    <li><a href="#"><i className="fa-solid fa-calendar-days"></i> Feb 28, 2023</a></li>
                                                </ul>
                                            </div>
                                            <h2>Organic Search vs Paid Search: What’s the Difference?</h2>
                                            <div className="space8"></div>
                                            <div className="btn-area">
                                                <a href="/view_more" className="header-btn1">
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
                                        <a href="/instagram_readmore"><img alt="" src={instagram} class="full-img" /></a>
                                    </div>
                                    <div class="content-info">
                                        <div class="post-date">Jan 24, 2023</div>
                                        <h4 class="dlab-title"><a href="/instagram_readmore">What's New on Instagram in 2023: How to Use T...</a></h4>
                                        <p class="m-b20">In today’s era, almost everyone is looking for a platform where they can show up their goods and services to the interested audience,</p>
                                        <a href="/instagram_readmore" class="news-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="news-card align-items-center">
                                    <div class="news-media">
                                        <a href="/keyword_read_more"><img alt="" src={keyword} class="full-img" /></a>
                                    </div>
                                    <div class="content-info">
                                        <div class="post-date">Dec 26, 2022</div>
                                        <h4 class="dlab-title"><a href="/keyword_read_more">Keyword Research and its Related Factors...</a></h4>
                                        <p class="m-b20">The process of finding and analyzing search teams that most people use to type in search engines is keyword research.</p>
                                        <a href="/keyword_read_more" class="news-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="news-card align-items-center">
                                    <div class="news-media">
                                        <a href="/Read_more"><img alt="" src={seo} class="full-img" /></a>
                                    </div>
                                    <div class="content-info">
                                        <div class="post-date">Nov 21, 2022</div>
                                        <h4 class="dlab-title"><a href="/Read_more">The Only SEO Checklist that Gives your eComme...</a></h4>
                                        <p class="m-b20">Search Engine Optimization (SEO) is a process used to optimize the main content of your website. With optimization,</p>
                                        <a href="/Read_more" class="news-btn">Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12">
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
                            </div>
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
