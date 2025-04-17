
import meta from "../assets/images/meta-mg.png"
import work_bg3 from "../assets/images/work-bg3.png"
import google_img from "../assets/images/google-img.png"
import email_img from "../assets/images/e-mail-img.png"
import wp_img from "../assets/images/wp-img.png"
import seo_img from "../assets/images/seo-img.png"
import bg1 from "../assets/images/pages-bg1.png"

function Result(){

    return(
        // <!--===== WORK AREA STARTS =======-->
        <div class="all-section-bg" style={{ backgroundImage: `url(${bg1})` }}>
        <div class="works7-section-area sp2 pt-4">
           <div class="container">
              <div class="row">
                 <div class="col-lg-6 m-auto">
                    <div class="works7-header heading12 text-center">
                       <h2 class="text-anime-style-3">Results that Speak</h2>
                    </div>
                 </div>
              </div>
              <div class="row justify-content-center">
                 <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="800">
                    <div class="works-author-boxarea">
                       <a href="#">Meta Ads</a>
                       <p>We achieved a 10.5x ROAS for a premium ethnic wear brand through smart targeting and data-driven strategies. Our multi-channel marketing approach boosted conversions, expanded reach, and delivered scalable, cost-effective results.</p>
                       <div class="space24"></div>
                       <div class="img1">
                          <img src={meta} alt=""/>
                       </div>
                       <div class="img2">
                          <img src={work_bg3} alt=""/>
                       </div>
                    </div>
                 </div>
                 <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="works-author-boxarea">
                       <a href="#">Google Ads</a>
                       <p>By leveraging Google Ads, an ethnic fashion brand achieved an 8.5x ROAS. With precise targeting of high-intent audiences, they boosted conversions and enhanced their digital presence, driving higher sales for their elegant and unstitched ethnic fashions.</p>
                       <div class="space24"></div>
                       <div class="img1">
                          <img src={google_img} alt=""/>
                       </div>
                       <div class="img2">
                          <img src={work_bg3} alt=""/>
                       </div>
                    </div>
                 </div>
                 <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1200">
                    <div class="works-author-boxarea">
                       <a href="#">Email Marketing</a>
                       <p>A renowned ethnic fashion brand leveraged email marketing to achieve an impressive ROAS of 4x. With smart messaging and irresistible offers, the brand boosted constant sales, re-engaged inactive shoppers and expanded their digital footprint.</p>
                       <div class="space24"></div>
                       <div class="img1">
                          <img src={email_img} alt=""/>
                       </div>
                       <div class="img2">
                       <img src={work_bg3} alt=""/>
                       </div>
                    </div>
                 </div>
                 <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1200">
                    <div class="works-author-boxarea">
                       <a href="#">WhatsApp Marketing</a>
                       <p>By tapping into the power of direct messaging, a plus-size fashion brand achieved a 19.33x ROAS through WhatsApp marketing, using smart targeting and personalized outreach to boost conversions and maximize ROI with a cost-effective, scalable approach.</p>
                       <div class="space24"></div>
                       <div class="img1">
                          <img src={wp_img} alt=""/>
                       </div>
                       <div class="img2">
                       <img src={work_bg3} alt=""/>
                       </div>
                    </div>
                 </div>
                 <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1200">
                    <div class="works-author-boxarea">
                       <a href="#">SEO</a>
                       <p>By implementing a strong SEO strategy, a leading ethnic wear brand increased organic traffic by 75.55% and secured #1 rankings for high-intent keywords. Through content marketing and keyword optimization, the brand attracted relevant audiences, enhanced search visibility and strengthened their presence in the ethnic fashion industry.</p>
                       <div class="space24"></div>
                       <div class="img1">
                          <img src={seo_img} alt=""/>
                       </div>
                       <div class="img2">
                       <img src={work_bg3} alt=""/>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        </div>
    )

}

export default Result;