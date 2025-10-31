import { Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FloatingCVButton() {
  const { language } = useLanguage();

  const label = language === 'es' ? 'Descargar CV' : 'Download CV';

  return (
    <a
      href="/SergioCV.pdf"
      download="SergioCV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 group"
      aria-label={label}
    >
      <div className="relative flex flex-col items-center">
        {/* Tooltip */}
        <span className="absolute bottom-full mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          {label}
        </span>

        {/* Botón */}
        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full text-white shadow-lg transition-transform hover:scale-110 hover:from-primary-700 hover:to-accent-600">
          <Download className="w-6 h-6" />
        </div>
      </div>
    </a>
  );
}
