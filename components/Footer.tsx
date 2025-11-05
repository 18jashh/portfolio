import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-6 py-6 text-center text-slate-500">
        <p>© {currentYear} Jash Gohil — Designed with creativity and purpose.</p>
      </div>
    </footer>
  );
};

export default Footer;