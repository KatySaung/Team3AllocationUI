import React, { useEffect, useState } from "react";

function Projects({ name }) {
  const [projects, setProjects] = useState([]);

  // Simulate fetching projects from backend with dummy data fallback
  //fetch projects by name... Not all projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/projects/getAllProjects/${name}`
        ); // Replace with actual API endpoint
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        // Fallback to dummy data
        setProjects([
          {
            id: 1,
            name: "Website Redesign",
            client: "Tech Solutions Ltd.",
            description: "Redesigning the corporate website with modern UI.",
            skills: ["React", "Tailwind CSS", "UI/UX Design"],
            startDate: "2023-08-01",
            endDate: "2023-12-01",
          },
          {
            id: 2,
            name: "Mobile App Development",
            client: "Marketing Experts Inc.",
            description:
              "Building a cross-platform mobile app for client engagement.",
            skills: ["React Native", "API Integration", "Design Patterns"],
            startDate: "2023-05-01",
            endDate: "2023-11-15",
          },
        ]);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="bg-indigo-500 min-h-screen p-8">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
        Projects
      </h1>
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
                {project.skills.join(", ")}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Start Date:</span>{" "}
                {project.startDate}{" "}
                <span className="font-medium">End Date:</span> {project.endDate}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No projects available.</p>
        )}
      </div>
    </div>
  );
}

export default Projects;
