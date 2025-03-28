import React from 'react';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Map through experience data */}
          {experienceData.map((experience, index) => (
            <div key={index} className="relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-blue-600">
                    <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                    <p className="text-blue-600 font-medium">{experience.company}</p>
                    <p className="text-gray-500 mt-1">{experience.period} | {experience.location}</p>
                    <p className="text-gray-600 mt-3 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center bg-blue-600 rounded-full h-8 w-8 border-4 border-white shadow">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="flex-1 md:pl-8">
                  {/* Key Projects */}
                  <div className="space-y-4 mt-4 md:mt-0">
                    {experience.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all border-l-2 border-blue-400">
                        <h4 className="font-semibold text-gray-900">{project.name}</h4>
                        <ul className="mt-2 text-gray-600 list-disc ml-5 space-y-1">
                          {project.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;