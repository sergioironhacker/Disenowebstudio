import { Download, Github, Linkedin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { t, language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section
      id="inicio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >

      {/* H1 SEO invisible (IMPORTANTE) */}
      <h1 className="sr-only">
        {language === "es"
          ? "Diseño web profesional y desarrollo full stack en Segovia - Sergio Andrés"
          : "Professional Web Design and Full Stack Development in Spain - Sergio Andrés"}
      </h1>

      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center space-y-12">

          {/* Títulos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-5"
          >
            <h2 className="text-3xl sm:text-6xl lg:text-8xl font-display font-bold text-gray-900 dark:text-white leading-tight">
              <span className="block">Sergio</span>
              <span className="block text-gradient mt-2">
                {t.hero.title} {t.hero.subtitle}
              </span>
            </h2>

            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              {language === 'es'
                ? 'Transformo ideas en productos digitales que inspiran y generan resultados'
                : 'I transform ideas into digital products that inspire and generate results'
              }
            </p>

            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-500 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
          </motion.div>

          {/* Botones CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="tel:+34689195597"
              aria-label="Llamar por teléfono a Sergio"
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl hover:from-blue-700 hover:to-cyan-600 transition-all hover:scale-105 shadow-2xl hover:shadow-blue-500/50 font-display font-semibold text-lg flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              {language === 'es' ? 'Contactar' : 'Call Me'}
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href="/SergioCv.pdf"
              download
              aria-label="Descargar curriculum PDF"
              className="group px-10 py-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all hover:scale-105 flex items-center gap-3 font-display font-semibold text-lg"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              {t.hero.downloadCV}
            </a>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center justify-center gap-6 pt-8"
          >
            <a
              href="https://github.com/sergioironhacker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar GitHub de Sergio"
              className="group p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-110 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            >
              <Github className="w-7 h-7 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/sergioeandres"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar LinkedIn de Sergio"
              className="group p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-110 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            >
              <Linkedin className="w-7 h-7 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
