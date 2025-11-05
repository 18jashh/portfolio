
import React from 'react';
import Section from './Section';
import SkillBadge from './SkillBadge';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-white">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 text-lg text-slate-600 space-y-4">
          <p>
            I’m Jash Gohil, a Computer Engineering student passionate about building creative digital solutions. I enjoy blending engineering logic with design thinking to create products that are both functional and visually engaging.
          </p>
          <p>
            My interests lie in UI/UX design, web development, and software engineering. I’m curious, collaborative, and always exploring new tools and technologies to improve user experiences and solve real-world problems.
          </p>
          <div>
            <h3 className="text-xl font-bold text-slate-700 mt-6 mb-2">Key Strengths:</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Full-stack thinking — from concept to execution</li>
              <li>Empathy-driven design and usability mindset</li>
              <li>Technical proficiency and creativity combined</li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2 space-y-6">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-lg font-semibold text-slate-700 mb-3">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
