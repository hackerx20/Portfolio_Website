import React from 'react';

const HomePage = () => {
    return (
        <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center md:items-start">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi I'm <span className="text-blue-600 dark:text-blue-400">Chris Mendes</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
                    Web Developer
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="/contact"
                        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center font-medium"
                    >
                        Let's Talk
                    </a>
                    <a
                        href="/projects"
                        className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center font-medium"
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HomePage;