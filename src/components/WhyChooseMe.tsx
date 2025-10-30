import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code2, TrendingUp, MessageSquare, Zap } from 'lucide-react';

export default function WhyChooseMe() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const points = [
    {
      icon: Code2,
      title: t.whyChooseMe.point1.title,
      description: t.whyChooseMe.point1.description,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: t.whyChooseMe.point2.title,
      description: t.whyChooseMe.point2.description,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: t.whyChooseMe.point3.title,
      description: t.whyChooseMe.point3.description,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageSquare,
      title: t.whyChooseMe.point4.title,
      description: t.whyChooseMe.point4.description,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mx-auto"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            {t.whyChooseMe.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.whyChooseMe.subtitle}
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Decorative gradient background */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${point.color} opacity-5 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

              <div className="relative flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>

              {/* Subtle line decoration */}
              <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r ${point.color} opacity-20`}></div>
            </div>
          ))}
        </div>

        {/* Bottom separator */}
        <div className="mt-16 flex items-center justify-center">
          <div className="h-px w-64 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}