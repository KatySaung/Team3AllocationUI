const ProjectModal = ({ project, onClose }) => {
  if (!project) return null; // Prevent rendering if project data is missing

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 rounded-full p-2"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          {project.name || "No project name"}
        </h2>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Client:</span>{" "}
          {project.client || "Unknown"}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Description:</span>{" "}
          {project.description || "No description available"}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Required Skills:</span>{" "}
          {project.skills ? project.skills.join(", ") : "No skills listed"}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Start Date:</span>{" "}
          {project.startDate || "N/A"}{" "}
          <span className="font-medium">End Date:</span>{" "}
          {project.endDate || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ProjectModal;
