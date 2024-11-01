import { useState, useEffect } from "react";
import axios from "axios";
import EmployeeModal from "./EmployeeModal";
import CreateEmployeeModal from "./CreateEmployeeModal";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [selectedProject, setSelectedProject] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const skills = [
    "React",
    "Tailwind CSS",
    "UI/UX Design",
    "React Native",
    "API Integration",
    "Design Patterns",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "Pandas",
    "D3.js",
    "JavaScript",
    "Java",
    "Spring Boot",
    "MySQL",
    "Angular",
    "TypeScript",
    "OAuth",
    "IoT",
    "AWS IoT",
    "Embedded Systems",
    "Blockchain",
    "Solidity",
    "Web3.js",
    "Flutter",
    "Firebase",
  ];

  // Function to get at least two unique skills
  function getRandomSkills() {
    const shuffledSkills = skills.sort(() => 0.5 - Math.random());
    return shuffledSkills.slice(0, 2); // Return the first two unique skills
  }

  // Fetch all employees and assign skills once
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/employees");
      const employeesWithSkills = response.data.map((employee) => ({
        ...employee,
        skills: getRandomSkills(), // Assign two unique skills to each employee
      }));
      setEmployees(employeesWithSkills);
    } catch (error) {
      console.error("Error fetching all employees:", error);
    }
  };

  // Fetch only non-allocated (free) employees and assign skills once
  const fetchFreeEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/employees/free-employees"
      );
      const employeesWithSkills = response.data.map((employee) => ({
        ...employee,
        skills: getRandomSkills(), // Assign two unique skills to each employee
      }));
      setEmployees(employeesWithSkills);
    } catch (error) {
      console.error("Error fetching free employees:", error);
    }
  };

  // Fetch data based on `showFreeOnly` state
  useEffect(() => {
    setCurrentPage(1);
    showFreeOnly ? fetchFreeEmployees() : fetchEmployees();
  }, [showFreeOnly]);

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEmployees = employees.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6 container mx-auto max-w-3xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="card-header bg-gray-100 text-lg font-semibold p-4 border-b flex justify-between items-center">
          <span>Employees List</span>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowFreeOnly(!showFreeOnly)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
            >
              {showFreeOnly ? "Show All Employees" : "Show Free Employees"}
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md"
            >
              Add Employee
            </button>
          </div>
        </div>
        <div className="card-body p-6">
          <table className="table-auto w-full text-left text-gray-700">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th scope="col" className="p-4"></th>
                <th scope="col" className="p-4">
                  Name
                </th>
                <th scope="col" className="p-4">
                  Title
                </th>
                <th scope="col" className="p-4">
                  Status
                </th>
                <th scope="col" className="p-4">
                  Skills
                </th>
              </tr>
            </thead>
            <tbody>
              {currentEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  onClick={() => setSelectedEmployee(employee)}
                  className="border-b hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <td className="p-4"></td>
                  <td className="p-4">{employee.fullName}</td>
                  <td className="p-4">{employee.title}</td>
                  <td className="p-4">
                    {employee.status ? "Booked" : "Available"}
                  </td>
                  <td className="p-4">{employee.skills.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => changePage(index + 1)}
                className={`mx-1 px-3 py-1 rounded-lg border ${
                  index + 1 === currentPage ? "bg-gray-300" : "bg-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedEmployee && (
        <EmployeeModal
          employee={selectedEmployee}
          // onClose={() => setSelectedEmployee(null)}
          onUpdate={fetchEmployees}
          onClose={() => {
            setSelectedEmployee(null); // Reset state on close
            setSelectedProject(null);
          }}
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

export default Employees;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import EmployeeModal from "./EmployeeModal";
// import CreateEmployeeModal from "./CreateEmployeeModal";

// const Employees = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [showFreeOnly, setShowFreeOnly] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // Fetch all employees
//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/employees");
//       console.log("ALL employees", response.data);
//       setEmployees(response.data);
//     } catch (error) {
//       console.error("Error fetching all employees:", error);
//     }
//   };

//   // Fetch only non-allocated (free) employees
//   const fetchFreeEmployees = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8080/api/employees/free-employees"
//       );
//       console.log("FREE employees", response.data);
//       setEmployees(response.data);
//     } catch (error) {
//       console.error("Error fetching free employees:", error);
//     }
//   };

//   // Fetch data based on `showFreeOnly` state
//   useEffect(() => {
//     setCurrentPage(1); // Reset to the first page when data source changes
//     showFreeOnly ? fetchFreeEmployees() : fetchEmployees();
//   }, [showFreeOnly]);

//   // Pagination calculations
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentEmployees = employees.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(employees.length / itemsPerPage);

//   const changePage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };
//   const skills = [
//     "Java",
//     "Python",
//     "SQL",
//     "React",
//     "Angular",
//     "Spring Boot",
//     "Machine Learning",
//     "UI/UX Design",
//     "AWS",
//     "Data Analysis",
//     "Project Management",
//   ];

//   function getRandomSkill() {
//     return skills[Math.floor(Math.random() * skills.length)];
//   }

//   return (
//     <div className="p-6 container mx-auto max-w-3xl">
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="card-header bg-gray-100 text-lg font-semibold p-4 border-b flex justify-between items-center">
//           <span>Employees List</span>
//           <div className="flex space-x-2">
//             <button
//               onClick={() => setShowFreeOnly(!showFreeOnly)}
//               className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
//             >
//               {showFreeOnly ? "Show All Employees" : "Show Free Employees"}
//             </button>
//             <button
//               onClick={() => setShowCreateModal(true)}
//               className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md"
//             >
//               Add Employee
//             </button>
//           </div>
//         </div>
//         <div className="card-body p-6">
//           <table className="table-auto w-full text-left text-gray-700">
//             <thead>
//               <tr className="bg-gray-100 border-b">
//                 <th scope="col" className="p-4"></th>
//                 <th scope="col" className="p-4">
//                   Name
//                 </th>
//                 <th scope="col" className="p-4">
//                   Title
//                 </th>
//                 <th scope="col" className="p-4">
//                   Status
//                 </th>
//                 <th scope="col" className="p-4">
//                   Skills
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentEmployees.map((employee) => (
//                 <tr
//                   key={employee.id}
//                   onClick={() => setSelectedEmployee(employee)}
//                   className="border-b hover:bg-gray-50 transition-colors cursor-pointer"
//                 >
//                   <td className="p-4">
//                     {/* <img
//                       src={`https://i.pravatar.cc/60?img=${employee.id}`}
//                       alt="profile"
//                       className="rounded-full shadow-sm"
//                     /> */}
//                   </td>
//                   <td className="p-4">{employee.fullName}</td>
//                   <td className="p-4">{employee.title}</td>
//                   <td className="p-4">
//                     {employee.status ? "Booked" : "Available"}
//                   </td>
//                   <td className="p-4">{getRandomSkill()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination Controls */}
//           <div className="flex justify-center mt-4">
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => changePage(index + 1)}
//                 className={`mx-1 px-3 py-1 rounded-lg border ${
//                   index + 1 === currentPage ? "bg-gray-300" : "bg-white"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       {selectedEmployee && (
//         <EmployeeModal
//           employee={selectedEmployee}
//           onClose={() => setSelectedEmployee(null)}
//           onUpdate={fetchEmployees}
//         />
//       )}
//       {showCreateModal && (
//         <CreateEmployeeModal
//           onClose={() => setShowCreateModal(false)}
//           onCreate={fetchEmployees}
//         />
//       )}
//     </div>
//   );
// };

// export default Employees;
