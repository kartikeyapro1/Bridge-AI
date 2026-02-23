import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, CalendarCheck, Users, Settings, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function Services() {
    const coreServices = [
        {
            icon: MessageSquare,
            title: "Lead Capture & Response Systems",
            description: "Automated logic to immediately engage inbound prospects, qualify intent, and route high-value leads. Never miss an opportunity due to slow manual response times.",
            tag: "Strong Initial Offer"
        },
        {
            icon: CalendarCheck,
            title: "Appointment & Scheduling Automation",
            description: "Intelligent booking infrastructure that synchronizes across your team calendars, sends automated reminders, and reduces no-show rates without human intervention.",
            tag: "Strong Initial Offer"
        },
        {
            icon: Users,
            title: "Follow-up & Customer Lifecycle",
            description: "Trigger-based email and SMS sequences designed to nurture prospects, retain existing clients, and manage the entire customer journey.",
            tag: "Strong Initial Offer"
        },
        {
            icon: Settings,
            title: "Internal Operations Automation",
            description: "Connecting disparate software tools (CRM, billing, project management) to trigger actions silently in the background, slashing administrative overhead.",
            tag: "Scale Phase"
        },
        {
            icon: Code,
            title: "Custom AI-Driven Process Systems",
            description: "Bespoke artificial intelligence implementations tailored for complex, unique workflows specific to your specific operational constraints.",
            tag: "Custom Architecture"
        }
    ];

    const deliverySteps = [
        { phase: "1", title: "Discovery & Workflow Audit", desc: "We map your current processes to identify immediate bottlenecks." },
        { phase: "2", title: "System Architecture Planning", desc: "We design a scalable blueprint integrating with your existing stack." },
        { phase: "3", title: "Build & Controlled Testing", desc: "Rigorous development and payload testing in an isolated environment." },
        { phase: "4", title: "Deployment", desc: "Seamless launch of the automation framework into live operations." },
        { phase: "5", title: "Optimization & Refinement", desc: "Ongoing monitoring and dynamic iteration based on live data." }
    ];

    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white">
            <div className="aurora-mesh opacity-30"></div>

            {/* Header */}
            <section className="relative pt-20 pb-20 px-6 text-center">
                <div className="max-w-3xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-brand-100">
                            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-accent-cyan to-accent-green">Capabilities</span>
                        </h1>
                        <p className="text-xl text-brand-300 leading-relaxed">
                            All solutions are custom-built with scalability in mind. We build systems, not just disjointed tools.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl border border-gray-200 p-8 flex flex-col hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/5 transition-all group relative overflow-hidden"
                            >
                                {service.tag === "Strong Initial Offer" && (
                                    <div className="absolute top-0 right-0 bg-accent-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                        HOT
                                    </div>
                                )}

                                <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-500/30 transition-all duration-300">
                                    <service.icon className="w-7 h-7 text-brand-500" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-brand-100">{service.title}</h3>
                                <p className="text-brand-300 leading-relaxed flex-1">{service.description}</p>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <span className="text-xs font-mono text-brand-500/80 uppercase tracking-wider">{service.tag}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Delivery Model */}
            <section className="py-24 px-6 border-t border-gray-100 bg-gray-50/30 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-100">Delivery Model</h2>
                        <p className="text-brand-300 text-lg">How we architect and deploy infrastructure.</p>
                    </div>

                    <div className="relative">
                        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>

                        <div className="space-y-12 relative">
                            {deliverySteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`flex items-center justify-between flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    <div className="hidden md:block w-[45%]"></div>

                                    <div className="w-12 h-12 rounded-full bg-white border-4 border-gray-100 text-brand-500 font-bold flex items-center justify-center z-10 mb-4 md:mb-0 shadow-lg shadow-gray-200/50">
                                        {step.phase}
                                    </div>

                                    <div className={`w-full md:w-[45%] bg-white p-6 rounded-xl border border-gray-200 shadow-lg ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                        }`}>
                                        <h4 className="text-xl font-bold text-brand-100 mb-2">{step.title}</h4>
                                        <p className="text-brand-300 leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <Link to="/contact">
                            <Button size="lg" className="px-12 gap-2">
                                Begin Phase 1 <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
