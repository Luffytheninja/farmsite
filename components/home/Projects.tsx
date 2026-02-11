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
        <section id="projects" className="section-padding bg-custom-green-dark text-white">
            <div className="container-max container-padding">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <span className="text-custom-accent font-medium tracking-wider uppercase text-sm">
                        Recently Completed
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
                        Explore Our Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                            <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-custom-accent text-xs font-bold uppercase tracking-wider mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold font-serif text-white mb-4">
                                    {project.title}
                                </h3>
                                <div className="w-10 h-10 bg-custom-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    <Plus className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
