import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const tools = project.tools.split(',').map(tool => tool.trim());

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group flex flex-col">
      <div className="relative">
        <img src={project.imageUrl} alt={project.title} loading="lazy" className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-slate-800">{project.title}</h4>
        <p className="mt-2 text-slate-600 text-base flex-grow">{project.description}</p>
        
        <div className="mt-4 pt-4 border-t">
            <h5 className="text-sm font-semibold text-slate-500 mb-2">Tools Used</h5>
            <div className="flex flex-wrap gap-2">
            {tools.map(tool => (
                <span key={tool} className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
                {tool}
                </span>
            ))}
            </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button 
            onClick={() => onOpenModal(project)} 
            className="px-5 py-2.5 rounded-lg font-semibold text-sm bg-sky-500 text-white hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-sm"
          >
            View Details
          </button>
          {project.liveUrl && project.liveUrl !== '#' && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg font-semibold text-sm bg-white text-sky-600 border border-sky-500 hover:bg-sky-50 transition-all duration-300 transform hover:scale-105 shadow-sm"
            >
              Live Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;