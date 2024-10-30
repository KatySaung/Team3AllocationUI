import React from "react";

function Invoice() {
  return (
    <div className="invoive__container">
      <h1 className="invoice__title">Invoice</h1>
      <div className="invoice__body">body here</div>
      <div className="invoive__billDate">billDate</div>
      <div className="invoive__billingAmount">billingAmount</div>
      <p className="invoive__paymentStatus"></p>
      <div className="invoive__billingPeriod">billingPeriod</div>
      <p>and more stuff</p>
    </div>
  );
}

export default Invoice;
