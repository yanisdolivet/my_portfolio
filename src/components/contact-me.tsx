import { Card } from "@/components/ui/card"
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Section } from "./section";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";

export const ContactMe = () => {
    return (
        <Section id="contact" className="py-20">
            <div className="space-y-8">
                <div className="space-y-3 text-center">
                    <Badge variant="outline" className="mb-2">Get In Touch</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Let's Work Together
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <ContactCard
                        url="mailto:yanis.dolivet@epitech.eu"
                        icon={<Mail size={24} />}
                        title="Email"
                        value="yanis.dolivet@epitech.eu"
                        description="Send me an email"
                    />
                    <ContactCard
                        url="https://www.linkedin.com/in/yanis-dolivet-1850702a4/"
                        icon={<Linkedin size={24} />}
                        title="LinkedIn"
                        value="Yanis Dolivet"
                        description="Let's connect"
                    />
                    <ContactCard
                        url="https://github.com/yanisdolivet"
                        icon={<Github size={24} />}
                        title="GitHub"
                        value="@yanisdolivet"
                        description="Check out my code"
                    />
                </div>

                <Card className="p-8 md:p-12 max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-purple-500/5 border-2">
                    <div className="text-center space-y-6">
                        <div className="inline-flex p-4 bg-primary/10 rounded-full">
                            <MessageCircle size={32} className="text-primary" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Have a project in mind?</h3>
                            <p className="text-muted-foreground mb-6">
                                Let's discuss how I can help bring your ideas to life. I'm available for freelance work, internships, and full-time opportunities.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="mailto:yanis.dolivet@epitech.eu">
                                <Button size="lg" className="gap-2 racing-button">
                                    <Mail size={18} />
                                    Send Email
                                </Button>
                            </Link>
                            <Link href="https://www.linkedin.com/in/yanis-dolivet-1850702a4/" target="_blank">
                                <Button size="lg" variant="outline" className="gap-2 racing-button">
                                    <Linkedin size={18} />
                                    Connect on LinkedIn
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
        </Section>
    )
};

const ContactCard = (props:  {
    icon: React.ReactNode;
    title: string;
    value: string;
    description: string;
    url: string;
}) => {
    return (
        <Link href={props.url} target="_blank" className="block group">
            <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                        {props.icon}
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">{props.title}</h3>
                        <p className="text-sm text-foreground/80 font-medium mb-1">{props.value}</p>
                        <p className="text-xs text-muted-foreground">{props.description}</p>
                    </div>
                    <ArrowUpRight className="text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16}/>
                </div>
            </Card>
        </Link>
    )
};
