import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Layers, ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function Home() {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            {/* Background Ambient Effects */}
            <div className="aurora-mesh"></div>

            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center pt-24 pb-32 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="relative z-10 max-w-4xl text-center flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-800 bg-surface/80 backdrop-blur-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-brand-300">Scalable Automation Technology</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        We build systems<br className="hidden md:block" /> that scale with you.
                    </h1>

                    <p className="text-lg md:text-xl text-brand-100/70 max-w-2xl mb-10 leading-relaxed">
                        B-AI architects structured, AI-driven infrastructure that eliminates operational bottlenecks, accelerates response cycles, and drives revenue performance.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto gap-2 text-md px-8">
                                Book Consultation <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                        <Link to="/services" className="w-full sm:w-auto">
                            <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-transparent border-brand-700 hover:bg-surface/50 text-white">
                                View Infrastructure
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* The Core Problem */}
            <section className="py-24 px-6 bg-surface relative z-10 border-y border-brand-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex-1"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">The invisible cost of fragmented operations.</h2>
                            <p className="text-brand-100/60 text-lg leading-relaxed mb-8">
                                Growing businesses lose revenue not because of a lack of demand, but due to disconnected workflows, manual administrative overload, and slow lead handling.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Missed inbound opportunities",
                                    "Slow response cycles",
                                    "Disconnected software stacks",
                                    "Manual administrative overload"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-brand-100">
                                        <div className="w-6 h-6 rounded-full bg-brand-900/40 flex items-center justify-center border border-brand-800">
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
                            className="flex-1 w-full bg-background rounded-2xl border border-brand-800 p-8 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target className="w-32 h-32 text-brand-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-brand-300">The B-AI Standard</h3>
                            <p className="text-brand-100/70 leading-relaxed mb-6 block relative z-10">
                                We are not a chatbot agency or simple tool reseller. We build cohesive, invisible infrastructure that turns operational chaos into a streamlined, high-performance engine.
                            </p>
                            <Link to="/about" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium transition-colors">
                                Read our methodology <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Systems */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Infrastructure Systems</h2>
                        <p className="text-xl text-brand-100/60 max-w-2xl mx-auto block">
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
                                className="bg-surface border border-brand-800 rounded-2xl p-8 hover:bg-brand-900/10 hover:border-brand-600 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-background border border-brand-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <system.icon className="w-6 h-6 text-brand-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{system.title}</h3>
                                <p className="text-brand-100/60 leading-relaxed">{system.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/services">
                            <Button variant="outline" className="gap-2">
                                View detailed capabilities <ArrowUpRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 30-Day Success Definition CTA */}
            <section className="py-24 px-6 bg-brand-500 text-background relative z-10 overflow-hidden">
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to build your infrastructure?</h2>
                    <p className="text-xl font-medium opacity-90 mb-12 max-w-2xl mx-auto">
                        Our goal in 30 days: Every opportunity captured, response times slashed, and a clear operational structure for growth.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-background text-brand-500 hover:bg-background/90 shimmer-effect px-10 border border-background">
                            Schedule Architecture Call
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
