"use client";

import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Me pondré en contacto pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 to-blue-600 text-white text-center relative overflow-hidden py-20 px-8"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      {/* Efectos decorativos */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

      {/* Contenedor del formulario */}
      <motion.div
        className="relative z-10 w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-bold mb-6 text-white">Contáctame</h2>
        <p className="text-blue-100 mb-10">
          Si tienes un proyecto, una idea o simplemente deseas saludar, ¡envíame un mensaje!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 text-left max-w-2xl mx-auto"
        >
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="p-4 rounded-lg bg-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            required
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
          />

          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
            className="p-4 rounded-lg bg-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            required
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
          />

          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            rows={5} // ← Corregido: número, no cadena
            className="p-4 rounded-lg bg-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            required
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: false }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-100 hover:shadow-lg transition-all duration-300 self-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: false }}
          >
            Enviar mensaje
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
}
