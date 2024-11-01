import { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectsList = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-4">Projects List</h1>
      <h2 className="text-lg text-center text-gray-500 mb-8">
        Table of current projects
      </h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse shadow-lg bg-white rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Client</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Description</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Skills</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Start Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">End Date</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">{project.id}</td>
                  <td className="px-6 py-4 text-sm text-blue-600 border-b font-medium">
                    {project.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">{project.client}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">{project.description}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">
                    {project.skills?.join(", ") || "No skills listed"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">{project.startDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">{project.endDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-gray-600">
                  No projects available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectsList;
