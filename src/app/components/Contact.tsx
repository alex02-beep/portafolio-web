"use client";

import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(`Gracias ${formData.name}, tu mensaje fue enviado (demo).`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 to-blue-600 text-white text-center relative overflow-hidden py-20 px-6"
    >

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Contáctame</h2>
        <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto">
          ¿Tienes un proyecto, idea o consulta? Escríbeme y veré cómo te puedo ayudar.
        </p>


        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-3xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 text-left"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/90">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/90">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="tunombre@ejemplo.com"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/90">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transition transform hover:-translate-y-0.5"
            >
              Enviar mensaje

            </button>
          </div>
        </form>

        <div className="mt-8 flex items-center justify-center gap-8 text-2xl">
          <a
            href="mailto:tuemail@correo.com"
            aria-label="Enviar correo"
            className="text-white/90 hover:text-indigo-200 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/90 hover:text-indigo-200 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/90 hover:text-indigo-200 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
