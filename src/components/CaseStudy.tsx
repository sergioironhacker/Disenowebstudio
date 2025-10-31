import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Github, ExternalLink } from 'lucide-react';

export default function CaseStudy(): JSX.Element {
  const { t, language, setLanguage } = useLanguage() as {
    t: any;
    language?: 'es' | 'en' | string;
    setLanguage?: (l: 'es' | 'en' | string) => void;
  };

  useEffect(() => {
    if ((language === undefined || language === null || language === '') && typeof setLanguage === 'function') {
      setLanguage('es');
    }
  }, []);

  const lang = language || 'es';

  const caseStudyData = {
    github: 'https://github.com/tuusuario/ecommerce-platform',
    demo: 'https://ecommerce-demo.vercel.app'
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Solo CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={caseStudyData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all hover:scale-105 shadow-lg font-semibold"
          >
            <Github className="w-5 h-5" />
            {t.projects?.viewCode ?? (lang === 'es' ? 'Ver Código' : 'View Code')}
          </a>

          <a
            href={caseStudyData.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg font-semibold"
          >
            <ExternalLink className="w-5 h-5" />
            {t.caseStudy?.viewProject ?? (lang === 'es' ? 'Ver Proyecto' : 'View Project')}
          </a>
        </div>
      </div>
    </section>
  );
}