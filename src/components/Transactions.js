import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Transactions = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="mt-3 med-query">
      <h3 className="text-muted">Transactions History</h3>
      <hr />
      {transactions.map((transaction) => {
        const sign = transaction.amount < 0 ? "-" : null;
        return (
          <div
            key={transaction.id}
            className="card mt-1"
            style={{ width: "300px" }}
          >
            <div className="card-body global">
              <div>
                <h5 className="card-title">{transaction.text}</h5>
              </div>
              <div>
                <p className="card-text text-center">
                  {sign}
                  <span className={sign ? "text-danger" : "text-success"}>
                    ${Math.abs(transaction.amount)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Transactions;
