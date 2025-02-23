import React from 'react';

const SkillBar = ({ name, percentage }) => (
    <div className="mb-6">
        <div className="flex justify-between items-center mb-1">
            <span className="text-lg font-medium">{name}</span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
                className="bg-green-600 dark:bg-green-500 h-2.5 rounded-full"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);

const SkillsPage = () => {
    const technicalSkills = [
        { name: "HTML/CSS", percentage: 95 },
        { name: "JavaScript", percentage: 90 },
        { name: "React", percentage: 85 },
        { name: "Node.js", percentage: 80 },
        { name: "Tailwind CSS", percentage: 90 },
    ];

    const softSkills = [
        { name: "Problem Solving", percentage: 95 },
        { name: "Communication", percentage: 90 },
        { name: "Teamwork", percentage: 85 },
        { name: "Time Management", percentage: 80 },
    ];

    return (
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">My Skills!</h1>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
                            {technicalSkills.map((skill, index) => (
                                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
                            ))}
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-6">Soft Skills</h2>
                            {softSkills.map((skill, index) => (
                                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="/resume.pdf"
                            download
                            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors inline-block font-medium"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>
        
    );
};

export default SkillsPage;