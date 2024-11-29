import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types/Project';

export const ProjectCard: React.FC<Project> = ({
  title,
  route,
  description,
  image,
  link,
  technologies,
}) => {
  const linkTo = link || `projects/${route}`;
  return (
    <Link to={linkTo} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-start">
        <div className="mb-4">
          <h6 className="text-lg font-semibold">{title}</h6>
        </div>
        <p className="text-gray-600 mb-4 text-start">{description}</p>
        <div className="mb-4 overflow-hidden rounded-lg">
          <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
