import React from 'react';
import type { QuizItem } from './types';

// --- ICONS ---

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

// Generic UI Components

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="container mx-auto p-4 md:p-8 text-gray-800">
    {children}
  </main>
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', className = '', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-base font-medium transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      primary: 'bg-brand text-white hover:bg-brand-dark',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      ghost: 'hover:bg-gray-100 text-gray-600',
    };

    return (
      <button ref={ref} className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';


// Quiz Specific Components

interface QuestionDisplayProps {
  item: QuizItem;
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
  revealedAnswer: number | null;
  isCorrect: boolean | null;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ item, selectedOption, onSelectOption, revealedAnswer, isCorrect }) => {
  const isAbstractReasoning = item.category === 'Abstract Reasoning' || item.category === 'Penalaran Abstrak';
  
  const getOptionClass = (index: number) => {
    const base = 'flex items-center gap-4 p-4 rounded-md border cursor-pointer';
    const ring = 'outline-none';

    if (revealedAnswer !== null) {
      if (index === item.answerIndex) return `${base} ${ring} border-success bg-success-light text-gray-900`;
      if (index === selectedOption) return `${base} ${ring} border-danger bg-danger-light text-gray-900 opacity-80`;
      return `${base} ${ring} border-gray-200 opacity-60 pointer-events-none`;
    }
    if (selectedOption === index) {
      return `${base} ${ring} border-brand bg-brand-light`;
    }
    return `${base} ${ring} border-gray-300 hover:border-brand/50 hover:bg-brand-light`;
  };

  const getAbstractOptionClass = (index: number) => {
    const base = 'flex flex-col p-2 rounded-md border cursor-pointer justify-between';
    const ring = 'outline-none';

    if (revealedAnswer !== null) {
      if (index === item.answerIndex) return `${base} ${ring} border-success bg-success-light`;
      if (index === selectedOption) return `${base} ${ring} border-danger bg-danger-light opacity-80`;
      return `${base} ${ring} border-gray-200 opacity-60 pointer-events-none`;
    }
    if (selectedOption === index) {
      return `${base} ${ring} border-brand bg-brand-light`;
    }
    return `${base} ${ring} border-gray-300 hover:border-brand/50 hover:bg-brand-light`;
  };
  
  const getIcon = (index: number) => {
      const baseClasses = 'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white';
      if (revealedAnswer !== null) {
          if (index === item.answerIndex) return <div className={`${baseClasses} bg-success`}><CheckIcon /></div>;
          if (index === selectedOption) return <div className={`${baseClasses} bg-danger`}><XIcon /></div>;
      }
      return <div className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-sm font-bold text-gray-600">
        {String.fromCharCode(65 + index)}
      </div>
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500">{item.category}</p>
        <div className="mt-2 text-xl font-normal whitespace-pre-wrap text-gray-900">
          {typeof item.question === 'string' ? item.question.split('\\n').map((line, i) => <span key={i}>{line}<br/></span>) : item.question}
        </div>
      </div>
      
      {isAbstractReasoning ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {item.options.map((option, index) => (
            <div
              key={index}
              className={getAbstractOptionClass(index)}
              onClick={() => revealedAnswer === null && onSelectOption(index)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { revealedAnswer === null && onSelectOption(index) } }}
              role="radio"
              aria-checked={selectedOption === index}
              tabIndex={revealedAnswer === null ? 0 : -1}
            >
              <div className="flex-grow flex items-center justify-center p-2 min-h-[100px]">{option}</div>
              <div className="mt-2 text-center text-sm font-semibold text-gray-700 border-t border-gray-300/80 pt-2">
                {String.fromCharCode(65 + index)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {item.options.map((option, index) => (
            <div 
              key={index} 
              className={getOptionClass(index)} 
              onClick={() => revealedAnswer === null && onSelectOption(index)}
              onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') { revealedAnswer === null && onSelectOption(index) }}}
              role="radio"
              aria-checked={selectedOption === index}
              tabIndex={revealedAnswer === null ? 0 : -1}
            >
              {getIcon(index)}
              <div className="text-base">{option}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const FeedbackPanel: React.FC<{ isCorrect: boolean, explanation: string, t: (key: string) => string }> = ({ isCorrect, explanation, t }) => (
  <div className={`p-4 mt-6 rounded-md border ${isCorrect ? 'border-success bg-success-light' : 'border-danger bg-danger-light'}`}>
    <h3 className={`text-lg font-semibold ${isCorrect ? 'text-success' : 'text-danger'}`}>
      {isCorrect ? t('correct') : t('incorrect')}
    </h3>
    <p className="mt-1 text-base text-gray-700">{explanation}</p>
  </div>
);

export const YoutubeEmbed = ({ embedId, t }: { embedId: string, t: (key: string) => string }) => {
    const [key, setKey] = React.useState(embedId);

    const handleRefresh = () => {
        // By changing the key, we force React to re-mount the iframe component
        setKey(`${embedId}-${Date.now()}`);
    };
    
    const origin = typeof window !== 'undefined' ? window.location.origin : 'null';
    const youtubeSrc = `https://www.youtube-nocookie.com/embed/${embedId}?origin=${encodeURIComponent(origin)}`;

    return (
        <div className="my-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ paddingTop: '56.25%' }}>
                <iframe
                    key={key}
                    className="absolute top-0 left-0 w-full h-full scale-[1.01]"
                    src={youtubeSrc}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube video"
                />
            </div>
            <div className="mt-2 text-center text-xs text-gray-600">
                <span>{t('videoErrorPrompt')}</span>
                <button
                    onClick={handleRefresh}
                    className="ml-1 font-semibold text-brand hover:underline focus:outline-none"
                >
                    {t('refreshButton')}
                </button>
            </div>
        </div>
    );
};

// --- Gradient Text Component ---

const cn = (...classes: (string | undefined | null | false)[]): string => {
    return classes.filter(Boolean).join(' ');
};

interface GradientTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of colors for the gradient
   * @default ["#ffaa40", "#9c40ff", "#ffaa40"]
   */
  colors?: string[]
  /**
   * Animation duration in seconds
   * @default 8
   */
  animationSpeed?: number
  /**
   * Show animated border
   * @default false
   */
  showBorder?: boolean
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className,
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
  ...props
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div
      className={cn(
        "relative mx-auto flex max-w-fit flex-row items-center justify-center",
        "rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500",
        "overflow-hidden cursor-pointer",
        className
      )}
      {...props}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <div
            className="absolute inset-0 bg-gray-50 rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}
      <div
        className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};
