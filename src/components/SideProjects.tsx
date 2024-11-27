import React from 'react';
import { ExternalLink } from 'lucide-react';

const SideProjects = () => {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A responsive portfolio website built with React and Tailwind CSS',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://github.com/biaoli0/portfolio',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that shows current weather and 5-day forecast',
      technologies: ['React', 'OpenWeather API', 'Tailwind CSS'],
      link: 'https://github.com/biaoli0/weather-dashboard',
    },
  ];

  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Side Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <h6 className="text-lg font-semibold">{project.title}</h6>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              </a>
            </div>
            <p className="text-gray-600 mb-4 text-start">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SideProjects;
