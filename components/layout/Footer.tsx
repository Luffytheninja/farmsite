"use strict";
import Link from "next/link";
import { Leaf, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-primary text-cream pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/noise.png')]"></div>
            
            <div className="container-max container-padding relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6">
                                <Leaf className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold font-serif leading-tight text-white">
                                    Wingate
                                </span>
                                <span className="text-xs uppercase tracking-widest text-accent font-sans font-bold">
                                    Integrated Farms
                                </span>
                            </div>
                        </Link>
                        <p className="text-sage text-sm leading-relaxed max-w-xs">
                            We grow and raise real food — ethically farmed, locally sourced, and delivered with care straight from our land to yours.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="bg-white/10 hover:bg-accent hover:text-primary text-cream p-2 rounded-lg transition-all"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg font-bold font-serif mb-6 text-accent">
                            Navigation
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Our Produce", href: "/produce" },
                                { name: "Contact Us", href: "/contact" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sage hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="text-lg font-bold font-serif mb-6 text-accent">
                            Our Locations
                        </h3>
                        <ul className="space-y-4 text-sage text-sm">
                            <li className="flex flex-col gap-1">
                                <span className="text-white font-bold text-xs uppercase tracking-tighter">The Farm</span>
                                Plot 64–106 Ilo Agricultural Layout, Igboku Village, Ilara, Epe, Lagos
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-white font-bold text-xs uppercase tracking-tighter">Corporate Office</span>
                                Road 5, Suite K105, Ikota Shopping Complex, VGC, Lekki, Lagos
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-white font-bold text-xs uppercase tracking-tighter">Produce Outlet</span>
                                Shop 1, Debbie Mall, Kemfat Street, Thomas Estate, Ajah-Lekki, Lagos
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Hours */}
                    <div>
                        <h3 className="text-lg font-bold font-serif mb-6 text-accent">
                            Get in Touch
                        </h3>
                        <div className="space-y-4 text-sage text-sm">
                            <p className="flex flex-col gap-1">
                                <span className="text-white font-bold text-xs uppercase tracking-tighter">Phone / WhatsApp</span>
                                +234 808 200 3009
                            </p>
                            <p className="flex flex-col gap-1">
                                <span className="text-white font-bold text-xs uppercase tracking-tighter">Email</span>
                                hello@wingatefarms.com
                            </p>
                            <p className="flex flex-col gap-1">
                                <span className="text-white font-bold text-xs uppercase tracking-tighter">Working Hours</span>
                                Mon – Sat, 7:00am – 5:00pm
                            </p>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sage">
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
