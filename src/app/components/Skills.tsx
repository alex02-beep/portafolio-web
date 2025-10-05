"use client";
import { motion } from "framer-motion";
import { SiFlask, SiNextdotjs, SiTailwindcss, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skills = [
    { icon: <SiNextdotjs className="text-gray-800 dark:text-white text-5xl" />, name: "Next.js" },
    { icon: <SiFlask className="text-green-600 text-5xl" />, name: "Flask" },
    { icon: <SiTailwindcss className="text-sky-500 text-5xl" />, name: "Tailwind CSS" },
    { icon: <SiMysql className="text-blue-600 text-5xl" />, name: "MySQL" },
    { icon: <VscVscode className="text-blue-500 text-5xl" />, name: "VS Code" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }} // 👈 se reproduce cada vez que entra al viewport
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-12">
          Tecnologías principales
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-110 hover:shadow-2xl cursor-pointer w-36 h-36"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ amount: 0.2 }} // 👈 igual: se activa cada vez que se vuelve visible
              whileHover={{ y: -10 }}
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-16 text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ amount: 0.3 }} // 👈 permite que se reactive al hacer scroll
        >
          Estas son las herramientas que utilizo para construir aplicaciones modernas, rápidas y con un diseño optimizado.  
          Cada tecnología representa una parte clave de mi crecimiento como desarrollador.
        </motion.p>
      </motion.div>
    </section>
  );
}
