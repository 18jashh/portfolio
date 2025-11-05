import React from 'react';
import Section from './Section';
import { RESUME_HIGHLIGHTS } from '../constants';

const Resume: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section id="resume" title="Resume" className="bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <ul className="space-y-4 text-lg text-slate-600 mb-8">
          {RESUME_HIGHLIGHTS.map((highlight, index) => (
            <li key={index} className="flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <a
          href="https://drive.google.com/file/d/1cDpHLSaTSHMwtcPkrjfdYwb79HGfZWtT/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sky-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Download Full Resume
        </a>
        <p className="mt-4 text-sm text-slate-500">
          Last Updated: {currentYear}
        </p>
      </div>
    </Section>
  );
};

export default Resume;