"use client";

import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaGithub} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import React from "react";

const feedbacks = [
  { week: 1, text: "Exposición de sílabo, explicación de los fundamentos de las tecnologías web y organización del trabajo en equipo." },
  { week: 2, text: "Exposición sobre los fundamentos de HTML, CSS básico y CSS avanzado" },
  { week: 3, text: "Desarrollo de la primera práctica calificada https://github.com/Nickr4r/PRACTICA-CALIFICADA---01 . Desarrollo de la segunda práctica calificada https://github.com/sayles1309/Practica-Calificada-02 ."},
  { week: 4, text: "Presentamos una exposición sobre los frameworks Tailwind CSS y Bootstrap https://github.com/ManuelYanceyan/Trabajos-en-equipo . Y exposicón de JavaScript y Javascript avanzado" },
  { week: 5, text: "Desarrollo de la tercera práctica calificada https://github.com/rikmanu1999-source/PRACTICA_JAVASCRIPT . También se hizo una introducción a React." },
  { week: 6, text: "Sesión de clase sobre los componentes en React y revisión de proyectos creados." },
  { week: 7, text: "Sesión de clase sobre y elaboración de algunos ejemplos usando React y revisión de portafolios https://github.com/alex02-beep/portafolio-web ." },
  { week: 8, text: "Parcial del curso de Desarrollo de Aplicaciones Web" },
  { week: 9, text: "" },
  { week: 10, text: "" },
  { week: 11, text: "" },
  { week: 12, text: "" },
  { week: 13, text: "" },
  { week: 14, text: "" },
  { week: 15, text: "" },
  { week: 16, text: "" },
];

function parseLinks(text: string): React.ReactNode[] {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline inline-flex items-center gap-1"
        >
          <FaGithub />
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

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
  {parseLinks(item.text)}
</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

 
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
