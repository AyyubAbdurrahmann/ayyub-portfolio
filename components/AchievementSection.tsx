"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

export default function AchievementSection() {
  const [zoomed, setZoomed] = useState(false);

  const achievements = [
    {
      title: "Best Product Innovation Award",
      description: "Capstone Project - LaporPak Platform",
      institution: "Universitas Ahmad Dahlan",
      date: "July 2025",
      icon: <Trophy className="w-8 h-8" />,
      image: "/achievements/bestproduct.jpg",
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

        <div className="flex flex-col md:flex-row items-center gap-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          {/* Achievement Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={achievements[0].image}
              alt={achievements[0].title}
              className="rounded-2xl object-cover w-full max-w-xl shadow-md cursor-zoom-in"
              onClick={() => setZoomed(true)}
            />
          </div>
          {/* Achievement Details */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
                {achievements[0].date}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3">
              {achievements[0].title}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              {achievements[0].description}
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">
              {achievements[0].institution}
            </p>
            <div className="text-yellow-600 dark:text-yellow-400 mb-2">
              {achievements[0].icon}
            </div>
          </div>
        </div>
      </div>
      {/* Modal Zoom */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setZoomed(false)}
        >
          <div className="relative max-w-3xl w-full flex justify-center">
            <img
              src={achievements[0].image}
              alt={achievements[0].title}
              className="rounded-2xl object-contain max-h-[80vh] w-auto shadow-2xl border-4 border-white"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 bg-white/80 hover:bg-white text-black rounded-full px-3 py-1 font-bold text-lg shadow"
              onClick={() => setZoomed(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
