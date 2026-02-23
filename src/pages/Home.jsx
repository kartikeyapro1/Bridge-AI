import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Layers, ArrowUpRight, X, CheckCircle2, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function Home() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            {/* Background Ambient Effects */}
            <div className="aurora-mesh"></div>

            {/* ─── HERO SECTION ─── */}
            <section className="relative flex items-center justify-center py-20 md:py-32 px-6 overflow-hidden">
                {/* Soft glow behind the brain */}
                <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent-cyan/15 via-brand-500/8 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left — Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                        className="flex flex-col items-start"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.08] text-brand-100">
                            Automate Your{' '}
                            <br className="hidden sm:block" />
                            Future with{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-accent-cyan to-accent-green">AI</span>
                        </h1>

                        <p className="text-lg md:text-xl text-brand-300 max-w-lg mb-10 leading-relaxed">
                            Premium AI Solutions for Modern Businesses
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <Link to="/services">
                                <Button size="lg" className="gap-2 px-8">
                                    Our Services
                                </Button>
                            </Link>
                            <Link to="/solutions">
                                <Button variant="outline" size="lg" className="gap-2 px-8">
                                    <Play className="w-4 h-4 fill-current" /> Watch Demo
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right — Brain Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-[500px] aspect-square">
                            {/* Soft ambient glow rings */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan/10 via-brand-500/8 to-accent-green/10 blur-[60px] animate-pulse"></div>
                            <img
                                src="/brain-hero.png"
                                alt="AI Brain Neural Network"
                                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── WHAT SCALING ACTUALLY MEANS ─── */}
            <section className="py-20 md:py-28 px-6 relative z-10 bg-white border-y border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-100">
                            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-cyan">Scaling</span> Actually Means
                        </h2>
                    </motion.div>

                    {/* Editorial Strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="bg-gradient-to-r from-gray-50 via-white to-emerald-50/40 rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 items-start">

                            {/* Left — The Old Way */}
                            <div className="md:pr-10">
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="h-0.5 w-8 bg-red-300 rounded-full"></div>
                                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-400">The Old Way</span>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        "Hire more admin",
                                        "$2,000\u2013$3,000/month",
                                        "Training costs",
                                        "Management time"
                                    ].map((item, i) => (
                                        <p key={i} className="text-lg text-brand-400 line-through decoration-brand-400/40 decoration-1">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Center Divider + Arrow */}
                            <div className="hidden md:flex flex-col items-center justify-center self-stretch py-4">
                                <div className="w-px flex-1 bg-gray-200"></div>
                                <div className="my-4">
                                    <ArrowRight className="w-5 h-5 text-brand-400" />
                                </div>
                                <div className="w-px flex-1 bg-gray-200"></div>
                            </div>

                            {/* Mobile divider */}
                            <div className="md:hidden flex items-center gap-4">
                                <div className="h-px flex-1 bg-gray-200"></div>
                                <ArrowRight className="w-5 h-5 text-brand-400 rotate-90 md:rotate-0" />
                                <div className="h-px flex-1 bg-gray-200"></div>
                            </div>

                            {/* Right — The B-AI Way */}
                            <div className="md:pl-10">
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="h-0.5 w-8 bg-gradient-to-r from-brand-500 to-accent-green rounded-full"></div>
                                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-500">The B-AI Way</span>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {[
                                        "24/7 instant response",
                                        "Automated booking",
                                        "Smart follow-ups",
                                        "Admin tasks eliminated"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-accent-green shrink-0" />
                                            <span className="text-lg font-medium text-brand-100">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-green">
                                    A fraction of a full-time salary
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── THE CORE PROBLEM ─── */}
            <section className="py-24 px-6 bg-white relative z-10 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex-1"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-100">The invisible cost of fragmented operations.</h2>
                            <p className="text-brand-300 text-lg leading-relaxed mb-8">
                                Growing businesses lose revenue not because of a lack of demand, but due to disconnected workflows, manual administrative overload, and slow lead handling.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Missed inbound opportunities",
                                    "Slow response cycles",
                                    "Disconnected software stacks",
                                    "Manual administrative overload"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-brand-200">
                                        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center border border-red-200">
                                            <X className="w-3 h-3 text-red-400" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="flex-1 w-full bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Target className="w-32 h-32 text-brand-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-brand-100">The B-AI Standard</h3>
                            <p className="text-brand-300 leading-relaxed mb-6 block relative z-10">
                                We are not a chatbot agency or simple tool reseller. We build cohesive, invisible infrastructure that turns operational chaos into a streamlined, high-performance engine.
                            </p>
                            <Link to="/about" className="inline-flex items-center gap-2 text-brand-500 hover:text-blue-700 font-medium transition-colors">
                                Read our methodology <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── CORE SYSTEMS ─── */}
            <section className="py-28 px-6 relative z-10 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-100">Core Infrastructure Systems</h2>
                        <p className="text-xl text-brand-300 max-w-2xl mx-auto block">
                            Custom-built automation solutions designed for immediate ROI and long-term scalability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Zap,
                                title: "Lead Capture & Instant Response",
                                desc: "Never miss an inbound opportunity. Automated systems that capture, qualify, and respond to leads in seconds."
                            },
                            {
                                icon: Target,
                                title: "Intelligent Booking Infrastructure",
                                desc: "Seamless appointment and scheduling automation that connects directly with your existing calendars and CRM."
                            },
                            {
                                icon: Layers,
                                title: "Customer Lifecycle Workflows",
                                desc: "Automated follow-up and retention sequences designed specifically for service-based businesses."
                            }
                        ].map((system, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-500/30 transition-all">
                                    <system.icon className="w-6 h-6 text-brand-500 group-hover:text-accent-cyan transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-brand-100">{system.title}</h3>
                                <p className="text-brand-300 leading-relaxed">{system.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/services">
                            <Button variant="secondary" className="gap-2">
                                View detailed capabilities <ArrowUpRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-24 px-6 relative z-10 overflow-hidden bg-gray-50 border-t border-gray-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-accent-cyan/8 via-brand-500/5 to-transparent blur-[80px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-brand-100">Ready to build your infrastructure?</h2>
                    <p className="text-xl font-medium text-brand-300 mb-12 max-w-2xl mx-auto">
                        Our goal in 30 days: Every opportunity captured, response times slashed, and a clear operational structure for growth.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="px-10">
                            Schedule Architecture Call
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
