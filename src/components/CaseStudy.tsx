import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCTA() {
  const language = 'es'; // Fuerza español por defecto
  const t = {
    es: {
      title: 'Proyectos Destacados',
      description: 'Revisa mis proyectos en GitHub o prueba las demos en vivo.',
      viewCode: 'Ver Código',
      viewDemo: 'Ver Demo',
    },
    en: {
      title: 'Featured Projects',
      description: 'Check my projects on GitHub or try live demos.',
      viewCode: 'View Code',
      viewDemo: 'View Demo',
    },
  };

  const lang = language === 'es' ? 'es' : 'en';

  const projects = [
    {
      github: 'https://github.com/tuusuario/ecommerce-platform',
      demo: 'https://ecommerce-demo.vercel.app',
    },
    // Puedes añadir más proyectos aquí
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          {t[lang].title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">{t[lang].description}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 flex-wrap">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all hover:scale-105 shadow-lg font-semibold"
              >
                <Github className="w-5 h-5" />
                {t[lang].viewCode}
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg font-semibold"
              >
                <ExternalLink className="w-5 h-5" />
                {t[lang].viewDemo}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
