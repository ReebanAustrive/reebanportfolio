import { useState } from 'react';

const Idols = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const idols = [
        {
            id: 1,
            name: "Virat Kohli",
            title: "Indian Cricketer",
            description: "Virat Kohli is a prominent Indian cricketer, widely regarded as one of the best batsmen in the world",
            quote: "Self-belief and hard work will always earn you success.",
            gradient: "from-surface via-night to-night",
            // icon: "🏏",
            initials: "VK",
            imageUrl: "/viratKholi.webp"
        },
        {
            id: 2,
            name: "Marc Marquez",
            title: "Professional Moto-GP Racer",
            description: "Marc Márquez is a highly successful Spanish professional motorcycle road racer for the factory Ducati Lenovo Team in the MotoGP World Championship.",
            quote: "The speed is there, but we need to avoid the mistakes.",
            gradient: "from-primary via-surface to-night",
            // icon: "🏍️",
            // initials: "MM",
            imageUrl: "/marcMarquez.webp"
        },
        {
            id: 3,
            name: "Cristiano Ronaldo",
            title: "Portugese Footballer",
            description: "Cristiano Ronaldo is a Portuguese professional footballer who is currently the all-time top goalscorer in the history of men's football",
            quote: "I am not a perfectionist, but I like to feel that things are done well.",
            gradient: "from-surface via-primary to-night",
            // icon: "⚽",
            initials: "CR",
            imageUrl: "/ronaldo.webp"
        },
        {
            id: 4,
            name: "Max Verstappen",
            title: "Formula 1 Oracle-RedBull Racer",
            description: "Max Verstappen is a highly successful Dutch Formula 1 driver for Oracle Red Bull Racing, known for his aggressive style and record-breaking achievements",
            quote: "Simply lovely",
            gradient: "from-night via-surface to-leaf",
            // icon: "🏎️",
            initials: "MV",
            imageUrl: "/max.jpg"
        }
    ];

    return (
        <div className="px-4 py-16">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                        My Idols
                    </h1>
                    <p className="text-lg text-gray-400">
                        People who inspire me to push boundaries and create impact
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-up">
                    {idols.map((idol) => (
                        <div
                            key={idol.id}
                            className="relative group h-[calc(50vh-6rem)]"
                            onMouseEnter={() => setHoveredCard(idol.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Card Container */}
                            <div className={`
                                h-full rounded-2xl p-6 
                                bg-gradient-to-br ${idol.gradient}
                                transform transition-all duration-500 ease-out
                                ${hoveredCard === idol.id ? 'scale-105 shadow-2xl shadow-primary/50' : 'scale-100'}
                                border border-white/10
                                flex flex-col justify-between
                                overflow-hidden
                                relative
                            `}>
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full blur-3xl transform translate-x-24 -translate-y-24"></div>
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Image Placeholder */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`
                                            relative w-32 h-32 rounded-full overflow-hidden
                                            border-4 border-white/30 shadow-2xl
                                            transform transition-all duration-500
                                            ${hoveredCard === idol.id ? 'scale-110 border-white/50' : 'scale-100'}
                                        `}>
                                            {/* Image or Initials Fallback */}
                                            <img
                                                src={idol.imageUrl}
                                                alt={idol.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            {/* Fallback initials if image fails to load */}
                                            <div className="w-full h-full bg-white/10 backdrop-blur-sm flex items-center justify-center" style={{ display: 'none' }}>
                                                <span className="text-4xl font-bold text-white">
                                                    {idol.initials}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Icon Badge */}
                                        <div className={`
                                            text-4xl transform transition-all duration-500
                                            ${hoveredCard === idol.id ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
                                        `}>
                                            {idol.icon}
                                        </div>
                                    </div>

                                    {/* Name & Title */}
                                    <h2 className="text-3xl font-bold text-white mb-1">
                                        {idol.name}
                                    </h2>
                                    <p className="text-lg text-white/80 mb-3 font-medium">
                                        {idol.title}
                                    </p>

                                    {/* Description */}
                                    <p className="text-white/90 text-base leading-relaxed mb-3">
                                        {idol.description}
                                    </p>
                                </div>

                                {/* Quote Section */}
                                <div className={`
                                    relative z-10 transform transition-all duration-500
                                    ${hoveredCard === idol.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'}
                                `}>
                                    <div className="border-l-4 border-white/50 pl-4 py-2">
                                        <p className="text-white/95 italic text-base font-medium">
                                            "{idol.quote}"
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Indicator */}
                                <div className={`
                                    absolute bottom-0 left-0 right-0 h-1 bg-white
                                    transform transition-all duration-500 origin-left
                                    ${hoveredCard === idol.id ? 'scale-x-100' : 'scale-x-0'}
                                `}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Idols;
