import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const AddTransaction: React.FC = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { dispatch } = useContext(TransactionContext);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!text) {
      return alert("Text field is required");
    } else if (!amount) {
      return alert("Amount field is required");
    } else if (amount === "0") {
      return alert("Amount must not be zero");
    }
    dispatch({
      type: "ADD",
      payload: {
        id: new Date().toString(),
        text,
        amount: parseInt(amount),
      },
    });
    // clear form fields
    setText("");
    setAmount("");
  };

  return (
    <div className="mt-3 med-query">
      <h3 className="text-muted">Add a Transaction</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text" className="text-light">
            Text
          </label>
          <input
            data-testid="text"
            type="text"
            name="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={20}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount" className="text-light">
            Amount
          </label>
          <br />
          <small className="text-light">
            Add - (minus sign) before amount for expenses
          </small>
          <input
            data-testid="amount"
            type="number"
            name="amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <input
          data-testid="testbtn"
          type="submit"
          value="Add"
          className="btn btn-outline-info btn-block"
          disabled={!text || !amount}
        />
      </form>
    </div>
  );
};

export default AddTransaction;
