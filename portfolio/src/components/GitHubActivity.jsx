import { useState, useEffect } from 'react';
import { fetchGitHubActivity, formatActivityEvent } from '../utils/githubApi';

const GitHubActivity = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const loadActivity = async () => {
            try {
                setLoading(true);
                const data = await fetchGitHubActivity();
                const formattedActivities = data.map(formatActivityEvent);
                setActivities(formattedActivities);
                setError(null);
            } catch (err) {
                setError('Failed to load GitHub activity. Please check your configuration.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadActivity();
    }, []);

    if (loading) {
        return (
            <div className="space-y-4">
                <h2 className="text-3xl font-bold gradient-text mb-6">Recent Activity</h2>
                <div className="space-y-3">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="glass-effect rounded-lg p-4 animate-pulse">
                            <div className="h-4 bg-primary/30 rounded w-3/4 mb-2"></div>
                            <div className="h-3 bg-primary/20 rounded w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="glass-effect rounded-lg p-6 border-l-4 border-red-500">
                <h2 className="text-3xl font-bold gradient-text mb-4">Recent Activity</h2>
                <p className="text-red-400">{error}</p>
                <p className="text-gray-400 text-sm mt-2">
                    Make sure <code className="text-accent">VITE_GITHUB_USERNAME</code> is set in your <code className="text-accent">.env</code> file
                </p>
            </div>
        );
    }

    // Show first 3 or all 10 based on state
    const displayedActivities = showAll ? activities : activities.slice(0, 3);

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold gradient-text">Recent Activity</h2>

            <div className="space-y-3">
                {displayedActivities.map((activity, index) => (
                    <a
                        key={index}
                        href={activity.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block glass-effect rounded-lg p-4 hover:bg-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 group"
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-2xl flex-shrink-0">{activity.icon}</span>
                            <div className="flex-1 min-w-0">
                                <p className="text-white group-hover:text-accent transition-colors">
                                    {activity.action}
                                </p>
                                <p className="text-sm text-gray-400 mt-1">
                                    {activity.createdAt.toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Show More/Less Button */}
            {activities.length > 3 && (
                <div className="flex justify-end">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-2 bg-primary text-night hover:bg-accent transition-all duration-300 rounded-lg font-medium hover:scale-105 hover:shadow-lg hover:shadow-accent/50 flex items-center gap-2"
                    >
                        {showAll ? (
                            <>
                                Show Less
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </>
                        ) : (
                            <>
                                Show More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};

export default GitHubActivity;
