import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/20 dark:border-gray-700/30 shadow-sm transition-all duration-500">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">

                <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white select-none">
                    Alex<span className="text-blue-500"> | Portafolio</span>
                </h1>

                <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-sm md:text-base font-medium">
                    <a
                        href="#about"
                        className="relative text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300 group"
                    >
                        Sobre mí
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="#feedback"
                        className="relative text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300 group"
                    >
                        Cuaderno
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="#reflexion-final"
                        className="relative text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300 group"
                    >
                        Reflexión
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="#contact"
                        className="relative text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300 group"
                    >
                        Contacto
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </nav>

                <div className="flex items-center space-x-4">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
