"use strict";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/farm_hero_background.png"
                    alt="Organic Farm Landscape"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent z-10" />
            </div>

            {/* Content */}
            <div className="container-max container-padding relative z-20 text-white h-full flex flex-col justify-center">
                <div className="max-w-3xl space-y-6">
                    <div className="inline-block bg-accent/20 backdrop-blur-sm border border-accent/30 px-5 py-2.5 rounded-full text-accent font-bold uppercase tracking-wider text-xs">
                        ✦ 100% Organic & Natural
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif leading-[1.1] text-white">
                        Experience The Real <br />
                        <span className="text-accent">Taste of Nature</span>
                    </h1>
                    <p className="text-base md:text-xl text-white/70 leading-relaxed max-w-xl">
                        We provide the finest organic produce directly from our farm to your table. Sustainable farming for a healthier future in Lagos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 rounded-xl text-base shadow-xl shadow-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/30">
                            Get Started Now
                        </Button>
                        <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white hover:text-secondary font-bold h-14 px-8 rounded-xl text-base transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                            Watch Video
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/40">
                <ChevronDown className="w-6 h-6" />
            </div>
        </section>
    );
}
