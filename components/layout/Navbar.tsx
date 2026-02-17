"use strict";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Produce", href: "/produce" },
    { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-sage/30">
            <div className="container-max container-padding h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6">
                        <Leaf className="w-6 h-6 text-cream" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold font-serif leading-tight text-primary">
                            Wingate
                        </span>
                        <span className="text-xs uppercase tracking-widest text-secondary font-sans font-bold">
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
                            className="text-charcoal/80 hover:text-primary transition-colors text-sm font-bold font-sans uppercase tracking-wide relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button variant="default" className="bg-accent hover:bg-accent/90 text-charcoal font-bold border-0 rounded-lg px-8 shadow-sm transition-all duration-300 hover:scale-105">
                        Order Now
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden text-primary">
                    <Button variant="ghost" size="icon">
                        <Menu className="w-6 h-6" />
                    </Button>
                </div>
            </div>
        </nav>
    );
}
