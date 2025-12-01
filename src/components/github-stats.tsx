"use client"

import { Section } from "./section";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, GitBranch, GitPullRequest, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";

interface GitHubStats {
    public_repos: number;
    followers: number;
    following: number;
    total_stars: number;
    total_forks: number;
}

interface Repository {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    html_url: string;
    topics: string[];
}

export const GitHubStats = () => {
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [topRepos, setTopRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const username = "yanisdolivet"; // Your GitHub username

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Fetch user data
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!userResponse.ok) throw new Error("Failed to fetch user data");
                const userData = await userResponse.json();

                // Fetch repositories
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
                if (!reposResponse.ok) throw new Error("Failed to fetch repositories");
                const reposData = await reposResponse.json();

                // Calculate total stars and forks
                const totalStars = reposData.reduce((sum: number, repo: Repository) => sum + repo.stargazers_count, 0);
                const totalForks = reposData.reduce((sum: number, repo: Repository) => sum + repo.forks_count, 0);

                setStats({
                    public_repos: userData.public_repos,
                    followers: userData.followers,
                    following: userData.following,
                    total_stars: totalStars,
                    total_forks: totalForks,
                });

                // Get top 6 repositories by stars
                const sortedRepos = reposData
                    .filter((repo: Repository) => !repo.name.includes("yanisdolivet")) // Filter out profile repo
                    .sort((a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count)
                    .slice(0, 6);

                setTopRepos(sortedRepos);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch GitHub data");
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    if (loading) {
        return (
            <Section className="flex items-center justify-center py-20" id="github">
                <div className="text-center">
                    <Github className="w-12 h-12 animate-pulse mx-auto mb-4" />
                    <p className="text-muted-foreground">Loading GitHub stats...</p>
                </div>
            </Section>
        );
    }

    if (error) {
        return (
            <Section className="py-20" id="github">
                <div className="text-center">
                    <p className="text-red-500">Error: {error}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                        GitHub data could not be loaded. Please try again later.
                    </p>
                </div>
            </Section>
        );
    }

    return (
        <Section className="py-20" id="github">
            <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <Github className="w-8 h-8" />
                    <h2 className="text-3xl md:text-4xl font-bold">GitHub Activity</h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    My open source contributions and most popular repositories
                </p>
            </div>

            {/* Stats Overview */}
            {stats && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                        <GitBranch className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                        <div className="text-3xl font-bold mb-1">{stats.public_repos}</div>
                        <div className="text-sm text-muted-foreground">Repositories</div>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                        <Star className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                        <div className="text-3xl font-bold mb-1">{stats.total_stars}</div>
                        <div className="text-sm text-muted-foreground">Total Stars</div>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                        <GitPullRequest className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                        <div className="text-3xl font-bold mb-1">{stats.total_forks}</div>
                        <div className="text-sm text-muted-foreground">Total Forks</div>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                        <Users className="w-8 h-8 mx-auto mb-2 text-green-500" />
                        <div className="text-3xl font-bold mb-1">{stats.followers}</div>
                        <div className="text-sm text-muted-foreground">Followers</div>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                        <Users className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                        <div className="text-3xl font-bold mb-1">{stats.following}</div>
                        <div className="text-sm text-muted-foreground">Following</div>
                    </Card>
                </div>
            )}

            {/* Top Repositories */}
            <div>
                <h3 className="text-2xl font-bold mb-6">Popular Repositories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {topRepos.map((repo, index) => (
                        <Card
                            key={repo.name}
                            className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <GitBranch className="w-5 h-5 text-blue-500" />
                                        <h4 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                                            {repo.name}
                                        </h4>
                                    </div>
                                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                                </div>

                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                    {repo.description || "No description available"}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {repo.language && (
                                        <Badge variant="secondary">
                                            {repo.language}
                                        </Badge>
                                    )}
                                    {repo.topics.slice(0, 3).map((topic) => (
                                        <Badge key={topic} variant="outline">
                                            {topic}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4" />
                                        <span>{repo.stargazers_count}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <GitPullRequest className="w-4 h-4" />
                                        <span>{repo.forks_count}</span>
                                    </div>
                                </div>
                            </a>
                        </Card>
                    ))}
                </div>
            </div>

            {/* GitHub Profile Link */}
            <div className="mt-12 text-center">
                <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                    <Github className="w-5 h-5" />
                    View Full GitHub Profile
                </a>
            </div>
        </Section>
    );
};
