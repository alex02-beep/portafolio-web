"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-indigo-700 to-blue-600 text-white text-center relative overflow-hidden"
    >
      {/* Círculos decorativos */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/30 rounded-full blur-3xl"></div>

      <motion.h2
        className="text-4xl font-bold mb-10 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contáctame
      </motion.h2>

      {/* Formulario */}
      <motion.form
        className="relative z-10 max-w-lg mx-auto bg-white text-gray-900 p-8 rounded-2xl shadow-xl space-y-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Mensaje enviado correctamente (demo). 🚀");
        }}
      >
        <div>
          <label className="block text-left font-semibold mb-2">Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-left font-semibold mb-2">Correo electrónico</label>
          <input
            type="email"
            placeholder="tucorreo@ejemplo.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-left font-semibold mb-2">Mensaje</label>
          <textarea
            placeholder="Escribe tu mensaje..."
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Enviar mensaje
        </motion.button>
      </motion.form>

      {/* Redes sociales */}
      <div className="mt-12 flex justify-center gap-8 relative z-10">
        <a href="mailto:tuemail@correo.com" className="hover:text-blue-300 text-2xl">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
