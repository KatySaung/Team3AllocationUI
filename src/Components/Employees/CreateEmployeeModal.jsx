import { useState } from "react";
import axios from "axios";

const CreateEmployeeModal = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    skills: [],
    title: "",
    totalHoursWorked: "",
    salary: 0.0,
    rateID: "",
    availableFrom: "",
    status: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle skills as an array of strings
  const handleSkillsChange = (e) => {
    const skillList = e.target.value.split(",").map((skill) => skill.trim());
    setFormData({ ...formData, skills: skillList });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/employees", formData);
      onCreate(); // Refresh employee list after creation
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl mb-4">Create New Employee</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="text-gray-700">Full Name:</span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">
              Skills (separate by if more than 1 ^_^ ):
            </span>
            <input
              type="text"
              name="skills"
              value={formData.skills.join(", ")}
              onChange={handleSkillsChange}
              className="border p-2 w-full"
              placeholder="e.g., React, Node.js, SQL"
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Title:</span>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Total Hours Worked:</span>
            <input
              type="time"
              name="totalHoursWorked"
              value={formData.totalHoursWorked}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Salary:</span>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Rate ID:</span>
            <input
              type="number"
              name="rateID"
              value={formData.rateID}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Available From:</span>
            <input
              type="date"
              name="availableFrom"
              value={formData.availableFrom}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </label>

          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              name="status"
              checked={formData.status}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-gray-700">Is Booked</span>
          </label>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeeModal;

// import { useState } from "react";
// import axios from "axios";

// const CreateEmployeeModal = ({ onClose, onCreate }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     status: "available",
//     availableFrom: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:8080/api/employees", formData);
//     onCreate();
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
//         <h2 className="text-2xl mb-4">Add New Employee</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Employee Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border p-2 mb-2 w-full"
//             required
//           />
//           <input
//             type="text"
//             name="status"
//             placeholder="Status"
//             value={formData.status}
//             onChange={handleChange}
//             className="border p-2 mb-2 w-full"
//             required
//           />
//           <input
//             type="date"
//             name="availableFrom"
//             placeholder="Available From"
//             value={formData.availableFrom}
//             onChange={handleChange}
//             className="border p-2 mb-2 w-full"
//           />
//           <div className="flex justify-end space-x-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-500 text-white px-4 py-2 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-green-500 text-white px-4 py-2 rounded"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateEmployeeModal;
