const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-6xl w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div className="space-y-6 animate-slide-up">
                        {/* Name */}
                        <h1 className="text-5xl md:text-7xl font-bold">
                            <span className="gradient-text">Reeban Austrive</span>
                        </h1>

                        {/* Headline */}
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
                            Software Engineer @MG Futuristic Products | Backend & AI Engineer | Aspiring Writer | Business Enthusiast 
                        </h2>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
                            Love On Writing And Learning New Things
                        </h2>

                        {/* Summary */}
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Passionate about backend development and to create efficient and optimized solution for the real-world problems.
                            Specialized in Java (Spring boot), Python (Fast API), Express.js.
                            Intrested in writing and learning new stuffs everyday.
                            Dedicated in Software, Physics (Theory) and Aritcle writing (Beginner) 
                        </p>

                        {/* Links */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="https://github.com/ReebanAustrive"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-night hover:bg-accent transition-all duration-300 rounded-lg font-medium hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/reeban-austrive-11019a254/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-night hover:bg-accent transition-all duration-300 rounded-lg font-medium hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                LinkedIn
                            </a>

                            <a
                                href="mailto:reebanaustrive@gmail.com"
                                className="flex items-center gap-2 px-6 py-3 border-2 border-primary hover:border-accent hover:bg-accent/10 transition-all duration-300 rounded-lg font-medium hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Profile Photo */}
                    <div className="flex justify-center md:justify-end animate-fade-in">
                        <div className="relative group">
                            {/* Animated background glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-float"></div>

                            {/* Profile image container */}
                            <div className="relative">
                                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-white overflow-hidden bg-gradient-to-br from-primary to-accent p-1">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-night flex items-center justify-center">
                                        {/* Placeholder - Replace with actual image */}
                                        <img
                                            src="/24a6450b-fa80-4dfa-9fc7-acdb076adb04.png"
                                            alt="Reeban Austrive"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="w-full h-full flex items-center justify-center text-6xl font-bold gradient-text" style={{ display: 'none' }}>
                                            <img src="/24a6450b-fa80-4dfa-9fc7-acdb076adb04.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
