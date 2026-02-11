"use strict";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Agricultural & Farming",
        description: "Modern farming techniques for sustainable crop production.",
        image: "/service_agriculture.jpg",
    },
    {
        title: "Vegetables & Fruits",
        description: "Fresh, organic seasonal produce harvested daily.",
        image: "/service_vegetables.jpg",
    },
    {
        title: "Dairy Production",
        description: "Pure milk and dairy products from grass-fed cattle.",
        image: "/service_dairy.jpg",
    },
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-custom-beige">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-custom-accent font-medium tracking-wider uppercase text-sm">
                            Our Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif text-custom-green-dark leading-tight">
                            We Offer Best Agriculture <br /> & Organic Services
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <Button size="icon" variant="outline" className="rounded-full border-custom-green-dark text-custom-green-dark hover:bg-custom-green-dark hover:text-white">
                            <ArrowRight className="rotate-180" />
                        </Button>
                        <Button size="icon" className="rounded-full bg-custom-green-dark text-white hover:bg-custom-green">
                            <ArrowRight />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            </div>
                            <div className="p-6 relative">
                                <div className="absolute top-0 right-6 -translate-y-1/2 bg-custom-accent text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                    <ArrowRight className="w-5 h-5 -rotate-45" />
                                </div>
                                <h3 className="text-2xl font-bold text-custom-green-dark mb-2 font-serif group-hover:text-custom-accent transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {service.description}
                                </p>
                                <a
                                    href="#"
                                    className="text-custom-green-dark font-medium text-sm uppercase tracking-wide border-b border-custom-accent/30 hover:border-custom-accent transition-colors pb-1 inline-block"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
