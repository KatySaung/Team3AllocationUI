// src/components/ClientList.jsx
import { useClientContext } from "./ClientContext";
import { useState } from "react";
import ClientModal from "./ClientModal";
import CreateClientModal from "./CreateClientModal";

const ClientList = () => {
  const { clients, loading } = useClientContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false); // State to manage create modal

  const filteredClients = clients.filter((client) =>
    client.businessName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="spinner">Loading...</div>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by business name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-full mr-4"
        />
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Client
        </button>
      </div>

      <ul>
        {filteredClients.map((client) => (
          <li
            key={client.id}
            onClick={() => setSelectedClient(client)}
            className="p-4 border-b cursor-pointer hover:bg-gray-100"
          >
            {client.businessName}
          </li>
        ))}
      </ul>

      {selectedClient && (
        <ClientModal
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
        />
      )}

      {showCreateModal && (
        <CreateClientModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
};

export default ClientList;

