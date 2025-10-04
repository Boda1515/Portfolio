// src/app/components/ProjectsShowcase.tsx
"use client";

import React from "react";
import SpotlightCard from "./SpotlightCard";

type Project = {
  title: string;
  summary: string;
  bullets: string[];
  tags: string[];
  link?: string;   // optional GitHub/demo
};

const ACCENT = "#00BFFF"; // unify the cyan you like

const PROJECTS: Project[] = [
  {
    title: "Global Amazon Product Data Integration and Analytics",
    summary:
      "End-to-end pipeline to scrape, integrate, and analyze Amazon product data across regions.",
    bullets: [
      "Python (Pandas, NumPy) for cleansing, joins, feature engineering, and aggregations.",
      "Centralized Azure Data Warehouse with curated zones for analytics and comparison.",
      "Orchestrated ETL pipelines; interactive dashboards for pricing and product KPIs."
    ],
    tags: ["Python", "Pandas", "NumPy", "Azure DW", "ETL", "Dashboards"],
    link: "https://github.com/Boda1515/Amazon_Project"
  },
  {
    title: "Azure Web Scraping",
    summary:
      "Serverless web scraper with scalable storage and automated deployments.",
    bullets: [
      "Azure Functions (Python) for extraction from e-commerce sites; auto-scale by load.",
      "Azure Data Lake for raw/processed layers; structured folder partitions.",
      "GitHub Actions CI/CD for build, tests, artifact publish, and slot swap."
    ],
    tags: ["Azure Functions", "Python", "Data Lake", "CI/CD", "GitHub Actions"],
    link: "https://github.com/Boda1515/Azure-Scraper-Func"
  }
];

function Tag({ text }: { text: string }) {
  return (
    <span
      className="px-2.5 py-1 rounded-full text-xs md:text-[13px] border border-white/10 bg-white/5"
      style={{ color: "white" }}
    >
      {text}
    </span>
  );
}

export default function ProjectsShowcase() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* grid */}
      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <SpotlightCard
            key={i}
            className="relative h-full bg-black/40 border-white/10 p-6 sm:p-8"
            // spotlightColor="rgba(0,191,255,0.25)" // matches #00BFFF
          >
            {/* soft outline + subtle inner glow */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

            {/* content */}
            <div className="relative flex h-full flex-col gap-4">
                <h3 className="text-lg md:text-xl font-semibold leading-snug">
                {p.title}
              </h3>

              <p className="text-sm md:text-base text-slate-300">
                {p.summary}
              </p>

              <ul className="mt-1 list-disc list-inside space-y-1.5 text-sm md:text-[15px] leading-6 text-slate-300 marker:text-[#00BFFF]">
                {p.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t} text={t} />
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors"
                    style={{
                      color: "white",
                      background: "rgba(0,191,255,0.12)",
                      border: `1px solid ${ACCENT}22`
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget.style.background = "rgba(0,191,255,0.18)"),
                      (e.currentTarget.style.borderColor = `${ACCENT}44`))
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget.style.background = "rgba(0,191,255,0.12)"),
                      (e.currentTarget.style.borderColor = `${ACCENT}22`))
                    }
                  >
                    View details
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-80"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                )}
                {/* accent pill */}
                <span
                  className="ml-auto px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ color: ACCENT, background: "rgba(0,191,255,0.08)" }}
                >
                  {i === 0 ? "Analytics" : "Serverless"}
                </span>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
