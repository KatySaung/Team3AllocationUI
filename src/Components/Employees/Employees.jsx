import { useState, useEffect } from "react";
import axios from "axios";
import EmployeeModal from "./EmployeeModal";
import CreateEmployeeModal from "./CreateEmployeeModal";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  // Fetch all employees
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/employees");
      console.log("ALL employees", response.data);
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching all employees:", error);
    }
  };

  // Fetch only non-allocated (free) employees
  const fetchFreeEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/employees/free-employees"
      );
      console.log("FREE employees", response.data);
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching free employees:", error);
    }
  };

  // Decide which data to fetch based on `showFreeOnly` state
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
            <p>
              <strong>Name:</strong> {employee.fullName}
            </p>
            <p>
              <strong>Title:</strong> {employee.title}
            </p>
            <p>
              <strong>Salary:</strong> ${employee.salary.toFixed(2)}
            </p>
            <p>
              <strong>Total Hours Worked:</strong> {employee.totalHoursWorked}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {employee.status ? "Booked" : "Available"}
            </p>
            <p>
              <strong>Available From:</strong> {employee.availableFrom}
            </p>
            <p>
              <strong>Rate Card:</strong> {employee.rateCardName}
            </p>
            <p>
              <strong>Skills:</strong> {employee.skills.join(", ")}
            </p>
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

export default Employees;
