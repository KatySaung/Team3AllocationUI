import React, { useEffect, useState } from "react";

function Employees() {
  const [employees, setEmployees] = useState([]);

  // Fetch employee data from backend or use dummy data as fallback
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/employees"); // Replace with actual API endpoint
        const data = await response.json();
        console.log(data);
        // setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
        // Fallback dummy data
        setEmployees([
          {
            fullName: "John Doe",
            title: "Software Engineer",
            salary: "$90,000",
            skills: ["React", "Node.js", "Tailwind CSS"],
            status: "Active",
            availableFrom: "November 1, 2024",
          },
          {
            fullName: "Jane Smith",
            title: "Project Manager",
            salary: "$110,000",
            skills: ["Agile", "Scrum", "Communication"],
            status: "Active",
            availableFrom: "Immediate",
          },
          {
            fullName: "Emily Davis",
            title: "UX Designer",
            salary: "$85,000",
            skills: ["Figma", "Adobe XD", "User Research"],
            status: "Inactive",
            availableFrom: "December 15, 2024",
          },
        ]);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
        Employees
      </h1>
      <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1 max-w-6xl mx-auto">
        {employees.map((employee, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              {employee.fullName}
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              <span className="font-medium">{employee.title}</span> —{" "}
              <span className="text-green-600 font-semibold">
                {employee.salary}
              </span>
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-medium text-gray-800 mb-1">
                Skills:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {employee.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm">
              <span className="font-semibold text-gray-800">Status:</span>{" "}
              <span
                className={`${
                  employee.status === "Active"
                    ? "text-green-600"
                    : "text-red-600"
                } font-medium`}
              >
                {employee.status}
              </span>
            </p>
            <div className="mt-4 text-sm text-gray-700">
              <span className="font-semibold">Available From:</span>{" "}
              {employee.availableFrom}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employees;
