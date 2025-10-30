import { Github, Linkedin, Mail, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Diseño Web
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{t.footer.locationCity}, {t.footer.locationCountry}</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-all hover:translate-x-1 inline-block">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-blue-400 transition-all hover:translate-x-1 inline-block">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="text-gray-400 hover:text-blue-400 transition-all hover:translate-x-1 inline-block">
                  {t.nav.certificates}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-all hover:translate-x-1 inline-block">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.followMe}</h4>
            <div className="flex gap-4 mb-4">
              <motion.a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, rotate: 12 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, rotate: 12 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
            <a
              href="mailto:tu@email.com"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              tu@email.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <p className="text-xl font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {t.language === 'es' ? '¿Quieres trabajar conmigo?' : 'Want to work with me?'}
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all hover:scale-105 font-semibold shadow-lg hover:shadow-blue-500/50"
            >
              {t.language === 'es' ? 'Contáctame' : 'Contact Me'}
            </Link>
            <p className="text-sm text-gray-400 italic max-w-md mx-auto pt-4">
              "{t.footer.motto}"
            </p>
            <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
              {t.footer.madeWith} <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> {t.footer.by}
            </p>
            <p className="text-gray-500 text-sm">
              {currentYear} {t.footer.rights}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
