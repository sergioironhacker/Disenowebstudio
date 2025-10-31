import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Github, ExternalLink } from 'lucide-react';

export default function CaseStudyCTA(): JSX.Element {
  const { t, language, setLanguage } = useLanguage() as {
    t: any;
    language?: 'es' | 'en' | string;
    setLanguage?: (l: 'es' | 'en' | string) => void;
  };

  // Forzar español por defecto
  useEffect(() => {
    if ((language === undefined || language === null || language === '') && typeof setLanguage === 'function') {
      setLanguage('es');
    }
  }, []);

  const lang = language || 'es';

  const caseStudyData = {
    github: 'https://github.com/tuusuario/ecommerce-platform',
    demo: 'https://ecommerce-demo.vercel.app',
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          {t.projects?.title ?? 'Proyectos Destacados'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {t.projects?.description ?? 'Revisa mis proyectos en GitHub o prueba las demos en vivo.'}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 flex-wrap">
          <a
            href={caseStudyData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all hover:scale-105 shadow-lg font-semibold"
          >
            <Github className="w-5 h-5" />
            {t.projects?.viewCode ?? 'Ver Código'}
          </a>

          <a
            href={caseStudyData.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg font-semibold"
          >
            <ExternalLink className="w-5 h-5" />
            {t.projects?.viewDemo ?? 'Ver Demo'}
          </a>
        </div>
      </div>
    </section>
  );
}
