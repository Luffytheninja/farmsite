"use strict";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Local Chef",
        content: "The quality of produce from LagosFarm is unmatched. My restaurant customers can taste the difference in every dish.",
        image: "/testim_1.jpg",
        rating: 5,
    },
    {
        name: "David Adeleke",
        role: "Home Cook",
        content: "I love the weekly vegetable box functionality. Fresh, organic greens delivered right to my doorstep in Lekki.",
        image: "/testim_2.jpg",
        rating: 5,
    },
    {
        name: "Ngozi Eze",
        role: "Health Coach",
        content: "As a nutritionist, I highly recommend LagosFarm. Their commitment to organic farming is exactly what my clients need.",
        image: "/testim_3.jpg",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-custom-green-dark text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-custom-accent rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-custom-green-light rounded-full blur-3xl" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <span className="text-custom-accent font-medium tracking-wider uppercase text-sm">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
                        Trusted By 100+ Customers
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative group hover:bg-white/10 transition-colors duration-300">
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-custom-accent/20 group-hover:text-custom-accent transition-colors" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-custom-accent text-custom-accent" />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-8 italic leading-relaxed">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-custom-accent">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white font-serif">{testimonial.name}</h4>
                                    <p className="text-sm text-custom-accent">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
