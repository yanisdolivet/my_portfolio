import { Bean, Code, GraduationCap, LucideIcon, RefreshCcw, Send, Waypoints } from "lucide-react";
import { Section } from "./section";
import { Card } from "@/components/ui/card"

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <Card className="flex-[3] w-full p-4 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">
                    My Project
                </p>
                <div className="flex flex-col gap-4">
                    {MY_PROJECTS.map((project, index) => (
                    <MyProjects
                    key={index}
                    Logo={project. Logo}
                    title={project.title}
                    description={project.description}
                    />
                    ))}
                </div>
            </Card>
            <Card className="flex-[2] p-4 w-full h-full flex flex-col gap-4">
                <p className="text-lg text-muted-foreground">
                    Experience
                </p>
                <div className="flex flex-col gap-6">
                    {EXPERIENCE.map((project, index) => (
                    <Experience
                    key={index}
                    Logo={project. Logo}
                    title={project.title}
                    date={project.date}
                    />
                    ))}
                </div>
            </Card>
        </Section>
    );
};

const MY_PROJECTS: MyProjectsProps[] = [
    {
        Logo: RefreshCcw,
        title: "RESTful API",
        description: "Develop a RestFul API that could communicate with a front-end project.",
    },
    {
        Logo: Send,
        title: "Poll App Deployement",
        description: "I retrieve a poll application & deploy it using contenerisation using Docker",
    },
    {
        Logo: Waypoints,
        title: "PathFinding Algorithm",
        description: "Inside a large amout of node in a graph, retrieve the shortest path for multiple entities, whom cannot be in the same node at the same time",
    },
]

const EXPERIENCE: ExperienceProps[] = [
    {
        Logo: GraduationCap,
        title: "Epitech Grand Ecole Program",
        date: "2023-2028",
    },
    {
        Logo: Code,
        title: "Taker Academy - Training Course",
        date: "Jan-May 2024",
    },
    {
        Logo: Bean,
        title: "Le Boule d'Or",
        date: "2024",
    },
]

type MyProjectsProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
}

type ExperienceProps = {
    Logo: LucideIcon;
    title: string;
    date: string;
}

const MyProjects = (props: MyProjectsProps) => {
    return (
        <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo/>
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">
                    {props.description}
                </p>
            </div>
        </div>
    );
};

const Experience = (props: ExperienceProps) => {
    return (
        <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo/>
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <div>
                    <p className="text-sm text-muted-foreground">
                        {props.date}
                    </p>
                </div>
            </div>
        </div>
    );
};

