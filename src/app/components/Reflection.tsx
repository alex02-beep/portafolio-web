"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

type Semana = {
  week: number;
  reflexion: string;
  queAprendio: string;
  comoAprendio: string;
  galeria?: string[];
};

const semanas: Semana[] = [
  {
    week: 1,
    reflexion:
      "En esta primera semana consolidé la idea de que comprender la infraestructura y los roles del desarrollo web es previo a comenzar a construir. Tener una visión del ecosistema (protocolos, servidores y roles) me ayudó a situar el resto del curso en contexto y a organizar el trabajo en equipo.",
    queAprendio:
      "Fundamentos de la web: diferencias entre sitio/aplicación, conceptos básicos como DNS, HTTP, TCP/IP y los roles (frontend/backend/fullstack).",
    comoAprendio:
      "Mediante exposiciones teóricas, ejemplos cotidianos, la presentación del sílabo y la práctica inicial con Visual Studio Code y organización de equipos.",
    galeria: ["/images/semana1-1.png", "/images/semana1-2.png"],
  },
  {
    week: 2,
    reflexion:
      "Al profundizar en HTML5 y CSS3 entendí que la estructura semántica y las decisiones de maquetado son la base de una experiencia accesible y mantenible. Cambié mi forma de pensar el layout: primero estructura, luego estilos.",
    queAprendio:
      "Estructura semántica en HTML, DOM, CSS (unidades, box model), Flexbox y Grid, y conceptos básicos de SEO y compatibilidad entre navegadores.",
    comoAprendio:
      "Construyendo páginas en laboratorio y probando en distintos tamaños y navegadores; repasando ejemplos prácticos y corrigiendo errores de maquetado reales.",
    galeria: ["/images/semana2-1.png"],
  },
  {
    week: 3,
    reflexion:
      "Comparar Bootstrap y Tailwind me hizo apreciar enfoques distintos: uno de componentes y otro utilitario. Comprendí cuándo elegir velocidad (Bootstrap) o granularidad (Tailwind) según el proyecto.",
    queAprendio:
      "Uso práctico de frameworks CSS, manejo de utilidades (Tailwind) y personalización de componentes (Bootstrap).",
    comoAprendio:
      "Desarrollando ejercicios prácticos y la primera práctica calificada aplicando ambos frameworks en proyectos reales.",
    galeria: ["/images/semana3-1.png", "/images/semana3-2.png"],
  },
  {
    week: 4,
    reflexion:
      "Entrar en JavaScript y TypeScript me mostró cómo pasar de páginas estáticas a interfaces interactivas. Comprendí que la lógica y el DOM son la base para toda interacción en la web.",
    queAprendio:
      "Variables, funciones, estructuras de control, manipulación del DOM, uso de Canvas y conceptos iniciales de TypeScript.",
    comoAprendio:
      "Resolviendo ejercicios guiados, viendo ejemplos en clase y realizando pequeñas prácticas sobre manipulación del DOM.",
    galeria: ["/images/semana4-1.png"],
  },
  {
    week: 5,
    reflexion:
      "La consolidación en JavaScript y la introducción a React me hicieron ver la diferencia entre programar comportamiento puntual y construir interfaces reusables. React propone otra mentalidad: componentes y estado.",
    queAprendio:
      "Dominio práctico de JavaScript y los conceptos básicos de React: componentes y la idea de UI declarativa.",
    comoAprendio:
      "A través de prácticas calificadas, ejemplos en clase y la explicación de la filosofía de React aplicada a casos pequeños.",
    galeria: ["/images/semana5-1.png", "/images/semana5-2.png"],
  },
  {
    week: 6,
    reflexion:
      "Al profundizar en componentes entendí cómo la composición y las props facilitan la escalabilidad. Pensar en pequeñas piezas reutilizables cambió mi enfoque al diseñar interfaces.",
    queAprendio:
      "Uso de props, children, composición de componentes y estructura de proyectos basados en componentes.",
    comoAprendio:
      "Desarrollando mini-proyectos, revisando ejemplos y analizando proyectos en clase con feedback del docente.",
    galeria: ["/images/semana6-1.png", "/images/semana6-2.png"],
  },
  {
    week: 7,
    reflexion:
      "Los Hooks y el consumo de APIs conectaron la interfaz con datos reales; fue cuando sentí que podía construir aplicaciones que realmente interactúan con servicios externos.",
    queAprendio:
      "Uso de useState, useEffect, consumo de APIs con Axios y patrones para manejar estado y efectos secundarios.",
    comoAprendio:
      "Implementando ejemplos prácticos, integrando peticiones reales y desarrollando funciones en el portafolio con feedback iterativo.",
    galeria: ["/images/semana7-1.png"],
  },
  {
    week: 8,
    reflexion:
      "La evaluación parcial fue una gran oportunidad para medir el aprendizaje y reflexionar sobre el progreso: vi cómo pequeñas prácticas semanales consolidan una habilidad real en desarrollo web.",
    queAprendio:
      "Repaso y consolidación de conceptos de la Unidad I: desde fundamentos web hasta React básico y mejores prácticas.",
    comoAprendio:
      "Mediante el examen práctico-teórico, presentaciones y retroalimentación grupal que clarificó dudas y permitió ajustar el trabajo futuro.",
    galeria: ["/images/semana8-1.png"],
  },
];

export default function ReflexionFinal() {
  const [seleccionada, setSeleccionada] = useState<Semana | null>(null);

  return (
    <section
      id="reflexion-final"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-6"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 dark:text-white mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Reflexiones semanales
      </motion.h2>

      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
      >
        {semanas.map((s, i) => (
          <motion.button
            key={s.week}
            onClick={() => setSeleccionada(s)}
            className="text-left bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-indigo-100 dark:border-gray-700 hover:scale-105 transform transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-none w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                {s.week}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
                  Semana {s.week}
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-4">
                  {s.reflexion}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>


      <AnimatePresence>
        {seleccionada && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSeleccionada(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl p-6 relative max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSeleccionada(null)}
                aria-label="Cerrar"
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-indigo-600"
              >
                <FaTimes />
              </button>

              <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-3">
                Semana {seleccionada.week}
              </h3>

              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold">Reflexión metacognitiva</p>
                  <p className="mt-1 text-justify">{seleccionada.reflexion}</p>
                </div>

                <div>
                  <p className="font-semibold">¿Qué aprendí?</p>
                  <p className="mt-1 text-justify">{seleccionada.queAprendio}</p>
                </div>

                <div>
                  <p className="font-semibold">¿Cómo aprendí?</p>
                  <p className="mt-1 text-justify">{seleccionada.comoAprendio}</p>
                </div>

                <div>
                  <p className="font-semibold">Galería</p>
                  <div className="mt-2 grid grid-cols-2 gap-3">
                    {seleccionada.galeria && seleccionada.galeria.length > 0 ? (
                      seleccionada.galeria.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Semana ${seleccionada.week} imagen ${idx + 1}`}
                          className="w-full h-36 object-cover rounded-lg shadow-sm"
                          loading="lazy"
                        />
                      ))
                    ) : (
                      <p className="italic text-gray-500">Sin imágenes disponibles</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
