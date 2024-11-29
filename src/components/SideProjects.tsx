import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types/Project';

const SideProjects = () => {
  const projects: Project[] = [
    {
      title: 'API integration',
      link: 'https://github.com/biaoli0/CryptoPriceSystem',
      description:
        'A serverless platform to query the current price of a specific cryptocurrency and receive the result from your email.',
      image: 'images/side-projects/crypto.jpeg',
      technologies: ['Node.js', 'TypeScript', 'Github Action', 'AWS'],
    },
  ];

  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Side Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.route} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SideProjects;
