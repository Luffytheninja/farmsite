"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Leaf, Heart, Users } from "lucide-react";

const values = [
    {
        icon: Leaf,
        title: "Quality Without Compromise",
        description: "We refuse to cut corners. Every animal is raised with care, every crop is monitored from planting to harvest, and every order is prepared with the same attention we'd give to feeding our own household."
    },
    {
        icon: Heart,
        title: "Ethical, Humane Farming",
        description: "Our animals live well. They have space to roam, clean water, and natural feed. We believe that how an animal is raised affects everything — including how it tastes."
    },
    {
        icon: Users,
        title: "Rooted in Community",
        description: "We're not a corporation shipping produce across the country. We're a local farm serving local people. We partner with nearby markets and support other small producers."
    }
];

const timeline = [
    { year: "2018", event: "Wingate Integrated Farms founded in Epe, Lagos" },
    { year: "2019", event: "Aquaculture division launched with freshwater catfish ponds" },
    { year: "2020", event: "Poultry division expanded to include turkeys alongside chickens and layers" },
    { year: "2021", event: "Piggery and broader Livestock division established" },
    { year: "2022", event: "Produce Outlet Shop opened at Debbie Mall, Ajah-Lekki" },
    { year: "2023", event: "Corporate office opened at VGC, Lekki; wholesale supply scaled" }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-cream">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-secondary/80 z-10"></div>
                    <div className="w-full h-full bg-[#4A4E40] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=2000')" }}></div>
                </div>
                <div className="container-max container-padding relative z-20 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
                            We&apos;re Not Just Farmers. <br />
                            <span className="text-accent italic">We&apos;re Stewards of the Land.</span>
                        </h1>
                        <p className="text-lg md:text-xl font-body text-white/80">
                            Meet the family behind the farm — and learn why we do what we do.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding">
                <div className="container-max container-padding">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary">How It All Began</h2>
                        <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed font-body">
                            <p>
                                Wingate Integrated Farms was built on a single conviction: that Nigeria deserves better food, and better farming. Set across a sprawling agricultural layout in Epe, Lagos, we&apos;ve grown from a focused livestock operation into a fully integrated farm — one that spans four distinct divisions and serves customers across Lagos and beyond.
                            </p>
                            <p>
                                Our farm operates across four core areas: <strong className="text-primary">Aquaculture</strong> (catfish farming in freshwater ponds), <strong className="text-primary">Poultry</strong> (chickens, turkeys, and egg production), <strong className="text-primary">Piggery</strong> (ethically raised pork), and <strong className="text-primary">Livestock</strong> (cattle, sheep, rams, and goats). We also cultivate crops — cassava and plantain — that complement our animal produce and serve a wide range of local and commercial needs.
                            </p>
                            <p>
                                Today, you can find us not just at the farm in Epe, but at our corporate office in Lekki and our dedicated produce outlet shop in Ajah-Lekki — bringing the freshness of the farm directly to Lagos communities. Whether you&apos;re a household placing a weekly order or a business sourcing in bulk, Wingate is built to serve you well.
                            </p>
                            <blockquote className="border-l-4 border-accent pl-6 italic font-serif text-primary text-xl mt-8">
                                &ldquo;Every decision we make comes back to the same question: would we feed this to our own family? If the answer is yes, it leaves our farm. If it isn&apos;t, it doesn&apos;t.&rdquo;
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-sage/15">
                <div className="container-max container-padding">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center text-primary">What We Stand For</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((value, idx) => (
                            <div key={idx} className="text-center space-y-4 group">
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:-translate-y-1">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-primary">{value.title}</h3>
                                <p className="text-charcoal/70 leading-relaxed font-body">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding">
                <div className="container-max container-padding">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center text-primary">Our Journey</h2>
                    <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-sage/40">
                        {timeline.map((item, idx) => (
                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-accent bg-white text-primary font-bold shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-sage/30 bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <time className="font-serif font-bold text-accent text-xl">{item.year}</time>
                                    </div>
                                    <div className="text-charcoal/70">{item.event}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
