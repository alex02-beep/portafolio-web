import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <header className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white p-4 sticky top-0 z-50 shadow-md transition-colors duration-500">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold"> Alex | Portafolio</h1>
                <nav className="space-x-4">
                    <a href="#about" className="hover:text-gray-300">Sobre mí</a>
                    <a href="#projects" className="hover:text-gray-300">Proyectos</a>
                    <a href="#skills" className="hover:text-gray-300">Habilidades</a>
                    <a href="#contact" className="hover:text-gray-300">Contacto</a>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    )
}