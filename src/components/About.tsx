import React from "react";
import { Database, Layout, Globe, Code } from "lucide-react";
import AboutImage from "../assets/andrade2.jpg";

const About: React.FC = () => {
  const skills = [
    {
      name: "Languages",
      icon: Code,
      description: "Java, Python, C++, TypeScript, JavaScript, PHP",
    },
    {
      name: "Frontend",
      icon: Layout,
      description: "HTML, CSS, Tailwind CSS, React",
    },
    {
      name: "Database",
      icon: Database,
      description: "MySQL, SQLite, Firebase, MongoDB, phpMyAdmin",
    },
    {
      name: "Tools",
      icon: Globe,
      description: "Figma, VS Code, GitHub, Vercel",
    },
  ];

    return (

      <div className="py-12 bg-slate-800 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          

          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">

          <div className="relative">
            <div className="mb-8">
              <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">
                About Me
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Passionate about UI/UX & Clean Code
              </p>
            </div>

            <div className="relative text-lg text-slate-300">
              <p className="mb-4 text-xl text-slate-300">
                I am a 4th-year BSIT student at the University of Cebu,
                specializing in front-end design and development. I enjoy
                building clean, user-friendly interfaces and collaborating on
                real-world projects like <strong className="text-teal-400">Fabriqly</strong> and the{" "}
                <strong className="text-teal-400">IMS Reservation System</strong>.
              </p>
              <p className="mb-8">
                My goal is to become a skilled front-end developer who creates
                intuitive and visually appealing user experiences, while
                continuously learning new technologies and best practices in web
                development.
              </p>
            </div>

            <div className="mt-10 border-t border-slate-700 pt-10">
              <dl className="space-y-10">
                {skills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                        <skill.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-white">
                        {skill.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-slate-400">
                      {skill.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 relative lg:sticky lg:top-24" aria-hidden="true">
            <div className="relative rounded-lg shadow-2xl shadow-teal-500/20 overflow-hidden aspect-[4/5]">
              <div className="absolute inset-0 bg-teal-500 mix-blend-overlay opacity-10 pointer-events-none z-10"></div>
              <img
                className="w-full h-full object-cover rounded-lg"
                src={AboutImage}
                alt="Jairus Azer Andrade working"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
