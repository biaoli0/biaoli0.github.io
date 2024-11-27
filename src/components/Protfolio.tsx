import React from 'react';
import Intro from './Intro';
import TechnicalSkills from './TechnicalSkills';
import WorkExperience from './WorkExperience';
import SideProjects from './SideProjects';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Intro />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <TechnicalSkills />
        <WorkExperience />
        <SideProjects />
      </main>
    </div>
  );
};

export default Portfolio;
