"use client";

import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaGithub, FaTimes } from "react-icons/fa";
import { useState } from "react";
import React from "react";

type FeedbackItem = {
  week: number;
  text: string;
  resumen: string;
  retroalimentacion: string;
  galeria: string[];
};

const feedbacks = [
  {
    week: 1,
    text: "Exposición de sílabo, explicación de los fundamentos de las tecnologías web y organización del trabajo en equipo.",
    resumen:
      "Esta semana se realizó la presentación formal del sílabo, explicando la estructura, objetivos y metodología del curso. Se introdujeron los fundamentos de las tecnologías web, incluyendo la diferencia entre sitio web, aplicación web, página web y sistema web. Se explicaron conceptos clave como DNS, TCP/IP, HTTP y los roles en el desarrollo web (frontend, backend, fullstack). También se organizaron los equipos de trabajo y se presentó Visual Studio Code como herramienta principal de desarrollo.",
    retroalimentacion:
      "Excelente inicio para sentar las bases del curso. La claridad en la explicación de los roles y tecnologías web es crucial para que los estudiantes comprendan el ecosistema en el que se desenvolverán. Se sugiere reforzar con ejemplos cotidianos el funcionamiento de protocolos como HTTP y DNS. La organización temprana de equipos favorece el trabajo colaborativo durante el semestre.",
    galeria: ["https://marcalima.pe/wp-content/uploads/2024/03/el-desarrollo-web.png", "https://repository-images.githubusercontent.com/375746210/81b82e80-d5f4-11eb-9df8-1720cd025c75"],
  },
  {
    week: 2,
    text: "Exposición sobre los fundamentos de HTML, CSS básico y CSS avanzado.",
    resumen:
      "Se profundizó en el estándar Open Web Platform, HTML5 y XML. Se trabajó en la estructura de documentos HTML, el árbol DOM y su renderizado. Se introdujo CSS3 con sintaxis, unidades de medida, Flexbox, Grid y diseño responsivo. Se realizó una práctica donde se trabajó en equipo utilizando GitHub para crear un proyecto web con HTML y CSS puro, sin usar librerías externas. Desarrollamos varias páginas (index, page01, page02 y page03) con formularios, animaciones, efectos visuales como hover y drag and drop, además de diseño responsivo. Cada integrante trabajó en su propia rama y el líder se encargó de integrar todo el proyecto y entregarlo a tiempo.",
    retroalimentacion:
      "La transición de HTML a CSS fue fluida y bien estructurada. Es importante que los estudiantes dominen el modelo de caja y las unidades relativas/absolutas antes de pasar a frameworks. Se recomienda incluir ejercicios que simulen problemas reales de maquetación, como la adaptación de un diseño a distintos dispositivos.",
    galeria: ["https://blog.walthercuro.com/wp-content/uploads/2024/10/maquetacion-email-html-1024x536.png","https://www.dongee.com/tutoriales/content/images/2023/01/image-6.png"],
  },
  {
    week: 3,
    text: "Desarrollo de la primera y segunda práctica calificada con HTML, CSS y JavaScript.",
    resumen: "Esta semana se centró en el uso de frameworks CSS: Bootstrap y Tailwind CSS. Se exploraron componentes, tipografía, layouts, y utilidades para diseño responsivo. Se realizo un práctica donde se trabajó en equipos de tres personas para desarrollar un proyecto web utilizando HTML y Tailwind CSS. Cada integrante trabajó en su propia rama dentro de un repositorio en GitHub, y el líder del equipo fue el responsable de crear el proyecto, integrar el trabajo final y enviarlo. Se creó varias páginas con diseño responsivo: una con listas de mensajes en un grid adaptable, otra con cards informativas sobre playas y ciudades del Perú organizadas con Flexbox, y una más que replica el diseño de una página dada, incluyendo efectos de opacidad al pasar el cursor.",
    retroalimentacion:
      "Muy acertado comparar Bootstrap y Tailwind, ya que esto ayuda a los estudiantes a decidir cuál usar según el proyecto. La práctica calificada fue una buena oportunidad para aplicar lo aprendido. Se sugiere revisar el uso de clases utilitarias en Tailwind y la personalización de componentes en Bootstrap.",
    galeria: ["/Ejercicio-resuelto.png", "/Ejercicio-practica2.png"],
  },
  {
    week: 4,
    text: "Presentamos una exposición sobre los frameworks Tailwind CSS y Bootstrap. Además, exposicón de JavaScript y Javascript avanzado",
    resumen:
      "Se dio inicio al módulo de JavaScript y TypeScript. Se cubrieron variables, operadores, tipos de datos, estructuras de control, funciones (tradicionales, flecha, closures) y manipulación del DOM. También se introdujo el elemento Canvas para gráficos y animaciones. Se presentaron exposiciones sobre Bootstrap, Tailwind y JavaScript avanzado.",
    retroalimentacion:
      "La progresión desde lo básico hasta conceptos avanzados de JavaScript fue adecuada. La manipulación del DOM y las funciones son pilares para el desarrollo frontend. Sería útil incluir ejemplos de validación de formularios y interacción con APIs básicas para preparar el terreno para React.",
    galeria: ["/Exposicion-semana4.png","/Exposicion-semana4-2.png"],
  },
  {
    week: 5,
    text: "Desarrollo de la tercera práctica calificada e introducción a React.",
    resumen:
      "Se consolidaron los conocimientos en JavaScript con la tercera práctica calificada, donde trabajamos en equipos de tres personas y desarrollamos una aplicación web con HTML, CSS y JavaScript puro, usando GitHub para la colaboración. Implementamos una ruleta dinámica que giraba al hacer clic, presionar space o un botón, y mostraba un elemento aleatorio ingresado desde un textarea, con funciones como edición, ocultar elementos sorteados, guardar datos en localStorage y reinicio. También creamos un sorteo de equipos configurable por cantidad de equipos o participantes, mostrando los resultados organizados y con opciones para exportar o copiar la información generada.",
    retroalimentacion:
      "La práctica calificada permitió medir el dominio de JavaScript. La introducción a React en esta etapa es estratégica, ya que los estudiantes ya tienen bases sólidas. Se recomienda empezar con ejemplos simples de componentes de clase y función, antes de entrar en Hooks.",
    galeria: ["/Practica3-1.png", "/Practica3-2.png"],
  },
  {
    week: 6,
    text: "Sesión de clase sobre los componentes en React y revisión de proyectos creados.",
    resumen:
      "Se profundizó en React: creación de componentes, uso de props, children, y composición. Se revisaron proyectos en desarrollo y se orientó a los estudiantes en la estructuración de aplicaciones basadas en componentes. También se practicó el paso de datos entre componentes y el uso de condiciones y bucles en JSX.",
    retroalimentacion:
      "La revisión de proyectos en clase fue muy valiosa para identificar áreas de mejora. Es clave que los estudiantes entiendan la unidireccionalidad de los datos en React. Se sugiere practicar el lifting state up y el uso de contextos simples para evitar el prop drilling.",
    galeria: ["https://s3.amazonaws.com/angularminds.com/new-blog-images/top-react-ui-libraries.jpg", "https://miro.medium.com/v2/resize:fit:720/format:webp/1*DI8-i83BgCcukmPLhaFtRg.png"],
  },
  {
    week: 7,
    text: "Sesión de clase sobre React y elaboración de algunos ejemplos usando React y revisión de portafolios.",
    resumen:
      "Se avanzó en React con el uso de Hooks (useState, useEffect, useContext, etc.), estilos en componentes, y consumo de APIs usando Axios. Los estudiantes presentaron avances de sus portafolios web y se realizaron ejemplos integrados que incluían routing y manejo de estado global.",
    retroalimentacion:
      "El uso de Hooks es fundamental en React moderno. La integración con APIs y el manejo de efectos secundarios con useEffect son destrezas clave. Se recomienda reforzar el manejo de estados asíncronos y la estructuración de proyectos con carpetas y convenciones claras.",
    galeria: ["https://trbl-services.eu/wp-content/uploads/2019/02/react-7.png", "/Portafolio.png"],
  },
  {
    week: 8,
    text: "Parcial del curso de Desarrollo de Aplicaciones Web",
    resumen:
      "Semana de evaluación parcial. Los estudiantes rindieron un examen que cubrió todos los temas de la Unidad I: Desde fundamentos web hasta React.",
    retroalimentacion:
      "La evaluación parcial fue un cierre adecuado para la primera mitad del curso. La retroalimentación grupal permite clarificar dudas y preparar a los estudiantes para la unidad de backend. Es importante reconocer el esfuerzo y destacar los avances logrados hasta el momento.",
    galeria: ["https://www.quois.com/wp-content/uploads/2021/07/Las-fases-del-desarrollo-de-una-web.jpg.webp","https://www.jotform.com/blog/wp-content/uploads/2017/01/react-js-700x399.png"],
  },
  {
    week: 9,
    text: "Fundamentos del desarrollo Backend y entornos Server Side",
    resumen:
     "Semana dedicada al estudio del funcionamiento de las aplicaciones web desde el lado del servidor. Se abordaron las principales arquitecturas web (MPA, SPA, híbridas, MVC, multicapa y hexagonal), el modelo cliente-servidor, servidores web y de aplicaciones, hosting y cloud computing. Además, se trabajó con Apache Tomcat, JSP y la gestión de dependencias en proyectos Java mediante Maven, incorporando conceptos básicos de seguridad con autenticación basada en tokens.",
    retroalimentacion:
      "Esta semana permitió consolidar la comprensión del flujo completo del Server Side y su importancia en aplicaciones web modernas. Los estudiantes lograron identificar distintas arquitecturas y tecnologías según el contexto de uso, fortaleciendo su base para el desarrollo backend. Es un paso clave para afrontar proyectos más complejos y escalables en las siguientes unidades.",
    galeria: ["https://facingenieria.udistrital.edu.co/laboratorios/labing/sites/labing/files/imagen-principal-laboratorio/2025-06/En%20construcci%C3%B3n%20%2870%29.png","https://www.muylinux.com/wp-content/uploads/2019/09/Jakarta.jpg"],
  },
  {
    week: 10,
    text: "Desarrollo Backend con Java y Frameworks Spring",
    resumen:
      "Semana centrada en el desarrollo de aplicaciones backend utilizando Java. Se trabajó con Apache Tomcat como servidor de aplicaciones, el uso de JSP para la creación de vistas dinámicas y la gestión de dependencias con Maven. Además, se abordó la implementación del patrón MVC y el desarrollo de APIs REST mediante Spring Framework y Spring Boot, integrando bases de datos MySQL y operaciones CRUD.",
    retroalimentacion:
      "Esta semana permitió consolidar habilidades clave en el desarrollo backend con Java, combinando tecnologías tradicionales como JSP con frameworks modernos como Spring Boot. Los estudiantes lograron comprender el flujo completo de una aplicación Java web, desde la configuración del servidor hasta la exposición y prueba de servicios REST, fortaleciendo su preparación para proyectos backend más robustos.",
    galeria: ["crud-sem-9.png","mysql-sem-9.png"],
  },
  {
    week: 11,
    text: "Implementación profesional de APIs REST con Spring Boot",
    resumen:
      "Semana orientada al desarrollo avanzado de APIs REST utilizando Spring Boot. Se incorporaron validaciones de datos con Jakarta Validation, manejo global de excepciones, consultas personalizadas con Spring Data JPA, paginación y ordenamiento de resultados. Además, se documentaron los servicios mediante Swagger/OpenAPI y se realizaron pruebas completas de los endpoints utilizando Postman.",
    retroalimentacion:
      "Los contenidos de esta semana permitieron elevar la calidad y robustez de las APIs desarrolladas, aplicando buenas prácticas utilizadas en entornos profesionales. Los estudiantes lograron construir servicios REST más seguros, documentados y optimizados, fortaleciendo sus competencias para el desarrollo backend y la integración con aplicaciones cliente.",
    galeria: ["sem11-1.png","sem11-2.png"],
  },
  {
    week: 12,
    text: "Desarrollo seguro de aplicaciones Backend con Laravel",
    resumen:
      "Semana enfocada en el desarrollo backend avanzado utilizando Laravel. Se trabajó la autenticación de usuarios mediante Laravel Breeze, la validación de formularios, el uso de middleware para la protección de rutas y la seguridad con tokens CSRF. Además, se desarrollaron operaciones CRUD completas utilizando Eloquent ORM y se profundizó en el uso de Blade para la construcción de vistas reutilizables y organizadas.",
    retroalimentacion:
      "Esta semana permitió reforzar conceptos clave de seguridad y estructura en aplicaciones web modernas desarrolladas con Laravel. Los estudiantes lograron integrar autenticación, control de acceso y operaciones CRUD de manera eficiente, consolidando buenas prácticas de desarrollo backend y fortaleciendo su capacidad para construir aplicaciones seguras y mantenibles.",
    galeria: ["https://tekicha.com/images/laravel-featured.png?845b69e530cc37b6e466bc24b85d78c7","https://www.dongee.com/tutoriales/content/images/size/w1000/2023/01/image-65.png"],
  },
  {
    week: 13,
    text: "Diseño y construcción de APIs RESTful",
    resumen:
      "Semana dedicada al diseño de APIs RESTful, abordando los principios fundamentales de REST, el uso de APIs de hipermedios y el concepto de HATEOAS. Se trabajó la serialización de modelos y otras fuentes de datos, así como la implementación de filtrado, paginación y límites de uso. Además, se estudiaron conceptos clave como ruteadores, conjuntos de vistas, comunicación mediante AJAX y mecanismos de seguridad como CSRF y CORS, aplicando los conocimientos en un laboratorio práctico de desarrollo backend.",
    retroalimentacion:
      "Esta semana permitió reforzar el diseño correcto de APIs REST orientadas a la escalabilidad y el consumo eficiente de datos. La integración de conceptos de seguridad, control de acceso y buenas prácticas de comunicación entre cliente y servidor fortaleció las competencias técnicas necesarias para el desarrollo de servicios backend robustos y profesionales.",
    galeria: ["sem13-1.png","sem13-2.png"],
  },
  {
    week: 14,
    text: "Introducción al desarrollo Backend con Python y Frameworks Web",
    resumen:
      "Semana orientada a los fundamentos del desarrollo backend utilizando Python. Se abordó el funcionamiento de servidores web con Apache HTTP Server, su integración con aplicaciones Python mediante mod_wsgi y la instalación y configuración del entorno de desarrollo. Además, se estudiaron los fundamentos del lenguaje Python, buenas prácticas de codificación bajo el estándar PEP 8 y el desarrollo de aplicaciones web básicas utilizando Flask, junto con el uso del motor de plantillas Jinja2.",
    retroalimentacion:
      "Esta semana permitió ampliar el panorama del desarrollo backend incorporando Python como alternativa a otros lenguajes y frameworks. Los estudiantes lograron comprender la integración entre servidor web y aplicaciones Python, aplicar buenas prácticas de programación y construir aplicaciones web funcionales con Flask, fortaleciendo su versatilidad técnica para distintos entornos de desarrollo.",
    galeria: ["sem14-1.png","sem14-2.png"],
  },
  {
    week: 15,
    text: "Fundamentos y desarrollo de sistemas inteligentes con Python",
    resumen:
      "Semana dedicada al estudio de los sistemas inteligentes, abordando sus capacidades fundamentales como percepción, razonamiento, aprendizaje y toma de decisiones. Se analizaron sus principales ámbitos de aplicación y arquitecturas, así como algoritmos de decisión basados en reglas IF-THEN, lógica difusa y modelos de aprendizaje automático. Además, se exploraron conceptos de redes neuronales, deep learning, modelos discriminativos y generativos, y Large Language Models (LLM). A nivel práctico, se desarrolló una aplicación web con Flask que integra un modelo Llama 3 para interacción conversacional.",
    retroalimentacion:
      "Esta semana permitió comprender de forma integral cómo se diseñan y construyen sistemas inteligentes, combinando fundamentos teóricos de inteligencia artificial con una implementación práctica en entorno web. La integración de un LLM mediante Flask reforzó la relación entre backend e inteligencia artificial, consolidando competencias clave para el desarrollo de soluciones inteligentes modernas.",
    galeria: ["sem15-1.png","sem15-2.png"],
  },
  {
    week: 16,
    text: "Diseño de un sistema de Inteligencia Artificial aplicado al análisis legal como Final de curso",
    resumen:
      "Semana dedicada al diseño de un sistema completo de inteligencia artificial para la clasificación automática de textos de patentes. Se analizó el modelo propuesto en el artículo PyPatentAlice y se implementó una solución basada en NLP y Machine Learning utilizando SVM y representación TF-IDF. El sistema fue estructurado bajo una arquitectura cliente-servidor en tres capas, integrando un backend con Flask y API REST segura, un frontend desarrollado en React y una base de datos MySQL para la gestión de usuarios y resultados.",
    retroalimentacion:
      "Esta última semana integró de manera efectiva los conocimientos adquiridos a lo largo del curso, combinando desarrollo web, arquitectura backend y modelos de inteligencia artificial. Los estudiantes lograron comprender cómo aplicar técnicas de NLP y Machine Learning en un contexto real, diseñando soluciones escalables y funcionales que conectan frontend, backend y modelos de IA en un sistema profesional.",
    galeria: ["https://siemprendes.com/wp-content/uploads/2024/11/desarrollo-de-aplicaciones-web.jpg","sem16-1.png"],
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
  const [selectedFeedback, setSelectedFeedback] = useState<FeedbackItem | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null); // <-- imagen emergente

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
        Cuaderno
      </motion.h2>

      {/* Línea central del timeline */}
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

      {/* Modal de feedback */}
      {selectedFeedback && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setSelectedFeedback(null)}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">
              Semana {selectedFeedback.week}
            </h3>

            <div className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                <strong>Resumen:</strong> {selectedFeedback.resumen}
              </p>
              <p>
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
                        className="rounded-lg shadow-md object-cover w-full h-32 cursor-pointer"
                        onClick={() => setModalImage(img)}
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
          </div>
        </motion.div>
      )}

      {/* Modal emergente de imagen */}
      {modalImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
              aria-label="Cerrar imagen"
            >
              ×
            </button>
            <img
              src={modalImage}
              alt="Imagen ampliada"
              className="rounded-lg max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
