import '../assets/css/main.css';
import pages_bg1 from "../assets/images/pages-bg1.png";

function Footer() {
  return (
    <>
      <div 
        className="footer1-section-area" 
        style={{
          backgroundImage: `url(${pages_bg1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-logo-area">
                <h3>Anah Marketing and Innovations</h3>
                <p>
                  At Anah Marketing, we craft data-driven marketing strategies to elevate your brand. 
                  From digital marketing to creative branding, we ensure measurable success and maximum impact for your business.
                </p>
                <ul>
                  <li><a href="https://www.facebook.com/people/Anah-marketing/61575241095643/"><i className="fa-brands fa-facebook-f"></i></a></li>
                  {/* <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li> */}
                  <li><a href="https://www.instagram.com/ami_performance/"><i className="fa-brands fa-instagram"></i></a></li>
                  {/* <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-logo-area1">
                <h3>About Link</h3>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about-us">About Us</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/blog">Our Blog</a></li>
                  <li><a href="/contact-us">Contact Us</a></li>
                  <li><a href="/shopify-development">Shopify</a></li>
                   <li><a href="/meta-ads">Meta Ads</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-logo-area2">
                <h3>Get in touch</h3>
                <ul>
                  <li>
                    <a href="mailto:marketing@anahmarketing.com">
                      <i className="fa-regular fa-envelope"></i> 
                      <span>marketing@anahmarketing.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-location-dot"></i> 
                      Plot No. 3-4, Krishna Enclave, 2nd Floor, Patrakar Colony Road, 
                      Near The Narayan School, Mansarovar, Jaipur, Rajasthan – 302020, India
                    </a>
                  </li>
                  <li>
                    <a href="tel:+916376011249">
                      <i className="fa-solid fa-phone"></i> 
                      <span>+91-6376011249</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-logo-area3">
                <h3>Subscribe Our Newsletter</h3>
                <form action="#">
                  <input type="email" placeholder="Enter your email" required />
                  <button className="header-btn1">
                    Subscribe <span><i className="fa-solid fa-arrow-right"></i></span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="space80 d-lg-block d-none"></div>
          <div className="space40 d-lg-none d-block"></div>

          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-area">
                <div className="pera">
                  <p>ⓒ Copyright 2024 Anah Marketing & Innovations. All rights reserved.</p>
                </div>
                <ul>
                  <li><a href="/terms-condition">Terms & Conditions</a></li>
                  <li><a href="/privacy-policy" className="m-0">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
