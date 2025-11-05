import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { ExperienceItem } from '../types';

const GraduationCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v6" />
    </svg>
);

const TimelineItem: React.FC<{ item: ExperienceItem, isLast: boolean }> = ({ item, isLast }) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    return (
        <div ref={itemRef} className={`relative pl-12 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <div className="absolute left-0 top-1 flex items-center">
                {!isLast && <div className="absolute w-px h-full bg-slate-200 left-4 top-4"></div>}
                <div className="relative z-10 flex items-center justify-center w-9 h-9 bg-sky-500 rounded-full text-white">
                    <GraduationCapIcon />
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
};


const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {EDUCATION.map((item, index) => (
            <TimelineItem key={index} item={item} isLast={index === EDUCATION.length - 1} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;