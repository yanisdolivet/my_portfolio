import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { ExperienceSection } from "../components/experience-section";
import { Testimonials } from "../components/testimonials";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "../components/scroll-progress";
import { ScrollReveal } from "../components/scroll-reveal";
import { BackToTop } from "../components/back-to-top";
import { FloatingParticles } from "../components/floating-particles";
import { GitHubStats } from "../components/github-stats";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <BackToTop />
      <FloatingParticles />
      
      <div className="relative">
        {/* Background gradient effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <Hero />
        
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <Projects />
        </ScrollReveal>
        
        <ScrollReveal delay={150}>
          <ExperienceSection />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <Testimonials />
        </ScrollReveal>
        
        <ScrollReveal delay={250}>
          <GitHubStats />
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <ContactForm />
        </ScrollReveal>
      </div>

      <Footer />
    </main>
  );
}

