import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Rocket, Users, BarChart, Globe, Shield, Clock, Palette } from "lucide-react"

export default function Home({ navigateToServices }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Soluciones Tecnológicas Integrales</h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">Impulsando la innovación digital para empresas y startups</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600" onClick={navigateToServices}>
            Conoce Nuestros Servicios
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Rocket className="h-10 w-10 text-blue-500" />}
            title="Innovación Constante"
            description="Nos mantenemos a la vanguardia de las últimas tecnologías para ofrecer soluciones de punta."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-blue-500" />}
            title="Equipo Experto"
            description="Nuestro equipo de profesionales altamente capacitados garantiza resultados excepcionales."
          />
          <FeatureCard
            icon={<BarChart className="h-10 w-10 text-blue-500" />}
            title="Resultados Medibles"
            description="Nos enfocamos en proporcionar soluciones que impulsen el crecimiento y éxito de tu negocio."
          />
        </div>
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">¿Por qué elegir NicTech?</h3>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">En NicTech, no solo ofrecemos servicios tecnológicos, sino que nos convertimos en tu socio estratégico para el crecimiento digital.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <WhyChooseUsCard
            icon={<Globe className="h-8 w-8 text-blue-500" />}
            title="Alcance Global"
            description="Nuestras soluciones están diseñadas para ayudarte a expandir tu presencia en línea a nivel mundial."
          />
          <WhyChooseUsCard
            icon={<Shield className="h-8 w-8 text-blue-500" />}
            title="Seguridad Primero"
            description="Implementamos las mejores prácticas de seguridad para proteger tus datos y los de tus clientes."
          />
          <WhyChooseUsCard
            icon={<Clock className="h-8 w-8 text-blue-500" />}
            title="Soporte 24/7"
            description="Nuestro equipo está disponible en todo momento para asistirte con cualquier problema o consulta."
          />
          <WhyChooseUsCard
            icon={<Palette className="h-8 w-8 text-blue-500" />}
            title="Diseño Personalizado"
            description="Creamos soluciones a medida que se adaptan perfectamente a tu marca y necesidades específicas."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

function WhyChooseUsCard({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="mb-4">{icon}</div>
      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h4>
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  )
}