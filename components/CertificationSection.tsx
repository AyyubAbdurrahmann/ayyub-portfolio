"use client";

import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

export default function CertificationSection() {
  const certifications = [
    {
      title: "UI/UX Design Intensive Bootcamp",
      provider: "MySkill",
      date: "2025",
      description:
        "Comprehensive training covering design thinking, user research, wireframing, prototyping, and usability testing.",
      image: "/certifications/myskill-uiux.jpg",
      skills: [
        "Design Thinking",
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
      ],
    },
  ];

  return (
    <section
      id="certifications"
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
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="floating-card"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Certification Image / Icon */}
                  <div className="w-40 h-28 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 rounded-xl flex items-center justify-center">
                    <Award className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Certification Details */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {cert.title}
                    </h3>

                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      {cert.provider}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {cert.description}
                    </p>

                    {/* Skills Learned */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
