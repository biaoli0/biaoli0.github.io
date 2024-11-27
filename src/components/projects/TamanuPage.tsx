import React from 'react';
import ProjectPage from './ProjectPage';

const TamanuPage = () => {
  const projectData = [
    {
      id: 1,
      title: 'Patient Data Visualization',
      description: `Developed a data visualization platform that enables nurses to track patient medical records
      changes over time, aiding in better decision-making and care planning`,
      responsibilities: [
        'Architected and implemented the frontend infrastructure',
        'Integrated data visualization libraries including Recharts and Mapbox',
      ],
      tech: ['React', 'TypeScript', 'Recharts', 'Node.js', 'PostgreSQL'],
      image: '/images/tamanu/patient-charts-sample.png',
    },
    {
      id: 2,
      title: 'Database soft deletion integration',
      description: `Integrated PostgreSQL soft deletion strategy to "delete" records without physically 
      removing them from the database.`,
      responsibilities: [
        'Refactored existing database ORM fetching params',
        'Implemented feature flag for specific db tables soft deletion',
        'Integrated soft deletion strategy with existing database configuration',
        'Integrated with role-based access control',
      ],
      tech: ['React', 'Node.js', 'PostgreSQL'],
      image: '/images/tamanu/soft-deletion.png',
    },
  ];

  return (
    <ProjectPage
      title="Tamanu"
      backgroundImage="/images/tamanu.jpg"
      projects={projectData}
    />
};

export default TamanuPage;
