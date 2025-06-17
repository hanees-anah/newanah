// import React from 'react';

import organic_img from "../assets/images/anah-2025.jpeg"
import instagram__img from "../assets/images/seo-blog.png"
import seo_2025 from "../assets/images/seo-img-2025.png"
import seo__img from "../assets/images/social-media-trends.png"
import bg1 from "../assets/images/pages-bg1.png"
import React, { useEffect, useState } from "react";
import axios from "axios"


function Brands_focous() {

    const [data, setdata] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://admin.anahmarketing.com/get_blog.php");
                // console.log("986523741", response); // handle your data here
                setdata(response.data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>

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
                          {data?.data?.slice(0, 4).map((item, index) => (
                                <div className="col-md-6">
                                    <div className="news-card row align-items-center">
                                        <div className="news-media col-md-6">
                                            <a href={`/blog/${item.slug}`}>
                                                <img alt={item.title} src={`${item.main_image}`} className="full-img" />                                    </a>
                                        </div>
                                        <div className="content-info col-md-6">
                                        <li className="post-date">{item.post_date}</li>
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
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Brands_focous;
