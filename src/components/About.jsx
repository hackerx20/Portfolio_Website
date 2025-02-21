import React from 'react';


const AboutPage = () => {
    return (
        
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">About Me!</h1>

                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/3">
                            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-blue-600 dark:border-blue-400">
                                <img
                                    src="/api/placeholder/400/400"
                                    alt="Chris Mendes"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                                Ut enim ad minim veniam, quis nostrud orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </p>

                            <a
                                href="/resume.pdf"
                                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block font-medium"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        
    );
};

export default AboutPage;