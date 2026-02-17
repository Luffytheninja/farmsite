"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-cream">
            <Navbar />
            
            {/* Header */}
            <header className="pt-32 pb-16 bg-cream text-center">
                <div className="container-max container-padding">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-6 text-primary">
                            Let&apos;s Talk. <span className="text-accent italic">We&apos;d Love to Hear from You.</span>
                        </h1>
                        <p className="text-base md:text-xl font-body text-charcoal/60 max-w-2xl mx-auto">
                            Whether you want to place an order, ask about bulk pricing, or just find out more about how we farm — we&apos;re always happy to talk.
                        </p>
                    </motion.div>
                </div>
            </header>

            <section className="section-padding">
                <div className="container-max container-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-6 sm:p-10 rounded-2xl border border-sage/20 shadow-lg"
                        >
                            <form className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary">Full Name*</label>
                                        <input type="text" required className="w-full bg-cream/50 border border-sage/30 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-primary">Email Address*</label>
                                        <input type="email" required className="w-full bg-cream/50 border border-sage/30 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm" />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-primary">Phone Number</label>
                                    <input type="tel" className="w-full bg-cream/50 border border-sage/30 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-primary">Enquiry Type</label>
                                    <select className="w-full bg-cream/50 border border-sage/30 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer text-sm">
                                        <option>General Enquiry</option>
                                        <option>Place an Order</option>
                                        <option>Bulk / Wholesale</option>
                                        <option>Delivery Info</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-primary">Your Message*</label>
                                    <textarea required rows={5} className="w-full bg-cream/50 border border-sage/30 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none text-sm"></textarea>
                                </div>

                                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-base py-6 rounded-xl shadow-lg shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5">
                                    Send Message →
                                </Button>
                            </form>
                        </motion.div>

                        {/* Contact Details — fixed for mobile alignment */}
                        <div className="space-y-8">
                            {/* Contact info cards */}
                            <div className="grid grid-cols-1 gap-6">
                                <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-sage/20">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-1">Phone / WhatsApp</h4>
                                        <p className="text-charcoal/80 text-base">+234 808 200 3009</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-sage/20">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-1">Email Address</h4>
                                        <p className="text-charcoal/80 text-base">hello@wingatefarms.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-sage/20">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-1">Working Hours</h4>
                                        <p className="text-charcoal/80 text-base">Mon – Sat, 7am – 5pm</p>
                                    </div>
                                </div>
                            </div>

                            {/* Locations */}
                            <div className="space-y-4">
                                <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Our Locations</h4>
                                <div className="space-y-3">
                                    <div className="flex gap-3 p-4 bg-white rounded-xl border border-sage/20">
                                        <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <p className="text-charcoal/70 text-sm"><strong className="text-charcoal">The Farm:</strong> Plot 64–106 Ilo Agricultural Layout, Igboku Village, Ilara, Epe, Lagos</p>
                                    </div>
                                    <div className="flex gap-3 p-4 bg-white rounded-xl border border-sage/20">
                                        <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <p className="text-charcoal/70 text-sm"><strong className="text-charcoal">Corporate Office:</strong> Road 5, Suite K105, Ikota Shopping Complex, VGC, Lekki, Lagos</p>
                                    </div>
                                    <div className="flex gap-3 p-4 bg-white rounded-xl border border-sage/20">
                                        <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <p className="text-charcoal/70 text-sm"><strong className="text-charcoal">Produce Outlet:</strong> Shop 1, Debbie Mall, Kemfat Street, Thomas Estate, Ajah-Lekki, Lagos</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}
                            <div className="pt-6 border-t border-sage/20">
                                <p className="text-charcoal/50 mb-4 text-sm">Follow along on our journey:</p>
                                <div className="flex gap-3">
                                    <a href="#" className="p-3 bg-white border border-sage/20 rounded-xl text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hover:-translate-y-0.5">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="p-3 bg-white border border-sage/20 rounded-xl text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hover:-translate-y-0.5">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="p-3 bg-white border border-sage/20 rounded-xl text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hover:-translate-y-0.5">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Integration Placeholder */}
            <section className="bg-cream pb-16">
                <div className="container-max container-padding">
                    <div className="w-full h-[400px] md:h-[500px] bg-sage/15 rounded-2xl overflow-hidden relative border border-sage/30 shadow-inner group">
                        <div className="absolute inset-0 flex items-center justify-center bg-secondary/5">
                             <div className="bg-white p-8 rounded-2xl shadow-xl relative z-10 border border-sage/20 text-center">
                                <MapPin className="w-12 h-12 text-accent mx-auto mb-3" />
                                <p className="font-serif font-bold text-primary text-lg">Wingate Integrated Farms</p>
                                <p className="text-xs text-charcoal/50 tracking-widest uppercase mt-1">Epe, Lagos</p>
                                <Button className="mt-4 bg-primary hover:bg-primary/90 text-white w-full rounded-xl shadow-md">Get Directions →</Button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
