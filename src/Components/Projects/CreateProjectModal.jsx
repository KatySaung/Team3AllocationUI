import { useState } from "react";
import axios from "axios";

const CreateProjectModal = ({ setShowModal, setProjects }) => {
  const [createProject, setCreateProject] = useState({
    name: "",
    description: "",
    skills: "",
    startDate: "",
    endDate: "",
  });
  const [contractId, setContractId] = useState("");
  const [clientId, setClientId] = useState("");

  const handleCreateProject = async (e) => {
    e.preventDefault();

    const formattedProject = {
      ...createProject,
      skills: createProject.skills.split(",").map((skill) => skill.trim()),
      clientId: parseInt(clientId, 10),
    };

    try {
      console.log(`Contract ID: ${contractId}, Client ID: ${clientId}`);
      console.log("Formatted Project:", formattedProject);
      const response = await axios.post(
        `http://localhost:8080/api/projects/create?contractId=${contractId}`,
        formattedProject
      );
      setProjects((prevProjects) => [...prevProjects, response.data]);
      setShowModal(false);
      resetCreateProject();
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Failed to create project. Please try again.");
    }
  };

  const resetCreateProject = () => {
    setCreateProject({
      name: "",
      description: "",
      skills: "",
      startDate: "",
      endDate: "",
    });
    setContractId("");
    setClientId("");
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl mb-4">Create New Project</h2>
        <form onSubmit={handleCreateProject}>
          <input
            type="text"
            placeholder="Project Name"
            value={createProject.name}
            onChange={(e) =>
              setCreateProject({ ...createProject, name: e.target.value })
            }
            className="border p-2 mb-2 w-full"
            required
          />
          <input
            type="text"
            placeholder="Client ID"
            value={createProject.clientId}
            onChange={(e) => setClientId(e.target.value)}
            className="border p-2 mb-2 w-full"
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={createProject.description}
            onChange={(e) =>
              setCreateProject({
                ...createProject,
                description: e.target.value,
              })
            }
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Skills (comma-separated)"
            value={createProject.skills}
            onChange={(e) =>
              setCreateProject({ ...createProject, skills: e.target.value })
            }
            className="border p-2 mb-2 w-full"
          />
          <input
            type="date"
            value={createProject.startDate}
            onChange={(e) =>
              setCreateProject({
                ...createProject,
                startDate: e.target.value,
              })
            }
            className="border p-2 mb-2 w-full"
          />
          <input
            type="date"
            value={createProject.endDate}
            onChange={(e) =>
              setCreateProject({ ...createProject, endDate: e.target.value })
            }
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Contract ID"
            value={contractId}
            onChange={(e) => setContractId(e.target.value)}
            className="border p-2 mb-4 w-full"
            required
          />

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectModal;
