import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Helmet } from "react-helmet";
import axios from "axios";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Consultation from "../component/Consultation";

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
    content: "Profitable scaling is no longer about secret audience hacks. In 2026, it is entirely about creative iteration and structural bidding. By isolating new concepts in a Sandbox environment using Dynamic Creative Options (DCO), we can test angles, hooks, and call-to-actions without disrupting stable, winning campaigns. Once a winner is identified, scale using cost caps for maximum efficiency."
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
    content: "Most eCommerce sites suffer from high drop-off rates at checkout due to friction, slow load times, and missing trust signals. By applying a premium SaaS design philosophy, we can eliminate friction and guide users seamlessly to purchase. Focus on sub-2 second page loads, express checkout shortcuts (UPI, Razorpay), and strong checkout trust triggers."
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
    content: "Google's Performance Max campaigns are incredibly powerful, but without the right guardrails, they can waste thousands on irrelevant search terms and display networks. Structure asset groups strictly by product margins and search intent, inject precise first-party audience signals, and aggressively exclude low-intent search themes."
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
    content: "Relying solely on email for cart abandonment recovery is a missed opportunity. Layer WhatsApp marketing automations within 15 minutes of abandonment. Follow up with value-driven HTML emails showcasing social proof and detailed product sizing at the 24-hour mark to capture and address logical hesitation."
  }
];

const MagneticTilt = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div className={className} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div style={{ transform: "translateZ(20px)", height: "100%", display:"flex", gap:"10rem" }}>{children}</div>
    </motion.div>
  );
};

export default function Blog() {
  const [data, setData] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroText = useTransform(scrollYProgress, [0, 0.2], ["0%", "80%"]);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://admin.anahmarketing.com/get_blog.php");
        if (response.data && response.data.data && response.data.data.length > 0) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Determine final lists to use
  const displayBlogs = data?.data && data.data.length > 0 ? data.data : fallbackBlogs;
  const featuredPost = displayBlogs[0];
  const remainingPosts = displayBlogs.slice(1);

  return (
    <div ref={containerRef} style={{ background: "var(--clr-bg)" }}>
      <Helmet>
        <title>Digital Marketing Blog | Insights by Anah Marketing</title>
        <meta name="description" content="Stay ahead with the latest digital marketing trends from Anah Marketing's blog." />
        <link rel="canonical" href="https://anahmarketing.com/blog" />
      </Helmet>

      <Header />

      <style>{`
     .awwwards-blog-hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background: var(--clr-bg);
}

.awwwards-blog-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 100%,
    rgba(178, 152, 220, 0.15),
    transparent 60%
  );
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 900px;
  padding-top: 4rem;
}

.hero-content h1 {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  color: var(--clr-text-main);
  margin-bottom: 1rem;
  letter-spacing: -0.04em;
  line-height: 1.1;
}

.hero-content h1 span {
  background: var(--grad-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ================= FEATURED SECTION ================= */

.featured-section {
  padding: 6rem 0;
  overflow: hidden;
  perspective: 1500px;
  background: var(--clr-navy);
}

.featured-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* MAIN CARD (FIXED) */
.featured-card {
  display: flex;
  gap: 4rem;
  align-items: stretch;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  padding: 1.5rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: var(--shadow-sm);
}

.featured-card:hover {
  border-color: rgba(178, 152, 220, 0.4);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px) scale(1.01);
  background: var(--clr-surface);
}

/* IMAGE */
.featured-img-wrap {
  display: flex;
  overflow: hidden;
  position: relative;
  flex: 1;
  border-radius: 20px;
}

.featured-img-wrap img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  filter: grayscale(0.1);
  transition: 0.8s ease;
}

.featured-card:hover .featured-img-wrap img {
  filter: none;
  transform: scale(1.05);
}

/* BODY */
.featured-body {
  flex: 1;
  padding: 2rem 3rem 2rem 0;
  min-width: 0;
}

.featured-tag {
  display: inline-flex;
  background: rgba(178, 152, 220, 0.15);
  color: var(--clr-primary);
  padding: 0.5rem 1rem;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

.featured-meta {
  display: flex;
  gap: 1.5rem;
  color: var(--clr-text-muted);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.featured-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--clr-text-main);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  text-decoration: none;
  display: block;
  transition: 0.3s;
}

.featured-title:hover {
  color: var(--clr-primary);
}

.featured-desc {
  font-size: 1.1rem;
  color: var(--clr-text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

/* ================= BLOG GRID ================= */

.blog-grid-section {
  padding: 4rem 0 8rem;
  background: var(--clr-navy-2);
}

.blog-grid-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}

/* POST CARD */
.post-bento {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  text-decoration: none;
  box-shadow: var(--shadow-sm);
}

.post-bento:hover {
  border-color: rgba(178, 152, 220, 0.4);
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  background: var(--clr-surface);
}

.post-bento-img {
  height: 240px;
  overflow: hidden;
}

.post-bento-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
}

.post-bento:hover .post-bento-img img {
  transform: scale(1.05);
}

.post-bento-body {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.post-meta {
  display: flex;
  gap: 1rem;
  color: var(--clr-text-muted);
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.post-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--clr-text-main);
  line-height: 1.3;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-bento:hover .post-title {
  color: var(--clr-primary);
}

.post-desc {
  color: var(--clr-text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 1.5rem;
  flex: 1;
}

.read-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--clr-text-main);
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: 0.3s;
}

.post-bento:hover .read-more-btn {
  gap: 1rem;
  color: var(--clr-primary);
}

/* ================= RESPONSIVE FIX ================= */

@media (max-width: 900px) {
  .featured-card {
    flex-direction: column;
    gap: 2rem;
  }

  .featured-body {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .featured-card {
    flex-direction: column;
    gap: 1.5rem;
  }

  .featured-img-wrap {
    width: 100%;
    height: 220px;
  }

  .featured-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .featured-body {
    width: 100%;
    padding: 1.5rem;
  }

  .featured-title {
    font-size: 1.6rem;
  }

  .featured-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .featured-section {
    padding: 4rem 0;
  }

  .featured-title {
    font-size: 1.3rem;
  }

  .featured-desc {
    font-size: 0.95rem;
  }
    @media (max-width: 768px) {
  .featured-card > div {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.5rem !important;
  }
}
}
            `}</style>

      <section className="awwwards-blog-hero">
        <motion.div className="hero-content" style={{ y: yHeroText, opacity: opacityHeroText }}>
          <div className="ds-section-tag" style={{ margin: "0 auto 1.5rem" }}>Insights & Intelligence</div>
          <h1>Digital <br /><span>Architectures</span></h1>
          <p style={{ color: "var(--clr-text-secondary)", maxWidth: "500px", margin: "1rem auto 0", fontSize: "1.1rem" }}>
            Unfiltered insights. Strategies that convert. And the exact methodologies we use to scale modern brands.
          </p>
        </motion.div>
      </section>

      {featuredPost && (
<section className="featured-section">
  <div className="featured-inner">
    <MagneticTilt className="featured-card">
      <div className="featured-img-wrap">
        <a href={`/blog/${featuredPost.slug}`}>
          <img
            src={featuredPost.main_image}
            alt={featuredPost.title}
          />
        </a>
      </div>

      <div className="featured-body">
        <span className="featured-tag">
          Command Center Protocol
        </span>

        <div className="featured-meta">
          <span>
            <i className="fa-regular fa-user" />{" "}
            {featuredPost.post_author}
          </span>

          <span>
            <i className="fa-regular fa-calendar" />{" "}
            {featuredPost.post_date}
          </span>
        </div>

        <a
          href={`/blog/${featuredPost.slug}`}
          className="featured-title"
        >
          {featuredPost.title}
        </a>

        <p className="featured-desc">
          {featuredPost.meta_description}
        </p>

        <a
          href={`/blog/${featuredPost.slug}`}
          className="ds-btn-primary"
        >
          Initiate Sequence
        </a>
      </div>
    </MagneticTilt>
  </div>
</section>
      )}

      <section className="blog-grid-section">
        <div className="blog-grid-inner">
          <div className="blog-grid">
            {remainingPosts.map((item, i) => (
              <motion.a href={`/blog/${item.slug}`} key={item.slug} className="post-bento"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              >
                <div className="post-bento-img">
                  <img src={item.main_image} alt={item.title} />
                </div>
                <div className="post-bento-body">
                  <div className="post-meta">
                    <span>{item.post_date}</span>
                  </div>
                  <div className="post-title">{item.title}</div>
                  <p className="post-desc">
                    {item.meta_description}
                  </p>
                  <div className="read-more-btn">Execute <i className="fa-solid fa-arrow-right" /></div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Consultation />
      <Footer />
    </div>
  );
}
