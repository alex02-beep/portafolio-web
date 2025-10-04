export default function Navbar() {
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold"> Alex | Portafolio</h1>
                <nav className="space-x-4">
                    <a href="#about" className="hover:text-gray-300">Sobre mí</a>
                    <a href="#projects" className="hover:text-gray-300">Proyectos</a>
                    <a href="#skills" className="hover:text-gray-300">Habilidades</a>
                    <a href="#contact" className="hover:text-gray-300">Contacto</a>
                </nav>
            </div>
        </header>
    )
}