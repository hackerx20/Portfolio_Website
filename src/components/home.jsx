import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import me from "../assets/me11.jpeg";
import me1 from "../assets/me1.png";

const TypeWriter = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(200);

    const words = ["Full Stack Web Developer", "ML Engineer", "Data Scientist", "Competitive Programmer"];
    const period = 3000;

    useEffect(() => {
        let timer = null;

        const tick = () => {
            let i = loopNum % words.length;
            let fullText = words[i];
            let updatedText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(100);
                }, period);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(200);
            }
        };

        timer = setTimeout(tick, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-600 dark:text-green-400 min-h-[2.5em]">
            <span>{text}</span>
            <span className="animate-pulse">|</span>
        </h2>
    );
};

const CombinedPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center relative">
                <div className="text-center max-w-3xl px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                        Hi I'm <span className="text-green dark:text-green-400">Shivansh Tiwari</span>
                    </h1>
                    <TypeWriter />
                </div>
                
                {/* Image 2 - Desktop */}
                <div className="w-1/3 hidden md:block">
                    <img
                        src={me1}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Image 1 - Mobile */}
                <div className="w-70 h-70 md:hidden">
                    <div className="rounded-full overflow-hidden w-70 h-70 mx-auto border-4 border-green-600 dark:border-green-400">
                        <img
                            src={me}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Animated Arrow */}
                <div className="absolute bottom-20 animate-bounce">
                    <ChevronDown
                        size={48}
                        className="text-green-600 animate-pulse"
                    />
                </div>
            </section>

            {/* About Section */}
            <section className={`container mx-auto px-4 py-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">About <span className="text-green-600 dark:text-green-400">Me!</span></h1>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div>
                            <p className="text-lg leading-relaxed mb-6">
                                I'm a passionate developer who thrives on solving problems efficiently. My expertise spans software development, data science, and competitive programming, with experience in RPA (Robotic Process Automation) using Microsoft Power Automate.
                            </p>
                            <p className="text-lg leading-relaxed mb-8">
                                I enjoy working on projects that streamline workflows, optimize processes, and provide insightful data-driven solutions. From developing data science applications with Streamlit to integrating tools that enhance developer productivity, my work reflects my dedication to building impactful solutions.
                            </p>
                            <p className="text-lg leading-relaxed mb-10">
                                Currently, I’m exploring new ways to improve developer experiences, automation, and data-driven decision-making. Always open to collaboration and new challenges!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="/contact"
                                    className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-center font-medium w-full sm:w-auto"
                                >
                                    Contact Me
                                </a>
                                <a
                                    href="/projects"
                                    className="px-6 py-3 border border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 rounded-md hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-center font-medium w-full sm:w-auto"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CombinedPage;