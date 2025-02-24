import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import darkLogo from "../assets/darkmodeLogo1.png";
import lightLogo from "../assets/lightmodeLogo1.png";

const Layout = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Get stored theme preference or default to true if none exists
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? JSON.parse(storedTheme) : true;
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
        document.documentElement.classList.toggle('dark');
    };

    // Apply theme class on initial load
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark bg-black text-white' : 'bg-white text-black'}`}>
            <header className="fixed top-0 left-0 right-0 z-10 px-4 py-6">
                <div className="container mx-auto">
                    <nav className={`
            ${isDarkMode ? 'bg-gray-900/70' : 'bg-white/70'}
            backdrop-blur-lg
            rounded-2xl
            shadow-lg
            ${isDarkMode ? 'shadow-gray-800/50' : 'shadow-gray-200/50'}
            px-6
            py-4
            flex
            justify-between
            items-center
            transition-all
            duration-300
            hover:shadow-xl
          `}>
                        <div className="w-30">
                            <img alt='logo' src={isDarkMode ? darkLogo : lightLogo} />
                        </div>

                        {/* Desktop Navigation */}
                        <div className={`
              hidden
              md:flex
              items-center
              space-x-8
              ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}
            `}>
                            <Link to="/" className="hover:text-green-500 transition-colors">Home</Link>
                            <Link to="/skills" className="hover:text-green-500 transition-colors">Skills</Link>
                            <Link to="/projects" className="hover:text-green-500 transition-colors">Projects</Link>
                            <Link to="/experience" className="hover:text-green-500 transition-colors">Experience</Link>
                            <Link to="/contact" className="hover:text-green-500 transition-colors">Contact</Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleTheme}
                                className={`
                  p-2
                  rounded-full
                  transition-colors
                  ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}
                `}
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Navigation */}
                    <div className={`
            md:hidden
            mt-2
            transition-all
            duration-300
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
            ${isDarkMode ? 'bg-gray-900/70' : 'bg-white/70'}
            backdrop-blur-lg
            rounded-xl
            shadow-lg
            overflow-hidden
          `}>
                        <div className="flex flex-col space-y-4 p-4">
                            <Link to="/" className="hover:text-green-500 transition-colors">Home</Link>
                            <Link to="/skills" className="hover:text-green-500 transition-colors">Skills</Link>
                            <Link to="/projects" className="hover:text-green-500 transition-colors">Projects</Link>
                            <Link to="/experience" className="hover:text-green-500 transition-colors">Experience</Link>
                            <Link to="/contact" className="hover:text-green-500 transition-colors">Contact</Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Add padding to prevent content from going under the navbar */}
            <div className="pt-24">
                <main>
                    {children}
                </main>
            </div>

            <footer className="py-6">
                <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} Shivansh Tiwari. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;