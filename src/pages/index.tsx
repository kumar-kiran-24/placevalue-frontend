
import { Nav } from "../components/landing/Nav";
import { Hero } from "../components/landing/Hero";
import { Logos } from "../components/landing/Logos";
import { Ecosystem } from "../components/landing/Ecosystem";
import { Journey } from "../components/landing/Journey";
// import { Metrics } from "@/components/landing/Metrics";
import { Partners } from "../components/landing/Partners";
import { FinalCta, Footer } from "../components/landing/FinalCta";



export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Journey />
        {/* <Metrics /> */}
        <Partners />
        <Ecosystem />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
