import React from 'react';
import ProjectItem from './ProjectItem';
import { PROJECTS } from '../data/projectsData';
import PersonalInfo from './PersonalInfo';

function AuthorInfo() {
  return (
    <div className="bg-gray-100 p-8 flex flex-col md:flex-row mb-8 rounded-md">
      <div className="w-full md:w-2/3 md:mr-8">
        <h2 className="text-4xl font-bold mb-4 ml-4">GARKUSHA EVGENII</h2>
        <div className="text-xl mt-2 ml-4 mb-4">
          <p>Student of BSU, Faculty of Mechanics and Mathematics.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Personal projects</h2>
          {PROJECTS.map((project) => (
            <ProjectItem
              name={project.name}
              githubLink={project.github}
              description={project.description}
              technologies={project.technologies}
              key={crypto.randomUUID()}
            />
          ))}
        </div>
      </div>
      <PersonalInfo />
    </div>
  );
}

export default React.memo(AuthorInfo);
