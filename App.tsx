import React, { useState, useEffect, useCallback, useMemo, useContext, createContext } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { QUIZ_QUESTIONS_STRUCTURE, AbstractReasoningQuestionComponent } from './constants';
import { translations } from './translations';
import type { QuizItem, Attempt, ExamResult, LearnAttempt } from './types';
import { Layout, Button, QuestionDisplay, FeedbackPanel, YoutubeEmbed, GradientText } from './components';
import { ModulePage } from './module'; // <-- Import halaman modul

// --- LANGUAGE CONTEXT & PROVIDER ---

type Language = 'en' | 'id';
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['en']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language;
    return savedLang || 'en';
  });

  const setLanguage = (lang: Language) => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };
  
  const t = useCallback((key: keyof typeof translations['en']): string => {
    return translations[language][key] || translations['en'][key];
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useTranslations = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }
  return context;
};

// --- ICONS & Language Switcher ---

const LanguageSwitcher: React.FC<{ className?: string }> = ({ className }) => {
    const { language, setLanguage } = useTranslations();
    
    const buttonClass = (lang: Language) => 
        `font-semibold transition-colors duration-200 ${language === lang ? 'text-brand' : 'text-gray-500 hover:text-gray-800'}`;

    return (
        <div className={`flex items-center gap-2 text-sm ${className}`}>
            <button onClick={() => setLanguage('en')} className={buttonClass('en')}>EN</button>
            <span className="text-gray-300">|</span>
            <button onClick={() => setLanguage('id')} className={buttonClass('id')}>ID</button>
        </div>
    );
};

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 inline-block text-gray-400 group-hover:text-brand transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-500 transition-transform transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);


const AppleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 37 58"
    className={`text-gray-600 ${className}`}
    aria-label="Apple Logo"
    role="img"
  >
    <path
      fill="currentColor"
      d="M18.8946 9.4862C23.3578 8.5873 26.2126 5.02838 26.2252 0.605225C22.0285 0.639036 17.7027 5.26745 18.8946 9.4862ZM35.3509 39.9143C27.7762 39.9143 22.0536 33.1051 23.9656 25.7921C24.3705 24.2429 25.2228 22.833 26.2101 21.5701C26.6828 20.9653 27.6248 20.3407 27.6736 19.5318C27.8492 16.6253 25.1824 13.8634 22.7843 12.5889C18.2262 10.1669 11.2454 11.4889 8.88917 16.3288C7.83889 18.4864 8.47923 20.8392 7.66627 23.0259C6.50011 26.1631 4.15825 28.2162 2.50211 31.0334C0.229797 34.899 -0.30993 40.3291 1.58734 44.4275C7.06383 56.2586 25.4342 57.619 32.8569 46.9025C34.2878 44.8365 35.3438 42.4381 35.3509 39.9143Z"
    />
  </svg>
);


// --- LAYOUT COMPONENTS ---

const TestHeader: React.FC<{ mode: 'Learn' | 'Exam'; timeLeft?: number; onFinish: () => void; }> = ({ mode, timeLeft, onFinish }) => {
  const { t } = useTranslations();
  const navigate = useNavigate();
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-10 flex items-center px-4 md:px-6">
      <button 
        onClick={() => navigate('/mode-select')} 
        className="flex items-center gap-2 text-left focus:outline-none rounded-sm"
        aria-label="Back to mode select"
      >
        <AppleIcon className="h-6 w-auto" />
        <span className="font-medium text-base tracking-wide text-gray-600">Developer Academy</span>
      </button>
      <div className="flex-grow"></div>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        {mode === 'Exam' && typeof timeLeft !== 'undefined' && (
          <div className="font-mono text-base p-2 rounded-md bg-gray-100 text-gray-800 w-24 text-center">{formatTime(timeLeft)}</div>
        )}
        <Button variant="secondary" onClick={onFinish}>
          {mode === 'Learn' ? t('endSession') : t('finishExam')}
        </Button>
      </div>
    </header>
  );
};

const PageHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-10 flex items-center px-4 md:px-6">
      <Link to="/mode-select" className="flex items-center gap-2 focus:outline-none rounded-sm">
        <AppleIcon className="h-6 w-auto" />
        <span className="font-medium text-base tracking-wide text-gray-600">Developer Academy</span>
      </Link>
      <div className="flex-grow"></div>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

const getQuestionStatusClass = (index: number, current: number, answered: (boolean | null)[]) => {
    const base = 'w-10 h-10 flex items-center justify-center rounded-md font-semibold text-sm transition-colors duration-200';
    if (index === current) {
      return `${base} bg-brand text-white`;
    }
    if (answered[index]) {
      return `${base} bg-gray-200 text-gray-800 hover:bg-gray-300`;
    }
    return `${base} border border-gray-300 text-gray-600 hover:bg-gray-100`;
};

const QuestionNavigator: React.FC<{ total: number; current: number; answered: (boolean | null)[]; onNavigate: (index: number) => void; t: (key: string) => string; mode: 'Learn' | 'Exam' }> = ({ total, current, answered, onNavigate, t, mode }) => {
  return (
    <aside className="hidden md:block w-64 p-6 bg-white border-r border-gray-200 self-start sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
      <h3 className="text-base font-semibold mb-4 text-gray-900">{t('questions')}</h3>
      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: total }, (_, i) => {
            const isLearnSummary = mode === 'Learn' && i === total - 1;
            const label = isLearnSummary ? '☆' : i + 1;
            const ariaLabel = isLearnSummary ? t('learnResults') : `${t('question')} ${i + 1}`;
            return (
              <button key={i} onClick={() => onNavigate(i)} className={getQuestionStatusClass(i, current, answered)} aria-label={ariaLabel}>
                {label}
              </button>
            )
        })}
      </div>
    </aside>
  );
};

const MobileQuestionNavigator: React.FC<{ total: number; current: number; answered: (boolean | null)[]; onNavigate: (index: number) => void; t: (key: string) => string; mode: 'Learn' | 'Exam'; }> = ({ total, current, answered, onNavigate, t, mode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (index: number) => {
        onNavigate(index);
        setIsOpen(false);
    };
    
    const isLearnSummary = mode === 'Learn' && current === total - 1;
    const currentLabel = isLearnSummary ? t('learnResults') : `${t('question')} ${current + 1} / ${total -1}`;

    return (
        <div className="md:hidden mb-4 relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-3 bg-white border border-gray-300 rounded-md text-left"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span className="font-semibold">{currentLabel}</span>
                <ChevronDownIcon isOpen={isOpen} />
            </button>
            {isOpen && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-30 p-2 max-h-60 overflow-y-auto">
                    <div className="grid grid-cols-5 gap-2">
                        {Array.from({ length: total }, (_, i) => {
                            const isLearnSummary = mode === 'Learn' && i === total - 1;
                            const label = isLearnSummary ? '☆' : i + 1;
                            const ariaLabel = isLearnSummary ? t('learnResults') : `${t('question')} ${i + 1}`;
                            return (
                                <button
                                    key={i}
                                    onClick={() => handleSelect(i)}
                                    className={getQuestionStatusClass(i, current, answered)}
                                    aria-label={ariaLabel}
                                >
                                    {label}
                                </button>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};


const TestLayout: React.FC<{
  children: React.ReactNode;
  mode: 'Learn' | 'Exam';
  timeLeft?: number;
  totalQuestions: number;
  currentQuestionIndex: number;
  answeredMask: (boolean | null)[];
  onNavigate: (index: number) => void;
  onFinish: () => void;
}> = ({ children, mode, timeLeft, totalQuestions, currentQuestionIndex, answeredMask, onNavigate, onFinish }) => {
    const { t } = useTranslations();
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <TestHeader mode={mode} timeLeft={timeLeft} onFinish={onFinish} />
        <div className="flex pt-14">
          <QuestionNavigator
            total={totalQuestions}
            current={currentQuestionIndex}
            answered={answeredMask}
            onNavigate={onNavigate}
            t={t}
            mode={mode}
          />
          <main className="flex-grow p-6 md:p-10">
            <div className="max-w-3xl mx-auto">
              <MobileQuestionNavigator
                  total={totalQuestions}
                  current={currentQuestionIndex}
                  answered={answeredMask}
                  onNavigate={onNavigate}
                  t={t}
                  mode={mode}
              />
              {children}
            </div>
          </main>
        </div>
      </div>
    );
}

// --- DATA PREPARATION ---
const useTranslatedQuestions = () => {
  const { t } = useTranslations();

  return useMemo(() => {
    return QUIZ_QUESTIONS_STRUCTURE.map(q => {
      let questionContent;
      if (q.id === 'q4') {
          questionContent = <AbstractReasoningQuestionComponent t={t} />;
      } else {
          questionContent = t(q.questionKey as keyof typeof translations['en']);
      }

      return {
        ...q,
        category: t(q.categoryKey as keyof typeof translations['en']),
        question: questionContent,
        options: q.options ? q.options : q.optionsKeys!.map(key => t(key as keyof typeof translations['en'])),
        explanation: t(q.explanationKey as keyof typeof translations['en']),
      };
    }) as QuizItem[];
  }, [t]);
};


// --- PAGES ---

const WelcomePage: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslations();

    const handleGlobalEnter = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            navigate('/mode-select');
        }
    }, [navigate]);

    useEffect(() => {
        document.addEventListener('keydown', handleGlobalEnter);
        return () => {
            document.removeEventListener('keydown', handleGlobalEnter);
        };
    }, [handleGlobalEnter]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="h-14 flex-shrink-0 flex items-center justify-end px-4 md:px-6 border-b border-transparent">
              <LanguageSwitcher />
            </header>
            <main className="flex-grow flex flex-col items-center justify-center p-4">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-4">
                        <AppleIcon className="h-10 w-auto" />
                        <h1 className="text-2xl font-medium text-gray-600">Developer Academy</h1>
                    </div>
                    <div className="mt-6">
                      <GradientText className="text-4xl font-bold tracking-tight">
                          {t('welcomeTitle')}
                      </GradientText>
                    </div>
                    <p className="mt-4 max-w-2xl mx-auto text-base text-gray-600">
                        {t('welcomeSubtitle')}
                    </p>
                    <div className="mt-10 flex flex-col items-center gap-6">
                        <div className="flex items-center gap-4">
                           <Button onClick={() => navigate('/mode-select')}>{t('startButton')}</Button>
                           <span className="text-sm text-gray-800">{t('pressEnter')}</span>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="w-full px-4 pb-6 text-center flex-shrink-0">
                <p className="max-w-xl mx-auto text-xs text-gray-500">
                    {t('disclaimer')}
                </p>
                <p className="mt-2 text-xs text-gray-500">
                    <a href="https://github.com/ikoshura" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                        {t('appBy')}
                    </a>
                </p>
            </footer>
        </div>
    );
};

const ModeSelectPage: React.FC = () => {
    const { t } = useTranslations();
    const navigate = useNavigate();

    const handleStartLearning = () => {
        sessionStorage.removeItem('learnAttempts');
        navigate('/learn');
    };

    const handleStartExam = () => {
        localStorage.removeItem('examResult');
        sessionStorage.removeItem('examAnswers');
        sessionStorage.removeItem('examStartTime');
        navigate('/exam');
    };

    return (
      <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
        <PageHeader />
        <main className="flex-grow pt-14 container mx-auto p-4 md:p-8">
            <div className="max-w-6xl mx-auto text-left py-10 md:py-16">
                 <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-brand mb-4">
                    <ArrowLeftIcon />
                    {t('backToWelcome')}
                </Link>
                <h1 className="text-3xl text-gray-900 font-bold">{t('chooseMode')}</h1>
                <p className="mt-2 text-base text-gray-600">{t('chooseModeSubtitle')}</p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 border border-gray-200 rounded-lg flex flex-col text-left">
                        <h2 className="text-xl font-bold text-gray-900">{t('learnMode')}</h2>
                        <p className="mt-2 text-gray-600 flex-grow">{t('learnModeDescription')}</p>
                        <Button onClick={handleStartLearning} className="w-full mt-6">{t('startLearning')}</Button>
                    </div>
                    <div className="p-6 border border-gray-200 rounded-lg flex flex-col text-left">
                        <h2 className="text-xl font-bold text-gray-900">{t('examMode')}</h2>
                        <p className="mt-2 text-gray-600 flex-grow">{t('examModeDescription')}</p>
                        <Button onClick={handleStartExam} variant="secondary" className="w-full mt-6">{t('startExam')}</Button>
                    </div>
                    <div className="p-6 border border-gray-200 rounded-lg flex flex-col text-left">
                        <h2 className="text-xl font-bold text-gray-900">{t('learningModule')}</h2>
                        <p className="mt-2 text-gray-600 flex-grow">{t('learningModuleDescription')}</p>
                        <Link to="/module" className="w-full mt-6"><Button variant="secondary" className="w-full">{t('startReading')}</Button></Link>
                    </div>
                    <div className="p-6 border border-gray-200 rounded-lg flex flex-col text-left">
                        <h2 className="text-xl font-bold text-gray-900">{t('logicHub')}</h2>
                        <div className="flex-grow">
                          <p className="mt-2 text-gray-600">{t('logicHubDescription')}</p>
                          <div className="mt-4 space-y-2">
                              <a href="http://www.theonlinetestcentre.com/logical-puzzles.html" target="_blank" rel="noopener noreferrer" className="group text-brand hover:underline text-sm flex items-center">
                                  The Online Test Centre <ExternalLinkIcon />
                              </a>
                              <a href="https://www.indiabix.com/puzzles/logical-puzzles/" target="_blank" rel="noopener noreferrer" className="group text-brand hover:underline text-sm flex items-center">
                                  IndiaBIX Puzzles <ExternalLinkIcon />
                              </a>
                              <a href="https://www.naukri.com/campus/career-guidance/65-logical-reasoning-questions-and-answers-for-freshers" target="_blank" rel="noopener noreferrer" className="group text-brand hover:underline text-sm flex items-center">
                                  Naukri.com Reasoning <ExternalLinkIcon />
                              </a>
                              <a href="https://testbook.com/reasoning/seating-arrangement-reasoning" target="_blank" rel="noopener noreferrer" className="group text-brand hover:underline text-sm flex items-center">
                                  Testbook Seating Arrangement <ExternalLinkIcon />
                              </a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
         <footer className="w-full px-4 pb-6 text-center flex-shrink-0">
            <p className="max-w-xl mx-auto text-xs text-gray-500">
                {t('disclaimer')}
            </p>
            <p className="mt-2 text-xs text-gray-500">
                <a href="https://github.com/ikoshura" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                    {t('appBy')}
                </a>
            </p>
        </footer>
      </div>
    );
};

const LearnModePage: React.FC = () => {
  const QUIZ_QUESTIONS = useTranslatedQuestions();
  const navigate = useNavigate();
  const { t } = useTranslations();
  const primaryActionRef = React.useRef<HTMLButtonElement>(null);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [attempts, setAttempts] = useState<Record<string, LearnAttempt>>(() => {
    const saved = sessionStorage.getItem('learnAttempts');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    sessionStorage.setItem('learnAttempts', JSON.stringify(attempts));
  }, [attempts]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter' && primaryActionRef.current && !primaryActionRef.current.disabled) {
            event.preventDefault();
            primaryActionRef.current.click();
        }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
        document.removeEventListener('keydown', handleKeyPress);
    };
  }, [attempts, currentQuestionIndex]);

  const handleSelectOption = (index: number) => {
    if (attempts[QUIZ_QUESTIONS[currentQuestionIndex]?.id]?.revealed) return;
    setAttempts(prev => ({
      ...prev,
      [QUIZ_QUESTIONS[currentQuestionIndex].id]: { ...prev[QUIZ_QUESTIONS[currentQuestionIndex].id], selectedOption: index }
    }));
  };

  const handleCheckAnswer = () => {
    const currentId = QUIZ_QUESTIONS[currentQuestionIndex].id;
    if (attempts[currentId]?.selectedOption === null) return;
    setAttempts(prev => ({
      ...prev,
      [currentId]: { ...prev[currentId], revealed: true }
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };
  
  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleFinish = () => {
    navigate('/mode-select');
  };
  
  const handleTryAgain = () => {
    sessionStorage.removeItem('learnAttempts');
    setAttempts({});
    setCurrentQuestionIndex(0);
  };

  const answeredMask = useMemo(() => 
    QUIZ_QUESTIONS.map(q => !!(attempts[q.id]?.revealed)), 
    [QUIZ_QUESTIONS, attempts]
  );
  
  const totalItems = QUIZ_QUESTIONS.length + 1;

  if (currentQuestionIndex >= QUIZ_QUESTIONS.length) {
    const score = QUIZ_QUESTIONS.reduce((acc, q) => {
        const attempt = attempts[q.id];
        if (attempt && attempt.revealed && attempt.selectedOption === q.answerIndex) {
            return acc + 1;
        }
        return acc;
    }, 0);
    
    return (
      <TestLayout
        mode="Learn"
        totalQuestions={totalItems}
        currentQuestionIndex={currentQuestionIndex}
        answeredMask={[...answeredMask, true]}
        onNavigate={setCurrentQuestionIndex}
        onFinish={handleFinish}
      >
        <div className="space-y-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">{t('learnResults')}</p>
              <div className="mt-4">
                  <p className="text-sm text-gray-500">{t('score')}</p>
                  <p className="text-4xl font-bold mt-1">{score} <span className="text-2xl text-gray-400 font-normal">/ {QUIZ_QUESTIONS.length}</span></p>
              </div>
            </div>
            
            <YoutubeEmbed embedId="MI32s5UB-p8" t={t} />

            <div className="mt-8 flex justify-start gap-4">
                <Button onClick={handleTryAgain} variant="secondary">{t('practiceAgain')}</Button>
                <Button onClick={handleFinish}>{t('finishSession')}</Button>
            </div>
        </div>
      </TestLayout>
    );
  }

  const currentItem = QUIZ_QUESTIONS[currentQuestionIndex];
  const currentAttempt = attempts[currentItem.id] || { selectedOption: null, revealed: false };

  return (
    <TestLayout
      mode="Learn"
      totalQuestions={totalItems}
      currentQuestionIndex={currentQuestionIndex}
      answeredMask={[...answeredMask, false]}
      onNavigate={setCurrentQuestionIndex}
      onFinish={handleFinish}
    >
      <QuestionDisplay
        item={currentItem}
        selectedOption={currentAttempt.selectedOption}
        onSelectOption={handleSelectOption}
        revealedAnswer={currentAttempt.revealed ? currentItem.answerIndex : null}
        isCorrect={currentAttempt.revealed ? currentAttempt.selectedOption === currentItem.answerIndex : null}
      />
      {currentAttempt.revealed && (
        <FeedbackPanel
          isCorrect={currentAttempt.selectedOption === currentItem.answerIndex}
          explanation={currentItem.explanation}
          t={t}
        />
      )}
      <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
        <Button onClick={handlePrev} disabled={currentQuestionIndex === 0} variant="secondary">
          {t('previousButton')}
        </Button>
        {!currentAttempt.revealed ? (
            <div className="flex items-center gap-4">
                <Button ref={primaryActionRef} onClick={handleCheckAnswer} disabled={currentAttempt.selectedOption === null}>
                    {t('checkAnswer')}
                </Button>
                <span className="text-sm text-gray-600 hidden sm:inline">{t('pressEnterInline')}</span>
            </div>
        ) : (
            <div className="flex items-center gap-4">
                <Button ref={primaryActionRef} onClick={handleNext}>
                    {t('nextButton')}
                </Button>
                <span className="text-sm text-gray-600 hidden sm:inline">{t('pressEnterInline')}</span>
            </div>
        )}
      </div>
    </TestLayout>
  );
};

const EXAM_DURATION = 10 * 60; // 10 minutes

const ExamModePage: React.FC = () => {
  const QUIZ_QUESTIONS = useTranslatedQuestions();
  const navigate = useNavigate();
  const { t } = useTranslations();
  const primaryActionRef = React.useRef<HTMLButtonElement>(null);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => {
    const saved = sessionStorage.getItem('examAnswers');
    return saved ? JSON.parse(saved) : Array(QUIZ_QUESTIONS.length).fill(null);
  });
  const [startTime] = useState(() => {
    const saved = sessionStorage.getItem('examStartTime');
    const time = saved ? parseInt(saved, 10) : Date.now();
    sessionStorage.setItem('examStartTime', time.toString());
    return time;
  });
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);

  const finishExam = useCallback(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const timeTakenValue = Math.min(elapsed, EXAM_DURATION);

    const attempts: Attempt[] = QUIZ_QUESTIONS.map((item, index) => {
      const selectedOption = answers[index];
      return {
        itemId: item.id,
        selectedOption,
        isCorrect: selectedOption === item.answerIndex,
      };
    });
    const score = attempts.filter(a => a.isCorrect).length;
    const result: ExamResult = {
      attempts,
      score,
      total: QUIZ_QUESTIONS.length,
      timeTaken: timeTakenValue,
    };
    localStorage.setItem('examResult', JSON.stringify(result));
    navigate('/results');
  }, [answers, QUIZ_QUESTIONS, navigate, startTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = EXAM_DURATION - elapsed;
      if (remaining <= 0) {
        clearInterval(timer);
        finishExam();
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime, finishExam]);
  
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter' && primaryActionRef.current && !primaryActionRef.current.disabled) {
            event.preventDefault();
            primaryActionRef.current.click();
        }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
        document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentQuestionIndex]);

  useEffect(() => {
    sessionStorage.setItem('examAnswers', JSON.stringify(answers));
  }, [answers]);

  const handleSelectOption = (index: number) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = index;
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleFinish = () => {
    finishExam();
  };
  
  const answeredMask = useMemo(() => answers.map(a => a !== null), [answers]);

  return (
    <TestLayout
      mode="Exam"
      timeLeft={timeLeft}
      totalQuestions={QUIZ_QUESTIONS.length}
      currentQuestionIndex={currentQuestionIndex}
      answeredMask={answeredMask}
      onNavigate={setCurrentQuestionIndex}
      onFinish={handleFinish}
    >
      <QuestionDisplay
        item={QUIZ_QUESTIONS[currentQuestionIndex]}
        selectedOption={answers[currentQuestionIndex]}
        onSelectOption={handleSelectOption}
        revealedAnswer={null}
        isCorrect={null}
      />
      <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between">
        <Button onClick={handlePrev} disabled={currentQuestionIndex === 0} variant="secondary">
          {t('previousButton')}
        </Button>
        <div className="flex items-center gap-4">
            {currentQuestionIndex === QUIZ_QUESTIONS.length - 1 ? (
              <Button ref={primaryActionRef} onClick={handleFinish} >
                {t('finishExam')}
              </Button>
            ) : (
              <Button ref={primaryActionRef} onClick={handleNext}>
                {t('nextButton')}
              </Button>
            )}
            <span className="text-sm text-gray-600 hidden sm:inline">{t('pressEnterInline')}</span>
        </div>
      </div>
    </TestLayout>
  );
};

const ResultsPage: React.FC = () => {
  const { t } = useTranslations();
  const navigate = useNavigate();
  const [result, setResult] = useState<ExamResult | null>(null);
  const [reviewIndex, setReviewIndex] = useState<number | null>(null);
  const questions = useTranslatedQuestions();

  useEffect(() => {
    const savedResult = localStorage.getItem('examResult');
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    }
  }, []);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  if (!result) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <PageHeader />
        <main className="pt-14 container mx-auto p-4 md:p-8">
            <div className="pt-20 text-center">
              <h1 className="text-2xl font-bold">{t('noResultsTitle')}</h1>
              <p className="mt-2 text-gray-600">{t('noResultsSubtitle')}</p>
              <Button onClick={() => navigate('/mode-select')} className="mt-6">{t('startNewExam')}</Button>
            </div>
        </main>
      </div>
    );
  }

  if (reviewIndex !== null) {
    const attempt = result.attempts[reviewIndex];
    const question = questions.find(q => q.id === attempt.itemId);
    if (!question) return null;

    return (
      <div className="min-h-screen bg-gray-50 text-gray-800">
         <PageHeader />
         <main className="pt-14 container mx-auto p-4 md:p-8">
            <div className="pt-8 max-w-3xl mx-auto">
              <Button onClick={() => setReviewIndex(null)} variant="secondary" className="mb-6">
                <ArrowLeftIcon /> {t('backButton')}
              </Button>
              <QuestionDisplay
                item={question}
                selectedOption={attempt.selectedOption}
                onSelectOption={() => {}} // noop in review
                revealedAnswer={question.answerIndex}
                isCorrect={attempt.isCorrect}
              />
              <FeedbackPanel
                isCorrect={attempt.isCorrect}
                explanation={question.explanation}
                t={t}
              />
            </div>
         </main>
      </div>
    );
  }

  const { score, total, timeTaken, attempts } = result;
  const accuracy = total > 0 ? ((score / total) * 100).toFixed(0) : 0;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <PageHeader />
      <main className="pt-14 container mx-auto p-4 md:p-8">
        <div className="pt-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center">{t('examResults')}</h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500">{t('score')}</p>
                    <p className="text-4xl font-bold mt-2">{score} <span className="text-2xl text-gray-400 font-normal">/ {total}</span></p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500">{t('accuracy')}</p>
                    <p className="text-4xl font-bold mt-2">{accuracy}%</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500">{t('timeTaken')}</p>
                    <p className="text-4xl font-bold mt-2">{formatTime(timeTaken)}</p>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">{t('detailedReview')}</h2>
                <div className="bg-white rounded-lg border border-gray-200">
                  <ul className="divide-y divide-gray-200">
                    {questions.map((q, index) => {
                      const attempt = attempts.find(a => a.itemId === q.id);
                      if (!attempt) return null;
                      const isCorrect = attempt.isCorrect;
                      return (
                        <li key={q.id} className="p-4 flex items-center justify-between">
                          <div>
                            <p className="font-medium">{`${t('question')} ${index + 1}: ${q.category}`}</p>
                            <p className={`text-sm ${isCorrect ? 'text-success' : 'text-danger'}`}>{isCorrect ? t('correct') : t('incorrect')}</p>
                          </div>
                          <Button onClick={() => setReviewIndex(index)} variant="ghost">Review</Button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
            </div>

            <div className="mt-10 text-center flex justify-center gap-4">
                <Button onClick={() => navigate('/exam')} variant="secondary">{t('tryAgain')}</Button>
                <Button onClick={() => navigate('/mode-select')}>{t('finishSession')}</Button>
            </div>
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/mode-select" element={<ModeSelectPage />} />
          <Route path="/learn" element={<LearnModePage />} />
          <Route path="/exam" element={<ExamModePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/module" element={<ModulePage />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;