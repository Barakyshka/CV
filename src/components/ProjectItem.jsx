import React from 'react';

function ProjectItem({ name, githubLink, description, technologies }) {
  return (
    <div className="bg-white p-4 rounded-md mb-4">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="flex flex-col mb-2">
        <span className="font-bold mb-1">GitHub:</span>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {githubLink}
        </a>
      </div>
      <p className="text-sm mb-2">{description}</p>
      <p className="text-sm">{technologies}</p>
    </div>
  );
}

export default React.memo(ProjectItem);
