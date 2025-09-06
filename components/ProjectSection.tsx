"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function ProjectSection() {
  const projects = [
    {
      title: "LaporPak",
      description:
        "Web-based platform for public reporting and data verification to enhance transparency for local government institutions.",
      image: "/projects/laporpak.png", // Add your project images to public/projects/
      tech: ["Vue.js", "Bootstrap", "Figma"],
      period: "March 2025 - June 2025",
      type: "Capstone Project",
      features: [
        "Responsive Design",
        "Data Verification",
        "Government Portal",
        "User-Friendly Interface",
      ],
      link: "https://laporpak.com",
      design:
        "https://www.figma.com/proto/1449OM2qHyvM6OVLazGB3x/Lapor-Pak?node-id=1335-1911&t=h2goNxNre7h9R8X4-1&scaling=contain&content-scaling=fixed&page-id=1120%3A825&starting-point-node-id=1335%3A1911", // tambahkan link figma design di sini
    },
    {
      title: "VestiPoint",
      description:
        "Digital solution designed to raise awareness about fashion waste through comprehensive UX research and design thinking.",
      image: "/projects/vestipoint.png",
      tech: ["Figma", "User Research", "Design Thinking", "Prototyping"],
      period: "March 2024 - July 2024",
      type: "Team Project",
      features: [
        "User Research",
        "Empathy Mapping",
        "Journey Maps",
        "Fashion Sustainability",
      ],
      link: "https://www.figma.com/proto/zo8GzPUFJNUAudmduSSnV4/Vestipoint?node-id=66-1490&p=f&t=urHDBQ0gAFiJxbn7-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=66%3A1305&show-proto-sidebar=1",
    },
    {
      title: "Twomorrow Website Redesign",
      description:
        "Redesigned official website transforming from e-commerce to exclusive consultation experience for luxury jewelry.",
      image: "/projects/twomorrow.png",
      tech: ["Figma", "Brand Guidelines", "Visual Hierarchy", "Luxury Design"],
      period: "August 2025",
      type: "Competition Project",
      features: [
        "Brand Consistency",
        "Luxury Experience",
        "Consultation Focus",
        "Visual Storytelling",
      ],
      link: "https://www.figma.com/proto/ufEaUQfG5aQQQKKnNvOTLA/twomorrowjewellery?node-id=551-3040&p=f&t=FZb8SbMjBx0j2DkQ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=551%3A3040",
    },
    {
      title: "Kana (Ongoing Project)",
      description:
        "A web application that enables teachers to generate quizzes automatically from files using AI. Teachers upload learning materials, and the system creates quizzes for students to complete online. I am responsible for designing the UI/UX to ensure an intuitive experience for both teachers and students.",
      image: "/projects/kana.png", // add image to public/projects/ if available
      period: "Agt 2025 - Present",
      type: "Team Project",
      features: [
        "AI-powered Quiz Generation",
        "PDF Material Upload",
        "Student Quiz Portal",
        "Modern UI/UX Design",
      ],
      link: "", // Leave empty if not live yet
      design: "", // Leave empty if not available yet
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my design and development work, from concept to
            implementation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="floating-card group"
            >
              <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 group-hover:scale-105 z-0"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <div className="text-6xl font-bold text-blue-600/20 dark:text-blue-400/20">
                        {project.title.substring(0, 2).toUpperCase()}
                      </div>
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none transition-all duration-300 bg-black/0 group-hover:bg-black/10"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                      {project.type}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

              

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {/* Tombol ke Figma Design jika ada */}
                    {"design" in project && project.design && (
                      <motion.a
                        href={project.design}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Figma Design
                      </motion.a>
                    )}
                    {/* Tombol ke Website */}
                    {project.link ? (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                        View Website
                      </motion.a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg text-sm font-medium cursor-not-allowed"
                        disabled
                      >
                        <ExternalLink size={16} />
                        View Website
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
