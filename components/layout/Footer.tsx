"use strict";
import Link from "next/link";
import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20 pointer-events-none"></div>
            
            <div className="container-max container-padding relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-accent/30">
                                <Leaf className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold font-serif leading-tight text-white">
                                    Wingate
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans font-bold">
                                    Integrated Farms
                                </span>
                            </div>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            We grow and raise real food — ethically farmed, locally sourced, and delivered with care straight from our land to yours.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="bg-white/10 hover:bg-accent text-white p-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-bold font-sans mb-6 text-accent uppercase tracking-widest">
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Our Produce", href: "/produce" },
                                { name: "Contact Us", href: "/contact" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="text-sm font-bold font-sans mb-6 text-accent uppercase tracking-widest">
                            Our Locations
                        </h3>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li className="flex flex-col gap-1">
                                <span className="text-white font-bold text-xs uppercase tracking-wider">The Farm</span>
                                Plot 64–106 Ilo Agricultural Layout, Igboku Village, Ilara, Epe, Lagos
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-white font-bold text-xs uppercase tracking-wider">Corporate Office</span>
                                Road 5, Suite K105, Ikota Shopping Complex, VGC, Lekki, Lagos
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-white font-bold text-xs uppercase tracking-wider">Produce Outlet</span>
                                Shop 1, Debbie Mall, Kemfat Street, Thomas Estate, Ajah-Lekki, Lagos
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Hours */}
                    <div>
                        <h3 className="text-sm font-bold font-sans mb-6 text-accent uppercase tracking-widest">
                            Get in Touch
                        </h3>
                        <div className="space-y-4 text-white/60 text-sm">
                            <p className="flex flex-col gap-1">
                                <span className="text-white font-bold text-xs uppercase tracking-wider">Phone / WhatsApp</span>
                                +234 808 200 3009
                            </p>
                            <p className="flex flex-col gap-1">
                                <span className="text-white font-bold text-xs uppercase tracking-wider">Email</span>
                                hello@wingatefarms.com
                            </p>
                            <p className="flex flex-col gap-1">
                                <span className="text-white font-bold text-xs uppercase tracking-wider">Working Hours</span>
                                Mon – Sat, 7:00am – 5:00pm
                            </p>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>&copy; 2026 Wingate Integrated Farms. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-accent transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
