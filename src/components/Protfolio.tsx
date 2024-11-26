import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Biao Li</h1>
          <h2 className="text-xl text-gray-400 mb-6">Software Engineer • Melbourne, VIC</h2>
          <p className="text-gray-300 max-w-4xl text-start">
            I am a dedicated mid-level software developer with a strong foundation in software
            development with 3 years of experience and a master's degree in Information Technology,
            and a collaborative team player to deliver projects on time. I have mainly worked on
            medical-related software products, with a focus on clean, maintainable, and
            well-structured code.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/biaoli0" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/biao-li-software-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300"
            >
              <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-white cursor-pointer" />
            </a>
            <h2 className="text-gray-400 mb-6">Phone: 401072213</h2>
            <h2 className="text-gray-400 mb-6">Email: lbit123@outlook.com</h2>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Skills Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Backend Skills */}
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
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
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
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
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
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

        {/* Experience Section with Projects */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Work Experience</h3>
          <div className="space-y-8">
            <div>
              <div className="border-l-2 border-gray-200 pl-6 relative">
                <div className="absolute -left-[80px] top-1 ">
                  <p className="text-xs text-gray-600 text-center">2020 - 2023 </p>
                </div>
                <div className="text-gray-600 space-y-1 text-start mb-6">
                  <h4 className="mb-1">Beyond Essential Systems</h4>
                  <p className="text-sm">Software Engineer </p>
                  <ul className="ml-4 space-y-0 list-disc text-sm max-w-lg">
                    <li>Implemented data visualization feature, enhanced website functionality</li>
                    <li>Provided technical support across teams</li>
                    <li>Participated in weekend on-call rotation</li>
                    <li>Developed frontend based on Figma UX design</li>
                  </ul>
                </div>
                {/* Key Projects Section */}
                <div className="space-y-6">
                  <h5 className="font-semibold text-gray-700 mb-4">Key Projects</h5>

                  {/* Project 1 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <h6 className="text-lg font-semibold">
                        Dashboard and Geographical data visualization
                      </h6>
                      <Link to={`projects/tupaia`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
                      </Link>
                    </div>
                    <p className="text-gray-600 mb-4 text-start">
                      A data platform that allows you to collect information about any entity,
                      aggregate it with other data sources, build beautiful analytics and reports,
                      then disseminate, map and visualize it – all in one place.
                    </p>
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img
                        src="images/tupaia.png"
                        alt="Dashboard and Geographical data visualization"
                        className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">React.js</span>
                      <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Rechart.js</span>
                      <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Node.js</span>
                      <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">PostgreSQL</span>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <h6 className="text-lg font-semibold">
                        Electronic medical record (EMR) System
                      </h6>
                      <Link to={`projects/tamanu`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
                      </Link>
                    </div>
                    <p className="text-gray-600 mb-4 text-start">
                      An electronic system collecting patients medical history.
                    </p>
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img
                        src="images/tamanu.jpg"
                        alt="Dashboard and Geographical data visualization"
                        className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">React.js</span>
                      <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Rechart.js</span>
                      <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Node.js</span>
                      <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">PostgreSQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
