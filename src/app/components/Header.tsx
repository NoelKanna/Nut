"use client";
import React, { use, useCallback } from "react";
import Image from "next/image";

// type ของเมนู
type MenuItem = {
  name: string;
  path: string; // จะใช้เป็น id ของ section
};

// array ของเมนู
const menuItems: MenuItem[] = [
  { name: "About", path: "about" },
  { name: "Service", path: "service" },
  { name: "Contact", path: "contact" },
];

export default function Header() {
  // ฟังก์ชัน smooth scroll
  const handleSmoothScroll = useCallback((targetId: string) => {
    if (targetId === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <header className="p-2 bg-blue-200 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/3.jpg"
          alt="Logo"
          width={100}
          height={100}
          className="cursor-pointer"
          onClick={() => handleSmoothScroll("/")}
        />

        {/* เมนู */}
        <nav>
          <ul className="flex gap-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => handleSmoothScroll(item.path)}
                  className="cursor-pointer hover:underline hover:text-blue-400 bg-transparent border-none"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
