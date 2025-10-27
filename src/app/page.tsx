"use client";
import { useEffect, useState, useCallback } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

import Hero from "./components/Hero";
import About from "./components/About";

import AboutImage0 from "@/assets/surtr.gif";
import AboutImage1 from "@/assets/pepe.gif";
import AboutImage2 from "@/assets/amiya.gif";

type Section = {
  id: string;
  title: string;
  subtitles: string;
  description: string;
};

export default function Home() {
  const [sections, setSections] = useState<Section[]>([]);

  const fetchSections = useCallback(async () => {
    const sectionRef = collection(db, "sections"); // <== moved here
    const snapshot = await getDocs(sectionRef);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Section[];
    setSections(data);
  }, []);

  useEffect(() => {
    fetchSections();
  }, [fetchSections]);

  return (
    <main className="min-h-screen flex justify-center flex-col bg-blue-400">
      <Hero />
      <div id="about" className="text-amber-600">
        {sections.map((section, index) => (
          <div key={section.id} id={section.id}>
            <About
              title={section.title}
              subTitle={section.subtitles}
              description={section.description}
              image={
                index === 1
                  ? AboutImage0
                  : index === 0
                  ? AboutImage1
                  : AboutImage2
              }
              type={index % 2 === 0 ? "A" : "B"}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
