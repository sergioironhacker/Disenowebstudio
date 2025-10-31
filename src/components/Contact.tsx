import { Mail, MapPin, Phone, Send, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mpwoynpa', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    // Ocultar mensaje después de unos segundos
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Contacto
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Hablemos sobre tu próximo proyecto
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=Sergioss772022@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Sergioss772022@gmail.com
                    </a>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Teléfono</p>
                    <a
                      href="tel:+34689195597"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +34 689195597
                    </a>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Ubicación</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Segovia, España <br />
                      Madrid, España
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disponible para */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8">
              <h4 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">
                Disponible para
              </h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Proyectos freelance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Colaboraciones
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Oportunidades laborales
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Consultoría
                </li>
              </ul>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-semibold"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>

            {/* Mensajes de estado */}
            {status === 'success' && (
              <div className="mt-6 flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>¡Mensaje enviado correctamente!</span>
              </div>
            )}
            {status === 'error' && (
              <div className="mt-6 flex items-center gap-2 text-red-600 dark:text-red-400">
                <XCircle className="w-5 h-5" />
                <span>Hubo un error al enviar el mensaje. Inténtalo de nuevo.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
