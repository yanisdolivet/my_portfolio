"use client"

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
    en: {
        // Navigation
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        "nav.testimonials": "Testimonials",
        "nav.github": "GitHub",
        "nav.contact": "Contact",
        
        // Hero
        "hero.role": "Full Stack Developer",
        "hero.tagline": "Building elegant digital experiences",
        "hero.description": "Hey there! 👋 I'm Yanis, a passionate developer currently in my 3rd year at Epitech Lyon. I specialize in building modern web applications with cutting-edge technologies. From crafting intuitive user interfaces to architecting robust backend systems, I love turning ideas into reality through code. Always eager to learn, grow, and take on new challenges that push my boundaries.",
        "hero.cta": "Get in touch",
        "hero.cv": "Download CV",
        "hero.stats.projects": "Projects",
        "hero.stats.experience": "Years Experience",
        "hero.stats.technologies": "Technologies",
        
        // Skills
        "skills.badge": "Skills & Technologies",
        "skills.title": "Tech Stack",
        "skills.description": "Technologies and tools I use to bring ideas to life.",
        "skills.frontend": "React & Frontend",
        "skills.frontend.desc": "Building modern, responsive web applications with React, Next.js, and TypeScript",
        "skills.backend": "Backend & APIs",
        "skills.backend.desc": "Designing scalable backend systems and RESTful APIs with modern frameworks",
        "skills.system": "System Programming",
        "skills.system.desc": "Low-level programming and system architecture with C and C++",
        "skills.databases": "Databases & Storage",
        "skills.tools": "Tools & DevOps",
        
        // Projects
        "projects.badge": "Projects",
        "projects.title": "Featured Work",
        "projects.description": "A collection of projects I've built, ranging from web applications to system-level programming.",
        "projects.viewGithub": "View on GitHub",
        "projects.viewDemo": "View Demo",
        
        // Experience
        "experience.badge": "Experience",
        "experience.title": "My Journey",
        "experience.description": "From academic excellence to professional development.",
        
        // Testimonials
        "testimonials.badge": "Testimonials",
        "testimonials.title": "What People Say",
        "testimonials.description": "Feedback from colleagues, clients, and mentors I've worked with.",
        
        // GitHub
        "github.title": "GitHub Activity",
        "github.description": "My open source contributions and most popular repositories",
        "github.repos": "Repositories",
        "github.stars": "Total Stars",
        "github.forks": "Total Forks",
        "github.followers": "Followers",
        "github.following": "Following",
        "github.popular": "Popular Repositories",
        "github.view": "View Full GitHub Profile",
        
        // Contact
        "contact.badge": "Contact",
        "contact.title": "Let's Work Together",
        "contact.description": "Have a project in mind? Let's build something amazing together.",
        "contact.form.name": "Your Name",
        "contact.form.email": "Your Email",
        "contact.form.message": "Your Message",
        "contact.form.send": "Send Message",
        "contact.form.sending": "Sending...",
        "contact.form.success": "Message sent successfully!",
        "contact.form.error": "Failed to send message. Please try again.",
        "contact.cta": "Ready to start your project?",
        "contact.cta.desc": "I'm available for freelance work and open to discussing new opportunities.",
        
        // Footer
        "footer.rights": "All rights reserved.",
        "footer.built": "Built with",
    },
    fr: {
        // Navigation
        "nav.about": "À propos",
        "nav.skills": "Compétences",
        "nav.projects": "Projets",
        "nav.experience": "Expérience",
        "nav.testimonials": "Témoignages",
        "nav.github": "GitHub",
        "nav.contact": "Contact",
        
        // Hero
        "hero.role": "Développeur Full Stack",
        "hero.tagline": "Créer des expériences numériques élégantes",
        "hero.description": "Salut ! 👋 Je suis Yanis, un développeur passionné actuellement en 3ème année à Epitech Lyon. Je me spécialise dans la création d'applications web modernes avec des technologies de pointe. De la conception d'interfaces utilisateur intuitives à l'architecture de systèmes backend robustes, j'adore transformer des idées en réalité par le code. Toujours désireux d'apprendre, de grandir et de relever de nouveaux défis.",
        "hero.cta": "Me contacter",
        "hero.cv": "Télécharger CV",
        "hero.stats.projects": "Projets",
        "hero.stats.experience": "Ans d'expérience",
        "hero.stats.technologies": "Technologies",
        
        // Skills
        "skills.badge": "Compétences & Technologies",
        "skills.title": "Stack Technique",
        "skills.description": "Technologies et outils que j'utilise pour donner vie aux idées.",
        "skills.frontend": "React & Frontend",
        "skills.frontend.desc": "Création d'applications web modernes et réactives avec React, Next.js et TypeScript",
        "skills.backend": "Backend & APIs",
        "skills.backend.desc": "Conception de systèmes backend évolutifs et d'APIs RESTful avec des frameworks modernes",
        "skills.system": "Programmation Système",
        "skills.system.desc": "Programmation bas niveau et architecture système avec C et C++",
        "skills.databases": "Bases de données & Stockage",
        "skills.tools": "Outils & DevOps",
        
        // Projects
        "projects.badge": "Projets",
        "projects.title": "Travaux Phares",
        "projects.description": "Une collection de projets que j'ai construits, allant des applications web à la programmation système.",
        "projects.viewGithub": "Voir sur GitHub",
        "projects.viewDemo": "Voir Démo",
        
        // Experience
        "experience.badge": "Expérience",
        "experience.title": "Mon Parcours",
        "experience.description": "De l'excellence académique au développement professionnel.",
        
        // Testimonials
        "testimonials.badge": "Témoignages",
        "testimonials.title": "Ce qu'on dit de moi",
        "testimonials.description": "Retours de collègues, clients et mentors avec qui j'ai travaillé.",
        
        // GitHub
        "github.title": "Activité GitHub",
        "github.description": "Mes contributions open source et dépôts les plus populaires",
        "github.repos": "Dépôts",
        "github.stars": "Total Étoiles",
        "github.forks": "Total Forks",
        "github.followers": "Abonnés",
        "github.following": "Abonnements",
        "github.popular": "Dépôts Populaires",
        "github.view": "Voir le profil GitHub complet",
        
        // Contact
        "contact.badge": "Contact",
        "contact.title": "Travaillons Ensemble",
        "contact.description": "Vous avez un projet en tête ? Construisons quelque chose d'incroyable ensemble.",
        "contact.form.name": "Votre Nom",
        "contact.form.email": "Votre Email",
        "contact.form.message": "Votre Message",
        "contact.form.send": "Envoyer Message",
        "contact.form.sending": "Envoi...",
        "contact.form.success": "Message envoyé avec succès !",
        "contact.form.error": "Échec de l'envoi. Veuillez réessayer.",
        "contact.cta": "Prêt à démarrer votre projet ?",
        "contact.cta.desc": "Je suis disponible pour du travail freelance et ouvert à discuter de nouvelles opportunités.",
        
        // Footer
        "footer.rights": "Tous droits réservés.",
        "footer.built": "Créé avec",
    },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("en");

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations.en] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
};
