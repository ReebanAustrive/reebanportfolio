import { useEffect, useState } from 'react';

export const sections = [
    { name: 'Home', id: 'home', icon: 'M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10' },
    { name: 'My Idols', id: 'idols', icon: 'M11.48 3.5a.56.56 0 011.04 0l2.13 5.11 5.52.44c.5.04.7.66.32.98l-4.2 3.6 1.28 5.38a.56.56 0 01-.84.61L12 16.73l-4.73 2.89a.56.56 0 01-.84-.61l1.28-5.38-4.2-3.6a.56.56 0 01.32-.98l5.52-.44 2.13-5.11z' },
    { name: 'Projects', id: 'projects', icon: 'M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z' },
    { name: 'About', id: 'about', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Contact', id: 'contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
];

const Sidebar = ({ collapsed, onToggle }) => {
    const [active, setActive] = useState('home');
    const [open, setOpen] = useState(false);

    // Highlight the section currently in the middle of the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-50% 0px -50% 0px' }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const goTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
    };

    // Collapsing only applies on desktop; the mobile drawer always shows labels
    const hideWhenCollapsed = collapsed ? 'md:hidden' : '';

    return (
        <>
            {/* Mobile Top Bar */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 glass-effect flex items-center justify-between px-6 py-4">
                <button onClick={() => goTo('home')} className="text-xl font-bold gradient-text">
                    Reeban Austrive
                </button>
                <button
                    onClick={() => setOpen(!open)}
                    className="text-white hover:text-accent transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Backdrop */}
            {open && (
                <div className="md:hidden fixed inset-0 z-40 bg-night/60" onClick={() => setOpen(false)} />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 bottom-0 z-50 w-64 ${collapsed ? 'md:w-20 md:px-3' : ''} glass-effect flex flex-col px-6 py-10 transition-all duration-300 ${open ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0`}
            >
                {/* Logo/Name */}
                <button
                    onClick={() => goTo('home')}
                    className={`text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300 mb-12 ${collapsed ? 'md:text-center' : 'text-left'}`}
                >
                    <span className={hideWhenCollapsed}>Reeban Austrive</span>
                    <span className={`hidden ${collapsed ? 'md:inline' : ''}`}>RA</span>
                </button>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-2">
                    {sections.map(({ name, id, icon }) => (
                        <button
                            key={id}
                            onClick={() => goTo(id)}
                            title={collapsed ? name : undefined}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg border-l-4 text-sm font-medium transition-all duration-300 hover:text-accent hover:bg-primary/10 ${collapsed ? 'md:justify-center md:px-0' : ''} ${active === id ? 'border-accent text-accent bg-primary/20' : 'border-transparent text-white'
                                }`}
                        >
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                            </svg>
                            <span className={hideWhenCollapsed}>{name}</span>
                        </button>
                    ))}
                </nav>

                {/* Collapse Toggle (desktop only) */}
                <button
                    onClick={onToggle}
                    aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    className={`hidden md:flex items-center gap-3 mt-auto px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-accent hover:bg-primary/10 transition-all duration-300 ${collapsed ? 'justify-center md:px-0' : ''}`}
                >
                    <svg
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7M19 19l-7-7 7-7" />
                    </svg>
                    <span className={hideWhenCollapsed}>Collapse</span>
                </button>
            </aside>
        </>
    );
};

export default Sidebar;
