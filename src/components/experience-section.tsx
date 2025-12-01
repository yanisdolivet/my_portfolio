"use client"

import { Section } from "./section";
import { Card } from "@/components/ui/card"
import { Badge } from "./ui/badge";
import { Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Code, GraduationCap, Briefcase, Award, LucideIcon } from "lucide-react";
import { ShinyCard } from "./micro-interactions/shiny-card";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export const ExperienceSection = () => {
    return (
        <Section id="experience" className="py-20">
            <div className="space-y-8">
                <div className="space-y-3">
                    <Badge variant="outline" className="mb-2">Experience</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        My Journey
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        From academic excellence to professional development.
                    </p>
                </div>

                <div className="relative">
                    <div className="space-y-8">
                        {EXPERIENCES.map((experience, index) => (
                            <ExperienceCard 
                                key={index} 
                                {...experience} 
                                index={index}
                                isLast={index === EXPERIENCES.length - 1} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

interface ExperienceCardProps {
    title: string;
    organization: string;
    location: string;
    date: string;
    description: string;
    icon: LucideIcon;
    type: "education" | "work";
    skills?: string[];
    isLast?: boolean;
    index?: number;
    achievements?: string[];
    links?: { label: string; url: string }[];
    extraDetails?: string;
}

const ExperienceCard = (props: ExperienceCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const Icon = props.icon;
    
    const typeColors = {
        education: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        work: "bg-green-500/10 text-green-500 border-green-500/20",
        training: "bg-purple-500/10 text-purple-500 border-purple-500/20",
        achievement: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const hasExpandableContent = props.achievements || props.links || props.extraDetails;

    return (
        <div 
            ref={cardRef}
            className={`relative flex gap-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${(props.index || 0) * 100}ms` }}
        >
            {/* Animated Timeline dot with connecting line */}
            <div className="hidden md:flex flex-col items-center">
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-background ${typeColors[props.type]} transition-all duration-300 hover:scale-110 group`}>
                    <Icon size={24} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    
                    {/* Glowing pulse effect */}
                    <div className={`absolute inset-0 rounded-full ${typeColors[props.type]} animate-ping opacity-20`} />
                    <div className={`absolute inset-0 rounded-full ${typeColors[props.type]} opacity-50 blur-md`} />
                </div>
                
                {/* Connecting line to next card - only if not last */}
                {!props.isLast && (
                    <div className="relative w-0.5 h-full mt-2 bg-border overflow-hidden">
                        <div 
                            className={`absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ${
                                isVisible ? 'h-full' : 'h-0'
                            }`}
                            style={{ transitionDelay: `${((props.index || 0) * 100) + 500}ms` }}
                        />
                    </div>
                )}
            </div>

            {/* Content */}
            <ShinyCard className="flex-1">
                <Card 
                    className={`p-6 transition-all duration-300 cursor-pointer ${
                        isExpanded ? 'shadow-xl scale-[1.02]' : 'hover:shadow-lg hover:scale-[1.01]'
                    }`}
                    onClick={() => hasExpandableContent && setIsExpanded(!isExpanded)}
                >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4 flex-1">
                            <div className={`md:hidden flex items-center justify-center w-12 h-12 rounded-full ${typeColors[props.type]} group`}>
                                <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                                        {props.title}
                                    </h3>
                                    {hasExpandableContent && (
                                        <button 
                                            className="text-muted-foreground hover:text-primary transition-colors p-1"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsExpanded(!isExpanded);
                                            }}
                                        >
                                            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </button>
                                    )}
                                </div>
                                <p className="text-lg text-primary font-medium">{props.organization}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                            <div className="flex items-center gap-2 md:justify-end">
                                <Calendar size={14} />
                                <span>{props.date}</span>
                            </div>
                            <div className="flex items-center gap-2 md:justify-end">
                                <MapPin size={14} />
                                <span>{props.location}</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                        {props.description}
                    </p>

                    {/* Expandable content */}
                    <div 
                        className={`overflow-hidden transition-all duration-500 ${
                            isExpanded ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'
                        }`}
                    >
                        {props.extraDetails && (
                            <div className="mb-4 p-4 bg-muted/50 rounded-lg">
                                <p className="text-sm text-muted-foreground">{props.extraDetails}</p>
                            </div>
                        )}

                        {props.achievements && props.achievements.length > 0 && (
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                                <ul className="space-y-1">
                                    {props.achievements.map((achievement, i) => (
                                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {props.links && props.links.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {props.links.map((link, i) => (
                                    <Link 
                                        key={i} 
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <ExternalLink size={14} />
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {props.skills && props.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {props.skills.map((skill, i) => (
                                <Badge 
                                    key={i} 
                                    variant="secondary" 
                                    className="text-xs transition-all hover:scale-105 hover:bg-primary/20"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    )}
                </Card>
            </ShinyCard>
        </div>
    );
};

const EXPERIENCES: ExperienceCardProps[] = [
    {
        title: "Software Engineering Student",
        organization: "Epitech Lyon",
        location: "Lyon, France",
        date: "2023 - Present (3rd Year)",
        description: "Pursuing a Master's degree in Computer Science with focus on software architecture, algorithms, and system programming. Working on multiple team projects including web development, mobile apps, and low-level programming challenges.",
        icon: GraduationCap,
        type: "education",
        skills: ["C", "C++", "JavaScript", "React", "Node.js", "Docker", "Git"],
        achievements: [
            "Maintained a GPA of 3.80/4.0",
            "Completed 20+ technical projects",
            "Complete 3 year in the 5% top of the national class"
        ],
        links: [
            { label: "Epitech Website", url: "https://www.epitech.eu/" },
        ],
        extraDetails: "Part of a 5-year program combining practical projects with theoretical knowledge. Focused on project-based learning with real-world applications and industry partnerships."
    },
    {
        title: "Assistant Pédagogique - AER",
        organization: "EPITECH Lyon",
        location: "Lyon, France",
        date: "2023 - Present",
        description: "Simplified and taught key programming concepts in C, C++, and Python for first- and second-year undergraduate students (BAC+1 to BAC+2).",
        icon: Briefcase,
        type: "work",
        skills: ["Education", "Communication", "Mentoring"],
        extraDetails: "Organized and supervised pedagogical activities aimed at effective knowledge transfer.Served as a project evaluator and defense jury member for Epitech student projects at the BAC+1 to BAC+2 level.Implemented personalized support plans for students with learning difficulties or at-risk profiles."
    },
    {
        title: "Formation des troubles de l'apprentissage",
        organization: "IONIS STM",
        location: "Lyon, France",
        date: "2024-2025",
        description: "Strong understanding of learning mechanisms and individual differences.Proficient in qualitative analysis methodologies.Skilled at tailoring information to diverse learner profiles.Mindful of cognitive biases and committed to integrating diversity considerations.",
        icon: Award,
        type: "education",
    },
    {
        title: "Software Developer",
        organization: "Elissar",
        location: "Lyon, France",
        date: "Sept 2024 - Dec 2024",
        description: "Ensured the compliance of a software platform designed to support the organization and management of social services across 400+ CCAS (Municipal Social Action Centers) in Europe. Worked in strict accordance with a detailed requirements specification governed by French medical data security regulations. Achieved ongoing compliance with SEGUR de la Santé - Wave 2 standards.",
        icon: Briefcase,
        type: "work",
        skills: ["CI/CD", "Agile", "WINDEV"],
        achievements: [
            "Entirely met SEGUR de la Santé - Wave 1 compliance requirements",
            "Co-worked with cross-functional teams to implement necessary features",
        ],
        extraDetails: "Worked in an agile environment with weekly sprints. Participated in code reviews, daily standups, and sprint planning. Gained hands-on experience with CI/CD pipelines and software development."
    },
    {
        title: "Intensive Coding Bootcamp",
        organization: "Taker Academy",
        location: "Remote",
        date: "Jan 2024 - May 2024",
        description: "Completed an intensive 5-month program focused on modern web development practices. Built 5+ projects covering frontend, backend, and DevOps. Learned industry best practices and agile methodologies.",
        icon: Code,
        type: "work",
        skills: ["TypeScript", "React", "Express", "MongoDB", "Testing"],
        achievements: [
            "Graduated top 10% of cohort",
            "Built 12 full-stack projects",
            "Mentored 3 junior developers"
        ],
        links: [
            { label: "View Certificate", url: "https://www.taker.fr/" },
        ],
        extraDetails: "Intensive program with 60+ hours per week of hands-on coding. Covered full-stack development, databases, testing, deployment, and soft skills like teamwork and project management."
    }
];
