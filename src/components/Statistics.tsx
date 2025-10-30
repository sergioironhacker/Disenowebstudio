import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Briefcase, Award, Coffee } from 'lucide-react';

const stats = [
  { id: 1, label: 'Proyectos Completados', value: 15, icon: Code, suffix: '+' },
  { id: 2, label: 'Tecnologías Dominadas', value: 10, icon: Award, suffix: '+' },
  { id: 3, label: 'Horas de Código', value: 1000, icon: Coffee, suffix: '+' },
  { id: 4, label: 'Certificaciones', value: 4, icon: Briefcase, suffix: '' }
];

function Counter({ end, duration = 2000, isVisible }: { end: number; duration?: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * (end - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span>{count}</span>;
}

export default function Statistics() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-800 dark:to-cyan-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`text-center transform transition-all duration-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                <Counter end={stat.value} isVisible={isVisible} />
                {stat.suffix}
              </div>
              <div className="text-blue-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}