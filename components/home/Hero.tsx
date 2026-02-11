"use strict";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/farm_hero_background.png"
                    alt="Organic Farm Landscape"
                    fill
                    className="object-cover transition-transform duration-1000 scale-105" // Subtle zoom effect could be added here
                    priority
                />
                {/* Overlay - Gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
            </div>

            {/* Content */}
            <div className="container relative z-20 px-4 md:px-6 text-white h-full flex flex-col justify-center">
                <div className="max-w-3xl space-y-6">
                    <span className="inline-block px-4 py-1 rounded-full bg-custom-accent/20 backdrop-blur-sm border border-custom-accent/40 text-custom-accent font-medium text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
                        Sustainable Future
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight drop-shadow-lg animate-fade-in-up delay-100">
                        Organic Farming <br />
                        <span className="text-custom-accent">and Agriculture</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed animate-fade-in-up delay-200">
                        Agriculture is the science, art and practice of cultivating plants and livestock.
                        We provide the freshest organic produce directly from our Lagos farm to your table.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up delay-300">
                        <Button size="lg" className="bg-custom-accent hover:bg-custom-accent/90 text-white font-semibold px-8 text-lg h-14 rounded-full shadow-lg hover:shadow-custom-accent/20 transition-all duration-300 transform hover:-translate-y-1">
                            Get Started
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-custom-green-dark font-semibold px-8 text-lg h-14 rounded-full hidden sm:flex items-center gap-2">
                            <Play className="w-5 h-5 fill-current" />
                            Watch Video
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative localized element or scroll indicator could go here */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
                {/* Scroll Icon */}
            </div>
        </section>
    );
}
