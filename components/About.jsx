import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Sobre NicTech</h2>
          <p className="text-lg mb-8 dark:text-gray-300">
            En NicTech, nuestra misión es inculcar y promover la programación y la tecnología en nuestro país. 
            Creemos que a través del acceso a herramientas digitales personalizadas, podemos aportar a una 
            cultura tecnológica más sólida y democratizada.
          </p>
          <p className="text-lg mb-8 dark:text-gray-300">
            Nuestra visión es convertirnos en una de las empresas tecnológicas más buscadas del país, 
            no solo por la calidad de nuestros productos, sino también por el impacto positivo que queremos 
            dejar en la industria tecnológica local.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="dark:bg-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Nuestra Historia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="dark:text-gray-300">
                Fundada en 2024, NicTech nació de la pasión por la tecnología y el deseo de impulsar la innovación en nuestro país. 
                Desde entonces, hemos crecido constantemente, ampliando nuestros servicios y construyendo un equipo de expertos dedicados.
              </p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-700">
            
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Nuestros Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside dark:text-gray-300">
                <li>Innovación constante</li>
                <li>Compromiso con la calidad</li>
                <li>Enfoque en el cliente</li>
                <li>Responsabilidad social</li>
                <li>Trabajo en equipo</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center dark:text-white">Nuestro Equipo</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <TeamMember 
              name="Andres Sanchez" 
              image="https://images.unsplash.com/photo-1581331474665-a0bbee7dfba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              role="Desarrollador Full Stack"
            />
            <TeamMember 
              name="Rodney Morales" 
              image="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              role="Encargado de ventas"
            />
            <TeamMember 
              name="Moises Fonseca" 
              image="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              role="Especialista en Diseño"
            />
            <TeamMember 
              name="Carlos Mora" 
              image="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              role="Economista profecional"
            />
            <TeamMember 
              name="Emmanuel Murillo" 
              image="https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              role="Analista de Datos"
            />
            <TeamMember 
              name="Luis Espinoza" 
              image="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              role="Especialista en bases de datos"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamMember({ name, image, role }) {
  return (
    <div className="text-center">
      <div className="relative inline-block">
        <Image src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-2 object-cover" />
      </div>
      <p className="font-medium dark:text-white">{name}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
    </div>
  )
}