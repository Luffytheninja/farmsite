"use strict";
import { Sprout, Sun, Tractor, Truck } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Plan for Planting",
        description: "We carefully select the best seeds and plan the season.",
        icon: Sprout,
    },
    {
        id: "02",
        title: "Cultivation",
        description: "Nurturing crops with organic fertilizers and care.",
        icon: Sun,
    },
    {
        id: "03",
        title: "Crop Harvesting",
        description: "Hand-picking produce at peak ripeness.",
        icon: Tractor,
    },
    {
        id: "04",
        title: "Fast Delivery",
        description: "Farm to your doorstep in record time.",
        icon: Truck,
    },
];

export function Process() {
    return (
        <section className="py-20 bg-custom-beige">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-custom-accent font-medium tracking-wider uppercase text-sm">
                            Our Process
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif text-custom-green-dark leading-tight">
                            How We Do Agriculture Work
                        </h2>
                    </div>
                    <p className="max-w-md text-gray-600">
                        From the soil to your table, we ensure every step aligns with our commitment to quality and sustainability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-custom-green/10 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-5xl font-bold text-custom-green/10 group-hover:text-custom-accent/20 transition-colors font-serif">
                                    {step.id}
                                </span>
                                <div className="w-12 h-12 bg-custom-green-dark text-white rounded-full flex items-center justify-center group-hover:bg-custom-accent transition-colors duration-300">
                                    <step.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-custom-green-dark mb-3 font-serif">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
