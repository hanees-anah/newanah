import React from 'react';
import inner_header from "../assets/images/inner-header.png";
import star2 from "../assets/images/star2.png";
import styleunion_logo from "../assets/images/styleunion_logo.png";
import chasehaul_logo from "../assets/images/chasehaul_logo.png";
import gritpro_logo from "../assets/images/gritpro_logo.png";
import guniaa_logo from "../assets/images/guniaa-logo.png";
import hallstattlife_logo from "../assets/images/hallstattlife-logo.png";
import bysonnutrition_logo from "../assets/images/bysonnutrition-logo.png";
import styleunionLogo from '../assets/images/styleunion_logo.png';
import chasehaulLogo from '../assets/images/chasehaul_logo.png';
import gritproLogo from '../assets/images/gritpro_logo.png';
import guniaaLogo from '../assets/images/guniaa-logo.png';
import hallstattlifeLogo from '../assets/images/hallstattlife-logo.png';
import bysonnutritionLogo from '../assets/images/bysonnutrition-logo.png';
import magiaLogo from '../assets/images/magia_logo.png';
import womanCartLogo from '../assets/images/woman-cart-logo.png';
import teakwoodLogo from '../assets/images/teakwood-logo-img.png';
import juniperLogo from '../assets/images/juniper-logo.png';
import elLogo from '../assets/images/el-logoo.png';
import autumnlaneLogo from '../assets/images/autumnlane_logo.png';
import spatikaclothingLogo from '../assets/images/spatikaclothing_logo.png';
import dishapublicationLogo from '../assets/images/dishapublication_logo.png';
import fabpersonaLogo from '../assets/images/fabpersona_logo.png';
import baidLogo from '../assets/images/baid_logo.png';
import siddhayuLogo from '../assets/images/siddhayu_logo.png';
import zariLogo from '../assets/images/zari_logo.png';
import ruchiraLogo from '../assets/images/ruchira.png';
import holythreadLogo from '../assets/images/holythread_logo.png';
import leheriyaLogo from '../assets/images/leheriya_logo.png';
import fashiondwarLogo from '../assets/images/fashiondwar-logo.png';
import lavanyaLogo from '../assets/images/lavanya-logo.png';
import parenteyeLogo from '../assets/images/parenteye-logoo.png';
import jagoIndiaJagoLogo from '../assets/images/jago-india-jago-logo.png';
import magia_logo from "../assets/images/magia_logo.png";
import woman_cart_logo from "../assets/images/woman-cart-logo.png";
import teakwood_logo from "../assets/images/teakwood-logo-img.png";
import autumnlane_logo from "../assets/images/autumnlane_logo.png";
import spatikaclothing_logo from "../assets/images/spatikaclothing_logo.png";
import dishapublication_logo from "../assets/images/dishapublication_logo.png";
import fabpersona_logo from "../assets/images/fabpersona_logo.png";
import zari_logo from "../assets/images/zari_logo.png";
import ruchira from "../assets/images/ruchira.png";
import holythread_logo from "../assets/images/holythread_logo.png";
import leheriya_logo from "../assets/images/leheriya_logo.png";
import fashiondwar_logo from "../assets/images/fashiondwar-logo.png";
import lavanya_logo from "../assets/images/lavanya-logo.png";
import Divi_logo from"../assets/images/divi-logoo.png"

import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
import { useEffect, useState } from "react";
import preloader from "../assets/images/preloader-img.png";
import ethnicity from "../assets/images/ethnicity-logo.png";
import { Helmet } from "react-helmet";


function Portfolio() {
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

        <Helmet>
                    <title>Our Work | Digital Marketing Portfolio – Anah Marketing</title>
                    <meta
                        name="description"
                        content="Explore Anah Marketing’s portfolio of SEO, web design, and eCommerce success stories. See how we drive real growth for brands across industries."
                    />
                      <link rel="canonical" href="https://anahmarketing.com/portfolio"/>
                </Helmet>

      {isLoading && (
        <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon"><img src={preloader} alt="" /></div>
          </div>
        </div>
      )}
      <div className="about-header-area" style={{ backgroundImage: `url(${inner_header})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
        <img src={star2} alt="Star" className="star2 keyframe5" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-inner-header heading9 text-center">
                <h1>Portfolio</h1>
                <a href="/">Home</a> <i className="fa-solid fa-angle-right"></i> <span>Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="portfolio-section-page portfolio-sec">
        <div className="container">
          <div className="service2-header heading2 text-center">
            <h2 className="text-anime-style-3">See Our Latest Projects</h2>
            <p data-aos="fade-up" data-aos-duration="1000">Our portfolio reflects a journey of creativity and innovation. Every project is a testament to scaling brands through cutting-edge marketing solutions.</p>
          </div>
          <div className="portfolio_bottom_part">
            <ul className="nav nav-tabs  d-lg-flex" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                  All
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-marketing" data-bs-toggle="tab" data-bs-target="#profile-marketing-pane" type="button" role="tab" aria-controls="profile-marketing-pane" aria-selected="false">
                  Digital Marketing
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                  Development
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                  Mobile App
                </button>
              </li>
            </ul>
            <div className="tab-content accordion" id="myTabContent">
              <div className="tab-pane fade show active accordion-item" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                <div id="collapseOne" className="accordion-collapse collapse show d-lg-block" aria-labelledby="headingOne" data-bs-parent="#myTabContent">
                  <div className="accordion-body">
                    <div className="row text-align-center justify-content-center">
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={styleunionLogo} alt="Style Union" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={chasehaulLogo} alt="Chase Haul" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={ethnicity} alt="Bysonnutrition" />

                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={gritproLogo} alt="Grit Pro" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={guniaaLogo} alt="Guniaa" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={hallstattlifeLogo} alt="Hallstatt Life" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={bysonnutritionLogo} alt="Byson Nutrition" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={magiaLogo} alt="Magia" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={womanCartLogo} alt="Woman Cart" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={teakwoodLogo} alt="Teakwood" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={juniperLogo} alt="Juniper" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={elLogo} alt="EL" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={autumnlaneLogo} alt="Autumn Lane" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={spatikaclothingLogo} alt="Spatika Clothing" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={dishapublicationLogo} alt="Disha Publication" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={fabpersonaLogo} alt="Fab Persona" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={baidLogo} alt="Baid" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={siddhayuLogo} alt="Siddhayu" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={zariLogo} alt="Zari" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={ruchiraLogo} alt="Ruchira" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={holythreadLogo} alt="Holy Thread" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={leheriyaLogo} alt="Leheriya" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={fashiondwarLogo} alt="Fashion Dwar" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={lavanyaLogo} alt="Lavanya" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={parenteyeLogo} alt="Parent Eye" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={jagoIndiaJagoLogo} alt="Jago India Jago" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={Divi_logo} alt="Styleunion" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade accordion-item" id="profile-marketing-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <div id="collapseTwo" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingTwo" data-bs-parent="#myTabContent">
                  <div className="accordion-body">
                    <div className="row text-align-center justify-content-center">
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={styleunion_logo} alt="Styleunion" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={chasehaul_logo} alt="Chasehaul" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={gritpro_logo} alt="Gritpro" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={guniaa_logo} alt="Guniaa" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={magia_logo} alt="Chasehaul" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={woman_cart_logo} alt="Gritpro" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={teakwood_logo} alt="Guniaa" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={autumnlane_logo} alt="Chasehaul" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={spatikaclothing_logo} alt="Gritpro" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={dishapublication_logo} alt="Guniaa" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={fabpersona_logo} alt="Chasehaul" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={zari_logo} alt="Gritpro" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={ruchira} alt="Guniaa" />
                        </div>
                      </div>
                      {/* Repeat for all other logos */}
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={hallstattlife_logo} alt="Hallstattlife" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={bysonnutrition_logo} alt="Bysonnutrition" />

                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={ethnicity} alt="Bysonnutrition" />

                        </div>
                      </div>
                      <div class="col-md-3 col-sm-4">
                        <div class="logo_src">
                          {/* <img src="assets/images/holythread_logo.png"> */}
                          <img src={holythread_logo} alt="Bysonnutrition" />
                        </div>
                      </div>
                      <div class="col-md-3 col-sm-4">
                        <div class="logo_src">
                          {/* <img src="assets/images/leheriya_logo.png"> */}
                          <img src={leheriya_logo} alt="Bysonnutrition" />
                        </div>
                      </div>
                      <div class="col-md-3 col-sm-4">
                        <div class="logo_src">
                          {/* <img src="assets/images/fashiondwar-logo.png"> */}
                          <img src={fashiondwar_logo} alt="Bysonnutrition" />
                        </div>
                      </div>
                          {/* <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={elLogo} alt="EL" />
                        </div>
                      </div> */}
                      <div class="col-md-3 col-sm-4">
                        <div class="logo_src">
                          {/* <img src="assets/images/lavanya-logo.png"> */}
                          <img src={lavanya_logo} alt="Bysonnutrition" />
                        </div>
                      </div>
                      {/* Add remaining logos similarly */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade accordion-item" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <div id="collapseTwo" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingTwo" data-bs-parent="#myTabContent">
                  <div className="accordion-body">
                    <div className="row text-align-center justify-content-center">
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={styleunion_logo} alt="Styleunion" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={Divi_logo} alt="Styleunion" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={chasehaul_logo} alt="Chasehaul" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={gritpro_logo} alt="Gritpro" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={guniaa_logo} alt="Guniaa" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={magia_logo} alt="Chasehaul" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={woman_cart_logo} alt="Gritpro" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={teakwood_logo} alt="Guniaa" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={autumnlane_logo} alt="Chasehaul" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={spatikaclothing_logo} alt="Gritpro" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={dishapublication_logo} alt="Guniaa" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={fabpersona_logo} alt="Chasehaul" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={zari_logo} alt="Gritpro" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={ruchira} alt="Guniaa" />
                        </div>
                      </div>
                      {/* Repeat for all other logos */}
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={hallstattlife_logo} alt="Hallstattlife" />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={bysonnutrition_logo} alt="Bysonnutrition" />

                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={ethnicity} alt="Bysonnutrition" />

                        </div>
                      </div>
                      <div class="col-md-3 col-sm-4">
                        <div class="logo_src">
                          {/* <img src="assets/images/holythread_logo.png"> */}
                          <img src={holythread_logo} alt="Bysonnutrition" />
                        </div>
                      </div>
                      <div class="col-md-3 col-sm-4">
                        <div class="logo_src">
                          {/* <img src="assets/images/leheriya_logo.png"> */}
                          <img src={leheriya_logo} alt="Bysonnutrition" />
                        </div>
                      </div>
                      <div class="col-md-3 col-sm-4">
                        <div class="logo_src">
                          {/* <img src="assets/images/fashiondwar-logo.png"> */}
                          <img src={fashiondwar_logo} alt="Bysonnutrition" />
                        </div>
                      </div>
                          <div className="col-md-3 col-sm-4">
                        <div className="logo_src">
                          <img src={elLogo} alt="EL" />
                        </div>
                      </div>
                      <div class="col-md-3 col-sm-4">
                        <div class="logo_src">
                          {/* <img src="assets/images/lavanya-logo.png"> */}
                          <img src={lavanya_logo} alt="Bysonnutrition" />
                        </div>
                      </div>
                      {/* Add remaining logos similarly */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade accordion-item" id="contact-tab-pane" role="tabpanel"
                aria-labelledby="contact-tab" tabindex="0">
                <div id="collapseThree" class="accordion-collapse collapse d-lg-block" aria-labelledby="headingThree"
                  data-bs-parent="#myTabContent">
                  <div class="accordion-body">
                    <div class="row text-align-center">
                      <div class="col-md-3 col-sm-4">
                        <div class="logo_src">
                          <img src={womanCartLogo} />
                        </div>
                      </div>
                      <div class="col-md-3 col-sm-4">
                        <div class="logo_src">
                          <img src={parenteyeLogo} />
                        </div>
                      </div>
                      <div class="col-md-3 col-sm-4">
                        <div class="logo_src">
                          <img src={jagoIndiaJagoLogo} />
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Portfolio;
