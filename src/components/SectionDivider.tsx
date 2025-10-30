interface SectionDividerProps {
  variant?: 'gradient' | 'dots' | 'simple';
  className?: string;
}

export default function SectionDivider({ variant = 'gradient', className = '' }: SectionDividerProps) {
  if (variant === 'dots') {
    return (
      <div className={`flex items-center justify-center gap-2 ${className}`}>
        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </div>
    );
  }

  if (variant === 'simple') {
    return (
      <div className={`h-px bg-gray-200 dark:bg-gray-800 ${className}`}></div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-primary-600/30 to-transparent"></div>
    </div>
  );
}