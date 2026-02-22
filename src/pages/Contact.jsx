import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Building2, Globe } from 'lucide-react';
import { Button } from '../components/Button';

export function Contact() {
    return (
        <div className="flex flex-col min-h-screen pt-24 bg-background">
            {/* Background Ambient Effects */}
            <div className="aurora-mesh opacity-30"></div>

            <section className="relative py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Context & Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-800 bg-surface/80 backdrop-blur-md mb-8">
                                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                                <span className="text-sm font-medium text-brand-300">Available for Architecture Calls</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                                Start Building.
                            </h1>

                            <p className="text-xl text-brand-100/70 mb-12 leading-relaxed max-w-lg">
                                Phase 1 is a Discovery & Workflow Audit. We assess your operational bottlenecks and determine if our infrastructure is the right fit.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface/50 transition-colors border border-transparent hover:border-brand-800/50">
                                    <div className="w-12 h-12 rounded-lg bg-surface border border-brand-800 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-brand-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-brand-100 mb-1">Direct Email</h3>
                                        <a href="mailto:hello@b-ai.com" className="text-brand-400 hover:text-brand-300 transition-colors">hello@b-ai.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface/50 transition-colors border border-transparent hover:border-brand-800/50">
                                    <div className="w-12 h-12 rounded-lg bg-surface border border-brand-800 flex items-center justify-center shrink-0">
                                        <Globe className="w-5 h-5 text-brand-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-brand-100 mb-1">Global Delivery</h3>
                                        <p className="text-brand-100/60">We orchestrate remote deployments globally with full technical support.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-surface rounded-2xl border border-brand-800 p-8 shadow-2xl relative"
                        >
                            <h2 className="text-2xl font-bold text-brand-100 mb-6 flex items-center gap-3">
                                <Building2 className="w-6 h-6 text-brand-500" />
                                Project Details
                            </h2>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-brand-100/80">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full bg-background border border-brand-800 rounded-lg px-4 py-3 text-brand-100 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder:text-brand-100/30"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-brand-100/80">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full bg-background border border-brand-800 rounded-lg px-4 py-3 text-brand-100 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder:text-brand-100/30"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-brand-100/80">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full bg-background border border-brand-800 rounded-lg px-4 py-3 text-brand-100 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder:text-brand-100/30"
                                        placeholder="Acme Corp"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-brand-100/80">Work Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-background border border-brand-800 rounded-lg px-4 py-3 text-brand-100 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder:text-brand-100/30"
                                        placeholder="john@acmecorp.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-brand-100/80">Current Operational Bottleneck</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full bg-background border border-brand-800 rounded-lg px-4 py-3 text-brand-100 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder:text-brand-100/30 resize-none"
                                        placeholder="What systems are currently fragmenting your workflow?"
                                    ></textarea>
                                </div>

                                <Button type="submit" className="w-full gap-2 mt-4">
                                    Request Consultation <ArrowRight className="w-5 h-5" />
                                </Button>
                                <p className="text-center text-xs text-brand-100/40 mt-4">
                                    By submitting, you agree to our privacy policy. We do not spam.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
