import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, autenticación de usuarios y panel de administración.',
    image: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/tuusuario/proyecto1',
    demo: 'https://proyecto1.vercel.app'
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'TypeScript', 'Node.js', 'Socket.io'],
    github: 'https://github.com/tuusuario/proyecto2',
    demo: 'https://proyecto2.vercel.app'
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Dashboard para gestión de redes sociales con análisis de métricas y programación de publicaciones.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'MongoDB', 'Express', 'Chart.js'],
    github: 'https://github.com/tuusuario/proyecto3',
    demo: 'https://proyecto3.vercel.app'
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Aplicación del clima con pronósticos detallados, mapas interactivos y alertas personalizadas.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'API REST', 'Tailwind CSS'],
    github: 'https://github.com/tuusuario/proyecto4',
    demo: 'https://proyecto4.vercel.app'
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'Plataforma de blogging con editor de texto enriquecido, categorías y sistema de comentarios.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/tuusuario/proyecto5',
    demo: 'https://proyecto5.vercel.app'
  },
  {
    id: 6,
    title: 'Portfolio Generator',
    description: 'Herramienta para crear portfolios profesionales de forma rápida con plantillas personalizables.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    github: 'https://github.com/tuusuario/proyecto6',
    demo: 'https://proyecto6.vercel.app'
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Mis Proyectos
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Una selección de mis trabajos más recientes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}