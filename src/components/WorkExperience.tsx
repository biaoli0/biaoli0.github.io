import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkExperience = () => {
  return (
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
  );
};

export default WorkExperience;
