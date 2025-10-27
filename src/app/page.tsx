"use client";
import Hero from "./components/Hero";
import About from "./components/About";

import AboutImage0 from "@/assets/surtr.gif";
import AboutImage1 from "@/assets/pepe.gif";
import AboutImage2 from "@/assets/amiya.gif";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-blue-400">
      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTIONS (โชว์เฉพาะ GIF) */}
      <div id="about" className="text-amber-600">
        <About
          title="Surtr"
          subTitle="The Flame of Muspell"
          description="Surtr GIF Showcase"
          image={AboutImage0}
          type="A"
        />
        <About
          title="Pepe"
          subTitle="The Meme Legend"
          description="Pepe GIF Showcase"
          image={AboutImage1}
          type="B"
        />
        <About
          title="Amiya"
          subTitle="Rhodes Island"
          description="Amiya GIF Showcase"
          image={AboutImage2}
          type="A"
        />
      </div>
    </main>
  );
}
