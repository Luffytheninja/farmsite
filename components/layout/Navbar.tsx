"use strict";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "News", href: "#blog" },
];

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
            <div className="container-max container-padding h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-white hover-wiggle">
                    <div className="w-10 h-10 bg-custom-accent rounded-full flex items-center justify-center">
                        <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold font-serif tracking-tight">
                        Lagos<span className="text-custom-accent">Farm</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-white/90 hover:text-custom-accent transition-colors text-sm font-medium uppercase tracking-wide relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button variant="default" className="bg-custom-accent hover:bg-custom-accent/90 text-white border-0 rounded-full px-8 shadow-lg hover:shadow-custom-accent/20 transition-all duration-300 hover:scale-105">
                        Get In Touch
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden text-white">
                    <Button variant="ghost" size="icon">
                        <Menu className="w-6 h-6" />
                    </Button>
                </div>
            </div>
        </nav>
    );
}
