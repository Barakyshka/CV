import React from 'react';
import ProjectItem from './ProjectItem';
import { PROJECTS } from '../data/projectsData';
import PersonalInfo from './PersonalInfo';

/*function AuthorInfo() {
  return (
    <div className="bg-gray-100 p-8 flex flex-col md:flex-row mb-8 rounded-md">
      <div className="w-full md:w-2/3 md:mr-8">
        <h2 className="text-4xl font-bold mb-4 ml-4">GARKUSHA EVGENII</h2>
        <div className="text-xl mt-2 ml-4 mb-4">
          <p>Student of BSU, Faculty of Mechanics and Mathematics.</p>
        </div>
          <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Autobiography</h2>
          <p><strong>Date of Birth:</strong> 2005</p>
          <p><strong>Place of Birth:</strong> Vitebsk, Belarus</p>
          <p><strong>Year of Study:</strong> Second year</p>
          <p><strong>Education:</strong> I am pursuing a high-quality education in mathematics, mechanics, systems analysis, and information technology at Mech-Math BSU. My studies cover a wide range of topics, including advanced mathematics and programming languages.</p>
          <p><strong>Programming Languages:</strong></p>
          <ul>
            <li><strong>JavaScript (JS):</strong> I am actively learning web programming and creating interactive websites using JS.</li>
            <li><strong>C++ and C#:</strong> These languages are also part of my curriculum, allowing me to develop applications and solve complex problems.</li>
            <li><strong>Freelancing with C#:</strong> In my free time, I engage in freelance work, developing software solutions using C#. This practical experience helps me apply my knowledge and gain valuable skills.</li>
          </ul>
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

export default React.memo(AuthorInfo);*/
import React from 'react';
import ProjectItem from './ProjectItem';
import { PROJECTS } from '../data/projectsData';
import PersonalInfo from './PersonalInfo';

function AuthorInfo() {
  return (
    <div className="bg-gray-100 p-4 md:p-8 flex flex-col md:flex-row mb-8 rounded-md">
      <div className="w-full md:w-2/3 md:mr-8">
        <h2 className="text-4xl font-bold mb-4 ml-4">GARKUSHA EVGENII</h2>
        <div className="text-xl mt-2 ml-4 mb-4">
          <p>Student of BSU, Faculty of Mechanics and Mathematics.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md mb-4">
          <h2 className="text-2xl font-bold mb-4">Autobiography</h2>
          <p><strong>Date of Birth:</strong> 2005</p>
          <p><strong>Place of Birth:</strong> Vitebsk, Belarus</p>
          <p><strong>Year of Study:</strong> Second year</p>
          <p><strong>Education:</strong> I am pursuing a high-quality education in mathematics, mechanics, systems analysis, and information technology at Mech-Math BSU. My studies cover a wide range of topics, including advanced mathematics and programming languages.</p>
          <p><strong>Programming Languages:</strong></p>
          <ul>
            <li><strong>JavaScript (JS):</strong> I am actively learning web programming and creating interactive websites using JS.</li>
            <li><strong>C++ and C#:</strong> These languages are also part of my curriculum, allowing me to develop applications and solve complex problems.</li>
            <li><strong>Freelancing with C#:</strong> In my free time, I engage in freelance work, developing software solutions using C#. This practical experience helps me apply my knowledge and gain valuable skills.</li>
          </ul>
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

