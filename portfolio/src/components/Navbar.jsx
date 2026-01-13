import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Goals', path: '/goals' },
        { name: 'My Idols', path: '/idols' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Name */}
                    <Link
                        to="/"
                        className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
                    >
                        Reeban Austrive
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative text-sm font-medium transition-all duration-300 hover:text-hoverBlue group ${isActive(link.path) ? 'text-hoverBlue' : 'text-white'
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-hoverBlue transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white hover:text-hoverBlue transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
