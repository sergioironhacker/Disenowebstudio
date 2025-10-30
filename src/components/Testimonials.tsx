import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    id: 1,
    name: 'María García',
    role: 'Profesor en Ironhack',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Un estudiante excepcional con gran capacidad de aprendizaje. Su dedicación y pasión por el código son admirables. Siempre dispuesto a ayudar a sus compañeros y a ir más allá de lo requerido.'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Compañero de Bootcamp',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Trabajar con él en proyectos grupales fue una gran experiencia. Tiene un enfoque muy profesional y sus habilidades técnicas son sobresalientes. Definitivamente alguien con quien quieres trabajar.'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Desarrolladora Senior',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'He tenido la oportunidad de mentorar a este desarrollador y puedo decir que tiene un futuro brillante. Su código es limpio, bien documentado y sigue las mejores prácticas de la industria.'
  },
  {
    id: 4,
    name: 'David López',
    role: 'Tech Lead',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Impresionante capacidad para resolver problemas complejos. Su enfoque analítico y creatividad lo hacen destacar. Cualquier equipo de desarrollo se beneficiaría enormemente de tenerlo a bordo.'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, isVisible } = useScrollAnimation(0.3);

  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isVisible]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Testimonios
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Lo que dicen sobre mi trabajo
        </p>

        <div className="relative">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 overflow-hidden">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-blue-100 dark:text-blue-900/30" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-blue-100 dark:ring-blue-900"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between">
                <button
                  onClick={goToPrevious}
                  className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all hover:scale-110 shadow-lg"
                  aria-label="Anterior testimonio"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dots indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-blue-600 w-8'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                      }`}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all hover:scale-110 shadow-lg"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}