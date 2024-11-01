import { useState } from "react";
import axios from "axios";

import Skills from "../Skills/Skills";

const EmployeeModal = ({ employee, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    fullName: employee.fullName || "",
    title: employee.title || "",
    salary: employee.salary || 0,
    totalHoursWorked: employee.totalHoursWorked || "00:00:00",
    rateCardId: employee.rateCardId || 0,
    skills: employee.skills || [],
    status: employee.status || false,
  });

  const handleSkillSelect = (skill) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.includes(skill)
        ? prevData.skills.filter((s) => s !== skill)
        : [...prevData.skills, skill],
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    try {
      const { fullName, title, salary, totalHoursWorked, rateCardId, skills, status } = formData;
      const payload = { fullName, title, salary, totalHoursWorked, rateCardId, skills, status };

      await axios.put(`http://localhost:8080/api/employees/${employee.id}`, payload);
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit Employee</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Total Hours Worked */}
        <div className="mb-4">
          <label className="block text-gray-700">Total Hours Worked</label>
          <input
            type="time"
            name="totalHoursWorked"
            value={formData.totalHoursWorked}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Salary */}
        <div className="mb-4">
          <label className="block text-gray-700">Salary</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Rate Card ID */}
        <div className="mb-4">
          <label className="block text-gray-700">Rate Card ID</label>
          <input
            type="number"
            name="rateCardId"
            value={formData.rateCardId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <input
            type="checkbox"
            name="status"
            checked={formData.status}
            onChange={handleChange}
            className="mr-2"
          />
        </div>

        {/* Skills */}
        <Skills selectedSkills={formData.skills} onSkillSelect={handleSkillSelect} />

        {/* Save and Cancel Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
