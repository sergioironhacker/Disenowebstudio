import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Server, Palette, Rocket } from 'lucide-react';

export default function Services() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const services = [
    {
      icon: Code,
      title: { es: 'Desarrollo Frontend', en: 'Frontend Development' },
      description: { es: 'Interfaces modernas y responsive con React, TypeScript y Tailwind CSS. Experiencias de usuario fluidas y atractivas.', en: 'Modern and responsive interfaces with React, TypeScript and Tailwind CSS. Smooth and attractive user experiences.' },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: { es: 'Desarrollo Backend', en: 'Backend Development' },
      description: { es: 'APIs RESTful robustas con Node.js, Express y MongoDB. Arquitecturas escalables y seguras.', en: 'Robust RESTful APIs with Node.js, Express and MongoDB. Scalable and secure architectures.' },
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: { es: 'Diseño y UX', en: 'Design & UX' },
      description: { es: 'Diseño de interfaces intuitivas centradas en el usuario. Prototipado y mejora de experiencias digitales.', en: 'Intuitive user-centered interface design. Prototyping and improvement of digital experiences.' },
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: { es: 'Optimización y SEO', en: 'Optimization & SEO' },
      description: { es: 'Performance optimization, SEO técnico y mejores prácticas web. Sitios rápidos y bien posicionados.', en: 'Performance optimization, technical SEO and web best practices. Fast and well-positioned sites.' },
      color: 'from-orange-500 to-red-500'
    }
  ];

  const title = language === 'es' ? 'Qué ofrezco' : 'What I offer';
  const subtitle = language === 'es'
    ? 'Servicios integrales de desarrollo web'
    : 'Comprehensive web development services';

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  {language === 'es' ? service.title.es : service.title.en}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {language === 'es' ? service.description.es : service.description.en}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-4 transition-all">
                  <span className="text-sm">{language === 'es' ? 'Más información' : 'Learn more'}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {language === 'es'
              ? '¿Tienes un proyecto en mente? Hagámoslo realidad juntos'
              : 'Have a project in mind? Let\'s make it happen together'
            }
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-2xl hover:from-primary-700 hover:to-accent-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl font-display font-semibold"
          >
            {language === 'es' ? 'Iniciar proyecto' : 'Start project'}
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}