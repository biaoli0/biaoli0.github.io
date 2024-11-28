import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  route: string;
  description: string;
  image: string;
  technologies: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  route,
  description,
  image,
  technologies,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <h6 className="text-lg font-semibold">{title}</h6>
        <Link to={`projects/${route}`} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
        </Link>
      </div>
      <p className="text-gray-600 mb-4 text-start">{description}</p>
      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-250"
        />
      </div>
      <div className="flex gap-2 flex-wrap">
        {technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
