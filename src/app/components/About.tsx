"use client";

import { motion } from "framer-motion";
import { FaUserGraduate, FaCode, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-100 text-gray-800 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <motion.div
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-8">Sobre mí</h2>

        <p className="text-lg leading-relaxed mb-10">
          ¡Hola! Soy <span className="font-semibold text-blue-600">Alex</span>, estudiante de{" "}
          <strong>Ingeniería de Sistemas</strong> apasionado por el desarrollo web,
          la optimización de sistemas y el diseño de experiencias digitales.  
          Me encanta aprender tecnologías nuevas y transformar ideas en proyectos reales
          que aporten valor a las personas y empresas.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaUserGraduate className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Formación</h3>
            <p>Estudiante de Ingeniería de Sistemas con enfoque en desarrollo de software y análisis de datos.</p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaCode className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Desarrollo</h3>
            <p>Experiencia en HTML, CSS, JavaScript, SQL Server, Flask y frameworks modernos como Next.js.</p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaLaptopCode className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Intereses</h3>
            <p>Me gusta diseñar soluciones tecnológicas eficientes y explorar herramientas de inteligencia artificial.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
