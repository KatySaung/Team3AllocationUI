import { useState, useEffect } from "react";
import axios from "axios";

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [revenue, setRevenue] = useState(null);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/invoice");
      setInvoices(response.data);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    }
  };

  const fetchRevenueForLastMonth = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/invoice/revenue/last-month"
      );
      setRevenue(response.data);
    } catch (error) {
      console.error("Error fetching revenue:", error);
    }
  };

  const deleteInvoice = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/invoice/${id}`
      );
      fetchInvoices();
    } catch (error) {
      console.error("Error deleting invoice:", error);
    }
  };

  useEffect(() => {
    fetchInvoices();
    fetchRevenueForLastMonth();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Invoices</h2>
      <p>
        <strong>Last Month's Revenue:</strong> $
        {revenue ? revenue.toFixed(2) : "Loading..."}
      </p>

      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id} className="p-4 border-b">
            <p>
              <strong>Invoice ID:</strong> {invoice.id}
            </p>
            <p>
              <strong>Bill Date:</strong>{" "}
              {new Date(invoice.billDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Billing Amount:</strong> $
              {invoice.billingAmount.toFixed(2)}
            </p>
            <p>
              <strong>Payment Status:</strong>{" "}
              {invoice.paymentStatus ? "Paid" : "Unpaid"}
            </p>
            <p>
              <strong>Client:</strong> {invoice.clientName}
            </p>
            <p>
              <strong>Projects:</strong> {invoice.projectNames.join(", ")}
            </p>
            <button
              onClick={() => deleteInvoice(invoice.id)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Delete Invoice
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
