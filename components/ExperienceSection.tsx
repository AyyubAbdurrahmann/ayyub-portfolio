"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Laboratory Assistant - Information System",
      company: "Universitas Ahmad Dahlan",
      period: "March 2025 - July 2025",
      location: "Yogyakarta, Indonesia",
      responsibilities: [
        "Led UI design oversight during lab sessions, ensuring consistency and accessibility",
        "Assisted in User Experience Research and Design course practical sessions",
        "Mentored students in Figma for wireframing and prototyping",
      ],
    },
    {
      title: "UI Designer & Frontend Developer",
      company: "LaporPak - Capstone Project",
      period: "March 2025 - June 2025",
      location: "Universitas Ahmad Dahlan",
      responsibilities: [
        "Designed UI for web-based public reporting platform",
        "Developed responsive frontend using Vue.js and Bootstrap",
        "Applied UX considerations through prototyping and interface refinement",
        "Collaborated with development teams for accessible web interfaces",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50/50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in UI/UX design and development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="floating-card p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 dark:text-gray-300 flex items-start gap-3"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
