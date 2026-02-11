"use strict";
import Image from "next/image";
import { Plus } from "lucide-react";

const projects = [
    {
        title: "Greenhouse Farming",
        category: "Organic",
        image: "/project_1.jpg",
    },
    {
        title: "Ecological Production",
        category: "Farming",
        image: "/project_2.jpg",
    },
    {
        title: "Modern Agriculture",
        category: "Innovation",
        image: "/project_3.jpg",
    },
    {
        title: "Farming Innovation",
        category: "Technology",
        image: "/project_4.jpg",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-custom-green-dark text-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12 space-y-4">
                    <span className="text-custom-accent font-medium tracking-wider uppercase text-sm">
                        Our Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
                        Recently Completed Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-custom-accent text-sm font-medium uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold font-serif mb-4 leading-snug">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Hover Overlay Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="w-16 h-16 bg-custom-accent/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                                    <Plus className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
