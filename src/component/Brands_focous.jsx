import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

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
    post_date: "May 18, 2026",
    post_author: "Anax Growth Team",
    meta_description: "Learn the exact creative sandboxing methods and media buying protocols we use to scale eCommerce brands profitably to large-scale spend."
  },
  {
    slug: "shopify-conversion-optimization",
    title: "Shopify Speed & UX Checklist: Elevating Your Checkout Conversions",
    main_image: fallbackImg2,
    post_date: "May 12, 2026",
    post_author: "Anax Dev Team",
    meta_description: "Discover the critical UX tweaks, express payment setups, and speed optimizations that help double conversion rates on custom Shopify storefronts."
  },
  {
    slug: "google-ads-high-intent-capturing",
    title: "Google Ads Performance Max: Smart Architecture for Maximum Profit",
    main_image: fallbackImg3,
    post_date: "May 08, 2026",
    post_author: "Anax Search Team",
    meta_description: "Unlocking Google Ads success. How to structure asset groups, audience signals, and negative keyword lists to target ready-to-buy consumers."
  },
  {
    slug: "whatsapp-marketing-automations",
    title: "Lifecycle Marketing Playbook: Recovering 35%+ Abandoned Carts",
    main_image: fallbackImg4,
    post_date: "May 02, 2026",
    post_author: "Anax Automation Team",
    meta_description: "Unlock passive revenue streams by layering personalized WhatsApp outreach alongside high-converting email lifecycle recovery sequences."
  }
];

export default function Brands_focous() {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://admin.anahmarketing.com/get_blog.php");
        if (response.data && response.data.data && response.data.data.length > 0) {
          setdata(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Determine final blog list to display (use fallback if API returns empty)
  const displayBlogs = data?.data && data.data.length > 0 ? data.data : fallbackBlogs;

  return (
    <>
      <style>{`
        /* ── Blog Section ─────────────────────── */
        .blog-section {
          background: var(--clr-surface);
          padding: 8rem 0;
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--clr-border);
        }
        .blog-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .blog-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 5rem;
          flex-wrap: wrap;
        }
        .blog-header h2 {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 900;
          color: var(--clr-text-main);
          line-height: 1.1;
          margin: 0;
          letter-spacing: -0.04em;
        }
        .blog-header h2 em {
          font-style: normal;
          background: var(--grad-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .blog-header p {
          color: var(--clr-text-secondary);
          font-size: 1.05rem;
          line-height: 1.75;
          max-width: 480px;
          margin: 0;
        }

        /* Grid */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: 1fr; }
        }

        /* Blog Card */
        .blog-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid var(--clr-border);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          display: flex;
          flex-direction: row;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          text-decoration: none;
          box-shadow: var(--shadow-sm);
        }
        @media (max-width: 640px) {
          .blog-card { flex-direction: column; }
        }
        .blog-card:hover {
          border-color: var(--clr-primary-glow);
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          background: #ffffff;
        }
        .blog-card-img {
          width: 40%;
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
        }
        @media (max-width: 640px) {
          .blog-card-img { width: 100%; height: 220px; }
        }
        .blog-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .blog-card:hover .blog-card-img img {
          transform: scale(1.05);
        }
        .blog-card-body {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }
        .blog-card-date {
          font-size: 0.8rem;
          color: var(--clr-text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .blog-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--clr-text-main);
          line-height: 1.35;
          text-decoration: none;
          display: block;
          transition: color 0.3s;
        }
        .blog-card:hover .blog-card-title { color: var(--clr-primary); }
        .blog-card-excerpt {
          color: var(--clr-text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          flex: 1;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .blog-card-readmore {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--clr-primary);
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: gap 0.3s ease;
        }
        .blog-card-readmore:hover { gap: 0.75rem; }

        /* Skeleton */
        .blog-skeleton-card {
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid var(--clr-border);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          display: flex;
          height: 220px;
        }
        .blog-skeleton-img {
          width: 40%;
          flex-shrink: 0;
          height: 100%;
        }
        .blog-skeleton-body {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .blog-skeleton-line {
          border-radius: var(--radius-xs);
          height: 14px;
        }
      `}</style>

      <section className="blog-section" aria-label="Our latest blogs">
        <div className="blog-inner">
          <div className="blog-header">
            <div>
              <div className="ds-section-tag">Insights &amp; Resources</div>
              <h2>Our <em>Latest Blogs</em></h2>
            </div>
            <div>
              <p>
                Explore actionable insights, success stories, and expert advice that can
                help drive growth for your business.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <a href="/blog" className="ds-btn-ghost">
                  View All Posts <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="blog-grid">
            {loading
              ? [0, 1, 2, 3].map(i => (
                <div className="blog-skeleton-card" key={i}>
                  <div className="blog-skeleton-img ds-skeleton" />
                  <div className="blog-skeleton-body">
                    <div className="blog-skeleton-line ds-skeleton" style={{ width: "40%" }} />
                    <div className="blog-skeleton-line ds-skeleton" style={{ width: "90%" }} />
                    <div className="blog-skeleton-line ds-skeleton" style={{ width: "75%" }} />
                    <div className="blog-skeleton-line ds-skeleton" style={{ width: "60%" }} />
                  </div>
                </div>
              ))
              : displayBlogs.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.slug}
                  className="blog-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="blog-card-img">
                    <a href={`/blog/${item.slug}`}>
                      <img src={item.main_image} alt={item.title} />
                    </a>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-date">
                      <i className="fa-regular fa-calendar" style={{ marginRight: "0.4rem" }} />
                      {item.post_date}
                    </div>
                    <a href={`/blog/${item.slug}`} className="blog-card-title">
                      {item.title}
                    </a>
                    <p className="blog-card-excerpt">
                      {item.meta_description}
                    </p>
                    <a href={`/blog/${item.slug}`} className="blog-card-readmore">
                      Read Article <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.8rem" }} />
                    </a>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
