import React, { useState, useEffect } from 'react';
import socialMediaWebApp from "../assets/socialMediaWebApp.png";
import streamlitDashboard from "../assets/Streamlit_dashboard.jpeg";
import vscodeExtension from "../assets/vscode-extension.webp";
import chromeExtension from "../assets/Chromeextension.png";
import analyticsImage from "../assets/project-management-techniques.png";
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
                    className="w-full h-80 object-cover"
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
            title: "Social Media Web Application",
            description: "A full-stack social media web platform built with MERN Stack",
            image: socialMediaWebApp,
            tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
            link: "https://github.com/hackerx20/FriendsOrbit.git"
        },
        {
            title: "Streamlit Dashboard",
            description: "A productivity app with drag-and-drop functionality",
            image: streamlitDashboard,
            tags: ["Python", "Machine Learning", "Data Science"],
            link: "https://github.com/hackerx20/US_Accident-2016-2023-Analysis.git"
        },
        {
            title: "VS-Code Leetcode Extension",
            description: "A VSCode Extension for Leetcode",
            image: vscodeExtension,
            tags: ["HTML", "CSS", "Javascript", "Graphql", "Web APIs"],
            link: "https://github.com/hackerx20/VsCode_Extension_CPH_LeetCode.git"
        },
        {
            title: "NVDI_Based Land Cover Classification",
            description: "A Classification model to predict NDVI based Land Cover",
            image: analyticsImage,
            tags: ["Python", "Machine Learning", "Data Science", "Logistic Regression", "Data Analytics", "Scikit-Learn"],
            link: "https://colab.research.google.com/drive/1a1JCFvz3QL3_ZRpLLB6hcFgjCU54rmp0?usp=sharing"
        },
        {
            title: "Web Annotation Chrome Extension",
            description: "A Chrome Extension for Web Annotation",
            image: chromeExtension,
            tags: ["Javascript"],
            link: "https://github.com/hackerx20/Web_Annotator.git"
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