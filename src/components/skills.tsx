import { Badge } from "@/components/ui/badge";
import { Section } from "./section";
import { CIcon } from "./icons/C_icon";
import { ReactIcon } from "./icons/React_icon";
import { GolangIcon } from "./icons/Golang";
import { Code } from "./code"
import { Card } from "./ui/card";
import { Database, Puzzle, Server, Sparkles,  } from "lucide-react";
import { Card3D } from "./card-3d";

export const Skills = () => {
    return (
        <Section id="skills" className="py-20">
            <div className="space-y-8">
                <div className="space-y-3">
                    <Badge variant="outline" className="mb-2">Skills & Technologies</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Tech Stack
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Technologies and tools I use to bring ideas to life.
                    </p>
                </div>

                {/* Featured Skills */}
                <div className="grid md:grid-cols-3 gap-6">
                    <Card3D>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20 hover-accelerate tire-marks">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                                <ReactIcon size={48} className="animate-spin text-blue-500"
                                    style={{
                                        animationDuration: "10s",
                                    }}
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">React & Frontend</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Building modern, responsive web applications with React, Next.js, and TypeScript
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <Code>React</Code>
                                    <Code>Next.js</Code>
                                    <Code>TypeScript</Code>
                                    <Code>Tailwind</Code>
                                </div>
                            </div>
                        </div>
                    </Card>
                    </Card3D>

                    <Card3D>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20 hover-accelerate tire-marks">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="p-4 bg-green-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                                <Server size={48} className="text-green-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Backend & APIs</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Designing scalable backend systems and RESTful APIs with modern frameworks
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <Code>Node.js</Code>
                                    <Code>Go</Code>
                                    <Code>Express</Code>
                                    <Code>REST</Code>
                                </div>
                            </div>
                        </div>
                    </Card>
                    </Card3D>

                    <Card3D>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20 hover-accelerate tire-marks">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="p-4 bg-purple-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                                <CIcon size={48} className="text-purple-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">System Programming</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Low-level programming and system architecture with C and C++
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <Code>C</Code>
                                    <Code>C++</Code>
                                    <Code>Unix</Code>
                                </div>
                            </div>
                        </div>
                    </Card>
                    </Card3D>

                    <Card3D>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20 hover-accelerate tire-marks">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="p-4 bg-purple-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                                <Puzzle size={48} className="text-purple-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Problem solving using basic and complex algorithm using Python
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <Code>Algorithm</Code>
                                    <Code>Competitive Programming</Code>
                                </div>
                            </div>
                        </div>
                    </Card>
                    </Card3D>

                    <Card3D intensity={10}>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20 hover-accelerate tire-marks">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="p-4 bg-purple-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                                <Database size={48} className="text-purple-500" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">Database and Storage</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Using complex Database structure for efficient data management
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <Code>PostgreSQL</Code>
                                    <Code>MongoDB</Code>
                                    <Code>Redis</Code>
                                    <Code>Firebase</Code>
                                </div>
                            </div>
                        </div>
                    </Card>
                    </Card3D>

                    <Card3D intensity={10}>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20 hover-accelerate tire-marks">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="p-4 bg-purple-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                                <Sparkles size={48} className="text-purple-500" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">Tools and DevOps</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Deploying project and organization project using modern DevOps and Tools
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <Code>Docker</Code>
                                    <Code>Git</Code>
                                    <Code>Linux</Code>
                                    <Code>AWS</Code>
                                    <Code>CI/CD</Code>
                                </div>
                            </div>
                        </div>
                    </Card>
                    </Card3D>
                </div>
            </div>
        </Section>
    );
};
