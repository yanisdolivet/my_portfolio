"use client"

import { useLanguage } from "@/contexts/language-context";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            className="gap-2 relative overflow-hidden group"
        >
            <Languages size={18} className="transition-transform group-hover:rotate-12" />
            <span className="font-semibold uppercase">{language}</span>
            
            {/* Ripple effect on click */}
            <span className="absolute inset-0 bg-primary/10 scale-0 group-active:scale-100 rounded-md transition-transform duration-300" />
        </Button>
    );
};
