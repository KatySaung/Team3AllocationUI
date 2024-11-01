import React from "react";

const ProjectSelector = ({
  projects,
  selectedProjects,
  setSelectedProjects,
}) => {
  // Toggle project selection
  const toggleProjectSelection = (projectId) => {
    setSelectedProjects((prevSelected) =>
      prevSelected.includes(projectId)
        ? prevSelected.filter((id) => id !== projectId)
        : [...prevSelected, projectId]
    );
  };

  return (
    <div className="project-selector my-4">
      <h2 className="text-xl font-semibold mb-4">Select Projects</h2>
      <ul className="project-list border p-4 rounded">
        {projects.map((project) => (
          <li key={project.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={selectedProjects.includes(project.id)}
              onChange={() => toggleProjectSelection(project.id)}
              className="mr-2"
            />
            <span>{project.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSelector;
