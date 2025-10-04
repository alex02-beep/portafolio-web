export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold">Mi Portafolio</h1>
      <nav>
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-blue-500">Sobre mí</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Proyectos</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Habilidades</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
