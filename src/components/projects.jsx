import React from 'react';

const ProjectCard = ({ title, description, image, tags, link }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
        <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
        />
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <a
                href={link}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Project →
            </a>
        </div>
    </div>
);

const ProjectsPage = () => {
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

    const experiences = [
        {
            period: "2020 - Present",
            title: "Senior Web Developer",
            company: "Tech Solutions Inc.",
            description: "Leading front-end development for enterprise applications"
        },
        {
            period: "2018 - 2020",
            title: "Web Developer",
            company: "Digital Innovations",
            description: "Developed responsive websites and e-commerce solutions"
        },
        {
            period: "2016 - 2018",
            title: "Junior Developer",
            company: "Web Crafters",
            description: "Assisted in website maintenance and feature implementation"
        }
    ];

    return (
            <section className="container mx-auto px-4 py-16">
                <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">Projects</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">My Journey</h2>

                    <div className="relative border-l-2 border-blue-600 dark:border-blue-400 pl-8 ml-6">
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-10 relative">
                                <div className="absolute -left-14 w-10 h-10 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">{index + 1}</span>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                                    <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        
    );
};

export default ProjectsPage;