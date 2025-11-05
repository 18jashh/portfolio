
import React from 'react';

const SkillBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="bg-sky-100 text-sky-800 text-sm font-medium px-3 py-1 rounded-full">
      {children}
    </span>
  );
};

export default SkillBadge;
