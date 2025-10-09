"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaDatabase,
  FaReact,
} from "react-icons/fa";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 size={50} className="text-orange-500" />, level: 40 },
  { name: "CSS3", icon: <FaCss3Alt size={50} className="text-blue-500" />, level: 45 },
  { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-400" />, level: 45 },
  { name: "Python", icon: <FaPython size={50} className="text-blue-400" />, level: 40 },
  { name: "SQL Server", icon: <FaDatabase size={50} className="text-red-500" />, level: 40 },
  { name: "React", icon: <FaReact size={50} className="text-cyan-400" />, level: 45 },
];

export default function Skills() {
  const [progressVisible, setProgressVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setProgressVisible(true), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Habilidades
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-3"
            >
              {skill.icon}
            </motion.div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-3">
              {skill.name}
            </h3>

            {/* Barra de progreso */}
            <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-3 bg-blue-500 dark:bg-indigo-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: progressVisible ? `${skill.level}%` : 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>

            <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {skill.level}%
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
