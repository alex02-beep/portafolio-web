export default function Header() {
  return (
    <section id="inicio" className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      
      {/* Fondo semitransparente */}
      <div className="absolute inset-0 bg-[url('/foto-de-prueba.jpg')] bg-cover bg-center opacity-30"></div>
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          ¡Bienvenido a mi Portafolio!
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8">
          Soy <span className="font-semibold text-white">Alex</span>, estudiante de Ingeniería de Sistemas
        </p>
        <a href="#contact" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300">
          Contáctame
        </a>
      </div>
    </section>
  );
}
