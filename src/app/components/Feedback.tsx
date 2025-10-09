"use client";

import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaGithub, FaTimes } from "react-icons/fa";
import { useState } from "react";
import React from "react";

const feedbacks = [
  {
    week: 1,
    text: "Exposición de sílabo, explicación de los fundamentos de las tecnologías web y organización del trabajo en equipo.",
    resumen: "Esta semana se realizó la presentación formal del sílabo, explicando la estructura,objetivos y metodología del curso. Se introdujeron los fundamentos de las tecnologías web, incluyendo la diferencia entre sitio web, aplicación web, página web y sistema web. Se explicaron conceptos clave como DNS, TCP/IP, HTTP y los roles en el desarrollo web (frontend, backend, fullstack). También se organizaron los equipos de trabajo y se presentó Visual Studio Code como herramienta principal de desarrollo.",
    retroalimentacion:
      "Excelente inicio para sentar las bases del curso. La claridad en la explicación de los roles y tecnologías web es crucial para que los estudiantes comprendan el ecosistema en el que se desenvolverán. Se sugiere reforzar con ejemplos cotidianos el funcionamiento de protocolos como HTTP y DNS. La organización temprana de equipos favorece el trabajo colaborativo durante el semestre.",
    galeria: ["/images/semana1-1.png", "/images/semana1-2.png"],
  },
  {
    week: 2,
    text: "Exposición sobre los fundamentos de HTML, CSS básico y CSS avanzado.",
    resumen: "Se trabajó la estructura semántica de HTML y el diseño con CSS básico y avanzado.",
    retroalimentacion:
      "Aprendí a estructurar correctamente una página web, aplicar estilos coherentes y utilizar flexbox y grid para layouts modernos.",
    galeria: ["/images/semana2-1.png"],
  },
  {
    week: 3,
    text: "Desarrollo de prácticas calificadas con HTML, CSS y JavaScript.",
    resumen: "Se realizaron ejercicios prácticos aplicando interactividad con JavaScript.",
    retroalimentacion:
      "Mejoré la lógica de programación y aprendí a combinar la manipulación del DOM con estilos dinámicos.",
    galeria: ["/images/semana3-1.png", "/images/semana3-2.png"],
  },
  {
    week: 4,
    text: "Exposición sobre frameworks CSS y JavaScript avanzado.",
    resumen:
      "Se exploraron frameworks como Tailwind CSS y Bootstrap, además de temas avanzados en JavaScript.",
    retroalimentacion:
      "Aprendí cómo los frameworks aceleran el desarrollo y cómo modular el código JS para mantenerlo escalable.",
    galeria: ["/images/semana4-1.png"],
  },
  {
    week: 5,
    text: "Desarrollo de la tercera práctica calificada e introducción a React.",
    resumen:
      "Implementamos componentes básicos de React y entendimos el flujo de datos entre ellos.",
    retroalimentacion:
      "React permitió organizar mejor el código y entender el concepto de UI dinámica.",
    galeria: ["/images/semana5-1.png", "/images/semana5-2.png"],
  },
  {
    week: 6,
    text: "Desarrollo de la tercera práctica calificada e introducción a React.",
    resumen:
      "Implementamos componentes básicos de React y entendimos el flujo de datos entre ellos.",
    retroalimentacion:
      "React permitió organizar mejor el código y entender el concepto de UI dinámica.",
    galeria: ["/images/semana5-1.png", "/images/semana5-2.png"],
  },
  {
    week: 7,
    text: "Desarrollo de la tercera práctica calificada e introducción a React.",
    resumen:
      "Implementamos componentes básicos de React y entendimos el flujo de datos entre ellos.",
    retroalimentacion:
      "React permitió organizar mejor el código y entender el concepto de UI dinámica.",
    galeria: ["/images/semana5-1.png", "/images/semana5-2.png"],
  },
  {
    week: 8,
    text: "Desarrollo de la tercera práctica calificada e introducción a React.",
    resumen:
      "Implementamos componentes básicos de React y entendimos el flujo de datos entre ellos.",
    retroalimentacion:
      "React permitió organizar mejor el código y entender el concepto de UI dinámica.",
    galeria: ["/images/semana5-1.png", "/images/semana5-2.png"],
  },
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
  const [selectedFeedback, setSelectedFeedback] = useState<any>(null);

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
              <div
                onClick={() => setSelectedFeedback(item)}
                className="cursor-pointer bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-indigo-100 dark:border-gray-700 hover:scale-105 transform transition-all duration-300 relative"
              >
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
        Cada semana representó un paso más en mi desarrollo como profesional en
        Ingeniería de Sistemas. Este registro refleja cómo la práctica constante
        y la integración de nuevas herramientas consolidaron mis habilidades
        técnicas y de trabajo colaborativo.
      </motion.p>


      {selectedFeedback && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
            <button
              onClick={() => setSelectedFeedback(null)}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">
              Semana {selectedFeedback.week}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Resumen:</strong> {selectedFeedback.resumen}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Retroalimentación:</strong>{" "}
              {selectedFeedback.retroalimentacion}
            </p>

            <div>
            
              <strong className="text-gray-800 dark:text-gray-200">
                Galería:
              </strong>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {selectedFeedback.galeria?.length > 0 ? (
                  selectedFeedback.galeria.map((img: string, i: number) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Semana ${selectedFeedback.week} - ${i + 1}`}
                      className="rounded-lg shadow-md object-cover w-full h-32"
                    />
                  ))
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 italic">
                    Sin imágenes disponibles
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
