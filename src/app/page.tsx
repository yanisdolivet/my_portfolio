import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Spacing } from "../components/spacing";

export default function Home() {
  return (
    <main>
      <Header/>

      <Spacing size="sm"/>

      <Hero/>
    </main>
  );
}
