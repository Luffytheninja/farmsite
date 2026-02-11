"use strict";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

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
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-white">
                    <div className="w-10 h-10 bg-custom-accent rounded-full flex items-center justify-center">
                        <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl md:text-2xl font-bold font-serif tracking-tight">
                        Lagos<span className="text-custom-accent">Farm</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/90 hover:text-custom-accent transition-colors text-sm font-medium uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button variant="default" className="bg-custom-accent hover:bg-custom-accent/90 text-white border-0">
                        Get In Touch
                    </Button>
                </div>

                {/* Mobile Menu Toggle (Placeholder) */}
                <div className="md:hidden text-white">
                    {/* Implement Hamburger Icon here later */}
                    <button className="p-2">Menu</button>
                </div>
            </div>
        </nav>
    );
}
