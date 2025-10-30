import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function TechStack() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-600' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-lime-600' },
    { name: 'Express', icon: '🚂', color: 'from-gray-600 to-gray-800' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-800' },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-blue-500' },
    { name: 'Git', icon: '🔀', color: 'from-orange-500 to-red-600' },
  ];

  const title = language === 'es' ? 'Tecnologías con las que trabajo' : 'Technologies I work with';
  const subtitle = language === 'es'
    ? 'Herramientas modernas para crear soluciones excepcionales'
    : 'Modern tools to create exceptional solutions';

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

              <div className="relative text-center space-y-4">
                <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {tech.name}
                </h3>
              </div>

              {/* Animated border on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-20 rounded-2xl blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-full border border-primary-100 dark:border-primary-800">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {language === 'es' ? 'Actualizándome constantemente con las últimas tecnologías' : 'Constantly updating with the latest technologies'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}