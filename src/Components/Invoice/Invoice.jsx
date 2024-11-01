import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectSelector from "./ProjectSelector";
import CreateInvoiceForm from "./CreateInvoiceForm";

const Invoice = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
<<<<<<< HEAD

=======
  
>>>>>>> 76abfce1058e4781a90ce9716d7a96d400d2a6e6
  useEffect(() => {
    // Fetch available projects
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="invoice-page container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Create Invoice</h1>

      {/* Project Selector */}
      <ProjectSelector
        projects={projects}
        selectedProjects={selectedProjects}
        setSelectedProjects={setSelectedProjects}
      />

      {/* Create Invoice Form */}
      <CreateInvoiceForm selectedProjects={selectedProjects} />
    </div>
  );
};

export default Invoice;
