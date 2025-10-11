"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaLink } from "react-icons/fa";

export default function Bibliografia() {
  const libros = [
    {
      titulo: "HTML and CSS: Design and Build Websites",
      autor: "Jon Duckett",
      editorial: "Wiley",
      anio: "2011",
    },
    {
      titulo: "Eloquent JavaScript: A Modern Introduction to Programming",
      autor: "Marijn Haverbeke",
      editorial: "No Starch Press",
      anio: "2018",
    },
    {
      titulo: "Learning React: Modern Patterns for Developing React Apps",
      autor: "Alex Banks, Eve Porcello",
      editorial: "O'Reilly Media",
      anio: "2020",
    },
  ];

  const urls = [
    {
      nombre: "MDN Web Docs - Mozilla",
      enlace: "https://developer.mozilla.org/",
    },
    {
      nombre: "W3Schools - HTML, CSS, JavaScript",
      enlace: "https://www.w3schools.com/",
    },
    {
      nombre: "React Documentation",
      enlace: "https://react.dev/",
    },
    {
      nombre: "Tailwind CSS Documentation",
      enlace: "https://tailwindcss.com/docs",
    },
    {
      nombre: "Bootstrap Documentation",
      enlace: "https://getbootstrap.com/docs/",
    },
  ];

  return (
    <section
      id="bibliografia"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 via-blue-100 to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6"
    >
      <motion.h2
        className="text-5xl font-extrabold text-center text-indigo-700 dark:text-white mb-12 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Bibliografía
      </motion.h2>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12">

        <motion.div
          className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border border-indigo-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaBook className="text-indigo-600 dark:text-indigo-400 text-3xl" />
            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
              Libros Consultados
            </h3>
          </div>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            {libros.map((libro, index) => (
              <li key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3">
                <p className="font-semibold">{libro.titulo}</p>
                <p className="text-sm italic">
                  {libro.autor} — {libro.editorial}, {libro.anio}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border border-indigo-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaLink className="text-indigo-600 dark:text-indigo-400 text-3xl" />
            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
              URLs Consultadas
            </h3>
          </div>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            {urls.map((url, index) => (
              <li key={index}>
                <a
                  href={url.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {url.nombre}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
