import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Building2, Globe, Calendar, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

// Lazy-load Calendly so its SDK isn't in the critical path
const CalendlyPopupButton = React.lazy(() =>
    import('react-calendly').then(m => ({ default: m.PopupButton }))
);

// ── Replace with your Web3Forms access key ──
// Get a free key at https://web3forms.com
const WEB3FORMS_KEY = '0257a61b-af42-4a33-92cc-1a8df14401f7';

export function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const payload = {
                access_key: WEB3FORMS_KEY,
                subject: `New enquiry from ${formData.firstName} ${formData.lastName}`,
                from_name: `${formData.firstName} ${formData.lastName}`,
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                company: formData.company,
                message: formData.message,
            };

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (data.success) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', company: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const inputClasses = "w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-brand-100 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder:text-brand-400";

    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white">
            <div className="aurora-mesh opacity-20"></div>

            <section className="relative py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Context & Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50/80 backdrop-blur-md mb-8">
                                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                                <span className="text-sm font-medium text-brand-300">Available for Architecture Calls</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-brand-100">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-accent-cyan to-accent-green">Start Building.</span>
                            </h1>

                            <p className="text-xl text-brand-300 mb-12 leading-relaxed max-w-lg">
                                Phase 1 is a Discovery & Workflow Audit. We assess your operational bottlenecks and determine if our infrastructure is the right fit.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                                    <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-brand-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-brand-100 mb-1">Direct Email</h3>
                                        <a href="mailto:contact@bridge-ai.uk" className="text-brand-500 hover:text-blue-700 transition-colors">contact@bridge-ai.uk</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                                    <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                                        <Globe className="w-5 h-5 text-brand-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-brand-100 mb-1">Global Delivery</h3>
                                        <p className="text-brand-300">We orchestrate remote deployments globally with full technical support.</p>
                                    </div>
                                </div>
                            </div>

                            {/* ─── BOOK A CALL CTA ─── */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-brand-500/5 via-accent-cyan/5 to-accent-green/5 border border-brand-500/20"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                                        <Calendar className="w-5 h-5 text-brand-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-brand-100 mb-1">Book a Discovery Call</h3>
                                        <p className="text-brand-300 text-sm mb-4">
                                            Prefer to talk through your needs? Schedule a free 30-minute discovery call to discuss your operational challenges.
                                        </p>
                                        <Suspense fallback={
                                            <button className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 bg-brand-500 text-white hover:bg-blue-700 shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/30 h-9 px-5 text-sm cursor-pointer">
                                                Schedule a Call
                                            </button>
                                        }>
                                            <CalendlyPopupButton
                                                url="https://calendly.com/contact-bridge-ai/30min"
                                                rootElement={document.getElementById('root')}
                                                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 bg-brand-500 text-white hover:bg-blue-700 shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/30 h-9 px-5 text-sm cursor-pointer"
                                                text="Schedule a Call"
                                            />
                                        </Suspense>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-xl relative"
                        >
                            <h2 className="text-2xl font-bold text-brand-100 mb-6 flex items-center gap-3">
                                <Building2 className="w-6 h-6 text-brand-500" />
                                Project Details
                            </h2>

                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center text-center py-12 px-4"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-accent-green/10 flex items-center justify-center mb-6">
                                            <CheckCircle className="w-8 h-8 text-accent-green" />
                                        </div>
                                        <h3 className="text-xl font-bold text-brand-100 mb-2">Message Sent Successfully</h3>
                                        <p className="text-brand-300 mb-6 max-w-sm">
                                            Thank you for your enquiry. We'll review your details and respond within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="text-brand-500 hover:text-blue-700 text-sm font-medium transition-colors cursor-pointer"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-6"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="firstName" className="text-sm font-medium text-brand-200">First Name</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    required
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className={inputClasses}
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="lastName" className="text-sm font-medium text-brand-200">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    required
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className={inputClasses}
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="company" className="text-sm font-medium text-brand-200">Company Name</label>
                                            <input
                                                type="text"
                                                id="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="Acme Corp"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-brand-200">Work Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="john@acmecorp.com"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-brand-200">Current Operational Bottleneck</label>
                                            <textarea
                                                id="message"
                                                rows="4"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`${inputClasses} resize-none`}
                                                placeholder="What systems are currently fragmenting your workflow?"
                                            ></textarea>
                                        </div>

                                        {status === 'error' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm"
                                            >
                                                <AlertCircle className="w-4 h-4 shrink-0" />
                                                Something went wrong. Please try again or email us directly.
                                            </motion.div>
                                        )}

                                        <Button
                                            type="submit"
                                            className="w-full gap-2 mt-4"
                                            disabled={status === 'loading'}
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Request Consultation <ArrowRight className="w-5 h-5" />
                                                </>
                                            )}
                                        </Button>
                                        <p className="text-center text-xs text-brand-400 mt-4">
                                            By submitting, you agree to our{' '}
                                            <Link to="/legal#privacy-policy" className="text-brand-500 hover:text-blue-700 transition-colors underline">
                                                privacy policy
                                            </Link>. We do not spam.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
