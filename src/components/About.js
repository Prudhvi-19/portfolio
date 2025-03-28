import React from 'react';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Professional Profile
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {personalInfo.summary}
            </p>
            {personalInfo.additionalInfo.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed mt-4">
                {paragraph}
              </p>
            ))}
            
            <div className="mt-6">
              <a
                href={personalInfo.resumeFile}
                download
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Personal Details
            </h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="w-32 font-medium text-gray-900">Name:</div>
                <div className="text-gray-600">{personalInfo.name}</div>
              </div>
              <div className="flex">
                <div className="w-32 font-medium text-gray-900">Email:</div>
                <div className="text-gray-600">
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-all">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="w-32 font-medium text-gray-900">Phone:</div>
                <div className="text-gray-600">
                  <a href={`tel:${personalInfo.phone.replace(/[()-\s]/g, '')}`} className="hover:text-blue-600 transition-all">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="w-32 font-medium text-gray-900">LinkedIn:</div>
                <div className="text-gray-600">
                  <a 
                    href={personalInfo.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-all"
                  >
                    {personalInfo.linkedin}
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="w-32 font-medium text-gray-900">GitHub:</div>
                <div className="text-gray-600">
                  <a 
                    href={personalInfo.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-all"
                  >
                    {personalInfo.github}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;