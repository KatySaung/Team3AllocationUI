import { useClientContext } from "./ClientContext";
import { useState } from "react";
import ClientModal from "./ClientModal";
import CreateClientModal from "./CreateClientModal";
import "./Clients.scss";
const ClientList = () => {
  const { clients, loading } = useClientContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter and paginate clients
  const filteredClients = clients.filter((client) =>
    client.businessName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  if (loading) return <div className="spinner">Loading...</div>;

  return (
    <div className="p-6 container mx-auto max-w-3xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="card-header bg-gray-100 text-lg font-semibold p-4 border-b">Clients List</div>
        <div className="card-body p-6">
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Search by business name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full mr-4 focus:outline-none focus:border-gray-400"
            />
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md"
            >
              Add Client
            </button>
          </div>
  
          <table className="table-auto w-full text-left text-gray-700">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th scope="col" className="p-4"></th>
                <th scope="col" className="p-4">Business Name</th>
                <th scope="col" className="p-4">Contact Person</th>
                <th scope="col" className="p-4">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {paginatedClients.map((client) => (
                <tr
                  key={client.id}
                  onClick={() => setSelectedClient(client)}
                  className="border-b hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <td className="p-4">
                    {/* <img
                      src={`https://i.pravatar.cc/60?img=${client.id}`}
                      alt="profile"
                      className="rounded-full shadow-sm"
                    /> */}
                  </td>
                  <td className="p-4">{client.businessName}</td>
                  <td className="p-4">{client.contactPerson}</td>
                  <td className="p-4">{client.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
  
          <div className="flex justify-center mt-4">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
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
}  

export default ClientList;

// import { useClientContext } from "./ClientContext";
// import { useState } from "react";
// import ClientModal from "./ClientModal";
// import CreateClientModal from "./CreateClientModal";

// const ClientList = () => {
//   const { clients, loading } = useClientContext();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedClient, setSelectedClient] = useState(null);
//   const [showCreateModal, setShowCreateModal] = useState(false); // State to manage create modal

//   const filteredClients = clients.filter((client) =>
//     client.businessName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) return <div className="spinner">Loading...</div>;

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-4">
//         <input
//           type="text"
//           placeholder="Search by business name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border p-2 w-full mr-4"
//         />
//         <button
//           onClick={() => setShowCreateModal(true)}
//           className="bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Add Client
//         </button>
//       </div>

//       <ul>
//         {filteredClients.map((client) => (
//           <li
//             key={client.id}
//             onClick={() => setSelectedClient(client)}
//             className="p-4 border-b cursor-pointer hover:bg-gray-100"
//           >
//             {client.businessName}
//             <p>Phone number: {client.phoneNumber}</p>
//           </li>
//         ))}
//       </ul>

//       {selectedClient && (
//         <ClientModal
//           client={selectedClient}
//           onClose={() => setSelectedClient(null)}
//         />
//       )}

//       {showCreateModal && (
//         <CreateClientModal onClose={() => setShowCreateModal(false)} />
//       )}
//     </div>
//   );
// };

// export default ClientList;
