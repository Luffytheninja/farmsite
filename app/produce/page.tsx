"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Egg, Bird, Fish, Beef, Wheat, Leaf } from "lucide-react";

const products = {
    livestock: [
        {
            id: "eggs",
            icon: Egg,
            name: "Farm-Fresh Eggs, Laid Daily",
            description: "Our free-range laying hens produce eggs with rich, deep-yellow yolks. No artificial lighting or overcrowded cages — just well-kept hens on open ground.",
            availability: "Sold by the dozen or in bulk trays (30-count).",
            seasonal: "Available year-round.",
            image: "https://images.unsplash.com/photo-1598965402089-897ce524ba3b?q=80&w=800"
        },
        {
            id: "chicken",
            icon: Bird,
            name: "Free-Range Chicken, Raised Right",
            description: "Raised with room to scratch and forage. We don't rush growth with artificial feed or antibiotics. Real texture and genuine flavour.",
            availability: "Whole bird or cuts (dressed and ready).",
            seasonal: "Available weekly. Large orders require 48h notice.",
            image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800"
        },
        {
            id: "turkey",
            icon: Bird,
            name: "Farm-Raised Turkey",
            description: "Raised slowly and naturally on our farm in Epe. Premium, flavourful choice for celebrations and family meals.",
            availability: "Whole bird available; cuts on request.",
            seasonal: "Best ordered 1 week in advance. Festive seasons fill quickly.",
            image: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?q=80&w=800"
        },
        {
            id: "catfish",
            icon: Fish,
            name: "Farm-Fresh Catfish",
            description: "Raised in clean, freshwater ponds in Epe. Harvested to order, genuinely fresh. Perfect for pepper soup or grilling.",
            availability: "Live, cleaned whole, or filleted.",
            seasonal: "Available year-round. Live fish orders best 24-48h advance.",
            image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?q=80&w=800"
        },
        {
            id: "pork",
            icon: Beef,
            name: "Pasture-Raised Pork",
            description: "Raised with space and clean feed — no hormones. Depth of flavour for your pepper soup, suya, or pork belly.",
            availability: "Whole pig, half, or specific cuts.",
            seasonal: "Year-round availability. Large orders require booking.",
            image: "https://images.unsplash.com/photo-1593452712180-6127dc1abc6d?q=80&w=800"
        }
    ],
    crops: [
        {
            id: "cassava",
            icon: Wheat,
            name: "Fresh-Harvested Cassava",
            description: "High-starch, high-quality roots suited for home cooking and commercial processing. Harvested at peak maturity.",
            availability: "Fresh roots (by weight) or processed forms.",
            seasonal: "Available year-round.",
            image: "https://images.unsplash.com/photo-1596711675765-685b31bf37b3?q=80&w=800"
        },
        {
            id: "plantain",
            icon: Leaf,
            name: "Organically Grown Plantain",
            description: "Sweet when ripe, starchy when unripe. Grown without synthetic pesticides and harvested at the right time.",
            availability: "Ripe (yellow) or unripe (green). Sold by bunch or weight.",
            seasonal: "Peak availability varies seasonally.",
            image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=800"
        }
    ]
};

export default function ProducePage() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen bg-cream">
            <Navbar />
            
            {/* Header */}
            <header className="pt-32 pb-16 bg-primary text-cream text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/noise.png')]"></div>
                <div className="container-max container-padding relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
                            Our Produce: <span className="text-accent italic">Fresh, Natural, and Locally Grown</span>
                        </h1>
                        <p className="text-lg md:text-xl font-body text-sage max-w-2xl mx-auto">
                            Everything on this page was raised or grown right here on our farm. No middlemen, no warehouses, no weeks-old stock.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Category Navigation */}
            <section className="py-12 bg-cream">
                <div className="container-max container-padding">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <button 
                            onClick={() => scrollTo('livestock')}
                            className="group relative h-64 rounded-2xl overflow-hidden text-left"
                        >
                            <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors z-10"></div>
                            <div className="w-full h-full bg-[#5D6055] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800')" }}></div>
                            <div className="absolute inset-x-8 bottom-8 z-20">
                                <h3 className="text-3xl font-serif font-bold text-white mb-2">Livestock</h3>
                                <p className="text-accent font-sans font-bold text-sm uppercase tracking-widest">Eggs · Chicken · Turkey · Catfish · Pork</p>
                            </div>
                        </button>
                        <button 
                            onClick={() => scrollTo('crops')}
                            className="group relative h-64 rounded-2xl overflow-hidden text-left"
                        >
                            <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors z-10"></div>
                            <div className="w-full h-full bg-[#4A4E40] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800')" }}></div>
                            <div className="absolute inset-x-8 bottom-8 z-20">
                                <h3 className="text-3xl font-serif font-bold text-white mb-2">Crops</h3>
                                <p className="text-accent font-sans font-bold text-sm uppercase tracking-widest">Cassava · Plantain</p>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Livestock Section */}
            <section id="livestock" className="section-padding bg-white">
                <div className="container-max container-padding">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">🐓 Livestock & Aquaculture</h2>
                    <p className="text-charcoal/60 mb-12 max-w-2xl">
                        Wingate&apos;s livestock operation spans four divisions: Poultry, Aquaculture, Piggery, and Livestock (cattle, sheep, rams, goats).
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {products.livestock.map((product) => (
                            <div key={product.id} className="flex flex-col md:flex-row gap-8 items-start bg-cream/30 p-8 rounded-2xl border border-sage/10">
                                <div className="w-full md:w-48 h-48 relative rounded-xl overflow-hidden shrink-0">
                                    <div className="absolute inset-0 bg-[#5D6055] bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }}></div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif font-bold text-primary">{product.name}</h3>
                                    <p className="text-charcoal/80 font-body leading-relaxed">{product.description}</p>
                                    <div className="space-y-2 text-sm">
                                        <p><strong className="text-secondary uppercase text-[10px] tracking-widest">Availability:</strong> {product.availability}</p>
                                        <p><strong className="text-secondary uppercase text-[10px] tracking-widest">Seasonal Note:</strong> {product.seasonal}</p>
                                    </div>
                                    <Button className="bg-accent hover:bg-accent/90 text-charcoal font-bold rounded-lg px-6">Order Now →</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Crops Section */}
            <section id="crops" className="section-padding bg-cream/40">
                <div className="container-max container-padding">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">🌿 Crops</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                        {products.crops.map((product) => (
                            <div key={product.id} className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-2xl border border-sage/10">
                                <div className="w-full md:w-48 h-48 relative rounded-xl overflow-hidden shrink-0">
                                    <div className="absolute inset-0 bg-[#4A4E40] bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }}></div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif font-bold text-primary">{product.name}</h3>
                                    <p className="text-charcoal/80 font-body leading-relaxed">{product.description}</p>
                                    <div className="space-y-2 text-sm">
                                        <p><strong className="text-secondary uppercase text-[10px] tracking-widest">Availability:</strong> {product.availability}</p>
                                        <p><strong className="text-secondary uppercase text-[10px] tracking-widest">Seasonal Note:</strong> {product.seasonal}</p>
                                    </div>
                                    <Button className="bg-accent hover:bg-accent/90 text-charcoal font-bold rounded-lg px-6">Order Now →</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ordering Info Banner */}
            <section className="bg-secondary text-white py-12">
                <div className="container-max container-padding text-center space-y-6">
                    <h2 className="text-3xl font-serif font-bold text-accent">How to Order</h2>
                    <p className="text-lg opacity-90 font-body max-w-2xl mx-auto">
                        Call or WhatsApp us directly, or use the order form on our Contact page. We offer farm pickup and local delivery — ask us about delivery schedules in your area.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-bold pt-4">
                        <div className="flex items-center gap-2">📞 +234 808 200 3009</div>
                        <div className="flex items-center gap-2">🚚 Delivery available Mon–Sat</div>
                        <div className="flex items-center gap-2">📍 Farm Pickup: Mon–Sat, 7am–5pm</div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
