import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div className="mt-3 med-query">
      <h3 className="text-muted">Add a Transaction</h3>
      <hr />
      <form>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label><br/>
          <small>Add - (minus sign) before amount for expenses</small>
          <input
            type="text"
            name="amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Add"
          className="btn btn-outline-info btn-block"
        />
      </form>
    </div>
  );
};

export default AddTransaction;
