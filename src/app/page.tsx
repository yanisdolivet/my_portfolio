import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Spacing } from "../components/spacing";
import { Status } from "../components/status";
import { Skills } from "../components/skills";

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
    </main>
  );
}
