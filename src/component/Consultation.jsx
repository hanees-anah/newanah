import  cta_bg1 from"../assets/images/cta-bg1.png"
import  cta_bg2 from"../assets/images/cta-bg2.png"
function Consultation(){

    return(
<>
<div class="cta-section-area">
  <img src={cta_bg1} alt="" class="cta-bg1 aniamtion-key-2"/>
  <img src={cta_bg2} alt="" class="cta-bg2 aniamtion-key-1"/>
  <img src="assets/img/bg/cta-bg2.png" alt="" class="cta-bg2 aniamtion-key-1"/>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 m-auto">  
        <div class="cta-header-area text-center sp4 heading2">
          <h2 class="text-anime-style-3">Ready to Scale Your Brand<br class="d-md-block d-none"/>with Performance Marketing?</h2>
          <p data-aos="fade-up" data-aos-duration="1000">From Meta Ads, Google Ads to website development,<br class="d-md-block d-none"/> we do exactly what a top-tier company does—but smarter, faster and ROI-focused.</p>
          <div class="btn-area text-center" data-aos="fade-up" data-aos-duration="1200">
            <a href="/contact" class="header-btn1">Free Consultation <span><i class="fa-solid fa-arrow-right"></i></span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
    )


}

export default Consultation