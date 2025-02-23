import React, { useState, useEffect } from 'react';

const ExperienceCard = ({ period, title, company, description, number, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div 
            className={`mb-10 relative transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 300}ms` }}
        >
            <div className="absolute -left-14 w-10 h-10 bg-green-600 dark:bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">{number}</span>
            </div>
            <div className=" p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-sm ">{period}</span>
                <h3 className="text-xl font-bold mt-1 ">{title}</h3>
                <p className="text-green-600 dark:text-green-400 font-medium">{company}</p>
                <p className="mt-2 ">{description}</p>
            </div>
        </div>
    );
};

const ExperiencePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

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
            <div className="max-w-2xl mx-auto">
                <h1 
                    className={`text-3xl md:text-5xl font-bold mb-12 text-center  transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                >
                    My <span className="text-green-600 dark:text-green-400">Journey</span>
                </h1>
                
                <div className="relative border-l-2 border-green-600 dark:border-green-400 pl-8 ml-6">
                    {experiences.map((exp, index) => (
                        <ExperienceCard 
                            key={index}
                            {...exp}
                            number={index + 1}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperiencePage;