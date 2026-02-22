import React from 'react';
import { Bot, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t border-brand-900/30 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-background border border-brand-800 flex items-center justify-center">
                                <Bot className="w-4 h-4 text-brand-500" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-brand-100">B<span className="text-brand-500">-</span>AI</span>
                        </Link>
                        <p className="text-brand-100/60 max-w-sm mb-6 leading-relaxed">
                            We architect structured automation infrastructure that improves operational efficiency and revenue performance.
                        </p>
                        <div className="flex items-center gap-4 text-brand-100/50">
                            <a href="mailto:hello@b-ai.com" className="hover:text-brand-400 transition-colors flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>hello@b-ai.com</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-brand-100 font-semibold mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-brand-100/60 hover:text-brand-400 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-brand-100/60 hover:text-brand-400 transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-brand-100/60 hover:text-brand-400 transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="text-brand-100/60 hover:text-brand-400 transition-colors">Book a Call</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-brand-100 font-semibold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link to="#" className="text-brand-100/60 hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="#" className="text-brand-100/60 hover:text-brand-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-brand-900/30 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-brand-100/40 text-sm">
                        © {currentYear} B-AI Technologies. All rights reserved.
                    </p>
                    <p className="text-brand-100/40 text-sm">
                        Scalable Automation Infrastructure
                    </p>
                </div>
            </div>
        </footer>
    );
}
