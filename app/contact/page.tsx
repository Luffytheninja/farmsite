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
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-primary">
                            Let&apos;s Talk. <span className="text-accent italic">We&apos;d Love to Hear from You.</span>
                        </h1>
                        <p className="text-lg md:text-xl font-body text-charcoal/60 max-w-2xl mx-auto">
                            Whether you want to place an order, ask about bulk pricing, or just find out more about how we farm — we&apos;re always happy to talk.
                        </p>
                    </motion.div>
                </div>
            </header>

            <section className="section-padding">
                <div className="container-max container-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-10 rounded-3xl border border-sage/20 shadow-sm"
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-secondary">Full Name*</label>
                                        <input type="text" required className="w-full bg-cream/30 border border-sage/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-secondary">Email Address*</label>
                                        <input type="email" required className="w-full bg-cream/30 border border-sage/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-secondary">Phone Number</label>
                                    <input type="tel" className="w-full bg-cream/30 border border-sage/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-secondary">Enquiry Type</label>
                                    <select className="w-full bg-cream/30 border border-sage/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                                        <option>General Enquiry</option>
                                        <option>Place an Order</option>
                                        <option>Bulk / Wholesale</option>
                                        <option>Delivery Info</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-secondary">Your Message*</label>
                                    <textarea required rows={5} className="w-full bg-cream/30 border border-sage/30 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
                                </div>

                                <Button className="w-full bg-accent hover:bg-accent/90 text-charcoal font-bold text-lg py-7 rounded-xl shadow-lg">
                                    Send Message →
                                </Button>
                            </form>
                        </motion.div>

                        {/* Contact Details */}
                        <div className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-1">Phone / WhatsApp</h4>
                                        <p className="text-charcoal/80 text-lg">+234 808 200 3009</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-1">Email Address</h4>
                                        <p className="text-charcoal/80 text-lg">hello@wingatefarms.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-1">Working Hours</h4>
                                        <p className="text-charcoal/80 text-lg">Mon – Sat, 7am – 5pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Our Locations</h4>
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                                        <p className="text-charcoal/70"><strong className="text-charcoal">The Farm:</strong> Plot 64–106 Ilo Agricultural Layout, Igboku Village, Ilara, Epe, Lagos</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                                        <p className="text-charcoal/70"><strong className="text-charcoal">Corporate Office:</strong> Road 5, Suite K105, Ikota Shopping Complex, VGC, Lekki, Lagos</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                                        <p className="text-charcoal/70"><strong className="text-charcoal">Produce Outlet:</strong> Shop 1, Debbie Mall, Kemfat Street, Thomas Estate, Ajah-Lekki, Lagos</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-sage/20">
                                <p className="text-charcoal/60 mb-6">Follow along on our journey:</p>
                                <div className="flex gap-4">
                                    <a href="#" className="p-3 bg-white border border-sage/20 rounded-xl text-primary hover:bg-primary hover:text-white transition-all">
                                        <Facebook className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="p-3 bg-white border border-sage/20 rounded-xl text-primary hover:bg-primary hover:text-white transition-all">
                                        <Instagram className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="p-3 bg-white border border-sage/20 rounded-xl text-primary hover:bg-primary hover:text-white transition-all">
                                        <Twitter className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Integration Placeholder */}
            <section className="bg-cream">
                <div className="container-max container-padding">
                    <div className="w-full h-[500px] bg-sage/20 rounded-3xl overflow-hidden relative border border-sage/30 shadow-inner group">
                        <div className="absolute inset-0 flex items-center justify-center bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=6.5833,3.9833&zoom=13&size=1200x500&key=YOUR_API_KEY')] bg-cover bg-center grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700">
                             <div className="bg-white p-6 rounded-2xl shadow-2xl relative z-10 border border-accent/20">
                                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                                <p className="font-serif font-bold text-primary text-center">Wingate Integrated Farms</p>
                                <p className="text-xs text-secondary tracking-widest uppercase text-center mt-1">Epe, Lagos</p>
                                <Button className="mt-4 bg-primary text-white w-full">Get Directions →</Button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
