import React from "react";
import star1 from "../assets/images/star1.png";
import worksIcon7 from "../assets/images/works-icons7.svg";
import worksIcon8 from "../assets/images/works-icons8.svg";
import worksIcon9 from "../assets/images/works-icons9.svg";
import whyChooseUsImg from "../assets/images/Why-choose-us-img1.png";

function WorkArea() {
    return (
        <div className="works-inner-section-area sp1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="works-header-area heading2">
                            <h5>Why Choose Us</h5>
                            <h2>Winning Strategies. Proven Results. Why Not You?</h2>
                            <p>At Anax Marketing & Innovations, we understand that choosing the right marketing partner is crucial for your business success. Here’s what sets us apart:</p>
                            <div className="space32"></div>

                            <div className="works-content-box">
                                <div className="icons">
                                    <img src={worksIcon7} alt="Proven Results Icon" />
                                </div>
                                <div className="content">
                                    <span>Proven Results</span>
                                    <p>We focus on delivering measurable growth. From boosting website traffic to increasing conversions, our data-driven strategies ensure real, tangible success.</p>
                                </div>
                            </div>

                            <div className="space20"></div>
                            <div className="works-content-box">
                                <div className="icons">
                                    <img src={worksIcon8} alt="Tailored Strategies Icon" />
                                </div>
                                <div className="content">
                                    <span>Tailored Strategies</span>
                                    <p>We believe in customization—no one-size-fits-all approach. Every brand is unique, and we craft personalized solutions to match your business needs and goals.</p>
                                </div>
                            </div>

                            <div className="space20"></div>
                            <div className="works-content-box">
                                <div className="icons">
                                    <img src={worksIcon9} alt="Dedicated Support Icon" />
                                </div>
                                <div className="content">
                                    <span>Dedicated Support</span>
                                    <p>Your success is our priority. Our expert team is always available to provide insights, guidance, and hands-on support to help you scale efficiently.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-all-images-area">
                            <img src={star1} alt="Decorative Star" className="elements12 keyframe5" />
                            <img src={star1} alt="Decorative Star" className="elements13 keyframe5" />
                            <div className="row">
                                <div className="col-12">
                                    <div className="img1 image-anime">
                                        <div className="space100"></div>
                                        <img src={whyChooseUsImg} alt="Why Choose Us" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default WorkArea;
