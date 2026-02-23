import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <img src="/logo.jpg" alt="B-AI Logo" className="h-10 w-auto object-contain" />
                        </Link>
                        <p className="text-brand-300 max-w-sm mb-6 leading-relaxed">
                            We architect structured automation infrastructure that improves operational efficiency and revenue performance.
                        </p>
                        <div className="flex items-center gap-4 text-brand-400">
                            <a href="mailto:hello@b-ai.com" className="hover:text-brand-500 transition-colors flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>hello@b-ai.com</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-brand-100 font-semibold mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-brand-300 hover:text-brand-500 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-brand-300 hover:text-brand-500 transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-brand-300 hover:text-brand-500 transition-colors">Services</Link></li>
                            <li><Link to="/solutions" className="text-brand-300 hover:text-brand-500 transition-colors">Solutions</Link></li>
                            <li><Link to="/contact" className="text-brand-300 hover:text-brand-500 transition-colors">Book a Call</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-brand-100 font-semibold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link to="#" className="text-brand-300 hover:text-brand-500 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="#" className="text-brand-300 hover:text-brand-500 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-brand-400 text-sm">
                        © {currentYear} B-AI Technologies. All rights reserved.
                    </p>
                    <p className="text-brand-400 text-sm">
                        Premium AI Solutions for Modern Businesses
                    </p>
                </div>
            </div>
        </footer>
    );
}
