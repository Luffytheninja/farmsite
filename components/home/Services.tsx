"use strict";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout } from "lucide-react";

const services = [
    {
        title: "Crop Production",
        desc: "Modern farming techniques for sustainable crop production, featuring our premium Cassava and Plantains.",
        image: "/cassava-plant.jfif",
    },
    {
        title: "Livestock Farming",
        desc: "Healthy, ethically raised livestock managed with expert care.",
        image: "/livestock-new.jpg",
    },
    {
        title: "Aquaculture & Fish",
        desc: "Farm-fresh catfish raised in clean, sustainable environments.",
        image: "/farm-fresh-catfish.jpg",
    },
];

export function Services() {
    return (
        <section id="services" className="section-padding bg-cream">
            <div className="container-max container-padding">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-accent font-medium tracking-wider uppercase text-sm mb-2 block">
                            Our Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary leading-tight">
                            We Provide High Quality <br /> Agriculture Services
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-accent hover:text-white hover:border-accent transition-colors">
                            <ArrowRight className="w-5 h-5 rotate-180" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-accent hover:text-white hover:border-accent transition-colors">
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            </div>
                            <div className="p-6 relative">
                                <div className="absolute -top-8 right-6 bg-accent text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                                    <Sprout className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-bold text-primary font-serif mb-3 group-hover:text-accent transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {service.desc}
                                </p>

                                <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide group-hover:text-accent transition-colors">
                                    Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
