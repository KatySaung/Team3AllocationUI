import { useEffect, useState } from "react";
import axios from "axios";

const Contracts = () => {
  const [contracts, setContracts] = useState([]);
  const [clientId, setClientId] = useState("");
  const [newContract, setNewContract] = useState({
    clientId: "",
    startDate: "",
    endDate: "",
    billingSchedule: "MONTHLY", // Default value
    rateCardId: "",
  });

  // Fetch all contracts on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/contracts")
      .then((response) => setContracts(response.data))
      .catch((error) => console.error("Error fetching contracts:", error));
  }, []);

  // Fetch contracts by client ID
  const fetchByClientId = () => {
    axios
      .get(`http://localhost:8080/api/contracts/client/${clientId}`)
      .then((response) => setContracts(response.data))
      .catch((error) =>
        console.error("Error fetching contracts by client:", error)
      );
  };

  // Handle new contract creation
  const handleCreateContract = () => {
    axios
      .post("http://localhost:8080/api/contracts", newContract)
      .then((response) => {
        setContracts([...contracts, response.data]); // Add new contract to the list
        alert("Contract created successfully!");
      })
      .catch((error) => console.error("Error creating contract:", error));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl mb-4">Contracts Management</h1>

      {/* Search Contracts by Client ID */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter Client ID"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={fetchByClientId}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Search Contracts
        </button>
      </div>

      {/* List of Contracts */}
      <h2 className="text-2xl mb-4">All Contracts</h2>
      <ul className="list-disc pl-8">
        {contracts.map((contract) => (
          <li key={contract.id}>
            <strong>Contract ID:</strong> {contract.id} |
            <strong> Client ID:</strong> {contract.clientId} |
            <strong> Start Date:</strong> {contract.startDate} |
            <strong> End Date:</strong> {contract.endDate}
          </li>
        ))}
      </ul>

      {/* Create New Contract */}
      <div className="mt-8">
        <h2 className="text-2xl mb-4">Create New Contract</h2>
        <input
          type="text"
          placeholder="Client ID"
          value={newContract.clientId}
          onChange={(e) =>
            setNewContract({ ...newContract, clientId: e.target.value })
          }
          className="border p-2 mb-2 mr-2"
        />
        <input
          type="date"
          value={newContract.startDate}
          onChange={(e) =>
            setNewContract({ ...newContract, startDate: e.target.value })
          }
          className="border p-2 mb-2 mr-2"
        />
        <input
          type="date"
          value={newContract.endDate}
          onChange={(e) =>
            setNewContract({ ...newContract, endDate: e.target.value })
          }
          className="border p-2 mb-2 mr-2"
        />
        <select
          value={newContract.billingSchedule}
          onChange={(e) =>
            setNewContract({ ...newContract, billingSchedule: e.target.value })
          }
          className="border p-2 mb-2 mr-2"
        >
          <option value="MONTHLY">Monthly</option>
          <option value="QUARTERLY">Quarterly</option>
          <option value="YEARLY">Yearly</option>
        </select>
        <input
          type="text"
          placeholder="Rate Card ID"
          value={newContract.rateCardId}
          onChange={(e) =>
            setNewContract({ ...newContract, rateCardId: e.target.value })
          }
          className="border p-2 mb-2 mr-2"
        />
        <button
          onClick={handleCreateContract}
          className="bg-green-500 text-white px-4 py-2"
        >
          Create Contract
        </button>
      </div>
    </div>
  );
};

export default Contracts;
