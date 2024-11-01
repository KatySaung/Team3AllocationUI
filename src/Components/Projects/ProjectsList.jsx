<<<<<<< HEAD
import React from "react";

const ProjectsList = ({ projects }) => {
  return (
    <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1 max-w-6xl mx-auto">
      {projects.length > 0 ? (
        projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              {project.name}
            </h3>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Client:</span> {project.client}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Description:</span>{" "}
              {project.description}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Required Skills:</span>{" "}
              {project.skills?.join(", ") || "No skills listed"}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Start Date:</span>{" "}
              {project.startDate} <span className="font-medium">End Date:</span>{" "}
              {project.endDate}
            </p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No projects available.</p>
=======
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
>>>>>>> 76abfce1058e4781a90ce9716d7a96d400d2a6e6
      )}
    </div>
  );
};

export default ProjectsList;
<<<<<<< HEAD

// import React, {useEffect, useState} from "react";
// import axios from "axios";

// const ProjectsList = ({searchName}) => {
//     const [project, setProject] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");

//    useEffect(() => {
//     const fetchProject = async ()=> {
//         if(searchName.trim()){
//             setLoading(true);
//             setError("");
//             try {
//                 const resp = await axios.get(`http://localhost:8080/api/projects/getAllProjects/${searchName}`)
//                 if (resp.data.length > 0){
//                     setProject(resp.data[0]);
//                 } else {
//                     setProject(null);
//                 }
//             } catch (err) {
//                 setError("Error fetching the project name");
//             } finally {
//                 setLoading(false);
//             }
//         } else {
//             setProject(null);
//         }
//     };
//     fetchProject();
//    }, [searchName]);

//    if (loading) return <p>Loading...</p>;

//    return (
//     <div className="p-4">
//         {project && (
//             <div>
//                 <h3>{project.name}</h3>
//                 <p>Client ID: {project.clientId}</p>
//                 <p>Description: {project.description}</p>
//                 <p>Start Date: {project.startDate}</p>
//                 <p>End Date: {project.endDate}</p>
//             </div>
//         )}

//     </div>
//    )

// }

// export default ProjectsList;
=======
>>>>>>> 76abfce1058e4781a90ce9716d7a96d400d2a6e6
