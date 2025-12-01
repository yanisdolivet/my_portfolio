"use client"

import { useState, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import Link from "next/link";
import { GitHubIcon } from "./icons/GitHub_icon";
import { LinkedInIcon } from "./icons/LinkedIn_icon";
import { GmailIcon } from "./icons/GmailIcon";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "@/contexts/language-context";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
    const { t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Detect active section
            const sections = ["about", "skills", "projects", "experience", "testimonials", "github", "contact"];
            const scrollPosition = window.scrollY + 100; // offset for better UX

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#testimonials", label: t("nav.testimonials") },
    { href: "#github", label: t("nav.github") },
    { href: "#contact", label: t("nav.contact") },
  ];    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled 
                ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
                : "bg-transparent"
        )}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold gradient-text">
                            YD
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.slice(1);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-3 py-2 text-sm font-medium transition-all rounded-md relative",
                                        isActive 
                                            ? "text-foreground bg-accent" 
                                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                    )}
                                >
                                    {link.label}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2">
                        <div className="hidden sm:flex items-center gap-2">
                            <Link 
                                href="https://github.com/yanisdolivet" 
                                className={cn(buttonVariants({ variant : "ghost", size: "icon" }), "w-9 h-9")}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHubIcon size={18} className="text-foreground"/>
                            </Link>
                            <Link 
                                href="https://www.linkedin.com/in/yanis-dolivet-1850702a4/" 
                                className={cn(buttonVariants({ variant : "ghost", size: "icon" }), "w-9 h-9")}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon size={18} className="text-foreground"/>
                            </Link>
                            <Link 
                                href="mailto:yanis.dolivet@epitech.eu" 
                                className={cn(buttonVariants({ variant : "ghost", size: "icon" }), "w-9 h-9")}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GmailIcon size={18} className="text-foreground"/>
                            </Link>
                        </div>
                        
                        <LanguageSwitcher />
                        <ThemeToggle />

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden w-9 h-9"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.slice(1);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                                        isActive 
                                            ? "text-foreground bg-accent" 
                                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        
                        {/* Mobile Social Links */}
                        <div className="flex items-center gap-2 px-3 pt-2 sm:hidden">
                            <Link 
                                href="https://github.com/yanisdolivet" 
                                className={cn(buttonVariants({ variant : "outline", size: "icon" }), "w-9 h-9")}
                            >
                                <GitHubIcon size={18} />
                            </Link>
                            <Link 
                                href="https://www.linkedin.com/in/yanis-dolivet-1850702a4/" 
                                className={cn(buttonVariants({ variant : "outline", size: "icon" }), "w-9 h-9")}
                            >
                                <LinkedInIcon size={18} />
                            </Link>
                            <Link 
                                href="mailto:yanis.dolivet@epitech.eu" 
                                className={cn(buttonVariants({ variant : "outline", size: "icon" }), "w-9 h-9")}
                            >
                                <GmailIcon size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
