// components/HeroSection.tsx (Alternative with CSS Animation)
"use client";

import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [splineLoaded, setSplineLoaded] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV - Ayyub.pdf";
    link.download = "CV - Ayyub.pdf";
    link.click();
  };

  const handleViewWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Fallback 3D-like animation using pure CSS
  const FallbackAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-500/30 rounded-lg rotate-45 animate-float"></div>
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-500/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-12 h-12 bg-pink-500/30 rotate-12 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-8 h-8 bg-yellow-500/30 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Central design element */}
      <div className="relative z-10">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-20 blur-sm"
        />

        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-4 rounded-full bg-gradient-to-l from-cyan-400 via-blue-500 to-indigo-600 opacity-30 blur-md"
        />

        {/* UI/UX Icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-6xl"
          >
            🎨
          </motion.div>
        </div>
      </div>
    </div>
  );

  // Spline Component with error handling
  const SplineScene = () => {
    const [Spline, setSpline] = useState<any>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
      const loadSpline = async () => {
        try {
          const SplineComponent = await import("@splinetool/react-spline");
          setSpline(() => SplineComponent.default);
          setSplineLoaded(true);
        } catch (err) {
          console.log("Spline failed to load, using fallback animation");
          setError(true);
        }
      };
      loadSpline();
    }, []);

    if (error || !Spline) {
      return <FallbackAnimation />;
    }

    return (
      <Spline
        scene="https://prod.spline.design/F5WhLvzJ3-r2bBJ3/scene.splinecode"
        onLoad={() => setSplineLoaded(true)}
        onError={() => setError(true)}
      />
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
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
                UI/UX Designer 
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Dedicated to building impactful digital products through user
              research, design thinking, and modern design tools
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
              <SplineScene />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
