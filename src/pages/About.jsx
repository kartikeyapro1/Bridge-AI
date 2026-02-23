import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Key, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function About() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white">
            <div className="aurora-mesh opacity-40"></div>

            {/* Header Section */}
            <section className="relative pt-20 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-brand-100">
                            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-accent-cyan to-accent-green">Scale.</span>
                        </h1>
                        <p className="text-xl text-brand-300 max-w-2xl mx-auto leading-relaxed">
                            We architect structured automation infrastructure that improves operational efficiency and revenue performance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Positioning Statement */}
            <section className="py-20 px-6 relative z-10 border-t border-gray-100 bg-gray-50/50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-brand-100">Not just another tool.</h2>
                            <div className="space-y-4 text-brand-300 text-lg leading-relaxed">
                                <p>
                                    B-AI is an automation technology company that designs, builds, and deploys scalable AI-driven systems for growing businesses.
                                </p>
                                <p>
                                    We are not a chatbot agency or simple tool reseller. We believe that adding software without architecture only creates more chaos. Instead, we architect cohesive operational infrastructure tailored strictly to your business model.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xl"
                        >
                            <h3 className="text-xl font-bold mb-6 text-brand-200 flex items-center gap-2">
                                <Target className="w-5 h-5 text-brand-500" />
                                Ideal Client Profile
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-brand-100 font-medium flex items-center gap-2 mb-2">
                                        <Briefcase className="w-4 h-4 text-brand-500" /> Industry
                                    </h4>
                                    <p className="text-brand-300 pl-6">Service-based businesses, Agencies, and Growth-stage companies.</p>
                                </div>

                                <div>
                                    <h4 className="text-brand-100 font-medium flex items-center gap-2 mb-2">
                                        <Users className="w-4 h-4 text-brand-500" /> Company Size
                                    </h4>
                                    <p className="text-brand-300 pl-6">1–50 employees. Operationally active but lacking efficient automation infrastructure.</p>
                                </div>

                                <div>
                                    <h4 className="text-brand-100 font-medium flex items-center gap-2 mb-2">
                                        <Key className="w-4 h-4 text-brand-500" /> Decision-Maker
                                    </h4>
                                    <p className="text-brand-300 pl-6">Founders, Managing Directors, Head of Operations.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 30-Day Guarantee */}
            <section className="py-24 px-6 relative z-10 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-100">Our 30-Day Success Definition</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
                            {[
                                "Measurable improvement in response times",
                                "Every inbound opportunity actively captured",
                                "Significantly reduced manual administrative workload",
                                "Clear operational structure established"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-brand-500/30 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-accent-green/15 flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="text-accent-green text-sm font-bold">{index + 1}</span>
                                    </div>
                                    <span className="text-brand-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/contact">
                            <Button size="lg" className="px-10 gap-2">
                                Start the Process <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
