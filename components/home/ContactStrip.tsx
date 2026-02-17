"use client";
import { Phone, Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactStrip() {
    return (
        <section className="bg-primary py-8 overflow-hidden">
            <div className="container-max container-padding">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-accent" />
                        <span className="text-base font-bold font-sans tracking-wide">
                            +234 808 200 3009
                        </span>
                    </div>
                    
                    <div className="hidden lg:block h-8 w-px bg-white/15"></div>
                    
                    <div className="flex items-center gap-3">
                        <Store className="w-5 h-5 text-accent" />
                        <span className="text-base font-body text-white/80">
                            Produce Outlet: Ajah-Lekki, Lagos
                        </span>
                    </div>

                    <div className="hidden lg:block h-8 w-px bg-white/15"></div>

                    <Link href="/contact">
                        <Button className="bg-accent hover:bg-accent/90 text-white font-bold px-8 rounded-xl shadow-md shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5">
                            Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
