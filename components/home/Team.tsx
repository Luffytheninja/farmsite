"use strict";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Share2 } from "lucide-react";

const team = [
    {
        name: "Adeola Ogunleye",
        role: "Farm Manager",
        image: "/team_1.jpg",
    },
    {
        name: "Chinedu Okeke",
        role: "Senior Agronomist",
        image: "/team_2.jpg",
    },
    {
        name: "Fatima Yusuf",
        role: "Livestock Specialist",
        image: "/team_3.jpg",
    },
    {
        name: "Ibrahim Musa",
        role: "Quality Control",
        image: "/team_4.jpg",
    },
];

export function Team() {
    return (
        <section id="team" className="py-20 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12 space-y-4">
                    <span className="text-custom-accent font-medium tracking-wider uppercase text-sm">
                        Our Farmers
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-custom-green-dark leading-tight">
                        We Have Lot&apos;s Of Experience <br /> Team Members
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="group relative rounded-2xl overflow-hidden bg-custom-beige/30 hover:bg-white hover:shadow-xl transition-all duration-300">
                            <div className="relative h-[350px] w-full overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Social Share Overlay */}
                                <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-end">
                                    <div className="bg-custom-accent text-white p-3 rounded-full shadow-lg z-10 relative">
                                        <Share2 className="w-5 h-5" />
                                    </div>
                                    {/* Icons that appear on hover */}
                                    <div className="flex flex-col gap-2 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                            <a
                                                key={i}
                                                href="#"
                                                className="bg-white text-custom-green-dark hover:bg-custom-green-dark hover:text-white p-2.5 rounded-full shadow-md transition-colors"
                                                style={{ transitionDelay: `${i * 50}ms` }}
                                            >
                                                <Icon className="w-4 h-4" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 text-center group-hover:text-left transition-all duration-300">
                                <h3 className="text-xl font-bold text-custom-green-dark font-serif mb-1 group-hover:text-custom-accent transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-gray-500 text-sm tracking-wide uppercase">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
