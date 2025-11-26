import { Github, Linkedin, Mail, Heart, MapPin, Instagram, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const lang = t.language || 'es';

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">

          {/* --- INFO GENERAL + ADDRESS SEMÁNTICO --- */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Diseño Web Studio
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              {t.footer.description}
            </p>

            <address className="not-italic space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{t.footer.locationCity1}, {t.footer.locationCountry1}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{t.footer.locationCity2}, {t.footer.locationCountry2}</span>
              </div>
            </address>
          </div>

          {/* --- ENLACES RÁPIDOS (NAV SEMÁNTICO) --- */}
          <nav aria-label="Enlaces del sitio">
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>

            <ul className="space-y-3">
              {[
                { to: "/", label: t.nav.home },
                { to: "/projects", label: t.nav.projects },
                { to: "/certificates", label: t.nav.certificates },
                { to: "/contact", label: t.nav.contact }
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-gray-400 hover:text-blue-400 transition-all hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* --- REDES SOCIALES + EMAIL --- */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.followMe}</h4>

            <div className="flex gap-4 mb-4 flex-wrap">
              {[
                { icon: Github, href: "https://github.com/sergioironhacker", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sergioeandres", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/diseniowebstudio?utm_source=qr&igsh=YzNqcjZjdnAxZ3lt", label: "Instagram" },
                { icon: Map, href: "https://share.google/vkDc6vudusbyBDUHg", label: "Google Business" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all"
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            <a
              href="mailto:Sergioss772022@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
              aria-label="Enviar correo a Sergio"
            >
              <Mail className="w-4 h-4" />
              Sergioss772022@gmail.com
            </a>
          </div>
        </div>

        {/* --- ZONA FINAL --- */}
        <div className="border-t border-gray-800 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {lang === 'es' ? '¿Quieres trabajar conmigo?' : 'Want to work with me?'}
            </p>

            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all hover:scale-105 font-semibold shadow-lg hover:shadow-blue-500/50"
            >
              {lang === 'es' ? 'Contáctame' : 'Contact Me'}
            </Link>

            <p className="text-sm text-gray-400 italic max-w-md mx-auto pt-4">
              "{t.footer.motto}"
            </p>

            <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
              {t.footer.madeWith}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              {t.footer.by}
            </p>

            <p className="text-gray-500 text-sm">
              © {currentYear} {t.footer.rights}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
