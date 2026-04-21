import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    CheckCircle2, ArrowRight, Rocket, Calendar, Phone,
    MessageCircle, Star, Users, TrendingUp, Clock
} from 'lucide-react';

// ── Animated particle dots ────────────────────────────────────────────────
const Particle = ({ style }) => (
    <motion.div
        className="absolute rounded-full"
        style={style}
        animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
    />
);

// ── Subtle grid SVG ───────────────────────────────────────────────────────
const GridBg = () => (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="smGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#1e5f74" strokeWidth="0.35" />
            </pattern>
            <pattern id="lgGrid" width="112" height="112" patternUnits="userSpaceOnUse">
                <rect width="112" height="112" fill="url(#smGrid)" />
                <path d="M 112 0 L 0 0 0 112" fill="none" stroke="#1e5f74" strokeWidth="0.8" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lgGrid)" opacity="0.25" />
    </svg>
);

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

// ── Particle positions ────────────────────────────────────────────────────
const PARTICLES = [
    { width: 8, height: 8, background: '#1e5f74', opacity: 0.5, top: '12%', left: '8%' },
    { width: 6, height: 6, background: '#f97316', opacity: 0.45, top: '25%', right: '10%' },
    { width: 10, height: 10, background: '#1e5f74', opacity: 0.3, top: '60%', left: '5%' },
    { width: 5, height: 5, background: '#a855f7', opacity: 0.4, top: '70%', right: '8%' },
    { width: 7, height: 7, background: '#f97316', opacity: 0.35, top: '40%', left: '90%' },
    { width: 9, height: 9, background: '#0ea5e9', opacity: 0.3, top: '85%', left: '15%' },
];

// ── Next-step cards ───────────────────────────────────────────────────────
const STEPS = [
    {
        icon: Calendar,
        color: '#1e5f74',
        bg: 'rgba(30,95,116,0.08)',
        step: '01',
        title: 'Strategy Call Scheduled',
        desc: 'Our growth expert will reach out within 12 hours to schedule your free strategy session.',
    },
    {
        icon: TrendingUp,
        color: '#f97316',
        bg: 'rgba(249,115,22,0.08)',
        step: '02',
        title: 'Account Audit',
        desc: "We'll perform a deep-dive audit of your ad accounts, website, and competition landscape.",
    },
    {
        icon: Rocket,
        color: '#8b5cf6',
        bg: 'rgba(139,92,246,0.08)',
        step: '03',
        title: 'Growth Blueprint',
        desc: 'Receive a custom ROI-focused performance marketing roadmap built for your brand.',
    },
];

// ── Trust badges ──────────────────────────────────────────────────────────
// const BADGES = [
//     { icon: Users, label: '50+ D2C Brands' },
//     { icon: Star, label: '4.9★ Rating' },
//     { icon: Clock, label: '12-hr Response' },
//     { icon: TrendingUp, label: '320% Avg ROAS' },
// ];

// ── Rotating ring animation ───────────────────────────────────────────────
const PulseRing = () => (
    <>
        {[1, 2, 3].map(i => (
            <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-[#1e5f74]"
                animate={{ scale: [1, 1.4 + i * 0.2], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }}
            />
        ))}
    </>
);

const PerformanceMarketingThankYou = () => {
    const navigate = useNavigate();
    const confettiRef = useRef(null);

    // Simple confetti burst on mount
    useEffect(() => {
       const leadFired = sessionStorage.getItem('lead_fired');

    if (window.fbq && !leadFired) {
        window.fbq('track', 'Lead', {
            value: 1,
            currency: 'INR'
        });

        sessionStorage.setItem('lead_fired', 'true');
    
    
    }
        const colors = ['#1e5f74', '#f97316', '#8b5cf6', '#0ea5e9', '#10b981'];
        const container = confettiRef.current;
        if (!container) return;

        for (let i = 0; i < 60; i++) {
            const el = document.createElement('div');
            el.style.cssText = `
                position: absolute;
                width: ${4 + Math.random() * 8}px;
                height: ${4 + Math.random() * 8}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                left: ${Math.random() * 100}%;
                top: -10px;
                opacity: 1;
                transform: rotate(${Math.random() * 360}deg);
                transition: all ${1.5 + Math.random() * 2}s ease ${Math.random() * 0.5}s;
            `;
            container.appendChild(el);
            requestAnimationFrame(() => {
                el.style.top = `${60 + Math.random() * 60}%`;
                el.style.opacity = '0';
                el.style.transform = `rotate(${Math.random() * 720}deg) translateX(${-50 + Math.random() * 100}px)`;
            });
            setTimeout(() => el.remove(), 4000);
        }
    }, []);

    return (
        <div
            className="min-h-screen font-sans overflow-hidden relative"
            style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #faf5ff 40%, #fff7ed 100%)' }}
        >
            {/* Background layers */}
            <GridBg />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(255,255,255,0.9)_0%,transparent_100%)]" />

            {/* Confetti container */}
            <div ref={confettiRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

            {/* Ambient particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {PARTICLES.map((p, i) => <Particle key={i} style={p} />)}
            </div>

            {/* ── Logo ── */}
            <div className="relative z-10 flex justify-center pt-10">
                <a href="/" className="opacity-90 hover:opacity-100 transition-opacity">
                    <img
                        src="/logo.png"
                        alt="Anah Marketing"
                        className="h-14 object-contain"
                        onError={e => { e.target.style.display = 'none'; }}
                    />
                </a>
            </div>

            {/* ── Main content ── */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">

                {/* ── Hero card ── */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={stagger}
                    className="text-center mb-14"
                >
                    {/* Check icon with pulse rings */}
                    <motion.div variants={fadeUp} className="flex justify-center mb-8">
                        <div className="relative">
                            <PulseRing />
                            <motion.div
                                className="relative w-28 h-28 bg-[#1e5f74] rounded-full flex items-center justify-center shadow-[0_20px_60px_rgba(30,95,116,0.4)]"
                                animate={{ scale: [0.8, 1], opacity: [0, 1] }}
                                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                            >
                                <CheckCircle2 size={52} className="text-white" strokeWidth={2} />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Badge */}
                    <motion.div variants={fadeUp}
                        className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-[#1e5f74]/20 text-[#1e5f74] text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-6 shadow-sm"
                    >
                        <Star size={10} fill="currentColor" /> Submission Confirmed
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 variants={fadeUp}
                        className="text-5xl lg:text-6xl font-black leading-[1.05] text-slate-900 mb-5"
                    >
                        Thank You!
                        <br />
                        <span className="text-[#1e5f74]">We've Got Your</span>
                        <br />
                        <span style={{ WebkitTextStroke: '2px #f97316', color: 'transparent' }}>Request.</span>
                    </motion.h1>

                   <motion.p
                        variants={fadeUp}
                        className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto mb-10"
                        >
                        Your strategy call request has been received. Our performance marketing
                        experts will be in touch shortly to discuss your brand’s growth opportunities.
                        </motion.p>
                    {/* CTA buttons */}
                    <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://wa.me/919207419301"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-black text-sm uppercase tracking-widest shadow-[0_12px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_16px_40px_rgba(37,211,102,0.5)] hover:-translate-y-0.5 transition-all"
                        >
                            <MessageCircle size={16} /> Chat on WhatsApp
                        </a>
                        <button
                            onClick={() => navigate('/performance-marketing')}
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-slate-200 text-slate-700 px-7 py-3.5 rounded-full font-bold text-sm hover:border-[#1e5f74] hover:text-[#1e5f74] transition-all shadow-sm"
                        >
                            Back to Home <ArrowRight size={14} />
                        </button>
                    </motion.div>
                </motion.div>

                {/* ── What happens next ── */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={stagger}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                  
                   
                </motion.div>

                {/* ── Trust badges ── */}
                {/* <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={stagger}
                    viewport={{ once: true }}
                    className="bg-white/70 backdrop-blur-xl border border-white rounded-3xl px-8 py-6 shadow-sm mb-10"
                > */}
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {BADGES.map(({ icon: Icon, label }, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className="w-10 h-10 bg-[#1e5f74]/10 text-[#1e5f74] rounded-xl flex items-center justify-center">
                                    <Icon size={18} />
                                </div>
                                <span className="text-[11px] font-black text-slate-600 uppercase tracking-wide">{label}</span>
                            </motion.div>
                        ))}
                    </div> */}
                {/* </motion.div> */}

                {/* ── Brand logos strip ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.35em] mb-5">
                        Trusted by Leading D2C Brands
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 items-center">
                        {['Swtantra', 'Chase Haul', 'RIOZ', 'Teakwood', 'Nangalia Ruchira', 'Baidyanath'].map((b, i) => (
                            <div
                                key={i}
                                className="text-[11px] font-black text-slate-400 uppercase tracking-widest bg-white/60 border border-slate-100 rounded-lg px-4 py-2 hover:text-[#1e5f74] hover:border-[#1e5f74]/30 transition-colors cursor-default shadow-sm"
                            >
                                {b}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Contact info strip ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center"
                >
                    <p className="text-slate-400 text-xs mb-3">
                        Can't wait? Talk to us directly.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <a
                            href="tel:+919207419301"
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#1e5f74] hover:underline transition"
                        >
                            <Phone size={14} /> +91 9207419301
                        </a>
                        <span className="text-slate-200">|</span>
                        <a
                            href="mailto:marketing@anahmarketing.com"
                            className="text-sm font-bold text-[#1e5f74] hover:underline transition"
                        >
                            marketing@anahmarketing.com
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* ── Footer bar ── */}
            <div className="relative z-10 border-t border-slate-100 bg-white/50 backdrop-blur py-5 mt-8">
                <p className="text-center text-[11px] text-slate-400">
                    © {new Date().getFullYear()} Anah Marketing & Innovations. All rights reserved.
                </p>
            </div>

            {/* ── Floating WhatsApp ── */}
            <a
                href="https://wa.me/919207419301"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform flex items-center justify-center"
            >
                <MessageCircle size={26} />
            </a>
        </div>
    );
};

export default PerformanceMarketingThankYou;
