import { useState } from 'react';
import { Download, FileText, Eye, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CVViewer() {
  const [showViewer, setShowViewer] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <>
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Curriculum Vitae
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Descarga mi CV o visualízalo en línea
          </p>

          <div
            className={`bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-12 shadow-xl transform transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl mb-6 animate-pulse">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Mi Experiencia Profesional
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Desarrollador Full Stack | Stack MERN | Ironhack
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowViewer(true)}
                className="group px-8 py-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-2 border-blue-600 dark:border-blue-400 rounded-full hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 font-semibold"
              >
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Ver CV Online
              </button>
              <a
                href="/SergioCv.pdf"
                download
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 font-semibold"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Descargar PDF
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
            </div>
          </div>
        </div>
      </section>

      {/* CV Viewer Modal */}
      {showViewer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full h-[90vh] flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Curriculum Vitae
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="/SergioCv.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Descargar
                </a>
                <button
                  onClick={() => setShowViewer(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  aria-label="Cerrar visor"
                >
                  <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* PDF Viewer / Content */}
            <div className="flex-1 overflow-auto p-8 bg-gray-50 dark:bg-gray-900">
              <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 space-y-8">
                {/* Header */}
                <div className="text-center border-b-2 border-blue-600 pb-6">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    Sergio
                  </h1>
                  <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                    Desarrollador Full Stack
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>tu@email.com</span>
                    <span>•</span>
                    <span>+34 123 456 789</span>
                    <span>•</span>
                    <span>Madrid, España</span>
                  </div>
                </div>

                {/* Profile */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    Perfil Profesional
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Desarrollador Full Stack apasionado con formación en Ironhack, especializado en el stack MERN.
                    Con experiencia en el desarrollo de aplicaciones web modernas, APIs RESTful y diseño de interfaces
                    de usuario intuitivas. Capacidad demostrada para trabajar en equipo y adaptarse rápidamente a nuevas
                    tecnologías.
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Habilidades Técnicas
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
                      <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                        <li>• React.js & React Hooks</li>
                        <li>• JavaScript (ES6+)</li>
                        <li>• TypeScript</li>
                        <li>• HTML5 & CSS3</li>
                        <li>• Tailwind CSS</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
                      <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                        <li>• Node.js & Express</li>
                        <li>• MongoDB & Mongoose</li>
                        <li>• REST APIs</li>
                        <li>• JWT Authentication</li>
                        <li>• Git & GitHub</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Formación
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        Full Stack Web Development Bootcamp
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">Ironhack - 2024</p>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        Bootcamp intensivo de 9 semanas enfocado en desarrollo web full stack con JavaScript,
                        React, Node.js, Express y MongoDB.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Proyectos Destacados
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">E-commerce Platform</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        React • Node.js • MongoDB • Express
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Plataforma completa de e-commerce con sistema de autenticación, carrito de compras
                        y panel de administración.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Task Manager App</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        React • TypeScript • Socket.io • Node.js
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Idiomas
                  </h2>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Español - Nativo</li>
                    <li>• Inglés - Intermedio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}