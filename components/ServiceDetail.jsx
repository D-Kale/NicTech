import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';

export default function ServiceDetail({ service }) {
  if (!service) return null;

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <Card className="bg-white dark:bg-gray-700 dark:text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-3xl font-bold mb-4">
              {service.icon}
              <span>{service.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6 dark:text-gray-300">{service.description}</p>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Detalles del Servicio</h3>
            <p className="dark:text-gray-300">{service.details}</p>
            
            <div className="container flex items-center mt-6">
              <Image width={80} src="/images/logo.png" alt="codigo" /> <p className=" text-xl font-bold ml-5"> NicTechLicensed </p>
            </div>
            
          </CardContent>
        </Card>
      </div>
    </section>
  )
}