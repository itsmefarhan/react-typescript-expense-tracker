import React from "react";

const Transactions = () => {
  return (
    <div className="mt-3 med-query">
      <h3 className="text-muted">Transactions History</h3>
      <hr />
      <div className="card mt-1" style={{ width: "300px" }}>
        <div className="card-body global">
          <div>
            <h5 className="card-title">Item</h5>
          </div>
          <div>
            <p className="card-text text-center">$200</p>
          </div>
        </div>
      </div>
      <div className="card mt-1" style={{ width: "300px" }}>
        <div className="card-body global">
          <div>
            <h5 className="card-title">Item</h5>
          </div>
          <div>
            <p className="card-text text-center">$200</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
