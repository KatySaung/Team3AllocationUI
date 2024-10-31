import { useState } from "react";
import axios from "axios";

const EmployeeModal = ({ employee, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({ ...employee });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/employees/${employee.id}`, formData);
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/employees/${employee.id}`);
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl mb-4">Employee Details</h2>
        <form onSubmit={handleUpdate}>
          <label className="block mb-2">
            <span className="text-gray-700">Name:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </label>

          <label className="block mb-2">
            <span className="text-gray-700">Status:</span>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Available From:</span>
            <input
              type="date"
              name="availableFrom"
              value={formData.availableFrom}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </label>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;
