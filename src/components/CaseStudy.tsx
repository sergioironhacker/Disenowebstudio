import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle, Target, Lightbulb, Rocket, TrendingUp, ExternalLink, Github } from 'lucide-react';

export default function CaseStudy() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const caseStudyData = {
    title: 'E-commerce Platform',
    tagline: 'Plataforma completa de comercio electrónico con MERN Stack',
    image: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: {
      es: 'Desarrollo completo de una plataforma de e-commerce escalable que permite a pequeñas y medianas empresas vender sus productos en línea. El proyecto incluye gestión de inventario, carrito de compras, procesamiento de pagos y panel de administración.',
      en: 'Complete development of a scalable e-commerce platform that allows small and medium businesses to sell their products online. The project includes inventory management, shopping cart, payment processing, and admin panel.'
    },
    problem: {
      es: 'Las pequeñas empresas necesitaban una solución económica y completa para vender en línea sin depender de plataformas de terceros con comisiones elevadas.',
      en: 'Small businesses needed an affordable and complete solution to sell online without depending on third-party platforms with high commissions.'
    },
    solution: {
      es: 'Creación de una plataforma personalizable con todas las funcionalidades esenciales: catálogo de productos, sistema de búsqueda avanzado, carrito persistente, checkout seguro, integración con Stripe, y panel de administración intuitivo.',
      en: 'Creation of a customizable platform with all essential features: product catalog, advanced search system, persistent cart, secure checkout, Stripe integration, and intuitive admin panel.'
    },
    techStack: [
      { name: 'React', color: 'from-blue-500 to-cyan-500' },
      { name: 'Node.js', color: 'from-green-500 to-emerald-500' },
      { name: 'MongoDB', color: 'from-green-600 to-lime-600' },
      { name: 'Express', color: 'from-gray-600 to-gray-700' },
      { name: 'Stripe', color: 'from-purple-500 to-pink-500' },
      { name: 'JWT', color: 'from-orange-500 to-red-500' }
    ],
    features: [
      { es: 'Autenticación segura con JWT', en: 'Secure JWT authentication' },
      { es: 'Carrito de compras persistente', en: 'Persistent shopping cart' },
      { es: 'Procesamiento de pagos con Stripe', en: 'Stripe payment processing' },
      { es: 'Panel de administración completo', en: 'Complete admin panel' },
      { es: 'Sistema de reseñas de productos', en: 'Product review system' },
      { es: 'Búsqueda y filtros avanzados', en: 'Advanced search and filters' }
    ],
    challenges: [
      {
        title: { es: 'Seguridad en pagos', en: 'Payment security' },
        description: { es: 'Implementar un sistema de pagos seguro cumpliendo con PCI DSS', en: 'Implement a secure payment system complying with PCI DSS' },
        solution: { es: 'Integración de Stripe con tokenización de tarjetas y webhooks para confirmación de pagos', en: 'Stripe integration with card tokenization and webhooks for payment confirmation' }
      },
      {
        title: { es: 'Rendimiento', en: 'Performance' },
        description: { es: 'Mantener la app rápida con miles de productos', en: 'Keep the app fast with thousands of products' },
        solution: { es: 'Implementación de paginación, lazy loading de imágenes y caching con Redis', en: 'Implementation of pagination, image lazy loading and Redis caching' }
      },
      {
        title: { es: 'Estado del carrito', en: 'Cart state' },
        description: { es: 'Sincronizar el carrito entre dispositivos', en: 'Synchronize cart across devices' },
        solution: { es: 'Persistencia en base de datos y sincronización en tiempo real con WebSockets', en: 'Database persistence and real-time sync with WebSockets' }
      }
    ],
    results: [
      { metric: '98%', label: { es: 'Satisfacción del cliente', en: 'Client satisfaction' } },
      { metric: '2.5s', label: { es: 'Tiempo de carga promedio', en: 'Average load time' } },
      { metric: '50+', label: { es: 'Productos vendidos/día', en: 'Products sold/day' } },
      { metric: '99.9%', label: { es: 'Uptime', en: 'Uptime' } }
    ],
    futureImprovements: [
      { es: 'Implementar recomendaciones con IA', en: 'Implement AI recommendations' },
      { es: 'App móvil nativa con React Native', en: 'Native mobile app with React Native' },
      { es: 'Sistema de chat en vivo con clientes', en: 'Live chat system with customers' },
      { es: 'Integración con marketplaces', en: 'Marketplace integration' }
    ],
    github: 'https://github.com/tuusuario/ecommerce-platform',
    demo: 'https://ecommerce-demo.vercel.app'
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.caseStudy.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t.caseStudy.subtitle}
          </p>
        </div>

        <div className="space-y-16">
          {/* Hero Image */}
          <div
            className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <img
              src={caseStudyData.image}
              alt={caseStudyData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-8 sm:p-12 text-white">
                <h3 className="text-3xl sm:text-4xl font-bold mb-2">{caseStudyData.title}</h3>
                <p className="text-xl text-blue-200">{caseStudyData.tagline}</p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.caseStudy.overview}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {t.language === 'es' ? caseStudyData.overview.es : caseStudyData.overview.en}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-7 h-7 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t.caseStudy.problem}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.language === 'es' ? caseStudyData.problem.es : caseStudyData.problem.en}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-7 h-7 text-green-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t.caseStudy.solution}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.language === 'es' ? caseStudyData.solution.es : caseStudyData.solution.en}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {t.caseStudy.techStack}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudyData.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className={`px-6 py-3 bg-gradient-to-r ${tech.color} text-white rounded-xl font-semibold shadow-lg hover:scale-110 transition-transform`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.caseStudy.features}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {caseStudyData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.language === 'es' ? feature.es : feature.en}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {t.caseStudy.challenges}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudyData.challenges.map((challenge, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 shadow-lg">
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {t.language === 'es' ? challenge.title.es : challenge.title.en}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {t.language === 'es' ? challenge.description.es : challenge.description.en}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    💡 {t.language === 'es' ? challenge.solution.es : challenge.solution.en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-800 dark:to-cyan-800 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
              <TrendingUp className="w-7 h-7" />
              {t.caseStudy.results}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {caseStudyData.results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{result.metric}</div>
                  <div className="text-blue-100">
                    {t.language === 'es' ? result.label.es : result.label.en}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Improvements */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.caseStudy.futureImprovements}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {caseStudyData.futureImprovements.map((improvement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.language === 'es' ? improvement.es : improvement.en}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={caseStudyData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all hover:scale-105 shadow-lg font-semibold"
            >
              <Github className="w-5 h-5" />
              {t.projects.viewCode}
            </a>
            <a
              href={caseStudyData.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg font-semibold"
            >
              <ExternalLink className="w-5 h-5" />
              {t.caseStudy.viewProject}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}