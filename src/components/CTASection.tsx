import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Mail, Calendar } from 'lucide-react';

export default function CTASection() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: '¿Buscas un desarrollador Full Stack con pasión y experiencia?',
      subtitle: 'Hablemos sobre tu próximo proyecto',
      description: 'Estoy disponible para nuevos proyectos y colaboraciones. Si buscas un desarrollador comprometido con la excelencia y la innovación, me encantaría escuchar sobre tu proyecto.',
      primaryCTA: 'Hablemos',
      secondaryCTA: 'Ver Disponibilidad'
    },
    en: {
      title: 'Looking for a Full Stack developer with passion and experience?',
      subtitle: 'Let\'s talk about your next project',
      description: 'I\'m available for new projects and collaborations. If you\'re looking for a developer committed to excellence and innovation, I\'d love to hear about your project.',
      primaryCTA: 'Let\'s Talk',
      secondaryCTA: 'Check Availability'
    }
  };

  const t = content[language];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              {t.title}
            </h2>
            <p className="text-xl sm:text-2xl text-primary-100 font-medium">
              {t.subtitle}
            </p>
          </div>

          <p className="text-lg text-primary-50 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#contacto"
              className="group px-10 py-5 bg-white text-primary-700 rounded-2xl hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center gap-3 font-display font-semibold text-lg"
            >
              <Mail className="w-6 h-6" />
              {t.primaryCTA}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contacto"
              className="px-10 py-5 bg-primary-800/30 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl hover:bg-primary-800/50 hover:border-white/50 transition-all duration-300 flex items-center gap-3 font-display font-semibold text-lg"
            >
              <Calendar className="w-6 h-6" />
              {t.secondaryCTA}
            </a>
          </div>

          <div className="pt-8 flex items-center justify-center gap-8 text-primary-100">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-white">24h</div>
              <div className="text-sm">{language === 'es' ? 'Respuesta rápida' : 'Quick response'}</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-white">100%</div>
              <div className="text-sm">{language === 'es' ? 'Compromiso' : 'Commitment'}</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-white">∞</div>
              <div className="text-sm">{language === 'es' ? 'Revisiones' : 'Revisions'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}