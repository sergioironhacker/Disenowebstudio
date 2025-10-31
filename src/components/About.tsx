import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            {t.about.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Profile Card - LinkedIn Style */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 sticky top-24">
              {/* Header Background */}
              <div className="h-32 bg-gradient-to-r from-primary-600 to-accent-500"></div>

              {/* Profile Content */}
              <div className="px-8 pb-8">
                {/* Avatar */}
                <div className="relative -mt-16 mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 p-1 mx-auto">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                      <img
                        src="/me.png"
                        alt="Diseño Web Studio"
                        className="w-4/5 h-4/5 object-cover rounded-full scale-105"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-1/2 transform translate-x-16 translate-y-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                    Sergio
                  </h3>
                  <p className="text-lg text-gradient font-semibold mb-1">
                    Full Stack Developer
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    MERN Stack Specialist
                  </p>
                </div>

                {/* Info Grid */}
                <div className="space-y-4 border-t border-gray-100 dark:border-gray-700 pt-6">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span className="text-sm">Segovia, España</span>
                    
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <GraduationCap className="w-5 h-5 text-primary-600" />
                    <span className="text-sm">Ironhack Bootcamp</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Briefcase className="w-5 h-5 text-primary-600" />
                    <span className="text-sm">Disponible para proyectos</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Award className="w-5 h-5 text-primary-600" />
                    <span className="text-sm">15+ Proyectos completados</span>
                  </div>
                </div>

                {/* Motto */}
                <div className="mt-6 p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl border border-primary-100 dark:border-primary-800">
                  <p className="text-sm text-center text-gray-700 dark:text-gray-300 italic font-medium">
                    "Código limpio, soluciones elegantes, resultados excepcionales"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-600 to-accent-500 rounded-full"></div>
                Mi Historia
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-lg">
                  {t.about.intro}
                </p>
                <p>
                  {t.about.journey}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-600 to-accent-500 rounded-full"></div>
                Especialización
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.about.specialization}
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-3xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-display font-bold mb-4">
                Mi Objetivo
              </h3>
              <p className="text-primary-50 leading-relaxed text-lg">
                {t.about.goal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}