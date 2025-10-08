"use client";

import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";

const feedbacks = [
  { week: 1, text: "Introducción al curso y organización del trabajo en equipo. Reflexión sobre la importancia de la planificación." },
  { week: 2, text: "Aprendí sobre los fundamentos de HTML y la estructura básica de una página web." },
  { week: 3, text: "Implementé estilos con CSS y practiqué diseño responsivo." },
  { week: 4, text: "Exploré los fundamentos de JavaScript y su aplicación en la interactividad del sitio." },
  { week: 5, text: "Conocí sobre frameworks frontend como React y su estructura basada en componentes." },
  { week: 6, text: "Integré un servidor básico usando Flask y conecté con bases de datos SQL Server." },
  { week: 7, text: "Aprendí a manejar rutas y renderizado dinámico en aplicaciones web." },
  { week: 8, text: "Desarrollé el módulo de registro e inicio de sesión con validaciones." },
  { week: 9, text: "Diseñé el sistema de filtrado y búsqueda de productos en la tienda." },
  { week: 10, text: "Optimicé la interfaz visual usando Tailwind CSS y componentes reutilizables." },
  { week: 11, text: "Implementé funciones de carrito de compras y lista de deseos." },
  { week: 12, text: "Exploré la integración con APIs externas y el consumo de datos JSON." },
  { week: 13, text: "Analicé el despliegue de proyectos en la nube con Azure." },
  { week: 14, text: "Me enfoqué en las pruebas de usabilidad y corrección de errores." },
  { week: 15, text: "Realicé ajustes visuales, agregué animaciones y mejoré la accesibilidad." },
  { week: 16, text: "Presentación final del portafolio y reflexión general sobre el aprendizaje adquirido." },
];

export default function Feedback() {
  return (
    <section
      id="feedback"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 via-blue-100 to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6"
    >
      <motion.h2
        className="text-5xl font-extrabold text-center text-indigo-700 dark:text-white mb-16 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Retroalimentación Semanal
      </motion.h2>

      {/* Línea de tiempo central */}
      <div className="relative w-full max-w-6xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-indigo-400 dark:border-indigo-600"></div>

        {feedbacks.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center w-full mb-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <div
              className={`w-full md:w-1/2 ${
                index % 2 === 0 ? "pl-10" : "pr-10"
              }`}
            >
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-indigo-100 dark:border-gray-700 hover:scale-105 transform transition-all duration-300 relative">
                <div className="absolute -left-7 top-1/2 transform -translate-y-1/2 bg-indigo-600 dark:bg-indigo-400 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                  <FaRegCalendarAlt />
                </div>
                <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
                  Semana {item.week}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mensaje final */}
      <motion.p
        className="mt-16 text-lg text-gray-800 dark:text-gray-300 max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Cada semana representó un paso más en mi desarrollo como profesional en Ingeniería de Sistemas.
        Este registro refleja cómo la práctica constante y la integración de nuevas herramientas 
        consolidaron mis habilidades técnicas y de trabajo colaborativo.
      </motion.p>
    </section>
  );
}
