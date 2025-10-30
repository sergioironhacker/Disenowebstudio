import { Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FloatingCVButton() {
  const { language } = useLanguage();

  return (
    <a
      href="/cv.pdf"
      download
      className="fixed bottom-24 right-6 z-50 group"
      aria-label={language === 'es' ? 'Descargar CV' : 'Download CV'}
    >
      <div className="relative">
        {/* Pulsing ring */}
        <div className="absolute inset-0 bg-primary-600 rounded-full animate-ping opacity-75"></div>

        {/* Main button */}
        <div className="relative btn-shine px-6 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-full hover:from-primary-700 hover:to-accent-600 transition-all hover:scale-110 shadow-2xl flex items-center gap-3 font-display font-semibold">
          <Download className="w-5 h-5 group-hover:animate-bounce" />
          <span className="hidden sm:inline">
            {language === 'es' ? 'Descargar CV' : 'Download CV'}
          </span>
        </div>

        {/* Tooltip for mobile */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap sm:hidden">
          {language === 'es' ? 'Descargar CV' : 'Download CV'}
        </div>
      </div>
    </a>
  );
}