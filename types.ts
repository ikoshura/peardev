
import type React from 'react';

export interface QuizItem {
  id: string;
  category: string;
  question: string | React.ReactNode;
  options: (string | React.ReactNode)[];
  answerIndex: number;
  explanation: string;
}

export interface Attempt {
  itemId: string;
  selectedOption: number | null;
  isCorrect: boolean;
}

export interface LearnAttempt {
  selectedOption: number | null;
  revealed: boolean;
}

export interface ExamResult {
  attempts: Attempt[];
  score: number;
  total: number;
  timeTaken: number; // in seconds
}
