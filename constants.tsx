
import React from 'react';

const Square = () => <rect x="5" y="5" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" />;
const Circle = () => <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="2" fill="none" />;
const Triangle = () => <polygon points="25,5 5,45 45,45" stroke="currentColor" strokeWidth="2" fill="none" />;
const Star = () => <polygon points="25,5 30,20 45,20 35,30 40,45 25,35 10,45 15,30 5,20 20,20" stroke="currentColor" strokeWidth="2" fill="none" />;

interface FigureProps {
  tl: React.ElementType;
  tr: React.ElementType;
  bl: React.ElementType;
  br: React.ElementType;
  size?: 'large' | 'small'
}

const Figure: React.FC<FigureProps> = ({ tl: TL, tr: TR, bl: BL, br: BR, size = 'large' }) => {
  const containerSize = size === 'large' ? 'w-24 h-24' : 'w-20 h-20';
  const iconSize = size === 'large' ? '30' : '25';
  const borderColor = 'border-gray-700';
  
  return (
    <div className={`grid grid-cols-2 grid-rows-2 ${containerSize} border-2 ${borderColor}`}>
      <div className={`flex items-center justify-center border-r border-b ${borderColor}`}><svg width={iconSize} height={iconSize} viewBox="0 0 50 50"><TL /></svg></div>
      <div className={`flex items-center justify-center border-b ${borderColor}`}><svg width={iconSize} height={iconSize} viewBox="0 0 50 50"><TR /></svg></div>
      <div className={`flex items-center justify-center border-r ${borderColor}`}><svg width={iconSize} height={iconSize} viewBox="0 0 50 50"><BL /></svg></div>
      <div className="flex items-center justify-center"><svg width={iconSize} height={iconSize} viewBox="0 0 50 50"><BR /></svg></div>
    </div>
  );
};

export const AbstractReasoningQuestionComponent = ({ t }: { t: (key: string) => string }) => (
  <div className="space-y-6">
    <p>{t('q4_instructions')}</p>
    <div className="flex justify-center py-4">
      <div className="inline-grid grid-cols-3 gap-1 p-1 rounded-md bg-gray-100 border border-gray-300">
        {/* Row 1 */}
        <Figure tl={Triangle} tr={Square} bl={Star} br={Circle} />
        <Figure tl={Circle} tr={Square} bl={Star} br={Triangle} />
        <Figure tl={Circle} tr={Star} bl={Square} br={Triangle} />
        {/* Row 2 */}
        <Figure tl={Circle} tr={Star} bl={Square} br={Triangle} />
        <Figure tl={Triangle} tr={Star} bl={Square} br={Circle} />
        <Figure tl={Triangle} tr={Square} bl={Star} br={Circle} />
        {/* Row 3 */}
        <Figure tl={Square} tr={Circle} bl={Triangle} br={Star} />
        <Figure tl={Star} tr={Circle} bl={Triangle} br={Square} />
        <div className="w-24 h-24 border-2 border-gray-700 flex items-center justify-center bg-white text-5xl font-bold">?</div>
      </div>
    </div>
  </div>
);

export const QUIZ_QUESTIONS_STRUCTURE = [
  {
    id: 'q1',
    categoryKey: 'category_assumption',
    questionKey: 'q1_question',
    optionsKeys: ['q1_opt1', 'q1_opt2', 'q1_opt3', 'q1_opt4', 'q1_opt5'],
    answerIndex: 4,
    explanationKey: 'q1_explanation'
  },
  {
    id: 'q2',
    categoryKey: 'category_seating',
    questionKey: 'q2_question',
    optionsKeys: ['q2_opt1', 'q2_opt2', 'q2_opt3', 'q2_opt4'],
    answerIndex: 1,
    explanationKey: 'q2_explanation'
  },
  {
    id: 'q3',
    categoryKey: 'category_critical',
    questionKey: 'q3_question',
    optionsKeys: ['q3_opt1', 'q3_opt2', 'q3_opt3', 'q3_opt4'],
    answerIndex: 1,
    explanationKey: 'q3_explanation'
  },
  {
    id: 'q4',
    categoryKey: 'category_abstract',
    questionKey: 'q4_question', // This will be a component
    options: [
      <Figure tl={Star} tr={Triangle} bl={Circle} br={Square} size="small" />,
      <Figure tl={Circle} tr={Square} bl={Triangle} br={Star} size="small" />,
      <Figure tl={Square} tr={Circle} bl={Triangle} br={Star} size="small" />,
      <Figure tl={Circle} tr={Square} bl={Star} br={Triangle} size="small" />,
      <Figure tl={Triangle} tr={Star} bl={Square} br={Circle} size="small" />,
      <Figure tl={Triangle} tr={Square} bl={Star} br={Circle} size="small" />,
    ],
    answerIndex: 0,
    explanationKey: 'q4_explanation'
  },
  {
    id: 'q5',
    categoryKey: 'category_numerical',
    questionKey: 'q5_question',
    optionsKeys: ['q5_opt1', 'q5_opt2', 'q5_opt3', 'q5_opt4'],
    answerIndex: 1,
    explanationKey: 'q5_explanation'
  },
  {
    id: 'q6',
    categoryKey: 'category_verbal',
    questionKey: 'q6_question',
    optionsKeys: ['q6_opt1', 'q6_opt2', 'q6_opt3', 'q6_opt4', 'q6_opt5'],
    answerIndex: 1,
    explanationKey: 'q6_explanation'
  },
  {
    id: 'q7',
    categoryKey: 'category_sequence',
    questionKey: 'q7_question',
    optionsKeys: ['q7_opt1', 'q7_opt2', 'q7_opt3', 'q7_opt4'],
    answerIndex: 1,
    explanationKey: 'q7_explanation'
  },
  {
    id: 'q8',
    categoryKey: 'category_looping',
    questionKey: 'q8_question',
    optionsKeys: ['q8_opt1', 'q8_opt2', 'q8_opt3', 'q8_opt4'],
    answerIndex: 0,
    explanationKey: 'q8_explanation'
  },
  {
    id: 'q9',
    categoryKey: 'category_conditional',
    questionKey: 'q9_question',
    optionsKeys: ['q9_opt1', 'q9_opt2', 'q9_opt3', 'q9_opt4'],
    answerIndex: 1,
    explanationKey: 'q9_explanation'
  },
  {
    id: 'q10',
    categoryKey: 'category_oop',
    questionKey: 'q10_question',
    optionsKeys: ['q10_opt1', 'q10_opt2', 'q10_opt3', 'q10_opt4'],
    answerIndex: 1,
    explanationKey: 'q10_explanation'
  }
];
