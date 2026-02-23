import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Workflow, BarChart3, Shield, Cog, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function Solutions() {
    const solutions = [
        {
            icon: Bot,
            title: "AI-Powered Customer Support",
            description: "Deploy intelligent conversational AI that handles customer queries 24/7. Reduce response times from hours to seconds while maintaining a personal touch.",
            results: ["90% faster response times", "24/7 availability", "40% cost reduction"],
            color: "from-brand-500 to-accent-cyan"
        },
        {
            icon: Workflow,
            title: "Workflow Automation Engine",
            description: "Connect your existing tools into a seamless automation pipeline. From lead capture to invoicing, eliminate manual handoffs between systems.",
            results: ["15+ hours saved weekly", "Zero data entry errors", "Instant lead routing"],
            color: "from-accent-cyan to-accent-green"
        },
        {
            icon: BarChart3,
            title: "Smart Analytics Dashboard",
            description: "Real-time business intelligence that surfaces the metrics that matter. Track performance, identify bottlenecks, and make data-driven decisions.",
            results: ["Real-time insights", "Custom KPI tracking", "Automated reporting"],
            color: "from-accent-green to-brand-500"
        },
        {
            icon: Shield,
            title: "Compliance & Data Security",
            description: "Enterprise-grade security built into every automation. GDPR-compliant data handling with full audit trails and access controls.",
            results: ["GDPR compliant", "Full audit trail", "Encrypted data flows"],
            color: "from-brand-500 to-blue-600"
        },
        {
            icon: Cog,
            title: "CRM & Tool Integration",
            description: "Seamlessly connect with HubSpot, Salesforce, Google Workspace, and 200+ other platforms. No more copy-pasting between tools.",
            results: ["200+ integrations", "Bi-directional sync", "Custom API bridges"],
            color: "from-blue-600 to-accent-cyan"
        },
        {
            icon: Sparkles,
            title: "Custom AI Solutions",
            description: "Bespoke AI models trained on your business data. From document processing to predictive analytics, we build what off-the-shelf tools can't.",
            results: ["Tailored to your data", "Continuous learning", "Proprietary models"],
            color: "from-accent-cyan to-accent-green"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white">
            <div className="aurora-mesh opacity-30"></div>

            {/* Header */}
            <section className="relative pt-20 pb-16 px-6 text-center">
                <div className="max-w-3xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-brand-100">
                            Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-accent-cyan to-accent-green">
                                Solutions
                            </span>
                        </h1>
                        <p className="text-xl text-brand-300 leading-relaxed max-w-2xl mx-auto">
                            End-to-end AI automation packages designed for every stage of business growth. Pick what fits — or let us build something custom.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-12 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl border border-gray-200 p-8 flex flex-col hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 group relative overflow-hidden"
                            >
                                {/* Top gradient accent bar */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                                <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-500/30 transition-all duration-300">
                                    <solution.icon className="w-7 h-7 text-brand-500" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-brand-100">{solution.title}</h3>
                                <p className="text-brand-300 leading-relaxed flex-1 mb-6">{solution.description}</p>

                                {/* Results tags */}
                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-200">
                                    {solution.results.map((result, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium px-3 py-1.5 rounded-full bg-brand-500/5 text-brand-500 border border-brand-500/10"
                                        >
                                            {result}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-gray-50 border-t border-gray-100 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-100">
                            Not sure which solution fits?
                        </h2>
                        <p className="text-xl text-brand-300 mb-10 max-w-xl mx-auto">
                            Book a free discovery call and we'll map the perfect automation stack for your business.
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="px-10 gap-2">
                                Book Free Discovery Call <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
