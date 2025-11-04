import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 1,
    title: 'Agencia de seguros e inversiones',
    description: 'Plataforma de seguros e inversiones.',
    fullDescription: 'Plataforma de seguros e inversiones.',
    image: '/agencia2.png',
    images: [
      '/agencia.png',
      '/agencia3.png'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe'],
    categories: ['React', 'Node.js', 'MongoDB'],
    challenges: [
      'Implementación de un sistema de autenticación seguro con JWT',
      'Optimización de consultas a la base de datos para mejorar el rendimiento',
      'Integración de pasarela de pagos con Stripe'
    ],
    learnings: [
      'Mejores prácticas en seguridad de aplicaciones web',
      'Arquitectura de microservicios',
      'Gestión de estado complejo en React'
    ],
    github: 'https://github.com/sergioironhacker',
    demo: 'https://www.segurosrodriguezherrero.es/'
  },
  {
    id: 2,
    title: 'Gimnasio bekdoosan Segovia',
    description: 'Aplicación de gestión del gimansio',
    fullDescription: 'Aplicación de gestión de tareas colaborativa que permite a los equipos trabajar juntos en tiempo real. Incluye tableros tipo Kanban, asignación de tareas, comentarios, adjuntos de archivos, notificaciones en tiempo real con Socket.io, y filtros avanzados. Los usuarios pueden crear espacios de trabajo, invitar colaboradores y hacer seguimiento del progreso de proyectos.',
    image: '/gimansio1.png',
    images: [
      '/gimnasio2.png',
      '/gimnasio3.png'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'MongoDB'],
    categories: ['React', 'Node.js', 'MongoDB'],
    challenges: [
      'Sincronización en tiempo real entre múltiples usuarios',
      'Gestión de estado con TypeScript para mayor seguridad de tipos',
      'Optimización de re-renders en React para mejor rendimiento'
    ],
    learnings: [
      'WebSockets y comunicación bidireccional',
      'TypeScript avanzado con React',
      'Patrones de diseño para aplicaciones colaborativas'
    ],
    github: 'https://github.com/sergioironhacker/Gimnasio-Bekdoosan',
    demo: 'https://bekdoosan.com/'
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Dashboard para gestión de redes sociales con análisis de métricas y programación de publicaciones.',
    fullDescription: 'Dashboard integral para gestión de redes sociales que permite a los usuarios conectar múltiples cuentas, programar publicaciones, analizar métricas de engagement, y generar reportes detallados. Incluye visualización de datos con gráficos interactivos, calendario de contenidos, y herramientas de análisis de audiencia.',
    image: '/galeria.png',
    images: [
      '/galeria2.png',
      '/galeria3.png'
    ],
    tech: ['React', 'MongoDB', 'Express', 'Chart.js', 'Node.js'],
    categories: ['React', 'MongoDB', 'Node.js'],
    challenges: [
      'Integración con APIs de múltiples redes sociales',
      'Visualización eficiente de grandes volúmenes de datos',
      'Sistema de programación de publicaciones con cron jobs'
    ],
    learnings: [
      'Trabajo con APIs externas y OAuth',
      'Visualización de datos con Chart.js',
      'Automatización de tareas con Node.js'
    ],
    github: 'https://github.com/sergioironhacker/Luciano-Pintor',
    demo: 'https://luciano-esteban.vercel.app/'
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Aplicación del clima con pronósticos detallados, mapas interactivos y alertas personalizadas.',
    fullDescription: 'Aplicación meteorológica completa que proporciona pronósticos precisos, condiciones actuales, mapas de radar interactivos, y alertas personalizadas. Los usuarios pueden guardar ubicaciones favoritas, ver históricos del clima, y recibir notificaciones sobre condiciones climáticas severas.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    tech: ['React', 'API REST', 'Tailwind CSS', 'OpenWeatherMap'],
    categories: ['React'],
    challenges: [
      'Integración de APIs de clima en tiempo real',
      'Geolocalización y manejo de permisos del navegador',
      'Diseño responsive con visualización de datos compleja'
    ],
    learnings: [
      'Consumo y manejo de APIs REST',
      'Geolocalización en aplicaciones web',
      'UX/UI para aplicaciones de datos en tiempo real'
    ],
    github: 'https://github.com/sergioironhacker',
    demo: 'https://github.com/sergioironhacker'
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'Plataforma de blogging con editor de texto enriquecido, categorías y sistema de comentarios.',
    fullDescription: 'Plataforma completa de blogging con editor de texto enriquecido tipo Medium, sistema de categorías y etiquetas, comentarios anidados, búsqueda full-text, y sistema de reacciones. Los autores pueden gestionar sus publicaciones, ver estadísticas de lecturas, y los lectores pueden seguir a sus autores favoritos.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Quill.js'],
    categories: ['React', 'Node.js', 'MongoDB'],
    challenges: [
      'Implementación de un editor de texto rico funcional',
      'Sistema de búsqueda full-text eficiente',
      'Optimización de SEO para contenido dinámico'
    ],
    learnings: [
      'Editores de texto WYSIWYG en React',
      'Indexación y búsqueda en MongoDB',
      'SEO para aplicaciones Single Page'
    ],
    github: 'https://github.com/sergioironhacker',
    demo: 'https://github.com/sergioironhacker'
  },
  {
    id: 6,
    title: 'Portfolio Generator',
    description: 'Herramienta para crear portfolios profesionales de forma rápida con plantillas personalizables.',
    fullDescription: 'Generador de portfolios que permite a desarrolladores y creativos crear sitios web profesionales sin escribir código. Incluye múltiples plantillas, editor visual drag-and-drop, selector de colores y tipografías, galería de proyectos, formulario de contacto, y exportación del sitio completo.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'DnD Kit'],
    categories: ['React'],
    challenges: [
      'Sistema de drag-and-drop complejo y fluido',
      'Generación dinámica de código exportable',
      'Sistema de temas personalizable en tiempo real'
    ],
    learnings: [
      'Bibliotecas de drag-and-drop en React',
      'Generación de código dinámico',
      'Sistemas de diseño escalables con Tailwind'
    ],
    github: 'https://github.com/sergioironhacker',
    demo: 'https://github.com/sergioironhacker'
  }
];

const categories = ['Todos', 'React', 'Node.js', 'MongoDB'];

export default function ProjectsEnhanced() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const { ref, isVisible } = useScrollAnimation(0.1);

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(project => project.categories.includes(selectedCategory));

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

 return (
  <section ref={ref} id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        Mis Proyectos
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 text-lg">
        Una selección de mis trabajos más recientes
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-2.5" />
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group cursor-pointer transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => openModal(project)}
          >
            {/* Imagen ajustada al contenedor */}
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Ver Detalles</span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Código
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
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

    {/* Project Modal */}
    {selectedProject && (
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    )}
  </section>
);

}