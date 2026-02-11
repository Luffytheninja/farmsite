"use strict";
import Link from "next/link";
import { Leaf, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-custom-green-dark text-white pt-20 pb-10 border-t border-white/5">
            <div className="container-max container-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 text-white mb-4 hover-wiggle">
                            <div className="w-10 h-10 bg-custom-accent rounded-full flex items-center justify-center">
                                <Leaf className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold font-serif tracking-tight">
                                Lagos<span className="text-custom-accent">Farm</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We provide the best organic produce directly from our farm to your table. Sustainable, fresh, and healthy.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="bg-white/10 hover:bg-custom-accent hover:text-white text-white p-2 rounded-full transition-colors"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold font-serif mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-custom-accent rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {["About Us", "Our Services", "Our Projects", "Meet Farmers", "Latest News", "Contact Us"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-custom-accent transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-custom-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-lg font-bold font-serif mb-6 relative inline-block">
                            Useful Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-custom-accent rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {["Privacy Policy", "Terms & Conditions", "Services", "Our Gallery", "Testimonials"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-custom-accent transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-custom-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold font-serif mb-6 relative inline-block">
                            Newsletter
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-custom-accent rounded-full"></span>
                        </h3>
                        <p className="text-gray-400 text-sm mb-6">
                            Subscribe to our newsletter to get the latest news and updates.
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 pr-14 text-sm focus:outline-none focus:border-custom-accent transition-colors"
                            />
                            <Button size="icon" className="absolute right-2 top-2 bg-custom-accent hover:bg-custom-accent/90 rounded-full w-8 h-8">
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; 2024 LagosFarm. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-custom-accent transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-custom-accent transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
