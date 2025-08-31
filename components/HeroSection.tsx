"use client";

import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import dynamic from "next/dynamic";

const Spline = dynamic(
  async () => {
    // Ensure the import path is exactly this:
    const mod = await import("@splinetool/react-spline/next");
    return mod.default || mod;
  },
  { 
    ssr: false, // Spline is a client-side only component
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    ),
  }
);

export default function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv-ayyub.pdf";
    link.download = "CV-Ayyub-Abdurrahman.pdf";
    link.click();
  };

  const handleViewWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block text-gray-800 dark:text-gray-100">
                Hi, I'm
              </span>
              <span className="block gradient-text text-5xl md:text-7xl">
                Ayyub Abdurrahman
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2 mb-8"
            >
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                Information Systems Student
              </p>
              <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold">
                UI/UX Designer & Frontend Developer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Passionate about creating intuitive digital experiences through
              user-centered design and modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download CV
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewWork}
                className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all"
              >
                <Eye size={20} />
                View My Work
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Spline Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 lg:h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-600/20 dark:from-blue-600/30 dark:to-purple-800/30 rounded-3xl"></div>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <Spline scene="https://prod.spline.design/F5WhLvzJ3-r2bBJ3/scene.splinecode" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}