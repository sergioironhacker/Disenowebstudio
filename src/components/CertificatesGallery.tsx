import { useState, useEffect } from 'react';
import { Award, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const certificates = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    issuer: 'Ironhack',
    date: '2024',
    image: '/Certificado-ironhack.png',
    description: 'Bootcamp intensivo de desarrollo web full stack',
    skills: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 2,
    title: 'JavaScript Advanced',
    issuer: 'Ironhack',
    date: '2024',
    image: '/certificado-js.png',
    description: 'Certificación en JavaScript avanzado y ES6+',
    skills: ['ES6+', 'Async/Await', 'Promises', 'Closures']
  },
  {
    id: 3,
    title: 'React Development',
    issuer: 'Ironhack',
    date: '2024',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Especialización en React y desarrollo de aplicaciones SPA',
    skills: ['React Hooks', 'Context API', 'React Router', 'State Management']
  },
  {
    id: 4,
    title: 'Node.js Backend',
    issuer: 'Ironhack',
    date: '2024',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Desarrollo de APIs REST con Node.js y Express',
    skills: ['Express', 'REST APIs', 'Authentication', 'MongoDB']
  },
  {
    id: 5,
    title: 'Database Design',
    issuer: 'Ironhack',
    date: '2024',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Diseño y gestión de bases de datos NoSQL',
    skills: ['MongoDB', 'Mongoose', 'Data Modeling', 'Queries']
  },
  {
    id: 6,
    title: 'Web Design Fundamentals',
    issuer: 'Ironhack',
    date: '2023',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Fundamentos de diseño web y UX/UI',
    skills: ['UI/UX', 'Responsive Design', 'CSS', 'Figma']
  }
];

export default function CertificatesGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.2);

  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isVisible]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const visibleCertificates = [
    certificates[(currentIndex - 1 + certificates.length) % certificates.length],
    certificates[currentIndex],
    certificates[(currentIndex + 1) % certificates.length]
  ];

  return (
    <>
      <section ref={ref} id="certificados" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Certificados y Logros
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Mi formación y certificaciones profesionales
          </p>

          {/* Carousel */}
          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={goToPrevious}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
                aria-label="Anterior certificado"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>

              {/* Certificates Slider */}
              <div className="flex items-center gap-4 max-w-5xl">
                {visibleCertificates.map((cert, index) => {
                  const isCenter = index === 1;
                  return (
                    <div
                      key={cert.id}
                      className={`transition-all duration-500 cursor-pointer ${
                        isCenter
                          ? 'w-96 opacity-100 scale-100 z-10'
                          : 'w-64 opacity-40 scale-90 hidden md:block'
                      }`}
                      onClick={() => isCenter && setSelectedCertificate(cert)}
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                          <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2">
                            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                        </div>

                        {isCenter && (
                          <div className="p-6 space-y-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
                              {cert.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                              {cert.description}
                            </p>
                            <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                <Award className="w-4 h-4" />
                                <span className="font-medium">{cert.issuer}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                <Calendar className="w-4 h-4" />
                                <span>{cert.date}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={goToNext}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
                aria-label="Siguiente certificado"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 w-6'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                  }`}
                  aria-label={`Ir al certificado ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              En continuo aprendizaje y actualización de conocimientos
            </p>
          </div>
        </div>
      </section>

      {/* Certificate Detail Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedCertificate.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {selectedCertificate.description}
                </p>
              </div>

              <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">{selectedCertificate.issuer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{selectedCertificate.date}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Habilidades Adquiridas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCertificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}