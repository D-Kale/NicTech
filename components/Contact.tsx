import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-600 dark:bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white text-blue-600 dark:bg-gray-700 dark:text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Solicita una Cotización</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                    <Input id="name" placeholder="Tu nombre" className="mt-1" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <Input id="email" type="email" placeholder="tu@email.com" className="mt-1" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
                    <Textarea id="message" placeholder="Cuéntanos sobre tu proyecto" className="mt-1" />
                  </div>
                  <Button type="submit" className="w-full">Enviar Solicitud</Button>
                </form>
              </CardContent>
            </Card>
            <Card className="bg-white text-blue-600 dark:bg-gray-700 dark:text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2"><strong>Dirección:</strong> Calle Principal #123, Ciudad, País</p>
                <p className="mb-2"><strong>Teléfono:</strong> +123 456 7890</p>
                <p className="mb-2"><strong>Email:</strong> info@nictech.com</p>
                <p><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}