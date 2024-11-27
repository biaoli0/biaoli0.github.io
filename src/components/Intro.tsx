import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Intro = () => {
  return (
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
  );
};

export default Intro;
