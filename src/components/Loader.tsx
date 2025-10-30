import { useEffect, useState } from 'react';
import { Code } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 flex items-center justify-center">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse" />
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <Code className="w-20 h-20 text-white mx-auto mb-4 animate-bounce" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              Diseño Web
            </h1>
            <p className="text-blue-100 text-lg">
              Full Stack Developer
            </p>
          </div>
        </div>

        <div className="w-64 mx-auto">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/80 text-sm mt-2">{progress}%</p>
        </div>
      </div>
    </div>
  );
}