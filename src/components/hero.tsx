"use client"

import { Section } from "./section";
import { EpitechLogo } from "./icons/Epitech_logo";
import { Code } from "./code"
import { Button } from "./ui/button";
import { ArrowRight, Download, MapPin } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLDivElement>(null);
    const cv = "../../public/YanisDolivet_CV.pdf"

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                // Calculate distance from center, normalized to -1 to 1 range
                const x = (e.clientX - centerX) / (rect.width / 2);
                const y = (e.clientY - centerY) / (rect.height / 2);
                
                // Multiply by desired movement range (40px)
                setMousePosition({ x: x * 40, y: y * 40 });
            }
        };

        const element = imageRef.current;
        if (element) {
            element.addEventListener('mousemove', handleMouseMove);
            element.addEventListener('mouseleave', () => setMousePosition({ x: 0, y: 0 }));
        }

        return () => {
            if (element) {
                element.removeEventListener('mousemove', handleMouseMove);
                element.removeEventListener('mouseleave', () => setMousePosition({ x: 0, y: 0 }));
            }
        };
    }, []);

    return (
        <Section id="about" className="pt-32 pb-20 md:pt-40 md:pb-28">
            <div className="flex max-md:flex-col items-center gap-12 md:gap-16">
                <div className="flex-[2] max-md:m-auto">
                    <div ref={imageRef} className="relative group cursor-pointer">
                        <div 
                            className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300 ease-out"
                            style={{
                                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                                transition: 'transform 0.15s ease-out',
                            }}
                        ></div>
                        <img
                            src="/selfportraitDisney.png"
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-border shadow-2xl ring-2 ring-primary/10"
                            alt="Yanis Dolivet"
                        />
                    </div>
                </div>
                <div className="flex-[3] flex flex-col gap-6 max-md:items-center max-md:text-center">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground max-md:justify-center">
                        <MapPin size={16} />
                        <span>Lyon, France</span>
                    </div>
                    
                    <div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                            <span className="gradient-text">Yanis Dolivet</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-2">
                            Full Stack Developer
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Crafting elegant experiences
                        </p>
                    </div>
                    
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
                        Hey there! 👋 I'm Yanis, a passionate developer currently in my 3rd year at{" "}
                        <Code className="items-center gap-1">
                            <EpitechLogo size={18} className="inline"/> Epitech
                        </Code>{" "}
                        Lyon. I specialize in data analysis and algorithms with competitive mindset.
                        I enjoy crafting intuitive user interfaces as well and architecting robust software,
                        I love turning ideas into reality through code. Always eager to learn, grow, 
                        and take on new challenges that push my boundaries.
                    </p>

                    <div className="flex flex-wrap gap-4 max-md:justify-center">
                        <Link href="#contact">
                            <Button size="lg" className="gap-2 racing-button">
                                Get in touch
                                <ArrowRight size={18} />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="gap-2 racing-button" asChild>
                            <a href="/YanisDolivet_CV.pdf" download="YanisDolivet_CV.pdf">
                                <Download size={18}/>
                                Download CV
                            </a>
                        </Button>
                    </div>

                    <div className="flex gap-6 text-sm">
                        <div>
                            <div className="text-2xl font-bold gradient-text">15+</div>
                            <div className="text-muted-foreground">Projects</div>
                        </div>
                        <div className="w-px bg-border" />
                        <div>
                            <div className="text-2xl font-bold gradient-text">3</div>
                            <div className="text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="w-px bg-border" />
                        <div>
                            <div className="text-2xl font-bold gradient-text">+∞</div>
                            <div className="text-muted-foreground">Pit Stops ☕</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}