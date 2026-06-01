import star2 from "../assets/images/star2.png";
import inner_header from "../assets/images/inner-header.png"
import Footer from "../component/Footer";
import Header from "../component/Header";
import Consultation from "../component/Consultation";
import { useEffect, useState } from "react";
import preloader from "../assets/images/preloader-img.png";
import { Helmet } from "react-helmet";


function Terms_Conditions() {
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
                <title>Terms & Conditions | Anax Marketing – User Agreement</title>
                <meta
                    name="description"
                    content="Review Anax Marketing’s Terms & Conditions to understand our services, user rights, and policies. Clear, transparent, and designed to protect both parties."
                />
                <link rel="canonical" href="https://anahmarketing.com/terms-condition" />

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
                                <h1>Terms & Conditions </h1>
                                <a href="/">Home</a> <i class="fa-solid fa-angle-right"></i> <span> Terms & Conditions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--===== HERO AREA ENDS =======--> */}


            <div class="policy-inner-section pt-4 mt-4 sp4">
                <div class="container">
                    <h2>Terms & Conditions</h2>
                    <h3><span class="text-animation bg-gardiant">Acceptance of Terms &amp; Conditions</span></h3>
                    <p>Kindly use all the terms and conditions carefully prior to using this site. By using this site, you give your consent to these terms and conditions. You cannot use the website for any objective that tends to be prohibited or illegal by the terms and conditions. If you do not agree to the terms and conditions, immediately stop accessing this site. Anax Marketing & Innovations reserve the right to alter, modify, or update these terms and conditions from time to time as it deems appropriate and all the updates shall be automatically binding on you</p>
                    <h4>License to Use Website</h4>
                    <p>Unless stated otherwise, Anax Marketing & Innovations and/or its licensors own the intellective property rights and content on the website. Subject to the license provided below, all the rights for this website are reserved.</p>
                    <p>
                        You may download or view website pages only for caching purpose, and all the print pages or other documents from the website for your personal use, that is subject to the restrictions set provided below and elsewhere in these terms and conditions.</p>
                    <h4>You Must Not:</h4>
                    <ul class="serviceopint">
                        <li>Rent, sell or sub-license material from the website;</li>
                        <li>Republish content from this website (including republication on other sites);</li>
                        <li>Duplicate, copy, reproduce or exploit the content on the website for a commercial purpose;</li>
                        <li>Show any service or content as yours from the website to the public;</li>
                        <li>Redistribute the content from the website (except for those content that is specially made available for the redistribution purpose.), or</li>
                        <li> Modify or edit any content on the website.</li>
                    </ul>
                    <p>Moreover, where the content is made available for redistribution ensure to limit it to your organization.
                        Permitted Use</p>
                    <p>You give consent that you are only authorized to view or visit pages of the site for your personal requirement and that you shall not publish, duplicate, modify, elsewhere distribute the content of this website for any purpose than as mentioned herein. Any content posted by Anax Marketing & Innovations on this website is the property of Anax Marketing & Innovations and is protected by Indian International Copyright Orders. You agree that you will not obscure, remove or alter any legal notices displayed on the site. You agree that you will not use this site (i) in any way or purpose that exploits the terms and conditions or any right of any person, including but not limited to rights of privacy, intellective property rights, or rights of personality; (ii) in connection with or to promote any services, materials, or products; or (iii) to post any content that dishonor or diminishes any entity or person.</p>
                    <p>By default, we never use or share your project or any information related to your project with any other parties. All the information provided to Anax Marketing & Innovations is confidential and if your project or website is online over internet then that data will be publicly accessible and we are not responsible for it if get copied</p>
                    <h4>Privacy Policy</h4>
                    <p>We Anax Marketing & Innovations are committed to respect and protect your privacy. We will always ensure appropriate and reasonable measures to prevent any unauthorized access or disclosure of your personal information. By accessing our services or site, you acknowledge and permit that our privacy policies apply to every service provided by us and the website too. But ensure to exclude services and sites that you see on ads from this Privacy Policy</p>
                    <h4>Your Personal Information</h4>
                    <p>Personal Data or Personal Information means any information about a person that helps in identifying that individual. It does not include any data where the identity has been eliminated.</p>
                    <h4>Anax Marketing & Innovations may collect and use the given personal information:</h4>
                    <ul class="serviceopint">
                        <li>Information on your use of the website</li>
                        <li>Your information that you provided at the time of registration with or submitting documents or information to our site</li>
                        <li>Details that you shared for subscribing to the services and accessing information from our website that includes but not limited to the phone number, name, messages, email address, or images</li>
                        <li> Your identity data containing your first name, maiden name, last name, title, date of birth, marital status, place of residence, nationality, gender, company or position</li>
                        <li> Your technical information including IP address, login data, browser type and version, browser plug-ins, time zone setting and location, operating system, platform, and any other device information</li>
                        <li>Your contact data such as email address, telephone, or mailing address</li>
                        <li> Your usage information includes data about the way you accessed the website or services.</li>
                        <li>Marketing and Communication Data that shows your preferences in getting email communication from us and your communication choices</li>
                    </ul>
                    <h4>How We Use Your Personal Data?</h4>
                    <p>We collect and utilize your personal data as guidance to manage your account. The most common circumstances where we use your data are:</p>
                    <ul class="serviceopint">
                        <li>Personalize the website according to your needs</li>
                        <li> Enable access to use our services</li>
                        <li> Administer the website that entails troubleshooting, testing, data analysis, support, system maintenance, hosting and reporting of data</li>
                        <li> Provide services that you have subscribed like industry insights, newsletters, or event announcements</li>
                        <li> Perform the contract that our team is about to enter or have already entered into with you.</li>
                        <li> Where it is essential for our genuine interests, your interest, and fundamental rights, do not ride over those interests</li>
                        <li> Where we bind to comply with regulatory or legal obligations and in connection with any legal prospective or proceedings in order to establish defend or exercise legal rights.</li>
                        <li> Share your marketing communications</li>
                    </ul>
                    <p>We never use your information linked to your project with the third party clients. All the information accessed by Anax Marketing & Innovations is confidential. However, if your project is available online then that data will be accessible publicly and we do not take any responsibility for it if somehow it gets copied.</p>
                    <h5>Payment Terms</h5>
                    <ul class="serviceopint">
                        <li>All quotation offered by Anax Marketing & Innovations require a 50% deposit on acceptance</li>
                        <li>Any increase in cost from payment clearing or transaction charges are the responsibility of the client and thus will be charged for that</li>
                        <li>Anax Marketing & Innovations will only start work on the quotation application after deposited funds have cleared</li>
                        <li> No customer will be entitled to services when there is a delay in payment for more than 10 days from the final date of the project/ date of installation/completion of the module</li>
                        <li>The Annual Maintenance Contract or AMC percentage shall be finalized by Anax Marketing & Innovations, which entirely depends on the work and effort required. AMC Percentage may vary every year</li>
                        <li>Unless specified in quotation offered by Anax Marketing & Innovations, you shall not integrate and source code license</li>
                        <li>Every source code and intellective properties that are associated with the source code developed by Anax Marketing & Innovations will remain the property of Anax Marketing & Innovations, except where a few particular source code are licensed to the client and they have got the issuance from Anax Marketing & Innovations stating the same</li>
                        <li>Any alteration, manipulation, or reverse development of any code created by At Anax Marketing & Innovations for the quoted project may be a violation of copyright or trademark laws. If the violation is confirmed, penalties would be charges under the associated acts</li>
                        <li>Any payment required for the third party code license needed to complete the quoted project is solely the responsibility of the client.</li>
                    </ul>
                    <h4>Cancellation</h4>
                    <p>If the client wishes to cancel the ongoing project, At Anax Marketing & Innovations will invoice the client for any tasks fulfilled to date as a percentage of complete work involved
                        The minimum cancellation fee will be 30% of the signed quotation.</p>
                    <h4>Refund Policy</h4>
                    <p>A refund is only made in extreme circumstances. To be eligible for any refund there is a certain criterion that needs to be met. Prior to providing a refund, the validity of the case is checked. You will only get refund in the following cases:</p>
                    <ul class="serviceopint">
                        <li>Development or Post Sales has not yet started</li>
                        <li>You have not exploited our terms of payment</li>
                        <li>The problems you are facing with the project are beyond the scope of resolution/rectification/fixing</li>
                        <li>Your requirement is not being fulfilled after several attempts</li>
                        <li>The functionality you have wanted is not working accordingly</li>
                        <li>There is an extreme delay in the project delivery time.</li>
                        <li> We are unable to meet the quality criteria proposed by you.</li>
                        <li>The reasons you informed are rational/valid/realistic to qualify the refund</li>
                        <li> You have provided evidence that surfaces your claims.</li>
                    </ul>
                    <h4>Product Delivery</h4>
                    <ul class="serviceopint">
                        <li> The time frame offered by At Anax Marketing & Innovations to the clients is estimated. The intrinsic nature of website design, development, or digital marketing does not offer At Anax Marketing & Innovations the extravagance of defining an accurate timeline</li>
                        <li> At Anax Marketing & Innovations will strive to complete all work within the given timeframe as discussed with the clients. However, Anax Marketing & Innovations will not be liable for any monies, penalties or hardship if the product cannot be delivered within the offered estimated timeline</li>
                        <li> Anax Marketing & Innovations will not release the entire product unless all the payments have been met under the obligation of the work agreement</li>
                        <li>If Anax Marketing & Innovations is working as a third-party service provider to any company, then we shall not be responsible to meet the obligations for release of the quote application to their client..</li>
                    </ul>
                    <h4>Changes to Site Including Terms &amp; Conditions</h4>
                    <p>This site along with the terms and conditions may be revised, amended, updated, changed, or modified by Anax Marketing & Innovations with or without any prior notice to the clients or customers. It is highly recommended to review all the terms and conditions on a regular basis. Continued access to the site after changes of Terms and Conditions would be considered as your acceptance for every update or change that has taken place in Anax Marketing & Innovations site entailing its terms and conditions </p>

                </div>
            </div>
            <Consultation />
            <Footer />
        </>
    )

}

export default Terms_Conditions;