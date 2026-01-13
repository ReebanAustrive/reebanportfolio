import { useState, useEffect } from 'react';
import { fetchGitHubRepos } from '../utils/githubApi';

const PinnedProjects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadRepos = async () => {
            try {
                setLoading(true);
                const data = await fetchGitHubRepos();
                setRepos(data);
                setError(null);
            } catch (err) {
                setError('Failed to load repositories.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadRepos();
    }, []);

    if (loading) {
        return (
            <div className="space-y-6">
                <h2 className="text-3xl font-bold gradient-text">Pinned Repositories</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="glass-effect rounded-lg p-6 animate-pulse">
                            <div className="h-6 bg-primaryPurple/30 rounded w-3/4 mb-3"></div>
                            <div className="h-4 bg-primaryPurple/20 rounded w-full mb-2"></div>
                            <div className="h-4 bg-primaryPurple/20 rounded w-2/3"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="glass-effect rounded-lg p-6 border-l-4 border-red-500">
                <h2 className="text-3xl font-bold gradient-text mb-4">Pinned Repositories</h2>
                <p className="text-red-400">{error}</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold gradient-text">Pinned Repositories</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                    <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-effect rounded-lg p-6 hover:bg-primaryPurple/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-hoverBlue/20 group"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-semibold text-white group-hover:text-hoverBlue transition-colors">
                                {repo.name}
                            </h3>
                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </div>

                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {repo.description || 'No description available'}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            {repo.language && (
                                <div className="flex items-center gap-1">
                                    <span className="w-3 h-3 rounded-full bg-hoverBlue"></span>
                                    <span>{repo.language}</span>
                                </div>
                            )}

                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                                </svg>
                                <span>{repo.stargazers_count}</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                                <span>{repo.forks_count}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PinnedProjects;
