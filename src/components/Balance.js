import React from "react";

const Balance = () => {
  return (
    <div className='mt-3 med-query'>
      <h3 className='text-muted'>Your Balance</h3>
      <hr/>
      <h5>$100</h5>
      <div className="card" style={{ width: "300px" }}>
        <div className="card-body global">
          <div>
            <h5 className="card-title">Income</h5>
            <p className="card-text text-center">$200</p>
          </div>
          <div>
            <h5 className="card-title">Expense</h5>
            <p className="card-text text-center">$300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
