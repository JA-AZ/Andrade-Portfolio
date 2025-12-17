import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import FabriqlyImage from '../assets/fabriqly.jpg';
import IMSImage from '../assets/IMS.jpg';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Fabriqly',
      description: 'A comprehensive hub connecting customers, designers, and local custom printing businesses. Simplifies ordering personalized apparel.',
      tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: FabriqlyImage,
      repo: 'https://github.com/Fabriqly/Fabriqly',
      demo: null
    },
    {
      title: 'IMS Reservation System',
      description: 'A venue and instructional material reservation system for the University of Cebu IMS Office.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: IMSImage,
      repo: 'https://github.com/JA-AZ/IMS-Reservation-System',
      demo: 'https://ims-reservation-system.vercel.app/'
    },
  ];

  return (
    <div className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            A selection of my recent academic and practical work.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/10 bg-slate-800">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-teal-400">
                    {project.tech.join(' • ')}
                  </p>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="block mt-2">
                    <p className="text-xl font-semibold text-white">{project.title}</p>
                    <p className="mt-3 text-base text-slate-300">{project.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-teal-400 transition-colors">
                    <Github className="w-5 h-5 mr-1" />
                    Repository
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-teal-400 transition-colors">
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
