import React from 'react';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and expertise.
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="md:w-2/5 h-64 bg-gray-200 flex items-center justify-center">
                {/* Project image placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white p-6">
                  <p className="text-xl font-bold text-center">{project.title}</p>
                </div>
              </div>
              <div className="p-6 md:w-3/5">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 space-y-2">
                  {project.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-gray-600">
                      {desc}
                    </p>
                  ))}
                </div>
                
                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all"
                  >
                    View Project
                    <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;