"use strict";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
            <div className="container-max container-padding relative z-20 text-white h-full flex flex-col justify-center">
                <div className="max-w-3xl space-y-6">
                    <div className="inline-block bg-custom-accent/20 backdrop-blur-sm border border-custom-accent/30 px-4 py-2 rounded-full text-custom-accent font-bold uppercase tracking-wider text-sm animate-pulse">
                        100% Organic & Natural
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight">
                        Experience The Real <br />
                        <span className="text-custom-accent">Taste of Nature</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                        We provide the finest organic produce directly from our farm to your table. Sustainable farming for a healthier future in Lagos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="bg-custom-accent hover:bg-custom-accent/90 text-white font-bold h-14 px-8 rounded-full text-lg shadow-xl hover:shadow-custom-accent/20 transition-all duration-300 hover:-translate-y-1">
                            Get Started Now
                        </Button>
                        <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-custom-green-dark font-bold h-14 px-8 rounded-full text-lg shadow-lg transition-all duration-300 hover:-translate-y-1">
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
