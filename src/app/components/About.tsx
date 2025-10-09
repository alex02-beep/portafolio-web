"use client";

import { motion } from "framer-motion";
import { FaUserGraduate, FaCode, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 relative overflow-hidden"
    >

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent blur-3xl"></div>

      <motion.div
        className="max-w-5xl mx-auto px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-8">
          Sobre mí
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          ¡Hola! Soy <span className="font-semibold text-blue-600">Alex</span>, estudiante de{" "}
          <strong>Ingeniería de Sistemas</strong> apasionado por el desarrollo web,
          la optimización de sistemas y el diseño de experiencias digitales.
          Me encanta aprender tecnologías nuevas y transformar ideas en proyectos reales
          que aporten valor a las personas y empresas.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {[
            {
              icon: <FaUserGraduate className="text-5xl text-blue-500 mx-auto mb-4" />,
              title: "Formación",
              text: "Estudiante con enfoque en desarrollo de software, bases de datos y análisis de datos.",
            },
            {
              icon: <FaCode className="text-5xl text-violet-500 mx-auto mb-4" />,
              title: "Desarrollo",
              text: "Experiencia en HTML, CSS, JavaScript, SQL Server, Flask y frameworks como Next.js.",
            },
            {
              icon: <FaLaptopCode className="text-5xl text-cyan-500 mx-auto mb-4" />,
              title: "Intereses",
              text: "Me apasiona diseñar soluciones tecnológicas eficientes e innovadoras.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white/80 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {item.icon}
              <h3 className="font-bold text-2xl mb-2">{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
