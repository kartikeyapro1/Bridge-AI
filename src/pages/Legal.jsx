import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { Shield, FileText, Cookie, ArrowUp } from 'lucide-react';

const sections = [
    { id: 'privacy-policy', label: 'Privacy Policy', icon: Shield },
    { id: 'terms-and-conditions', label: 'Terms & Conditions', icon: FileText },
    { id: 'cookie-policy', label: 'Cookie Policy', icon: Cookie },
];

export function Legal() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.getElementById(hash.replace('#', ''));
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white">
            <div className="aurora-mesh opacity-20"></div>

            {/* Header */}
            <section className="relative py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-brand-100">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-accent-cyan to-accent-green">Legal</span>
                        </h1>
                        <p className="text-brand-300 text-lg">
                            Last Updated: 23 February 2026
                        </p>
                    </motion.div>

                    {/* Quick Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="flex flex-wrap justify-center gap-3 mt-10"
                    >
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50/80 backdrop-blur-md text-sm font-medium text-brand-300 hover:border-brand-500/40 hover:text-brand-500 transition-all"
                            >
                                <s.icon className="w-4 h-4" />
                                {s.label}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Legal Content */}
            <section className="relative px-6 pb-24">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* ─── PRIVACY POLICY ─── */}
                    <motion.div
                        id="privacy-policy"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                        className="scroll-mt-28"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-brand-500" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-100">1. Privacy Policy</h2>
                        </div>

                        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 md:p-10 space-y-8">
                            <p className="text-brand-300 leading-relaxed">
                                B-AI (Bridge-AI) is committed to protecting your privacy and ensuring that your personal data is handled securely and transparently.
                            </p>

                            <div>
                                <h3 className="text-lg font-bold text-brand-100 mb-3">1.1 Information We Collect</h3>
                                <p className="text-brand-300 mb-3">We may collect the following information when you use our website or services:</p>
                                <ul className="list-disc list-inside text-brand-300 space-y-1.5 pl-2">
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Business name</li>
                                    <li>Phone number (if provided)</li>
                                    <li>Any information submitted through contact forms</li>
                                    <li>Technical data such as IP address and browser type</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-brand-100 mb-3">1.2 How We Use Your Information</h3>
                                <p className="text-brand-300 mb-3">We use your information to:</p>
                                <ul className="list-disc list-inside text-brand-300 space-y-1.5 pl-2">
                                    <li>Respond to inquiries</li>
                                    <li>Provide and improve our services</li>
                                    <li>Communicate regarding consultations or projects</li>
                                    <li>Maintain security and prevent fraud</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-brand-100 mb-3">1.3 Legal Basis for Processing (UK GDPR)</h3>
                                <p className="text-brand-300 mb-3">We process personal data under the following lawful bases:</p>
                                <ul className="list-disc list-inside text-brand-300 space-y-1.5 pl-2">
                                    <li>Consent</li>
                                    <li>Contractual necessity</li>
                                    <li>Legitimate interest</li>
                                    <li>Legal obligation</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-brand-100 mb-3">1.4 Data Storage & Security</h3>
                                <p className="text-brand-300 leading-relaxed">
                                    We implement appropriate technical and organisational measures to protect personal data. Data is stored securely and only retained for as long as necessary for business or legal purposes.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-brand-100 mb-3">1.5 Your Rights</h3>
                                <p className="text-brand-300 mb-3">Under UK GDPR, you have the right to:</p>
                                <ul className="list-disc list-inside text-brand-300 space-y-1.5 pl-2">
                                    <li>Access your personal data</li>
                                    <li>Request correction or deletion</li>
                                    <li>Restrict or object to processing</li>
                                    <li>Request data portability</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                                <p className="text-brand-300 mt-4">
                                    To exercise your rights, contact us at{' '}
                                    <a href="mailto:contact@bridge-ai.uk" className="text-brand-500 hover:text-blue-700 transition-colors font-medium">
                                        contact@bridge-ai.uk
                                    </a>.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── TERMS AND CONDITIONS ─── */}
                    <motion.div
                        id="terms-and-conditions"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                        className="scroll-mt-28"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                                <FileText className="w-5 h-5 text-brand-500" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-100">2. Terms and Conditions</h2>
                        </div>

                        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 md:p-10 space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-brand-100 mb-3">2.1 Use of Website</h3>
                                <p className="text-brand-300 leading-relaxed">
                                    By accessing this website, you agree to use it lawfully and not engage in any activity that disrupts or harms the website or its users.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-brand-100 mb-3">2.2 Services</h3>
                                <p className="text-brand-300 leading-relaxed">
                                    B-AI provides automation consulting and implementation services. All services are provided under separate contractual agreements outlining scope, timelines, and payment terms.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-brand-100 mb-3">2.3 Intellectual Property</h3>
                                <p className="text-brand-300 leading-relaxed">
                                    All website content, branding, and materials are the intellectual property of B-AI unless otherwise stated. Unauthorised use or reproduction is prohibited.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-brand-100 mb-3">2.4 Limitation of Liability</h3>
                                <p className="text-brand-300 leading-relaxed">
                                    B-AI shall not be liable for indirect, incidental, or consequential damages arising from the use of this website or services, except where liability cannot be excluded under applicable law.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-brand-100 mb-3">2.5 Governing Law</h3>
                                <p className="text-brand-300 leading-relaxed">
                                    These terms are governed by the laws of England and Wales.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── COOKIE POLICY ─── */}
                    <motion.div
                        id="cookie-policy"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                        className="scroll-mt-28"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                                <Cookie className="w-5 h-5 text-brand-500" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-100">3. Cookie Policy</h2>
                        </div>

                        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 md:p-10 space-y-8">
                            <p className="text-brand-300 leading-relaxed">
                                This website may use cookies and similar technologies to enhance user experience and analyse website traffic.
                            </p>

                            <div>
                                <h3 className="text-lg font-bold text-brand-100 mb-3">3.1 Types of Cookies</h3>
                                <ul className="list-disc list-inside text-brand-300 space-y-1.5 pl-2">
                                    <li>Essential cookies (required for website functionality)</li>
                                    <li>Analytics cookies (to understand website usage)</li>
                                    <li>Performance cookies</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-brand-100 mb-3">3.2 Managing Cookies</h3>
                                <p className="text-brand-300 leading-relaxed">
                                    You can control or disable cookies through your browser settings. Disabling cookies may affect website functionality.
                                </p>
                            </div>

                            <p className="text-brand-300 leading-relaxed">
                                For any questions regarding this policy, contact{' '}
                                <a href="mailto:contact@bridge-ai.uk" className="text-brand-500 hover:text-blue-700 transition-colors font-medium">
                                    contact@bridge-ai.uk
                                </a>.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Back to Top */}
                <div className="max-w-4xl mx-auto mt-12 text-center">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50/80 backdrop-blur-md text-sm font-medium text-brand-300 hover:border-brand-500/40 hover:text-brand-500 transition-all cursor-pointer"
                    >
                        <ArrowUp className="w-4 h-4" />
                        Back to Top
                    </button>
                </div>
            </section>
        </div>
    );
}
