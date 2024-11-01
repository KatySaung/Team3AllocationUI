import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectsList from "./ProjectsList";
import CreateProjectModal from "./CreateProjectModal";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Fetch projects by search name or get all projects
  const fetchProjects = async () => {
    try {
      const response = searchName.trim()
        ? await axios.get(
            `http://localhost:8080/api/projects/getAllProjects/${searchName}`
          )
        : await axios.get("http://localhost:8080/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
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

  useEffect(() => {
    fetchProjects();
  }, [searchName]);

  return (
    <div className="bg-indigo-500 min-h-screen p-8">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
        Projects
      </h1>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Project by keyword"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Project List */}
      <ProjectsList projects={projects} />

      {/* Create Project Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Create Project
      </button>

      {/* Modal for creating a new project */}
      {showModal && (
        <CreateProjectModal
          setShowModal={setShowModal}
          setProjects={setProjects}
        />
      )}
    </div>
  );
}

export default Projects;
