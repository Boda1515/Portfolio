import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GooeyNav from "./components/reactbits/GooeyNav/GooeyNav";

import LightRays from "@/app/components/reactbits/LightRays/LightRays";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloud & Data Engineer Portfolio",
  description:
    "Portfolio of a Cloud & Data Engineer: projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white`}>
        {/* Navigation */}
        <header className="sticky top-4 z-10 flex justify-center">
          <GooeyNav
            items={[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Certifications", href: "#certifications" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ]}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={120}
            colors={[3,0,5]}
          />
        </header>

        {/* Page content */}
        <main className="mx-auto w-[90%] px-4">{children}</main>

        {/* Footer */}
        <footer className="mt-16 border-t border-black/10 dark:border-white/10">
          <div className="mx-auto w-[90%] px-4 h-16 flex items-center justify-between text-sm text-gray-400">
            <span>© {year} Abdelrahman Hany</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/Boda1515"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/abdelrahman15102/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                instagram 
              </a>
              <a
                href="https://www.linkedin.com/in/abdelrahman-hany-cloud-data-engineer/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
