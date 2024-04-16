// import Image from "next/image";

import Hero from "@/components/Hero";
import Opengift from "@/components/OpenGift";
import Projects from "@/components/Projects";
import Start from "@/components/Start";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Opengift />
      <Start />
      <Projects />
      <Work />
    </main>
  );
}
