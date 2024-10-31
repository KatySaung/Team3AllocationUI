import { useState } from "react";
import axios from "axios";

const CreateEmployeeModal = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    status: "available",
    availableFrom: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/employees", formData);
    onCreate();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl mb-4">Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
            required
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
            required
          />
          <input
            type="date"
            name="availableFrom"
            placeholder="Available From"
            value={formData.availableFrom}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />
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
