import React, { useState, useEffect } from 'react';

const ProjectCard = ({ title, description, image, tags, link, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div 
            className={`transform transition-all duration-1000 h-full ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
        >
            <div className="  h-full rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 ">{title}</h3>
                    <p className=" mb-4 flex-grow">{description}</p>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a
                            href={link}
                            className="text-green-600 dark:text-green-400 font-medium hover:underline inline-flex items-center group"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project 
                            <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const projects = [
        {
            title: "E-Commerce Website",
            description: "A full-stack e-commerce platform built with React and Node.js",
            image: "/api/placeholder/600/400",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "#"
        },
        {
            title: "Task Management App",
            description: "A productivity app with drag-and-drop functionality",
            image: "/api/placeholder/600/400",
            tags: ["React", "Redux", "Firebase"],
            link: "#"
        },
        {
            title: "Portfolio Website",
            description: "A responsive portfolio website built with React and Tailwind CSS",
            image: "/api/placeholder/600/400",
            tags: ["React", "Tailwind CSS", "Framer Motion"],
            link: "#"
        },
        {
            title: "Weather Dashboard",
            description: "A weather forecast application using OpenWeather API",
            image: "/api/placeholder/600/400",
            tags: ["JavaScript", "API Integration", "Chart.js"],
            link: "#"
        }
    ];

    return (
        <main className="min-h-screen   transition-colors duration-300">
            <div className="container  mx-auto px-4 py-16">
                <h1 
                    className={`text-3xl md:text-5xl font-bold mb-12 text-center transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                >
                    My <span className="text-green-600 dark:text-green-400">Projects!</span>
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;