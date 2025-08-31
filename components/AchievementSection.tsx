"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

export default function AchievementSection() {
  const achievements = [
    {
      title: "Best Product Innovation Award",
      description: "Capstone Project - LaporPak Platform",
      institution: "Universitas Ahmad Dahlan",
      date: "July 2025",
      icon: <Trophy className="w-8 h-8" />,
      image: "/achievements/best-innovation.jpg", // Add achievement image to public/achievements/
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition for outstanding work and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="floating-card"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-xl">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Achievement Image */}
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-xl flex items-center justify-center">
                      <div className="text-yellow-600 dark:text-yellow-400">
                        {achievement.icon}
                      </div>
                    </div>

                    {/* Achievement Details */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                        <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
                          {achievement.date}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                        {achievement.title}
                      </h3>

                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                        {achievement.description}
                      </p>

                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {achievement.institution}
                      </p>
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
