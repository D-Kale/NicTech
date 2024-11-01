import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import Image from 'next/image';

export default function Header({ darkMode, toggleDarkMode, setActiveSection }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl"> <Image className=" size-12" src="/images/logo.png" alt="logo"/> </span>
          </div>
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">NicTech</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><a href="#" onClick={() => setActiveSection('home')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Inicio</a></li>
            <li><a href="#" onClick={() => setActiveSection('services')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Servicios</a></li>
            <li><a href="#" onClick={() => setActiveSection('about')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Nosotros</a></li>
            <li><a href="#" onClick={() => setActiveSection('contact')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contacto</a></li>
          </ul>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </div>
    </header>
  )
}