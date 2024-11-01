import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateInvoiceForm = ({ selectedProjects }) => {
  const [billingDate, setBillingDate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate total amount based on selected projects
    const calculateTotalAmount = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/projects/create-invoice",
          {
            projectIds: selectedProjects,
          }
        );
        setTotalAmount(response.data.total);
      } catch (error) {
        console.error("Error calculating total amount:", error);
      }
    };

    if (selectedProjects.length > 0) {
      calculateTotalAmount();
    } else {
      setTotalAmount(0);
    }
  }, [selectedProjects]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/invoice", {
        billDate: billingDate,
        billingAmount: totalAmount,
        paymentStatus,
        projectIds: selectedProjects,
      });
      alert("Invoice created successfully!");
    } catch (error) {
      console.error("Error creating invoice:", error);
      alert("Failed to create invoice. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-invoice-form mt-6">
      <h2 className="text-xl font-semibold mb-4">Invoice Details</h2>

      {/* Billing Date */}
      <label className="block mb-2">
        Billing Date:
        <input
          type="date"
          value={billingDate}
          onChange={(e) => setBillingDate(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </label>

      {/* Payment Status */}
      <label className="block mb-2">
        Payment Status:
        <input
          type="checkbox"
          checked={paymentStatus}
          onChange={(e) => setPaymentStatus(e.target.checked)}
          className="ml-2"
        />
        <span className="ml-2">Paid</span>
      </label>

      {/* Total Amount */}
      <div className="total-amount mb-4">
        <h3 className="text-lg">
          Total Billing Amount: ${totalAmount.toFixed(2)}
        </h3>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        disabled={selectedProjects.length === 0}
      >
        Create Invoice
      </button>
    </form>
  );
};

export default CreateInvoiceForm;
