"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Produce", href: "/produce" },
    { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-sage/40 shadow-sm">
                <div className="container-max container-padding h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/20">
                            <Leaf className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold font-serif leading-tight text-primary">
                                Wingate
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-sans font-bold">
                                Integrated Farms
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-charcoal/70 hover:text-primary transition-colors text-sm font-bold font-sans uppercase tracking-wide relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button className="bg-accent hover:bg-accent/90 text-white font-bold border-0 rounded-xl px-8 shadow-md shadow-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5">
                            Order Now
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl text-primary hover:bg-primary/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Drawer */}
                    <div className="absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl animate-slide-in flex flex-col">
                        {/* Drawer Header */}
                        <div className="h-20 flex items-center px-6 border-b border-sage/30">
                            <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                                <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                                    <Leaf className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg font-bold font-serif text-primary">Wingate</span>
                            </Link>
                        </div>

                        {/* Drawer Links */}
                        <div className="flex-1 flex flex-col px-6 pt-8 gap-2">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-4 px-4 py-4 rounded-xl text-charcoal hover:bg-primary/5 hover:text-primary transition-all font-sans font-bold text-base uppercase tracking-wide group"
                                    style={{ animationDelay: `${idx * 50}ms` }}
                                >
                                    <span className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Drawer CTA */}
                        <div className="p-6 border-t border-sage/20">
                            <Button
                                onClick={() => setIsOpen(false)}
                                className="w-full bg-accent hover:bg-accent/90 text-white font-bold rounded-xl py-6 text-base shadow-lg shadow-accent/20"
                            >
                                Order Now
                            </Button>
                            <p className="text-center text-xs text-charcoal/40 mt-4 font-sans">
                                📞 +234 808 200 3009
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
