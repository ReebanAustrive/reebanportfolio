import { GITHUB_USERNAME } from './config';

const GITHUB_API_BASE = 'https://api.github.com';

// Cache duration in milliseconds (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000;

// Helper function to get cached data
const getCachedData = (key) => {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_DURATION) {
        localStorage.removeItem(key);
        return null;
    }

    return data;
};

// Helper function to set cached data
const setCachedData = (key, data) => {
    localStorage.setItem(key, JSON.stringify({
        data,
        timestamp: Date.now()
    }));
};

// Fetch user's recent activity/events
export const fetchGitHubActivity = async () => {
    const cacheKey = `github_activity_${GITHUB_USERNAME}`;
    const cached = getCachedData(cacheKey);

    if (cached) return cached;

    try {
        const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/events/public?per_page=10`);

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setCachedData(cacheKey, data);
        return data;
    } catch (error) {
        console.error('Error fetching GitHub activity:', error);
        throw error;
    }
};

// Fetch user's repositories
export const fetchGitHubRepos = async () => {
    const cacheKey = `github_repos_${GITHUB_USERNAME}`;
    const cached = getCachedData(cacheKey);

    if (cached) return cached;

    try {
        const response = await fetch(
            `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        // Sort by stars and filter out forks
        const sortedRepos = data
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6); // Get top 6 repos

        setCachedData(cacheKey, sortedRepos);
        return sortedRepos;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        throw error;
    }
};

// Format activity event for display
export const formatActivityEvent = (event) => {
    const eventType = event.type;
    const repo = event.repo.name;
    const createdAt = new Date(event.created_at);

    let action = '';
    let icon = '📝';

    switch (eventType) {
        case 'PushEvent':
            const commits = event.payload.commits?.length || 0;
            action = `Pushed ${commits} commit${commits !== 1 ? 's' : ''} to ${repo}`;
            icon = '🚀';
            break;
        case 'CreateEvent':
            action = `Created ${event.payload.ref_type} in ${repo}`;
            icon = '✨';
            break;
        case 'PullRequestEvent':
            action = `${event.payload.action} a pull request in ${repo}`;
            icon = '🔀';
            break;
        case 'IssuesEvent':
            action = `${event.payload.action} an issue in ${repo}`;
            icon = '🐛';
            break;
        case 'WatchEvent':
            action = `Starred ${repo}`;
            icon = '⭐';
            break;
        case 'ForkEvent':
            action = `Forked ${repo}`;
            icon = '🍴';
            break;
        default:
            action = `Activity in ${repo}`;
            icon = '📌';
    }

    return {
        action,
        icon,
        repo,
        createdAt,
        url: `https://github.com/${repo}`
    };
};
