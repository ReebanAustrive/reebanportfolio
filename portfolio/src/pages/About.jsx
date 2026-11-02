const About = () => {
    const journey = [
        {
            role: 'AI Training Specialist',
            place: 'LabelBox AI',
            period: 'Nov 2026 – Present',
        },
        {
            role: 'Software Engineer',
            place: 'MG Futuristic Products',
            period: 'Dec 2025 – Present',
        },
        {
            role: 'Quality Assurance',
            place: 'JigglyPuff',
            period: 'Jun 2025 – Oct 2025',
        },
        {
            role: 'Software Product Engineering',
            place: 'Kalvium',
            period: '3rd Year Student',
        },
    ];

    const interests = ['Chess', 'MotoGP', 'Formula 1', 'Cricket', 'Writing', 'Quantum Physics'];

    return (
        <div className="px-6 py-16">
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                        About Me
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        I chase the hard problems, because that's where I feel most alive.
                    </p>
                </div>

                {/* What Drives Me */}
                <section className="glass-effect rounded-lg p-8 space-y-4 animate-slide-up">
                    <h2 className="text-2xl font-bold text-white">What Drives Me</h2>
                    <p className="text-gray-300 leading-relaxed">
                        I've always wanted to stand on my own feet, to carry my own work and responsibilities
                        without leaning on anyone else. That same streak pulls me toward hard problems: the
                        analytical, calculative kind that don't give up their answers easily. Software is full
                        of them, and solving them is exactly what I crave. That's why I chose computer science
                        engineering.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Backend and AI engineering is where that craving fits best. Designing systems that hold
                        up in the real world, untangling tricky logic, making services and models work together.
                        Every task is a puzzle worth solving.
                    </p>
                </section>

                {/* The Moment It Clicked */}
                <section className="glass-effect rounded-lg p-8 border-l-4 border-accent animate-slide-up">
                    <h2 className="text-2xl font-bold text-white mb-4">The Moment It Clicked</h2>
                    <p className="text-gray-300 leading-relaxed">
                        When I landed my first software developer internship at MG Futuristic Products, I stopped
                        being someone learning to code and became <span className="text-accent font-medium">Reeban
                        Austrive, software developer</span>. That's when I knew I'd chosen the right path.
                    </p>
                </section>

                {/* Journey */}
                <section className="animate-slide-up">
                    <h2 className="text-3xl font-bold gradient-text mb-6">My Journey</h2>
                    <div className="relative border-l-2 border-primary/50 ml-3 space-y-8">
                        {journey.map((step) => (
                            <div key={step.place} className="relative pl-8">
                                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent"></span>
                                <p className="text-sm text-gray-400">{step.period}</p>
                                <h3 className="text-xl font-semibold text-white">{step.role}</h3>
                                <p className="text-accent">{step.place}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Science & Writing */}
                <section className="glass-effect rounded-lg p-8 animate-slide-up">
                    <h2 className="text-2xl font-bold text-white mb-4">Where It All Started</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Long before code, there was science. As a kid I was drawn to theoretical science and
                        quantum physics, and in school I picked up a writing habit that has stayed with me ever
                        since. That curiosity about how things work led me to computer science, a field wide
                        enough to hold all of it, from backend systems to areas like game development where
                        physics meets code.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
                    {/* What's Next */}
                    <section className="glass-effect rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">What's Next</h2>
                        <p className="text-gray-300 leading-relaxed">
                            My short-term goal is clear: land a role at a multinational company by March 2027,
                            and keep growing as a backend and AI engineer along the way.
                        </p>
                    </section>

                    {/* Beyond the Code */}
                    <section className="glass-effect rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Beyond the Code</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            The rarest thing about me? I don't have one interest, I have many.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {interests.map((interest) => (
                                <span
                                    key={interest}
                                    className="px-3 py-1 rounded-full text-sm bg-primary/20 border border-primary/30 text-accent"
                                >
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
