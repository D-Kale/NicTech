import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Smartphone, Palette, Laptop, Wrench } from "lucide-react"

export default function Services({ showServiceDetail }) {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-blue-500" />,
      title: "Desarrollo Web",
      description: "Creamos sitios web personalizados y optimizados para tu negocio. Utilizamos las últimas tecnologías para garantizar rendimiento y escalabilidad.",
      details: "Nuestro servicio de desarrollo web abarca desde sitios estáticos hasta aplicaciones web complejas. Utilizamos tecnologías modernas como React, Next.js, y Node.js para crear soluciones web robustas y escalables. Nos enfocamos en la optimización del rendimiento, la accesibilidad y el SEO para asegurar que tu sitio web no solo se vea bien, sino que también funcione eficientemente y sea fácil de encontrar en los motores de búsqueda."
    },
    {
      icon: <Database className="h-10 w-10 text-blue-500" />,
      title: "Gestión de Bases de Datos",
      description: "Diseñamos y optimizamos bases de datos para un manejo eficiente de la información. Implementamos soluciones seguras y escalables.",
      details: "Nuestro servicio de gestión de bases de datos incluye el diseño, implementación y optimización de bases de datos relacionales y NoSQL. Trabajamos con tecnologías como MySQL, PostgreSQL, MongoDB y Redis. Nos aseguramos de que tus datos estén seguros, sean fáciles de acceder y estén optimizados para un rendimiento máximo. También ofrecemos servicios de migración de datos y respaldo para garantizar la integridad y disponibilidad de tu información."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-blue-500" />,
      title: "Desarrollo de Apps Móviles",
      description: "Desarrollamos aplicaciones móviles intuitivas y funcionales para iOS y Android, enfocadas en la experiencia del usuario.",
      details: "Nuestro equipo de desarrollo de apps móviles crea aplicaciones nativas y multiplataforma para iOS y Android. Utilizamos frameworks como React Native y Flutter para desarrollar aplicaciones eficientes y con una experiencia de usuario fluida. Nos enfocamos en el diseño intuitivo, la optimización del rendimiento y la integración de características avanzadas como notificaciones push, geolocalización y sincronización en la nube."
    },
    {
      icon: <Palette className="h-10 w-10 text-blue-500" />,
      title: "Diseño UX/UI",
      description: "Creamos interfaces atractivas y fáciles de usar para mejorar la experiencia del usuario. Nuestros diseños son intuitivos y estéticamente agradables.",
      details: "Nuestro servicio de diseño UX/UI se centra en crear experiencias de usuario excepcionales. Comenzamos con una investigación exhaustiva de usuarios y la creación de personas para entender las necesidades de tu audiencia. Luego, desarrollamos wireframes, prototipos interactivos y diseños finales que no solo son visualmente atractivos, sino también intuitivos y fáciles de usar. Utilizamos herramientas como Figma y Adobe XD para crear diseños responsivos y accesibles."
    },
    {
      icon: <Laptop className="h-10 w-10 text-blue-500" />,
      title: "Mantenimiento de Computadoras",
      description: "Ofrecemos soporte técnico para mantener tus equipos en óptimas condiciones. Realizamos mantenimiento preventivo y correctivo.",
      details: "Nuestro servicio de mantenimiento de computadoras abarca tanto el mantenimiento preventivo como el correctivo. Realizamos limpieza de hardware, actualizaciones de software, optimización del sistema operativo y resolución de problemas. También ofrecemos servicios de recuperación de datos y actualización de componentes para extender la vida útil de tus equipos. Nuestro objetivo es mantener tus computadoras funcionando de manera eficiente y prevenir problemas antes de que ocurran."
    },
    {
      icon: <Wrench className="h-10 w-10 text-blue-500" />,
      title: "Soporte Técnico",
      description: "Brindamos asistencia continua para resolver problemas y optimizar tus sistemas. Estamos disponibles para ayudarte en cualquier momento.",
      details: "Nuestro servicio de soporte técnico está diseñado para proporcionar asistencia rápida y eficiente para todos tus problemas tecnológicos. Ofrecemos soporte remoto y en sitio, con tiempos de respuesta garantizados. Nuestro equipo está capacitado para manejar una amplia gama de problemas, desde configuración de redes hasta solución de problemas de software. También proporcionamos documentación y capacitación para ayudar a tu equipo a resolver problemas comunes por sí mismos."
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onClick={() => showServiceDetail(service)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description, onClick }) {
  return (
    <Card className="bg-white dark:bg-gray-700 dark:text-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="dark:text-gray-300 mb-4">{description}</p>
        <Button onClick={onClick} variant="outline">Más Información</Button>
      </CardContent>
    </Card>
  )
}