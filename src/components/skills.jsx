import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Power Automate", logo: "https://upload.wikimedia.org/wikipedia/commons/5/54/Power_Automate_2020_logo.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
];

const SkillsPage = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-12">My Skills!</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center items-center">
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className="flex flex-col items-center p-4 rounded-lg shadow-lg transition-all hover:scale-105"
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain" />
                        <span className="mt-2 text-lg font-medium">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsPage;
