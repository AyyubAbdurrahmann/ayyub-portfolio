"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillsSection() {
  const skills = [
    { name: "Figma", description: "UI/UX Design & Prototyping" },
    { name: "HTML", description: "Markup Language" },
    { name: "CSS", description: "Web Styling" },
    { name: "JavaScript", description: "Interactive Web Development" },
    { name: "Vue.js", description: "Progressive Framework" },
    { name: "Bootstrap", description: "CSS Framework" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and methodologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Grid skills jejeran */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-6 gap-6 justify-items-center w-max">
            {skills.map((skill, idx) => {
              // generate nama file: lowercase, spasi/./+ jadi strip
              const logoName = skill.name
                .toLowerCase()
                .replace(/\s|\./g, "-")
                .replace(/\+\+/g, "pp"); // opsional untuk C++
              
              // default pakai .svg
              const logoPath = `/projects/${logoName}.svg`;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.07,
                  }}
                  whileHover={{ scale: 1.08 }}
                  className="flex flex-col items-center p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition"
                >
                  <div className="mb-2 w-10 h-10 flex items-center justify-center">
                    {/* Gunakan <img> kalau SVG */}
                    {logoPath.endsWith(".svg") ? (
                      <img
                        src={logoPath}
                        alt={skill.name}
                        width={skill.name === "Figma" ? 32 : 40}
                        height={skill.name === "Figma" ? 32 : 40}
                        className="object-contain"
                      />
                    ) : (
                      <Image
                        src={logoPath}
                        alt={skill.name}
                        width={skill.name === "Figma" ? 32 : 40}
                        height={skill.name === "Figma" ? 32 : 40}
                        className="object-contain"
                      />
                    )}
                  </div>
                  <div className="text-xs font-semibold text-gray-800 dark:text-gray-200 text-center">
                    {skill.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
