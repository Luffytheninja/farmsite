"use strict";
import { Trees, Leaf, Sprout } from "lucide-react";

const features = [
    {
        title: "100% Natural",
        description: "Pure and unadulterated produce.",
        icon: Trees,
    },
    {
        title: "Always Fresh",
        description: "Farm to table within 24 hours.",
        icon: Leaf,
    },
    {
        title: "Modern Methods",
        description: "Sustainable tech-driven farming.",
        icon: Sprout,
    },
];

export function Features() {
    return (
        <section className="bg-secondary py-12 relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-2xl shadow-secondary/30">
            <div className="container-padding">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 group">
                            <div className="p-3 bg-white/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                                <feature.icon className="w-8 h-8 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg font-serif">{feature.title}</h3>
                                <p className="text-white/50 text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
