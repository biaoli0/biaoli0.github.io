import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const backgroundImage = '/images/tamanu.jpg';

const TamanuPage = () => {
  // Project data
  const projects = [
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

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-20');
        } else {
          entry.target.classList.add('opacity-0', 'translate-y-20');
          entry.target.classList.remove('opacity-100', 'translate-y-0');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('.project-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Initial Section */}
      <section className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-tamanu">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/50 to-gray-900/10" />

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFFFFF\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>

        {/* Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(59, 130, 246, 0.8) 0%, transparent 70%)',
                width: '60rem',
                height: '60rem',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%)',
                animation: `float ${15 + i * 5}s infinite ease-in-out ${i * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Tamanu</h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Explore my journey through contributions on Tamanu
          </p>
          <div className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="animate-bounce h-5 w-5" />
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
      </section>

      {/* Project Sections */}
      {projects.map((project) => (
        <section
          key={project.id}
          className="project-section min-h-screen flex items-center transition-all duration-1000 ease-out"
        >
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500" />
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
              </div>

              <p className="text-gray-600 leading-relaxed">{project.description}</p>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {project.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default TamanuPage;
