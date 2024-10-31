import { useState, useEffect } from "react";
import axios from "axios";
import EmployeeModal from "./EmployeeModal";
import CreateEmployeeModal from "./CreateEmployeeModal";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  const fetchEmployees = async () => {
    const response = await axios.get("http://localhost:8080/api/employees");
    console.log("ALL employees", response.data);
    setEmployees(response.data);
  };

  const fetchFreeEmployees = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/employees/free-employees"
    );
    console.log("FREE employees", response.data);
    setEmployees(response.data);
  };

  useEffect(() => {
    showFreeOnly ? fetchFreeEmployees() : fetchEmployees();
  }, [showFreeOnly]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl">Employees</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Employee
        </button>
      </div>

      <button
        onClick={() => setShowFreeOnly(!showFreeOnly)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {showFreeOnly ? "Show All Employees" : "Show Free Employees"}
      </button>

      <ul>
        {employees.map((employee) => (
          <li
            key={employee.id}
            onClick={() => setSelectedEmployee(employee)}
            className="p-4 border-b cursor-pointer hover:bg-gray-100"
          >
            <p><strong>Name:</strong> {employee.fullName}</p>
            <p><strong>Title:</strong> {employee.title}</p>
            <p><strong>Salary:</strong> ${employee.salary.toFixed(2)}</p>
            <p><strong>Total Hours Worked:</strong> {employee.totalHoursWorked}</p>
            <p><strong>Status:</strong> {employee.status ? "Booked" : "Available"}</p>
            <p><strong>Available From:</strong> {employee.availableFrom}</p>
            <p><strong>Rate Card:</strong> {employee.rateCardName}</p>
            <p><strong>Skills:</strong> {employee.skills.join(", ")}</p>
          </li>
        ))}
      </ul>

      {selectedEmployee && (
        <EmployeeModal
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
          onUpdate={fetchEmployees}
        />
      )}

      {showCreateModal && (
        <CreateEmployeeModal
          onClose={() => setShowCreateModal(false)}
          onCreate={fetchEmployees}
        />
      )}
    </div>
  );
};

export default EmployeeList;

// import { useEffect, useState } from "react";

// function Employees() {
//   const [employees, setEmployees] = useState([]);

// Fetch employee data from backend or use dummy data as fallback
//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch("http:/"); // Replace with actual API endpoint
//         const data = await response.json();
//         console.log(data);
//         setEmployees(data);
//       } catch (error) {
//         console.error("Error fetching employees:", error);
//         // Fallback dummy data
//         setEmployees([
//           {
//             fullName: "John Doe",
//             title: "Software Engineer",
//             salary: "$90,000",
//             skills: ["React", "Node.js", "Tailwind CSS"],
//             status: "Active",
//             availableFrom: "November 1, 2024",
//           },
//           {
//             fullName: "Jane Smith",
//             title: "Project Manager",
//             salary: "$110,000",
//             skills: ["Agile", "Scrum", "Communication"],
//             status: "Active",
//             availableFrom: "Immediate",
//           },
//           {
//             fullName: "Emily Davis",
//             title: "UX Designer",
//             salary: "$85,000",
//             skills: ["Figma", "Adobe XD", "User Research"],
//             status: "Inactive",
//             availableFrom: "December 15, 2024",
//           },
//         ]);
//       }
//     };
//     fetchEmployees();
//   }, []);

//   return (
//     <div className="bg-gray-50 min-h-screen p-8">
//       <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
//         Employees
//       </h1>
//       <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1 max-w-6xl mx-auto">
//         {employees.map((employee, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
//           >
//             <h3 className="text-2xl font-semibold text-blue-600 mb-2">
//               {employee.fullName}
//             </h3>
//             <p className="text-gray-700 text-sm mb-4">
//               <span className="font-medium">{employee.title}</span> —{" "}
//               <span className="text-green-600 font-semibold">
//                 {employee.salary}
//               </span>
//             </p>
//             <div className="mb-4">
//               <h4 className="text-lg font-medium text-gray-800 mb-1">
//                 Skills:
//               </h4>
//               <ul className="list-disc list-inside space-y-1 text-gray-600">
//                 {employee.skills.map((skill, i) => (
//                   <li key={i}>{skill}</li>
//                 ))}
//               </ul>
//             </div>
//             <p className="text-sm">
//               <span className="font-semibold text-gray-800">Status:</span>{" "}
//               <span
//                 className={`${
//                   employee.status === "Active"
//                     ? "text-green-600"
//                     : "text-red-600"
//                 } font-medium`}
//               >
//                 {employee.status}
//               </span>
//             </p>
//             <div className="mt-4 text-sm text-gray-700">
//               <span className="font-semibold">Available From:</span>{" "}
//               {employee.availableFrom}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Employees;
