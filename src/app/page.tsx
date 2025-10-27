"use client";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

import Hero from "./components/Hero";
import About from "./components/About";

import AboutImage0 from "@/assets/surtr.gif";
import AboutImage1 from "@/assets/pepe.gif";
import AboutImage2 from "@/assets/amiya.gif";

export default function Home() {
  // ✅ ต้องเป็นอาร์เรย์
  const [sections, setSections] = useState<any[]>([]);
  const sectionRef = collection(db, "sections");

  // ✅ ดึงข้อมูลจาก Firestore
  const fetchSections = async () => {
    const snapshot = await getDocs(sectionRef);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched sections:", data);
    setSections(data);
  };

  useEffect(() => {
    fetchSections();
  }, []);

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
