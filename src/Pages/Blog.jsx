import React, { useEffect, useState } from "react";
import axios from "axios";
import inner_header from "../assets/images/inner-header.png";
import preloader from "../assets/images/preloader-img.png";
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
import { Helmet } from "react-helmet";


function Blog() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://admin.anahmarketing.com/get_blog.php");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>

             <Helmet>
                        <title>Digital Marketing Blog | Insights by Anah Marketing</title>
                        <meta
                            name="description"
                            content="Read expert tips on SEO, social media, eCommerce, and more. Stay ahead with the latest digital marketing trends from Anah Marketing’s blog.
"
                        />
                          <link rel="canonical" href="https://anahmarketing.com/blog"/>
                    </Helmet>

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

            {/* Featured Blog */}
            {data?.data && data.data.length > 0 && (
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
                                                        <li>
                                                            <a href="#"><i className="fa-regular fa-user"></i> {data.data[0].post_author}</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i className="fa-solid fa-calendar-days"></i> {data.data[0].post_date}</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h2>{data.data[0].title}</h2>
                                                <div className="space8"></div>
                                                <div className="btn-area">
                                                    <a href={`/blog/${data.data[0].slug}`} className="header-btn1">
                                                        View More <span><i className="fa-solid fa-arrow-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-5">
                                            <div className="images image-anime">
                                                <img alt={data.data[0].title} src={data.data[0].main_image} className="full-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* News Section (Remaining Blogs) */}
            <section className="news-sec">
                <div className="blog1-scetion-area sp2 bg2">
                    <div className="container">
                        <div className="row">
                            {data?.data?.slice(1).map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="news-card align-items-center">
                                        <div>
                                            <div className="news-media">
                                                <a href={`/blog/${item.slug}`}>
                                                    <img alt={item.title} src={item.main_image} className="full-img" />
                                                </a>
                                            </div>
                                            <div className="content-info">
                                                <ul>
                                                    <li className="post-date">{item.post_date}</li>
                                                    <li className="post-date">{item.post_author}</li>
                                                </ul>
                                                <h4 className="dlab-title">
                                                    <a href={`/blog/${item.slug}`}>{item.title}</a>
                                                </h4>
                                                <p
                                                    className="m-b20"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.meta_description?.substring(0, 200) + "...",
                                                    }}
                                                />
                                                <a href={`/blog/${item.slug}`} className="news-btn">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
