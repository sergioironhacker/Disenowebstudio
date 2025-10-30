import { GraduationCap, Briefcase, Code } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const timelineData = [
  {
    id: 1,
    year: '2024',
    title: 'Full Stack Web Development Bootcamp',
    institution: 'Ironhack',
    description: 'Bootcamp intensivo de 9 semanas enfocado en el stack MERN (MongoDB, Express, React, Node.js). Desarrollo de múltiples proyectos full stack.',
    icon: GraduationCap,
    type: 'education'
  },
  {
    id: 2,
    year: '2024',
    title: 'Proyectos Personales',
    institution: 'Freelance',
    description: 'Desarrollo de aplicaciones web modernas utilizando React, Node.js y MongoDB. Enfoque en UX/UI y mejores prácticas de código.',
    icon: Code,
    type: 'work'
  },
  {
    id: 3,
    year: '2023',
    title: 'Introducción al Desarrollo Web',
    institution: 'Autodidacta',
    description: 'Inicio del aprendizaje en desarrollo web con HTML, CSS y JavaScript. Primeros pasos en programación y diseño web responsive.',
    icon: GraduationCap,
    type: 'education'
  }
];

export default function Timeline() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} id="trayectoria" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Mi Trayectoria
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg">
          El camino que me ha traído hasta aquí
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className={`relative pl-20 transform transition-all duration-700 ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Icon */}
                <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center ${
                  item.type === 'education'
                    ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                    : 'bg-gradient-to-br from-green-500 to-emerald-500'
                } shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content card */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {item.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}