import React from 'react';

const TechnicalSkills = () => {
  const backendSkills = ['Node.js & Express', 'RESTful APIs', 'Microservices Architecture'];
  const frontendSkills = [
    'React & Next.js',
    'React Native',
    'TypeScript',
    'React Query',
    'React Router',
    'Material UI',
    'Styled Components',
    'Tailwind CSS',
    'Responsive Design',
  ];
  const databaseAndCloudSkills = ['PostgreSQL', 'AWS Services', 'CI/CD Pipelines'];

  return (
    <section className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Technical Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Backend Skills */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <h4 className="font-semibold">Backend Development</h4>
          </div>
          <ul className="space-y-2">
            {backendSkills.map((skill, index) => (
              <li key={index} className="flex items-center text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Frontend Skills */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <h4 className="font-semibold">Frontend Development</h4>
          </div>
          <ul className="space-y-2">
            {frontendSkills.map((skill, index) => (
              <li key={index} className="flex items-center text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Database & Cloud Skills */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <h4 className="font-semibold">Database & Cloud</h4>
          </div>
          <ul className="space-y-2">
            {databaseAndCloudSkills.map((skill, index) => (
              <li key={index} className="flex items-center text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
