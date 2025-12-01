import { Section } from "./section";
import { Card } from "@/components/ui/card"
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { ReactIcon } from "./icons/React_icon";
import { CIcon } from "./icons/C_icon";
import { GolangIcon } from "./icons/Golang";
import { PythonIcon } from "./icons/Python_icon";
import { CppIcon } from "./icons/Cpp_icon";
import { KotlinIcon } from "./icons/Kotlin_icon";

export const Projects = () => {
    return (
        <Section id="projects" className="py-20">
            <div className="space-y-8">
                <div className="space-y-3">
                    <Badge variant="outline" className="mb-2">Projects</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Featured Work
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A collection of projects I've built, ranging from web applications to system-level programming.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className="animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    icons: React.ComponentType<{ size?: number; className?: string }>[];
    github?: string;
    demo?: string;
    featured?: boolean;
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Card className={`group p-6 hover:shadow-lg transition-all duration-300 border-2 ${props.featured ? 'md:col-span-2 border-primary/20' : 'hover:border-primary/20'}`}>
            <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-2">
                        {props.icons.map((Icon, i) => (
                            <div key={i} className="p-2 bg-primary/10 rounded-lg">
                                <Icon size={24} className="text-primary" />
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {props.github && (
                            <Link 
                                href={props.github} 
                                target="_blank"
                                className="p-2 hover:bg-accent rounded-lg transition-colors"
                            >
                                <Github size={18} />
                            </Link>
                        )}
                        {props.demo && (
                            <Link 
                                href={props.demo} 
                                target="_blank"
                                className="p-2 hover:bg-accent rounded-lg transition-colors"
                            >
                                <ExternalLink size={18} />
                            </Link>
                        )}
                    </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {props.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                    {props.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {props.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </Card>
    );
};

const PROJECTS: ProjectCardProps[] = [
    {
        title: "Automating Task Platform",
        description: "A full-stack automating web and phone application with web-hook integration and API calls that allows automate task such as IFTTT or Zappier. Built with modern web technologies for optimal performance.",
        tags: ["React.js", "TailwindCSS", "Kotlin", "PostgreSQL", "Docker"],
        icons: [ReactIcon, KotlinIcon],
        github: "https://github.com/yanisdolivet",
        demo: "https://example.com",
        featured: true,
    },
    {
        title: "RESTful API Service",
        description: "Scalable REST API with authentication, rate limiting, and comprehensive documentation. Handles 10k+ requests per minute with Redis caching.",
        tags: ["Go", "Docker", "Redis", "JWT"],
        icons: [GolangIcon],
        github: "https://github.com/yanisdolivet",
    },
    {
        title: "Poll Application Deployment",
        description: "Containerized voting application with microservices architecture. Deployed using Docker Compose with nginx load balancing.",
        tags: ["Docker", "Nginx", "Python", "Redis"],
        icons: [ReactIcon],
        github: "https://github.com/yanisdolivet",
    },
    {
        title: "Real-Time Multiplayer Engine",
        description: "C/C++ network engine simulating teams of agents on a toroidal world with live rendering, AI behaviors, and event-driven gameplay.",
        tags: ["C", "C++", "Algorithms", "Networking"],
        icons: [PythonIcon, CIcon, CppIcon],
        github: "https://github.com/yanisdolivet",
        demo: "https://example.com",
    },
    {
        title: "Networked Game Engine",
        description: "Multiplayer remake of R-Type with a custom C++ engine, UDP protocol, real-time server authority, and responsive client rendering.",
        tags: ["TypeScript", "React", "Socket.io", "MongoDB"],
        icons: [CppIcon],
        github: "https://github.com/Thomas222222222/R-Type",
    },
    {
        title: "Custom Shell Implementation",
        description: "Unix shell clone with pipe support, redirections, built-in commands, and job control. Handles complex command parsing and execution.",
        tags: ["C", "Unix", "System Programming"],
        icons: [CIcon],
        github: "https://github.com/yanisdolivet",
    },
];
