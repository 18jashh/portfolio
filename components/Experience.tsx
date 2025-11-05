import React from 'react';
import Section from './Section';
// Fix: Changed import from non-existent 'EXPERIENCE' to 'EDUCATION' to resolve module not found error.
import { EDUCATION } from '../constants';
import { ExperienceItem } from '../types';

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const TimelineItem: React.FC<{ item: ExperienceItem, isLast: boolean }> = ({ item, isLast }) => (
    <div className="relative pl-12">
        <div className="absolute left-0 top-1 flex items-center">
            {!isLast && <div className="absolute w-px h-full bg-slate-200 left-4 top-4"></div>}
            <div className="relative z-10 flex items-center justify-center w-9 h-9 bg-sky-500 rounded-full text-white">
                <BriefcaseIcon />
            </div>
        </div>
        <div className="pb-12">
            <p className="text-sm text-slate-500">{item.period}</p>
            <h3 className="text-xl font-bold text-slate-800 mt-1">{item.title}</h3>
            <p className="text-md font-medium text-slate-600">{item.institution}</p>
            <ul className="mt-3 space-y-1 text-slate-600">
                {item.description.map((point, index) => (
                    <li key={index} className="flex items-start">
                         <span className="text-sky-500 mr-3 mt-1.5 flex-shrink-0">&#8227;</span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" className="bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Fix: Changed from EXPERIENCE to EDUCATION to match the updated import. */}
          {EDUCATION.map((item, index) => (
            <TimelineItem key={index} item={item} isLast={index === EDUCATION.length - 1} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
