"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Tienda Online Tech",
    description:
      "Desarrollo de una plataforma web con Flask y SQL Server para la venta de productos tecnológicos.",
    image: "/projects/store.jpg",
    link: "https://github.com/tuusuario/tienda-tech",
  },
  {
    title: "Sistema de Gestión Académica",
    description:
      "Aplicación web con Next.js y TailwindCSS para gestionar cursos, docentes y estudiantes.",
    image: "/projects/academic.jpg",
    link: "https://github.com/tuusuario/sistema-academico",
  },
  {
    title: "Portafolio Personal",
    description:
      "Diseño moderno, animaciones con Framer Motion y un diseño limpio en Next.js.",
    image: "/projects/portfolio.jpg",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-gray-800">
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-12">Proyectos</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Ver proyecto →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
