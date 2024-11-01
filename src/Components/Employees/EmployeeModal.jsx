import { useState, useEffect } from "react";

function EmployeeModal({ onClose, project }) {
  const projects = [
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
    {
      id: 3,
      name: "E-commerce Platform",
      client: "Online Retail Co.",
      description: "Developing a scalable e-commerce platform.",
      skills: ["Node.js", "Express", "MongoDB", "React"],
      startDate: "2023-06-01",
      endDate: "2023-12-31",
    },
    {
      id: 4,
      name: "Data Analytics Dashboard",
      client: "FinTech Analytics",
      description: "Creating a data visualization dashboard for analytics.",
      skills: ["Python", "Pandas", "D3.js", "JavaScript"],
      startDate: "2023-07-01",
      endDate: "2023-10-30",
    },
    {
      id: 5,
      name: "Inventory Management System",
      client: "Warehouse Solutions Inc.",
      description: "Building a system to manage warehouse inventory.",
      skills: ["Java", "Spring Boot", "MySQL"],
      startDate: "2023-04-01",
      endDate: "2023-09-01",
    },
    {
      id: 6,
      name: "HR Portal",
      client: "People Solutions",
      description: "Developing an employee management and HR portal.",
      skills: ["Angular", "TypeScript", "Node.js", "Express"],
      startDate: "2023-02-01",
      endDate: "2023-06-01",
    },
    {
      id: 7,
      name: "Social Media Integration",
      client: "Brand Connect",
      description: "Integrating social media platforms for brand engagement.",
      skills: ["API Integration", "OAuth", "JavaScript"],
      startDate: "2023-03-01",
      endDate: "2023-07-01",
    },
    {
      id: 8,
      name: "IoT Home Automation",
      client: "Smart Home Innovations",
      description: "Developing IoT solutions for home automation.",
      skills: ["IoT", "Python", "AWS IoT", "Embedded Systems"],
      startDate: "2023-01-15",
      endDate: "2023-05-30",
    },
    {
      id: 9,
      name: "Blockchain Voting System",
      client: "GovTech Solutions",
      description: "Creating a secure voting system using blockchain.",
      skills: ["Blockchain", "Solidity", "Web3.js"],
      startDate: "2023-08-01",
      endDate: "2023-12-31",
    },
    {
      id: 10,
      name: "Healthcare App",
      client: "MedTech Innovators",
      description: "Building an app for patient-doctor communication.",
      skills: ["Flutter", "Firebase", "UX/UI Design"],
      startDate: "2023-05-01",
      endDate: "2023-11-01",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  // Select a random project on component mount
  useEffect(() => {
    const randomProject = projects[Math.floor(Math.random() * projects.length)];
    setSelectedProject(randomProject);
  }, []);

  // If selectedProject is null, return nothing
  if (!selectedProject) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-1/2">
        <h2 className="text-xl font-semibold mb-4">{selectedProject.name}</h2>
        <p>
          <strong>Client:</strong> {selectedProject.client}
        </p>
        <p>
          <strong>Description:</strong> {selectedProject.description}
        </p>
        <p>
          <strong>Skills Required:</strong> {selectedProject.skills.join(", ")}
        </p>
        <p>
          <strong>Start Date:</strong> {selectedProject.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {selectedProject.endDate}
        </p>

        <button
          onClick={() => setSelectedProject(null)}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default EmployeeModal;
