import { Section } from "./section";
import { Heart } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="border-t border-border bg-muted/30 mt-20 checkered-subtle">
            <Section className="py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <Link href="/" className="text-xl font-bold gradient-text">
                            Yanis Dolivet 🏁
                        </Link>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Yanis Dolivet. All rights reserved.
                        </p>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                            <Link href="#about" className="hover:text-foreground transition-colors">
                                About
                            </Link>
                            <Link href="#projects" className="hover:text-foreground transition-colors">
                                Projects
                            </Link>
                            <Link href="#contact" className="hover:text-foreground transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </footer>
    );
};
