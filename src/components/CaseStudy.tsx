import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle, Target, Lightbulb, Rocket, TrendingUp, ExternalLink, Github } from 'lucide-react';

export default function CaseStudy() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const caseStudyData = {
    title: 'E-commerce Platform',
    tagline: 'Plataforma completa de comercio electrónico con MERN Stack',
    image: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/tuusuario/ecommerce-platform',
    demo: 'https://ecommerce-demo.vercel.app'
  };

  const lang = language || 'es';

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.caseStudy?.title ?? caseStudyData.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t.caseStudy?.subtitle ?? caseStudyData.tagline}
          </p>
        </div>

        {/* Hero Image */}
        <div
          className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <img src={caseStudyData.image} alt={caseStudyData.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="p-8 sm:p-12 text-white">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">{caseStudyData.title}</h3>
              <p className="text-xl text-blue-200">{caseStudyData.tagline}</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
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
