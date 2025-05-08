import  star2 from"../assets/images/star2.png"
import  our_value_img from"../assets/images/our-value-img.jpg"

import  Shopify_img from"../assets/images/Shopify-img.png"
import black_arrow from"../assets/images/arrow-icon-new.png"
import bg1 from "../assets/images/pages-bg1.png"



function Service(){

  
return(
<>
<div class="all-section-bg" style={{ backgroundImage: `url(${bg1})`}}>
<div class="space100 d-lg-block d-none"></div>
         <div class="space100 d-lg-block d-none"></div>
<div class="service2-section-area sp6">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12 m-auto">
                     <div class="service2-header heading2 text-center">
                        <img src={star2} alt="" class="star2 keyframe5"/>
                        <img src={star2} alt="" class="star3 keyframe5"/>
                        <h2 class="text-anime-style-3">Skyrocket Your ROAS with Data-Driven <br class="d-md-block d-none"/>Performance Marketing!</h2>
                        <p data-aos="fade-up" data-aos-duration="1000">We specialize in high-impact strategies that maximize visibility, <br class="d-md-block d-none"/>engagement and conversions.</p>
                     </div>
                  </div>
               </div>
               <div class="row ">
                  <div class="col-lg-7">
                     <div class="images-content-area" data-aos="zoom-in" data-aos-duration="1000">
                        <div class="img1">
                           <img src={our_value_img} alt=""/>
                        </div>
                        <div class="content-area">
                           <h5>Our Value</h5>
                           <a href="/about-us" class="text text-anime-style-2">Turn Clicks into Conversions with Strategic Marketing</a>
                           <p data-aos="fade-up" data-aos-duration="1000" class="text-white">Scaling a brand isn’t just about ads—it’s about structured content, audience insights and constant optimization. We build sustainable growth strategies that drive measurable results. </p>
                           <div class="btn-area" data-aos="fade-up" data-aos-duration="1200">
                              <a href="/about-us" class="header-btn1">View More <span><i class="fa-solid fa-arrow-right"></i></span>
                              </a>
                           </div>
                        </div>
                        <div class="arrow-area">
                           <a href="/about-us"><i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-5">
                     <div class="service-all-boxes">
                        <div class="row">
                           <div class="col-lg-12 col-md-6">
                              <div class="service2-auhtor-boxarea" data-aos="zoom-out" data-aos-duration="1000">
                                 <div class="arrow">
                                    <a href="/about-us"><i class="fa-solid fa-arrow-right"></i></a>
                                 </div>
                                 <div class="content-area">
                                    <h5>Our Mission</h5>
                                    <a href="/about-us">We’re more than marketers—we’re your growth partners</a>
                                    <p>No shortcuts, no guesswork. Just performance marketing that delivers tangible ROI. We help brands cut through the noise and scale with confidence.</p>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-12 col-md-6">
                              <div class="service2-auhtor2-boxarea" data-aos="zoom-out" data-aos-duration="1200">
                                 <div class="arrow">
                                    <a href="/about-us"><i class="fa-solid fa-arrow-right"></i></a>
                                 </div>
                                 <div class="content-area">
                                    <h5>Our Vision</h5>
                                    <a href="/about-us">Empowering brands to dominate the digital space</a>
                                    <p>We envision a future where every brand, big or small, has the tools and strategies to thrive online. Our mission is to make high-performance marketing accessible, scalable and results driven.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         {/* SERVICE AREA ENDS */}
         <section class="shopify-section">
             <div class="container">
                 <div class="heading2">
                     <h2 class="text-anime-style-2">Simplify the Experience, Beautify your Online Store and Multiply your Business using Shopify.</h2>
                  </div>
                 <div class="row align-items-center">
                     <div class="col-md-8">
                        <div class="shopify-list">
                         <ul>
                             <li>
                                 <div class="shopify-content-part">
                                     <div class="left-arrow"><img src={black_arrow}/></div>
                                     <div class="text-item">
                                         <h3>Custom Shopify Design &amp; Development</h3>
                                         <p>With tailor-made and eye-catching Shopify stores, trap your audience to become loyal brand ambassadors.</p>
                                     </div>
                                 </div>
                             </li>
                             <li>
                                 <div class="shopify-content-part">
                                     <div class="left-arrow"><img src={black_arrow}/></div>
                                     <div class="text-item">
                                         <h3>Shopify Store Migration</h3>
                                         <p>Smooth migration of your existing store to Shopify with our expert assistance.</p>
                                     </div>
                                 </div>
                             </li>
                             <li>
                                 <div class="shopify-content-part">
                                     <div class="left-arrow"><img src={black_arrow}/></div>
                                     <div class="text-item">
                                         <h3>Shopify Integration Services</h3>
                                         <p>Connect and optimise your Shopify store with powerful third-party applications for maximum functionality and efficiency.</p>
                                     </div>
                                 </div>
                             </li>
                         </ul>
                        </div>
                     </div>
                     <div class="col-md-4">
                         <img src={Shopify_img} class="img-responsive right-img"/>
                     </div>
                 </div>
             </div>
         </section>
</div>
       



      

    

</>
)

}

export default Service