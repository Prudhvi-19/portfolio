import React from 'react';
import { educationData } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="text-blue-600">Education</span>
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((education, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-t-4 border-blue-600">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{education.institution}</h3>
                  <p className="text-gray-600 mt-1">{education.degree}</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-600 font-medium">{education.period}</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900">Relevant Coursework:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {education.courses.map((course, courseIndex) => (
                    <span 
                      key={courseIndex}
                      className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;