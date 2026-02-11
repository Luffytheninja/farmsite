"use strict";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-custom-beige">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">

                    {/* Image/Info Side */}
                    <div className="w-full lg:w-5/12 relative min-h-[500px] lg:min-h-full">
                        <Image
                            src="/contact_image.jpg"
                            alt="Contact Us"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-custom-green-dark/90 p-8 md:p-12 flex flex-col justify-between">
                            <div>
                                <span className="text-custom-accent font-medium tracking-wider uppercase text-sm mb-4 block">
                                    Contact Now
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-8">
                                    Get in touch with us related to any question
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 text-white">
                                    <div className="p-3 bg-custom-accent/20 rounded-full">
                                        <MapPin className="w-6 h-6 text-custom-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold font-serif text-lg">Location</p>
                                        <p className="text-gray-300 text-sm">123 Farm Road, Lekki-Epe Expressway, Lagos</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-white">
                                    <div className="p-3 bg-custom-accent/20 rounded-full">
                                        <Mail className="w-6 h-6 text-custom-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold font-serif text-lg">Email Address</p>
                                        <p className="text-gray-300 text-sm">info@lagosfarm.ng</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-white">
                                    <div className="p-3 bg-custom-accent/20 rounded-full">
                                        <Phone className="w-6 h-6 text-custom-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold font-serif text-lg">Phone Number</p>
                                        <p className="text-gray-300 text-sm">+234 800 123 4567</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="w-full lg:w-7/12 p-8 md:p-12">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold font-serif text-custom-green-dark mb-4">
                                Send Us A Message
                            </h2>
                            <p className="text-gray-600">
                                Have a question or want to place a large order? Fill out the form below and we&apos;ll get back to you shortly.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-custom-green-dark">Your Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg bg-custom-beige/30 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-accent/20 focus:border-custom-accent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-custom-green-dark">Your Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-lg bg-custom-beige/30 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-accent/20 focus:border-custom-accent transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-custom-green-dark">Phone Number</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="+234..."
                                        className="w-full px-4 py-3 rounded-lg bg-custom-beige/30 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-accent/20 focus:border-custom-accent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-custom-green-dark">Subject</label>
                                    <input
                                        id="subject"
                                        type="text"
                                        placeholder="Order Inquiry"
                                        className="w-full px-4 py-3 rounded-lg bg-custom-beige/30 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-accent/20 focus:border-custom-accent transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-custom-green-dark">Your Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 rounded-lg bg-custom-beige/30 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-accent/20 focus:border-custom-accent transition-all resize-none"
                                />
                            </div>

                            <Button size="lg" className="w-full bg-custom-accent hover:bg-custom-accent/90 text-white font-bold h-12 rounded-lg">
                                Send Message
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
