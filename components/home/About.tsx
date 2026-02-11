"use strict";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
    "Organic food contains more vitamins",
    "Eat organic because supply meets demand",
    "Organic food is never irradiated",
];

export function About() {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/about_image.jpg"
                                alt="Modern Farming"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            {/* Floating Card */}
                            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-custom-accent/20">
                                <p className="text-4xl font-bold text-custom-accent">25+</p>
                                <p className="text-custom-green-dark font-medium">Years of Experience</p>
                            </div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-custom-beige rounded-3xl" />
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <span className="text-custom-accent font-medium tracking-wider uppercase text-sm">
                                About Us
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold font-serif text-custom-green-dark leading-tight">
                                We&apos;re Best Agriculture <br /> & Organic Firms
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We are dedicated to providing the highest quality organic produce.
                                Our farm combines traditional wisdom with modern sustainable practices
                                to ensure healthy food for our community.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-custom-accent flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Button size="lg" className="bg-custom-accent hover:bg-custom-accent/90 text-white rounded-full px-8">
                                Discover More
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
