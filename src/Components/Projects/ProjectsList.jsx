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
      )}
    </div>
  );
};

export default ProjectsList;

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
