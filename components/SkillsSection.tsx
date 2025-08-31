"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Design Tools",
      skills: [
        {
          name: "Figma",
          icon: "🎨",
          description: "UI/UX Design & Prototyping",
        },
        { name: "Adobe XD", icon: "🎯", description: "User Experience Design" },
        { name: "Sketch", icon: "✏️", description: "Interface Design" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        {
          name: "HTML/CSS",
          icon: "🌐",
          description: "Web Structure & Styling",
        },
        {
          name: "JavaScript",
          icon: "⚡",
          description: "Interactive Web Development",
        },
        { name: "Vue.js", icon: "💚", description: "Progressive Framework" },
        { name: "Bootstrap", icon: "🅱️", description: "CSS Framework" },
      ],
    },
    {
      category: "Design Process",
      skills: [
        {
          name: "Design Thinking",
          icon: "🧠",
          description: "Human-Centered Design",
        },
        {
          name: "User Research",
          icon: "🔍",
          description: "User Interviews & Testing",
        },
        {
          name: "Wireframing",
          icon: "📐",
          description: "Lo-fi to Hi-fi Prototypes",
        },
        {
          name: "Usability Testing",
          icon: "🧪",
          description: "User Experience Validation",
        },
      ],
    },
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

        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
                {category.category}
              </h3>

              <div className="grid gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="floating-card p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{skill.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
