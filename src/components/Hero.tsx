import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import ProfileImage from '../assets/andrade1.jpg';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 overflow-hidden pt-20 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Hi, I'm Jairus Azer Andrade</span>{' '}
              <span className="block text-teal-500 xl:inline">Front-end Developer</span>
            </h1>
            <p className="mt-3 text-base text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              A motivated BSIT student focused on building clean, user-friendly interfaces and transforming ideas into functional digital products.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg transition-colors"
                >
                  Contact Me
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#portfolio"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-400 bg-slate-800 hover:bg-slate-700 md:py-4 md:text-lg transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4 sm:justify-center lg:justify-start text-slate-400">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:jairus.andrade@example.com" className="hover:text-teal-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden aspect-[3/4]">
              <img
                className="w-full h-full object-cover"
                src={ProfileImage}
                alt="Jairus Azer Andrade"
              />
              <div className="absolute inset-0 bg-teal-500 mix-blend-overlay opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
