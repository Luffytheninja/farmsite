"use strict";
import Image from "next/image";
import { User, MessageSquare, Calendar } from "lucide-react";

const posts = [
    {
        title: "The Importance of Organic Farming in Nigeria",
        author: "Kevin Martin",
        date: "12 Oct, 2024",
        comments: 0,
        image: "/blog_1.jpg",
        category: "Organic",
    },
    {
        title: "How We Maintain Quality in Crop Production",
        author: "Sarah Jones",
        date: "10 Oct, 2024",
        comments: 2,
        image: "/blog_2.jpg",
        category: "Farming",
    },
    {
        title: "Sustainable Agriculture Techniques for 2025",
        author: "David Lee",
        date: "05 Oct, 2024",
        comments: 5,
        image: "/blog_3.jpg",
        category: "Innovation",
    },
];

export function Blog() {
    return (
        <section id="blog" className="py-20 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12 space-y-4">
                    <span className="text-custom-accent font-medium tracking-wider uppercase text-sm">
                        From The Blog
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-custom-green-dark leading-tight">
                        Our Blog & Articles
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="group rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-custom-accent text-white text-xs font-bold uppercase py-1 px-3 rounded-full shadow-md">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 border-b border-gray-100 pb-3">
                                    <div className="flex items-center gap-1">
                                        <User className="w-3 h-3 text-custom-accent" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3 text-custom-accent" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1 ml-auto">
                                        <MessageSquare className="w-3 h-3 text-custom-accent" />
                                        <span>{post.comments} Comments</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-custom-green-dark font-serif mb-3 leading-snug group-hover:text-custom-accent transition-colors">
                                    {post.title}
                                </h3>

                                <a href="#" className="inline-block text-custom-green-dark font-medium text-sm hover:text-custom-accent transition-colors relative group-hover:translate-x-1 duration-300">
                                    Read More &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
