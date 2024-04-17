import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Spacing } from "../components/spacing";
import { Status } from "../components/status";
import { Skills } from "../components/skills";
import { ContactMe } from "@/components/contact-me";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header/>

      <Spacing size="sm"/>

      <Hero/>

      <Spacing size="sm"/>

      <Status/>

      <Spacing size="sm"/>
      
      <Skills/>

      <Spacing size="sm"/>

      <ContactMe/>

      <Spacing size="sm"/>

      <Footer/>
    </main>
  );
}

