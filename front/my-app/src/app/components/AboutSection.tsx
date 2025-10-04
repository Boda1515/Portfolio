"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 pt-10 pb-16" /* ↑ a little higher (was more padding) */
    >
      {/* smaller, subtler blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute right-[-8%] top-[-6%] h-[46vmin] w-[46vmin] rounded-[999px] blur-2xl opacity-35"
          style={{
            background:
              "radial-gradient(closest-side at 45% 40%, rgba(34,211,238,.45), transparent 68%), radial-gradient(at 70% 60%, rgba(20,184,166,.35), transparent 65%)",
          }}
        />
        <div
          className="absolute left-[-8%] bottom-[-10%] h-[40vmin] w-[40vmin] rounded-[999px] blur-2xl opacity-25"
          style={{
            background:
              "radial-gradient(closest-side at 60% 50%, rgba(59,130,246,.25), transparent 70%), radial-gradient(at 30% 50%, rgba(56,189,248,.25), transparent 65%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-4"> {/* narrower container to suit the page */}
        <h2 className="mb-8 text-center text-3xl md:text-4xl font-semibold text-white">
          About
        </h2>

        {/* glass card */}
        <div className="mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-8 lg:p-10 shadow-[0_10px_40px_rgba(2,6,23,.30)]">
          <div className="grid md:grid-cols-2 items-start gap-8 md:gap-12"> {/* ↑ more space between photo & text */}
            {/* left: portrait */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-black/30 min-h-[280px]"
            >
              {/* replace with your actual image in /public */}
              <Image
                src="/Boody.jpg"
                alt="Abdelrahman Hany portrait"
                width={800}
                height={1000}
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>

            {/* right: text */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-cyan-200">
                Welcome
              </h1>

              <p className="mt-6 leading-7 text-gray-300/90">
                I&apos;m Abdelrahman Hany, a Cloud & Data Engineer with experience in cloud computing, data engineering, and technical enablement.
with a proven ability to optimize
pipelines, deliver cloud migration projects, and provide technical training.
              </p>

              <div className="mt-10">
                <a
                  href="/Abdelrahman-Hany-Marzouk-Cloud&Data Engineer.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-cyan-200 hover:bg-cyan-400/20 hover:border-cyan-300/60 transition"
                >
                  <span className="inline-block h-2 w-2 rounded-sm bg-orange-400" />
                  Review CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
