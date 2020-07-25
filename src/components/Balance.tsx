import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Balance: React.FC = () => {
  const { state } = useContext(TransactionContext);
  const { transactions } = state;

  const amount =
    transactions && transactions.map((transaction) => transaction.amount);

  // Calculate total
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // Calculate income
  const income = amount
    .filter((amt) => amt > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // Calculate expenses and multiply it with -1 to get rid to - sign
  const expenses = (
    amount.filter((amt) => amt < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="mt-3 med-query">
      <h3 className="text-muted">Your Balance</h3>
      <hr />
      <h5 className="text-light" data-testid='total'>${total}</h5>
      <div className="card" style={{ width: "300px" }}>
        <div className="card-body global">
          <div>
            <h5 className="card-title">Income</h5>
            <p className="card-text text-center text-success">${income}</p>
          </div>
          <div>
            <h5 className="card-title">Expense</h5>
            <p className="card-text text-center text-danger">${expenses}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
