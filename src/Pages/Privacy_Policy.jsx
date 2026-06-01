import star2 from "../assets/images/star2.png"
import inner_header from "../assets/images/inner-header.png"
import Consultation from "../component/Consultation"
import Footer from "../component/Footer"
import Header from "../component/Header";
import { useEffect, useState } from "react";
import preloader from "../assets/images/preloader-img.png";
import { Helmet } from "react-helmet";


function Privacy_Policy() {
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
            
       <style>{`
  .policy-inner-section h2, .policy-inner-section h3, .policy-inner-section h4, .policy-inner-section h5 {
    color: var(--clr-text-main) !important;
  }
  .policy-inner-section p, .policy-inner-section li {
    color: var(--clr-text-secondary) !important;
  }
`}</style>

            <Helmet>
                <title>Privacy Policy | Anax Marketing – Your Data, Our Priority</title>
                <meta
                    name="description"
                    content="Read Anax Marketing’s Privacy Policy to learn how we protect, store, and use your data. Your trust matters — transparency and security guaranteed."
                />
                <link rel="canonical" href="https://anahmarketing.com/privacy-policy" />

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
                <img src={star2} alt="" class="star2 keyframe5" />
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 m-auto">
                            <div class="about-inner-header heading9 text-center">
                                <h1> Privacy Policy </h1>
                                <a href="/">Home</a> <i class="fa-solid fa-angle-right"></i> <span> Privacy Policy </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="policy-inner-section pt-4 mt-4 sp4">
                <div class="container">
                    <h2>Privacy Policy</h2>
                    <p>At Anax Marketing & Innovations will require you to provide some information in order to provide our services to you. This is an example of the type of information we will require from you to be collected or submitted to At Anax Marketing & Innovations through our quick quote form, contact us form and other.</p>
                    <h4>How we use your information</h4>
                    <p>The personal information you share with us is only used to complete your project. We do not and will not share this information with outside parties. We use your email address only to communicate with you regarding your project, to send wishes and to update you with our new offerings/services. It is not used for any other purpose, and it is not shared it with outside parties.</p>
                    <p>By default, we never use or share your project or any information related to your project with any other parties. All the information provided to At Anax Marketing & Innovations is confidential and if your project or website is online over internet then that data will be publicly accessible and we are not responsible for it if get copied.</p>
                </div>
            </div>

            <Consultation />
            <Footer />
        </>
    )

}

export default Privacy_Policy
