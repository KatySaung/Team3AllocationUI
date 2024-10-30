import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ClientContext = createContext();

export const useClientContext = () => useContext(ClientContext);

export const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:8080/api/clients");
      setClients(data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateClient = async (client) => {
    await axios.put(`http://localhost:8080/api/clients/${client.id}`, client);
    fetchClients();
  };

  const deleteClient = async (id) => {
    await axios.delete(`http://localhost:8080/api/clients/${id}`);
    fetchClients();
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <ClientContext.Provider
      value={{ clients, loading, updateClient, deleteClient }}
    >
      {children}
    </ClientContext.Provider>
  );
};

// import { createContext, useContext, useState, useEffect } from "react";

// // Create the context
// const ClientContext = createContext();

// // Custom hook to use the ClientContext
// export const useClientContext = () => useContext(ClientContext);

// // Provider component
// export const ClientProvider = ({ children }) => {
//   const [clients, setClients] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch clients from the backend
//   const fetchClients = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:8080/api/clients");
//       const data = await response.json();
//       setClients(data); // Store the fetched clients
//       console.log("data:", data);
//     } catch (error) {
//       console.error("Failed to fetch clients", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addClient = async (client) => {
//     try {
//       const response = await fetch("http://localhost:8080/api/clients", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(client),
//       });
//       if (response.ok) fetchClients();
//     } catch (error) {
//       console.error("Failed to add client", error);
//     }
//   };

//   const updateClient = async (client) => {
//     try {
//       const response = await fetch(
//         `http://localhost:8080/api/clients/${client.id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(client),
//         }
//       );
//       if (response.ok) fetchClients();
//     } catch (error) {
//       console.error("Failed to update client", error);
//     }
//   };

//   const deleteClient = async (clientId) => {
//     try {
//       const response = await fetch(
//         `http://localhost:8080/api/clients/${clientId}`,
//         { method: "DELETE" }
//       );
//       if (response.ok) fetchClients();
//     } catch (error) {
//       console.error("Failed to delete client", error);
//     }
//   };

//   useEffect(() => {
//     fetchClients();
//   }, []);

//   return (
//     <ClientContext.Provider
//       value={{ clients, loading, addClient, updateClient, deleteClient }}
//     >
//       {children}
//     </ClientContext.Provider>
//   );
// };
