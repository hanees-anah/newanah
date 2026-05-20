import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import preloader from "../assets/images/preloader-img.png";
import Header from "../component/Header";
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";

// Import local images as modules for robust production asset bundling
import fallbackImg1 from "../assets/images/meta-ads-img-1.png";
import fallbackImg2 from "../assets/images/Shopify-img1.png";
import fallbackImg3 from "../assets/images/google-ads2.png";
import fallbackImg4 from "../assets/images/whatsapp-marketing1.png";

const fallbackBlogs = [
  {
    slug: "meta-ads-scaling-framework",
    title: "The 2026 Meta Ads Scaling Protocol: Achieving Profitable 8x ROAS",
    main_image: fallbackImg1,
    image: fallbackImg1,
    post_date: "May 18, 2026",
    post_author: "Anah Growth Team",
    meta_title: "How to Scale Meta Ads to 8x ROAS | Anah Marketing",
    meta_description: "Learn the exact creative sandboxing methods and media buying protocols we use to scale eCommerce brands profitably to large-scale spend.",
    description: `
      <h2>The Paradigm Shift in Meta Media Buying</h2>
      <p>Profitable scaling is no longer about secret audience hacks, custom target bid models, or micro-segmented lookalikes. In 2026, the Meta algorithm values <strong>creative diversification</strong> and <strong>high-quality user experiences</strong> above all else.</p>
      
      <h3>1. Creative Sandboxing: The Secret to Conceptual Isolation</h3>
      <p>By isolating new creative concepts in a dedicated <em>Sandbox environment</em> using Dynamic Creative Options (DCO), we can test different messaging angles, visual hooks, and call-to-actions without disrupting the stable, high-budget scale campaigns. This ensures your active ad spend remains protected from sudden performance dips.</p>
      
      <h3>2. The Multi-Angle Creative Matrix</h3>
      <p>We test four main emotional hooks for every product we scale:</p>
      <ul>
        <li><strong>Logical Angle:</strong> Deep dive into feature breakdowns, ingredient quality, or technical superiority.</li>
        <li><strong>Emotional Angle:</strong> Highlighting status, transformation, and pain point relief.</li>
        <li><strong>Financial / Offer Angle:</strong> Highlighting bundle deals, cost savings, or risk-free trials.</li>
        <li><strong>Social Proof:</strong> Blending authentic UGC, reviews, and media mentions in a fast-paced format.</li>
      </ul>

      <h3>3. Bidding with Boundaries: Scaling via Cost Caps</h3>
      <p>Once a winning creative concept is validated inside the sandbox campaign, we migrate it into our main scaling structure. Instead of bidding blindly, we employ structured cost caps set at 10% above target cost-per-acquisition (CPA). This gives Meta the flexibility to scale rapidly when search/browse efficiency is high, while completely shutting down spend during market cooling periods.</p>
    `
  },
  {
    slug: "shopify-conversion-optimization",
    title: "Shopify Speed & UX Checklist: Elevating Your Checkout Conversions",
    main_image: fallbackImg2,
    image: fallbackImg2,
    post_date: "May 12, 2026",
    post_author: "Anah Dev Team",
    meta_title: "Shopify Conversion Rate Optimization Checklist | Anah",
    meta_description: "Discover the critical UX tweaks, express payment setups, and speed optimizations that help double conversion rates on custom Shopify storefronts.",
    description: `
      <h2>Why Your Shopify Store is Leaking Revenue</h2>
      <p>Most eCommerce brands invest thousands in paid traffic, only to lose 97% of visitors due to checkout friction, poor mobile responsiveness, and slow loading speeds. In a hyper-competitive landscape, conversion rate optimization (CRO) is your highest-leverage growth channel.</p>
      
      <h3>1. The Sub-2 Second Page Load Requirement</h3>
      <p>Every additional millisecond of page load directly translates to lost revenue. To fix this, we recommend:</p>
      <ul>
        <li>Aggressive next-gen image formats (.webp / .avif) and lazy-loading non-critical resources.</li>
        <li>Minifying CSS/JS payloads and eliminating redundant third-party tracking scripts.</li>
        <li>Switching to clean, performance-optimized headless setups or Shopify's custom Liquid frameworks.</li>
      </ul>

      <h3>2. Frictionless Mobile Checkout Flows</h3>
      <p>Over 80% of digital traffic is on mobile. If your checkout requires typing credit card numbers manually, your cart abandonment will soar. Streamline the checkout process with express checkout options (UPI, Razorpay, Google Pay, Apple Pay) placed prominently on the cart drawer and product landing pages.</p>
      
      <h3>3. Micro-Copy & Social Proof Triggers</h3>
      <p>Place strong confidence triggers directly below the main "Add to Cart" button: "Free Shipping & Returns", "Secure SSL Encryption", and "Join 50,000+ Happy Customers". These subtle reassurances remove logical friction at the critical moment of purchase decision.</p>
    `
  },
  {
    slug: "google-ads-high-intent-capturing",
    title: "Google Ads Performance Max: Smart Architecture for Maximum Profit",
    main_image: fallbackImg3,
    image: fallbackImg3,
    post_date: "May 08, 2026",
    post_author: "Anah Search Team",
    meta_title: "Google Performance Max Strategy Guide | Anah Marketing",
    meta_description: "Unlocking Google Ads success. How to structure asset groups, audience signals, and negative keyword lists to target ready-to-buy consumers.",
    description: `
      <h2>The Power and Pitfalls of Performance Max</h2>
      <p>Google’s Performance Max (PMax) campaigns are incredibly powerful machine learning tools. However, without proper guardrails, PMax tends to prioritize easy, low-intent display impressions or waste budget bidding on your own brand terms. Here is how we build a high-performance PMax architecture.</p>
      
      <h3>1. Isolating Asset Groups by Intent & Profit Margin</h3>
      <p>Do not throw all your products into a single asset group. Instead, segregate them by profit margin tiers or clear intent lines. This allows you to allocate custom return-on-ad-spend (ROAS) targets and custom creative budgets suited exactly to the economic profiles of your products.</p>
      
      <h3>2. Injecting High-Quality First-Party Audience Signals</h3>
      <p>Provide the algorithm with a compass. Upload your highest-lifetime-value (LTV) customer lists and active checkout-abandoner lists as audience signals. This guides Google’s targeting towards lookalikes who are highly likely to convert, rather than random internet browsers.</p>
      
      <h3>3. Proactive Negative Keyword Lists</h3>
      <p>Work with your Google account manager to apply account-level brand exclusions and negative keywords. This prevents PMax from cannibalizing search traffic that would have come organically or through traditional high-converting search campaigns, saving you valuable ad budget.</p>
    `
  },
  {
    slug: "whatsapp-marketing-automations",
    title: "Lifecycle Marketing Playbook: Recovering 35%+ Abandoned Carts",
    main_image: fallbackImg4,
    image: fallbackImg4,
    post_date: "May 02, 2026",
    post_author: "Anah Automation Team",
    meta_title: "WhatsApp & Email Marketing Automation Playbook",
    meta_description: "Unlock passive revenue streams by layering personalized WhatsApp outreach alongside high-converting email lifecycle recovery sequences.",
    description: `
      <h2>The Omnichannel Lifecycle Playbook</h2>
      <p>Email marketing is a vital growth engine, but with inbox folders becoming increasingly cluttered, open rates continue to decline. By introducing high-converting, personalized WhatsApp messaging at key moments in the customer journey, we create a powerful recovery mechanism.</p>
      
      <h3>1. The 15-Minute Abandoned Cart Strike</h3>
      <p>When a user abandons their cart, timing is everything. Within 15 minutes of abandonment, send a polite, highly-personalized WhatsApp message offering support, answering FAQs, and providing a quick one-click link to resume their cart. This captures their attention while they are still in the buying mindset.</p>
      
      <h3>2. Layering HTML & Rich Email Flows</h3>
      <p>Follow up the initial WhatsApp strike with value-driven email flows over the next 24 to 48 hours:</p>
      <ul>
        <li><strong>Hour 24:</strong> High-impact social proof showcasing user-generated reviews, press mentions, and visual testimonials.</li>
        <li><strong>Hour 48:</strong> FAQ breakdown addressing shipping times, warranty details, and sizing guides to eliminate logical hesitation.</li>
      </ul>

      <h3>3. Post-Purchase Loyalty & Retention</h3>
      <p>The relationship doesn't end with a purchase. Set up post-purchase automation sequences that send transactional tracking details, video tutorials on how to get the most out of the product, and a timed feedback request 14 days later, complete with a loyalty discount for their next order.</p>
    `
  }
];

export default function Keywoed_reserach_reacd_more() {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        // Attempt to fetch all blogs from the remote API
        const response = await axios.get("https://admin.anahmarketing.com/get_blog.php");
        
        let foundBlog = null;
        if (response.data && response.data.data && response.data.data.length > 0) {
          // Attempt to find a blog matching the slug
          foundBlog = response.data.data.find(item => item.slug === slug);
          if (foundBlog) {
            // Map main_image/description keys if necessary
            if (!foundBlog.image && foundBlog.main_image) foundBlog.image = foundBlog.main_image;
            if (!foundBlog.description && foundBlog.content) foundBlog.description = foundBlog.content;
          }
        }

        // If not found in API response, try looking in fallback blogs
        if (!foundBlog) {
          foundBlog = fallbackBlogs.find(item => item.slug === slug);
        }

        setBlogData(foundBlog);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        // Fall back gracefully to local blogs on API failure
        const foundFallback = fallbackBlogs.find(item => item.slug === slug);
        setBlogData(foundFallback);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#030014" }}>
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <img src={preloader} alt="Anah Preloader" />
          </div>
        </div>
      </div>
    );
  }

  if (!blogData) {
    return (
      <div style={{ minHeight: "100vh", background: "#030014", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <Helmet>
          <title>Article Not Found | Anah Marketing</title>
        </Helmet>
         
        <div style={{ textAlign: "center", maxWidth: "500px", zIndex: 2, marginTop: "6rem" }}>
          <h1 style={{ fontSize: "3rem", color: "#fff", marginBottom: "1rem" }}>404</h1>
          <p style={{ color: "var(--clr-text-muted)", fontSize: "1.1rem", marginBottom: "2rem" }}>
            The requested article could not be located. It may have been moved or unpublished.
          </p>
          <Link to="/blog" className="ds-btn-primary">Return to Intelligence Hub</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blogData.meta_title || `${blogData.title} | Anah Marketing`}</title>
        <meta name="description" content={blogData.meta_description || blogData.title} />
      </Helmet>

       

      <style>{`
        .blog-hero {
          background: #030014;
          padding: 10rem 1.5rem 6rem;
          min-height: 50vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .blog-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(92, 79, 229, 0.15), transparent 70%);
          z-index: 1;
        }
        .blog-hero-img {
          position: absolute;
          inset: 0; 
          width: 100%; 
          height: 100%;
          object-fit: cover;
          opacity: 0.15;
          filter: blur(8px);
          transform: scale(1.05);
        }
        .blog-hero-overlay {
          position: absolute; 
          inset: 0;
          background: linear-gradient(to top, #030014, rgba(3,0,20,0.4));
          z-index: 1;
        }
        .blog-hero-content {
          position: relative; 
          z-index: 2; 
          max-width: 900px;
        }
        .blog-hero-breadcrumb {
          display: flex; 
          align-items: center; 
          justify-content: center; 
          gap: 0.5rem;
          font-size: 0.85rem; 
          color: var(--clr-text-xmuted); 
          margin-bottom: 2rem;
        }
        .blog-hero-breadcrumb a { 
          color: var(--clr-text-xmuted); 
          text-decoration: none; 
          transition: color 0.3s;
        }
        .blog-hero-breadcrumb a:hover { 
          color: var(--clr-primary); 
        }
        .blog-hero-title {
          font-size: clamp(2rem, 4.5vw, 3.5rem); 
          font-weight: 900; 
          color: #fff;
          line-height: 1.2; 
          margin-bottom: 2rem;
          letter-spacing: -0.03em;
        }
        .blog-hero-meta {
          display: flex; 
          align-items: center; 
          justify-content: center; 
          gap: 2rem;
          color: var(--clr-text-xmuted); 
          font-size: 0.95rem;
        }
        .blog-hero-meta i { 
          color: var(--clr-primary); 
          margin-right: 0.5rem; 
        }

        .blog-body {
          background: var(--clr-bg);
          padding: 6rem 1.5rem;
          position: relative;
        }
        .blog-body-inner {
          max-width: 860px; 
          margin: 0 auto;
          background: #ffffff;
          border: 1px solid var(--clr-border-strong);
          border-radius: var(--radius-2xl);
          padding: 4.5rem;
          box-shadow: var(--shadow-lg);
          margin-top: -4rem;
          position: relative;
          z-index: 10;
        }
        .blog-main-img {
          width: 100%; 
          border-radius: var(--radius-xl); 
          box-shadow: var(--shadow-md);
          margin-bottom: 3.5rem;
          object-fit: cover;
          max-height: 480px;
        }
        .blog-content {
          color: var(--clr-text-secondary); 
          line-height: 1.85; 
          font-size: 1.075rem;
        }
        .blog-content h2, .blog-content h3, .blog-content h4 {
          color: var(--clr-text-main); 
          font-weight: 800; 
          margin: 3rem 0 1.25rem;
          letter-spacing: -0.02em;
        }
        .blog-content h2 { font-size: 1.75rem; }
        .blog-content h3 { font-size: 1.4rem; }
        .blog-content a { 
          color: var(--clr-primary); 
          text-decoration: none;
          font-weight: 600;
          border-bottom: 1px solid rgba(92, 79, 229, 0.2);
          transition: all 0.3s;
        }
        .blog-content a:hover {
          color: var(--clr-secondary);
          border-bottom-color: var(--clr-secondary);
        }
        .blog-content img { 
          max-width: 100%; 
          height: auto; 
          border-radius: var(--radius-md); 
          margin: 2rem 0; 
          box-shadow: var(--shadow-sm);
        }
        .blog-content ul, .blog-content ol { 
          padding-left: 24px; 
          margin-bottom: 2rem;
        }
        .blog-content li { 
          margin-bottom: 0.75rem; 
        }
        .blog-content strong {
          color: var(--clr-text-main);
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .blog-body-inner { 
            padding: 2rem; 
            margin-top: -2rem;
            border-radius: var(--radius-xl);
          }
          .blog-hero-meta { 
            flex-direction: column; 
            gap: 0.75rem; 
          }
          .blog-main-img {
            margin-bottom: 2rem;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="blog-hero">
        {blogData.image && (
          <img src={blogData.image} alt={blogData.title} className="blog-hero-img" />
        )}
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="blog-hero-breadcrumb">
              <Link to="/">Home</Link> 
              <i className="fa-solid fa-chevron-right" style={{ fontSize: "0.6rem" }}></i>
              <Link to="/blog">Blog</Link> 
              <i className="fa-solid fa-chevron-right" style={{ fontSize: "0.6rem" }}></i>
              <span style={{ color: "var(--clr-primary)", fontWeight: "600" }}>Article</span>
            </div>
            <h1 className="blog-hero-title">{blogData.title}</h1>
            <div className="blog-hero-meta">
              <span><i className="fa-regular fa-calendar"></i> {blogData.post_date}</span>
              <span><i className="fa-regular fa-user"></i> {blogData.post_author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="blog-body">
        <div className="blog-body-inner">
          {blogData.image && (
            <motion.img
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src={blogData.image}
              alt={blogData.title}
              className="blog-main-img"
            />
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blogData.description }}
          />
        </div>
      </section>

      <Consultation />
      <Footer />
    </>
  );
}
