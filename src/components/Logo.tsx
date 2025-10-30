interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}


export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8 text-xl',      // antes text-sm
    md: 'w-12 h-12 text-3xl',   // antes text-lg
    lg: 'w-16 h-16 text-5xl'    // antes text-2xl
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl rotate-6 opacity-20 blur-sm"></div>
        <div className="relative w-full h-full bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
          <span className="font-display font-bold text-white tracking-tight">
            S
          </span>
        </div>
      </div>
    </div>
  );
}