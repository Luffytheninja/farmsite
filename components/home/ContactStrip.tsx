"use client";
import { Phone, Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactStrip() {
    return (
        <section className="bg-primary py-8 overflow-hidden">
            <div className="container-max container-padding">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-cream">
                    <div className="flex items-center gap-3">
                        <Phone className="w-6 h-6 text-accent" />
                        <span className="text-lg font-bold font-sans tracking-wide">
                            +234 808 200 3009
                        </span>
                    </div>
                    
                    <div className="hidden lg:block h-8 w-px bg-white/10"></div>
                    
                    <div className="flex items-center gap-3">
                        <Store className="w-6 h-6 text-accent" />
                        <span className="text-lg font-body text-cream/90 italic">
                            Produce Outlet: Ajah-Lekki, Lagos
                        </span>
                    </div>

                    <div className="hidden lg:block h-8 w-px bg-white/10"></div>

                    <Button className="bg-accent hover:bg-accent/90 text-charcoal font-bold px-8 rounded-lg">
                        Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
