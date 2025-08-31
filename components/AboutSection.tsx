"use client";

import { motion } from "framer-motion";
import { Code, Palette, Users, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Creating user-centered designs with strong focus on usability and aesthetics",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Building responsive web applications with modern technologies",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Research",
      description:
        "Conducting interviews, surveys, and usability testing for data-driven designs",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Design Thinking",
      description:
        "Applying human-centered approach to innovation and problem-solving",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a sixth-semester Information Systems student at Universitas
            Ahmad Dahlan with a passion for creating meaningful digital
            experiences. My journey in UI/UX design has been driven by curiosity
            about how people interact with technology and how design can solve
            real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="floating-card p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
