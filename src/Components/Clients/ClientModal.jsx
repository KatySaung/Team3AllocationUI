import { useClientContext } from "./ClientContext";
import { useState } from "react";

const ClientModal = ({ client, onClose }) => {
  const { updateClient, deleteClient } = useClientContext();
  const [formData, setFormData] = useState({ ...client });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateClient(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Edit Client</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />
          {/* Add other fields similarly */}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Save
          </button>
          <button
            type="button"
            onClick={() => deleteClient(client.id)}
            className="bg-red-500 text-white p-2 rounded ml-2"
          >
            Delete
          </button>
        </form>
        <button onClick={onClose} className="mt-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default ClientModal;
