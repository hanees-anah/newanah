import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight, Target, Search, TrendingUp, Globe, BarChart2,
  Layers, Rocket, Clock, Briefcase, Check, MessageCircle, Zap,
  ChevronDown, Activity, PieChart, MousePointer2, Star,Phone,
  CheckCircle2, BarChart3, Users
} from 'lucide-react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Footer from "../component/Footer";
import Header from "../component/Header";
import swtantra_logo from "../assets/images/swtantra-logo.png"
import chasehaulLogo from '../assets/images/chasehaul_logo.png';
import rioz_logo from "../assets/images/rioz-logo.png"
import teakwoodLogo from '../assets/images/teakwood-logo-img.png';
import ruchira from "../assets/images/ruchira.png";
import baidLogo from '../assets/images/baid_logo.png';
import preloader_img from "../assets/images/logo-img.png";
// import { motion } from 'framer-motion';
// import {  Layers } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 }
};
const process = [
  {
    icon: Search,
    step: "01",
    title: "Research & Audit",
    desc: "We analyze your market, audience, competitors, and current performance."
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Strategy Build",
    desc: "We create a custom growth roadmap focused on ROI and scalability."
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch & Scale",
    desc: "Campaigns are launched, optimized, and scaled using live data."
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Report & Grow",
    desc: "Transparent reporting with continuous improvements every month."
  }
];

const fadeUp2 = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};
const services = [
  {
    title: 'Meta Ads Management',
    icon: <Target className="text-[#1e5f74] group-hover:text-white transition-colors duration-300" />,
    desc: 'High-performance Facebook & Instagram ads scaled for maximum revenue.'
  },
  {
    title: 'Google Ads Specialist',
    icon: <Search className="text-[#1e5f74] group-hover:text-white transition-colors duration-300" />,
    desc: 'Capturing high-intent searches on Google Search, Shopping & YouTube.'
  },
  {
    title: 'SEO Growth Strategy',
    icon: <TrendingUp className="text-[#1e5f74] group-hover:text-white transition-colors duration-300" />,
    desc: 'Sustainable organic growth through technical mastery and content authority.'
  },
  {
    title: 'Omni-Channel Marketing',
    icon: <Layers className="text-[#1e5f74] group-hover:text-white transition-colors duration-300" />,
    desc: 'Unified marketing strategy across all digital touchpoints for consistent growth.'
  }
];

// ── Animated Counter ──────────────────────────────────────────────────
const Counter = ({ to, suffix = '' }) => {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = Math.max(1, Math.ceil(to / 55));
    const t = setInterval(() => {
      n = Math.min(n + step, to);
      setV(n);
      if (n >= to) clearInterval(t);
    }, 28);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
};
const AnimCounter = ({ to, suffix = '' }) => {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = Math.max(1, Math.ceil(to / 60));
    const t = setInterval(() => {
      n = Math.min(n + step, to);
      setV(n);
      if (n >= to) clearInterval(t);
    }, 25);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

// ── Grid SVG background ───────────────────────────────────────────────
// const GridBg = () => (
//   <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
//     <defs>
//       <pattern id="smallGrid" width="24" height="24" patternUnits="userSpaceOnUse">
//         <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#6366f1" strokeWidth="0.4" />
//       </pattern>
//       <pattern id="grid" width="96" height="96" patternUnits="userSpaceOnUse">
//         <rect width="96" height="96" fill="url(#smallGrid)" />
//         <path d="M 96 0 L 0 0 0 96" fill="none" stroke="#6366f1" strokeWidth="0.9" />
//       </pattern>
//     </defs>
//     <rect width="100%" height="100%" fill="url(#grid)" opacity="0.35" />
//   </svg>
// );

const PerformanceMarketingNew5 = () => {
const selectRef = useRef(null);
  const [spend, setSpend] = useState("");
  const spendRef = useRef(""); // ← add this
  const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  website: "",
  City: "",
  // spend:  "",
  message: "",
//   city: "",
  companyname: "Anah Perf Marketing – Grid V5",
  formType: "performance_marketing",
});

const [loading, setLoading] = useState(false);
const [status, setStatus] = useState(null);
const [showPopup, setShowPopup] = useState(false);
const [isLoading, setIsLoading] = useState(true);

// ✅ Loader logic (same as first)
useEffect(() => {
  const handleLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  if (document.readyState === "complete") {
    handleLoad();
  } else {
    window.addEventListener("load", handleLoad);
  }

  return () => window.removeEventListener("load", handleLoad);
}, []);

const navigate = useNavigate();

const onChange = (e) => {
  const { name, value } = e.target;

  console.log("CHANGE FIRED:", name, value);

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};
const onSubmit = async (e) => {
  e.preventDefault();
console.log("FORM DATA:", formData);
  const spendValue = selectRef.current?.value;
  console.log("SPEND:", spendValue);

  if (!spendValue) {
    alert("Please select Monthly Spend");
    return;
  }

  setLoading(true);
  try {
    const payload = {
      ...formData,
      spend: spendValue,
      company: formData.website || formData.companyname || "N/A",
    };
    console.log("Final Payload:", payload);
    // ... rest of your code stays same

    const response = await axios.post(
      "https://anahmarketing.com:5000/send-email",
      payload, // ✅ no need JSON.stringify
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response:", response.data);

    // ✅ Show success popup
    setShowPopup(true);

    // ✅ Reset form (keep companyname default)
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      website: "",

      // spend: "",
      message: "",
       city: "",
      companyname: "Anah Perf Marketing – Grid V5",
      formType: "performance_marketing",
    });
setSpend("");
spendRef.current = "";
// after setFormData reset
if (selectRef.current) selectRef.current.value = "";
    // ✅ Hide popup after 3 sec
    setTimeout(() => {
      setShowPopup(false);
      navigate("/thank-you");
    }, 3000);

  } catch (error) {
    console.error("Failed to send message", error);

    // ✅ Show error to user
    alert(
      error?.response?.data?.message ||
      "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  const inputCls = "w-full bg-white/70 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-[#1e5f74] focus:ring-4 focus:ring-[#1e5f74]/8 transition-all";
  const rv = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } };

  return (

    <div className="bg-white text-slate-900 font-sans overflow-hidden performance-marketing-page">
       
      <Helmet>
        <title>Performance Marketing Agency | Anah Marketing</title>
        <meta name="description" content="India's #1 D2C performance marketing agency — Meta Ads, Google Ads & SEO for sustainable ROI growth." />
      </Helmet>

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden top-new-section"
        style={{ background: 'linear-gradient(135deg, #f5f0ff 0%, #fce4f3 40%, #e0f2fe 100%)' }}>
        {/* Grid background */}
   <div className="pointer-events-none">
  {/* <GridBg /> */}
</div>
        {/* Soft radial vignette so centre stays light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.85)_0%,transparent_100%)]" />



        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div initial="hidden" animate="show" variants={stagger}>
              {/* Badge row */}
              { <motion.div variants={rv} className="flex items-center gap-3 mb-10">
                <div className="w-8 h-0.5 bg-[#FF5A1F]" />
                <span className="text-[#FF5A1F] text-[14px] font-black uppercase tracking-[0.25em]">India's #1 D2C Performance Agency</span>
              </motion.div> }
{/* <h1 className="text-red-500 text-5xl font-bold">
  Tailwind Working
</h1> */}
              <motion.h1 variants={rv} className="text-6xl lg:text-7xl xl:text-7xl font-black leading-[0.95] tracking-tighter mb-8">
                We Make<br />
                Your Brand<br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #FF5A1F, #FF8C00)' }}>Unstoppable.</span>
                  <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 400 20" fill="none" preserveAspectRatio="none" style={{ height: 12 }}>
                    <path d="M0 16 Q100 0 200 10 Q300 20 400 4" stroke="#FF5A1F" strokeWidth="3" fill="none" opacity="0.6" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg">
                Scale your brand with data-driven Meta Ads, Google Ads & SEO strategies built for sustainable, long-term growth in the Indian D2C market.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-2 gap-3 mb-12 max-w-xl"
              >
                {[
                  { icon: Target, text: 'Meta & Google Ads Experts' },
                  { icon: TrendingUp, text: 'ROI-Focused Strategies' },
                  { icon: Globe, text: 'Omni-Channel Marketing' },
                  { icon: Users, text: '50+ D2C Brands Managed' },
                  { icon: Clock, text: '10+ Years Experience' },
                  { icon: Search, text: 'SEO Specialists' },
                ].map(({ icon: Icon, text }, i) => (
                  <div
                    key={i}
                    className="
        group relative flex items-center gap-3
        bg-white/70 backdrop-blur-xl
        border border-white/60
        rounded-2xl px-4 py-3
        shadow-sm
        hover:shadow-md hover:-translate-y-0.5
        transition-all duration-300
        overflow-hidden
      "
                  >
                    {/* Modern icon badge */}
                    <div
                      className="
          w-9 h-9 flex items-center justify-center
          rounded-xl
          bg-gradient-to-br from-[#1e5f74]/10 to-[#1e5f74]/5
          text-[#1e5f74]
          group-hover:from-[#1e5f74] group-hover:to-[#14485a]
          group-hover:text-white
          transition-all duration-300
          shadow-inner
          flex-shrink-0
        "
                    >
                      <Icon size={16} strokeWidth={2} />
                    </div>

                    {/* Text */}
                    <span className="text-[14px] font-semibold text-slate-700 leading-snug">
                      {text}
                    </span>

                    {/* subtle animated highlight */}
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700" />
                  </div>
                ))}
              </motion.div>


            </motion.div>

            {/* Right – Form */}
            <div id="form">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
                className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_30px_80px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-8 xl:p-10 relative overflow-hidden">

                {/* Accent corner */}
                {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1e5f74]/10 to-transparent rounded-bl-[2.5rem]" /> */}

                <div className="relative z-10">
                  <div className="flex items-center gap-2 ">
                    {/* {<div className="w-5 h-0.5 bg-[#FF5A1F]" /> }
                    { <span className="text-[#FF5A1F] text-[10px] font-black uppercase tracking-[0.3em]">Free Growth Audit</span> } */}
                  </div>
                  <h3 className="text-4xl font-black text-black text-center mb-2">Let's Build Your Strategy</h3>
                </div>

              <form onSubmit={onSubmit} className="space-y-4">

  {/* FULL NAME */}
  <input
    type="text"
    name="first_name"   
    value={formData.first_name}
    onChange={onChange} 
    placeholder="Full Name"
    required
    className={inputCls}
  />

  <div className="grid grid-cols-2 gap-3">
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={onChange}
      placeholder="Work Email"
      required
      className={inputCls}
    />

 {/* <input
  type="number"
  name="phone"
  value={formData.phone}
  onChange={onChange}
  placeholder="Phone +91"
  required
  inputMode="numeric"
  pattern="[0-9]{10}"
  maxLength={10}
  className={inputCls}
/> */}
<input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, phone: value });
  }}
  onKeyDown={(e) => {
    if (
      ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
    ) return;

    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  }}
  placeholder="Phone +91"
  required
  inputMode="numeric"
  maxLength={10}
  className={inputCls}
/>
  </div>

  <div className="grid grid-cols-2 gap-3">
    <input
      type="text"
      name="website" // ✅ keep SAME (no change)
      value={formData.website}
      onChange={onChange}
      placeholder="Website / Brand Name*"
      required
      className={inputCls}
    />
    
<div className="relative">
<select
  ref={selectRef}
  name="spend"
  defaultValue=""
  className="w-full bg-white/70 border border-slate-200 rounded-xl py-3 px-4 text-slate-700 text-sm outline-none focus:border-[#1e5f74] transition-all appearance-none pr-10 cursor-pointer"
>
  <option value="" >Monthly Spend*</option>
  <option value="under1L">Under ₹1L</option>
  <option value="1to3L">₹1L – ₹3L</option>
  <option value="3to8L">₹3L – ₹8L</option>
  <option value="8to15L">₹8L – ₹15L</option>
  <option value="15to25L">₹15L – ₹25L</option>
  <option value="25to40L">₹25L – ₹40L</option>
  <option value="40plus">₹40L+</option>
</select>

  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
    <ChevronDown size={16} className="text-slate-400" />
  </div>
</div>
  </div>
 <input
      type="text"
      name="city" // ✅ keep SAME (no change)
      value={formData.city}
      onChange={onChange}
      placeholder="City"
      required
      className={inputCls}
    />
  {/* <textarea
    name="message"
    value={formData.message}
    onChange={onChange}
    placeholder="Tell us about your goals…"
    rows={3}
 className={`${inputCls} resize-none`}
  /> */}

  <button
    type="submit"
    disabled={loading}
    className="w-full py-4 rounded-full bg-[#1e5f74] text-white font-black text-sm uppercase tracking-widest shadow-[0_12px_30px_rgba(30,95,116,0.3)] hover:shadow-[0_18px_40px_rgba(30,95,116,0.45)] hover:-translate-y-0.5 active:scale-[.98] transition-all disabled:opacity-60 flex items-center justify-center gap-3"
  >
    {loading ? 'Submitting...' : 'Get Free Strategy Call'}
    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
      <ArrowRight size={13} />
    </div>
  </button>
</form>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-white flex flex-col items-center justify-center rounded-[2.5rem] text-center p-8">
                      <div className="w-16 h-16 rounded-full bg-[#1e5f74] flex items-center justify-center mb-4 shadow-xl">
                        <Check size={28} strokeWidth={3} className="text-white" />
                      </div>
                      <h4 className="text-xl font-black text-slate-900 mb-2">Request Received!</h4>
                      <p className="text-slate-500 text-sm">Our team will connect with you via WhatsApp to schedule first kick off call with you.</p>
                    </motion.div>
                  )}
                </AnimatePresence>


                <div className="grid grid-cols-3 gap-3 items-center justify-items-center mt-8 opacity-80">
                  <img
                    src={swtantra_logo}
                    alt=""
                    className="h-24  object-contain"
                  />

                  <img
                    src={chasehaulLogo}

                    // src="https://chasehaul.com/cdn/shop/files/CHASE_HAUL_LOGO-svg_e3e1d8e0-75a4-41e1-b6c5-aefd4b7695d9.png?v=1732013553&width=211"
                    alt=""
                    className="h-24  object-contain"
                  />

                  <img
                    src={rioz_logo}

                    // src="https://teakwoodleathers.com/cdn/shop/files/logo-new_300x300.png?v=1737956958"
                    alt=""
                    className="h-24  object-contain"
                  />

                  <img
                    src={teakwoodLogo}

                    // src="https://www.nangaliaruchira.com/cdn/shop/files/NR-logo.png?v=1764304389&width=962"
                    alt=""
                    className="h-24  object-contain"
                  />

                  <img
                    src={ruchira}


                    // src="https://swtantra.com/cdn/shop/files/Swtantra-logo.svg?v=1744240128&width=565"
                    alt=""
                    className="h-24  object-contain"
                  />
                  <img
                    src={baidLogo}


                    // src="https://swtantra.com/cdn/shop/files/Swtantra-logo.svg?v=1744240128&width=565"
                    alt=""
                    className="h-24 object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════════════════════════════ */}
      {/* SERVICES SECTION (WHITE) */}
      <section className="py-20 bg-white our-capability">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div class="flex items-center gap-3 justify-center mb-6"><div class="w-8 h-0.5 bg-[#ff5a1f]"></div>
            <span class="text-[#ff5a1f] text-[14px] font-black uppercase tracking-[0.2em]"> Our Capabilities</span>
            <div class="w-8 h-0.5 bg-[#ff5a1f]"></div></div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Expert Services
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              We provide full-funnel performance marketing solutions built for modern e-commerce scalability and predictable revenue.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#1e5f74]/20 transition-all group flex flex-col"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-violet-700 mb-8 group-hover:bg-[#1e5f74] group-hover:text-white transition-all shadow-inner">
                  {React.cloneElement(service.icon, { size: 24 })}
                </div>

                <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight leading-snug">
                  {service.title}
                </h4>

                <p className="text-slate-600 text-[16px] leading-relaxed mb-0 max-w-lg">
                  {service.desc}
                </p>

                {/* <div className="text-[10px] font-black text-violet-700 uppercase tracking-widest group-hover:gap-2 flex items-center gap-1 transition-all">
                Learn More <ArrowRight size={12} />
              </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#f7f8fc] performance-lab">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <div class="flex items-center gap-3 justify-center mb-6"><div class="w-8 h-0.5 bg-[#ff5a1f]"></div>
            <span class="text-[#ff5a1f] text-[14px] font-black uppercase tracking-[0.2em]"> Performance Lab</span>
            <div class="w-8 h-0.5 bg-[#ff5a1f]"></div></div>

            <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
              What Drives Your Growth
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid lg:grid-cols-12 lg:grid-rows-2 gap-4 auto-rows-[220px]">

            {/* BIG LEFT CARD */}
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              viewport={{ once: true }}
              className="lg:col-span-5 row-span-2 bg-white border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-between group hover:shadow-2xl transition-all"
            >
              <div>
                <div className="w-12 h-12 bg-[#1e5f74]/10 rounded-2xl flex items-center justify-center text-[#1e5f74] mb-6">
                  <Activity size={24} />
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  ROI-First Campaign Architecture
                </h3>

                <p className="text-slate-600 text-[16px] leading-relaxed">
                  Every decision is anchored in net-profit attribution, not vanity metrics. We engineer campaigns to compound, not just convert.
                </p>
              </div>

              {/* Mini bar chart */}
              <div className="flex items-end gap-2 h-20">
                {[40, 55, 35, 70, 60, 85, 75, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-lg bg-[#1e5f74]/20 hover:bg-[#1e5f74] transition-all"
               style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 text-[#1e5f74] text-[16px] mt-4">
                <TrendingUp size={14} />
                Revenue growth trajectory
              </div>
            </motion.div>

            {/* FULL FUNNEL */}
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-4 bg-white border border-slate-200 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div className="w-10 h-10 bg-[#1e5f74]/10 rounded-xl flex items-center justify-center text-[#1e5f74]">
                <Target size={20} />
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-900 mb-1">
                  Full-Funnel Strategy
                </h4>
                <p className="text-slate-600 text-[16px] leading-relaxed">
                  From cold awareness to loyal repeat customer — we own every stage.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3 bg-gradient-to-br from-[#1e5f74] to-[#144655] rounded-[2rem] p-8 flex flex-col justify-between hover:scale-[1.02] transition-all shadow-lg"
            >
              <Star size={28} className="text-white/80" />

              <div>
                <h4 className="text-lg font-black text-white mb-3">
                  Ready to Scale?
                </h4>

                <a
                  href="#form"
                  className="inline-flex items-center gap-2 bg-white text-[#1e5f74] px-5 py-2.5 rounded-full font-black text-xs tracking-widest uppercase"
                >
                  Start Now <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>

            {/* ROAS */}
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 bg-white border border-slate-200 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 bg-[#1e5f74]/10 rounded-xl flex items-center justify-center text-[#1e5f74]">
                  <BarChart2 size={20} />
                </div>

                <div className="px-2 py-1 bg-green-100 text-green-600 rounded-lg text-[9px] font-black uppercase">
                  Live
                </div>
              </div>

              <div>
                <div className="text-3xl font-black text-slate-900 mb-1">
                  3.5<span className="text-[#1e5f74]">×</span>
                </div>
                <p className="text-slate-600 text-[16px] leading-relaxed">
                  Avg ROAS maintain is above 3.5
                </p>
              </div>
            </motion.div>

            {/* CPA */}
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="lg:col-span-3 bg-white border border-slate-200 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div className="w-10 h-10 bg-[#1e5f74]/10 rounded-xl flex items-center justify-center text-[#1e5f74]">
                <PieChart size={20} />
              </div>

              <div>
                <div className="text-3xl font-black text-slate-900 mb-1">
                  –30<span className="text-[#1e5f74]">%</span>
                </div>
                <p className="text-slate-600 text-[16px] leading-relaxed">
                  CPA reduction through creative & bid optimisation
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-24 how-we-work-landing"> "
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div class="flex items-center gap-3 justify-center mb-6"><div class="w-8 h-0.5 bg-[#ff5a1f]"></div>
            <span class="text-[#ff5a1f] text-[14px] font-black uppercase tracking-[0.2em]">How We Work</span>
            <div class="w-8 h-0.5 bg-[#ff5a1f]"></div></div>

            <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
              Our Growth Protocol
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6 relative">

            {/* connector line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-slate-200" />

            {process.map(({ icon: Icon, step, title, desc }, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 group text-center"
              >

                <div className="relative mx-auto w-20 h-20 mb-6">

                  {/* main icon circle */}
                  <div className="w-20 h-20 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-[#1e5f74] group-hover:border-[#1e5f74] group-hover:shadow-[0_0_0_8px_rgba(30,95,116,0.10)] transition-all">
                    <Icon size={26} />
                  </div>

                  {/* step badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#1e5f74] to-[#144655] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-lg">
                    {step}
                  </div>

                </div>

                <h4 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#1e5f74] transition-colors">
                  {title}
                </h4>

                <p className="text-slate-600 text-[16px] leading-relaxed leading-relaxed px-4">
                  {desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>





      {/* ══ FINAL CTA (LIGHT THEME) ═════════════════════════════════════════════ */}
      <section className="py-32 bg-slate-50 relative overflow-hidden build-together-landing">

        {/* soft background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1e5f74]/10 blur-[120px] rounded-full" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={rv}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        >

          {/* Label */}
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="w-8 h-0.5 bg-[#ff5a1f]" />
            <span className="text-[#ff5a1f] text-[14px] font-black uppercase tracking-[0.2em]">
              Let's Build Together
            </span>
            <div className="w-8 h-0.5 bg-[#ff5a1f]" />
          </div>

          {/* Heading */}
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6 tracking-tighter">
            Ready to Be<br />
            <span
              className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #FF5A1F, #FF8C00)' }}
            >
              Unstoppable?
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-500 mb-12 text-lg leading-relaxed max-w-xl mx-auto">
            Join 50+ D2C brands that chose Anah Marketing for data-driven performance that compounds.
          </p>

          {/* CTA Button */}
          <a
            href="#form"
            className="group inline-flex items-center gap-4 bg-[#1e5f74] text-white px-14 py-6 rounded-full font-black text-base uppercase tracking-widest shadow-[0_20px_50px_rgba(30,95,116,0.25)] hover:shadow-[0_25px_60px_rgba(30,95,116,0.35)] hover:-translate-y-1 transition-all"
          >
            Book Free Consultation

            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={16} />
            </div>
          </a>

        </motion.div>
      </section>

      {/* Floating WhatsApp
      <a href="https://wa.me/916376011249" target="_blank" rel="noreferrer"
        className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform flex items-center justify-center">
        <MessageCircle size={26} />
      </a> */}   <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center"
                >
                    <p className="text-slate-500 text-[15px] pt-4 mb-3">
                        Can't wait? Talk to us directly.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <a
                            href="tel:+919207419301"
                            className="inline-flex items-center text-[15px] gap-2 text-sm font-bold text-[#1e5f74] hover:underline transition"
                        >
                            <Phone size={14} /> +91 9207419301
                        </a>
                        <span className="text-slate-200">|</span>
                        <a
                            href="mailto:marketing@anahmarketing.com"
                            className="text-sm font-bold text-[15px] text-[#1e5f74] hover:underline transition"
                        >
                            marketing@anahmarketing.com
                        </a>
                    </div>
                </motion.div>
      <Footer />
    </div>
  );
};

export default PerformanceMarketingNew5;