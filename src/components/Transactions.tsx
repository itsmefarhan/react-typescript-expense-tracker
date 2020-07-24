import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Transactions: React.FC = () => {
  const { state, dispatch } = useContext(TransactionContext);
  const { transactions } = state;

  return (
    <div className="mt-3 med-query">
      <h3 className="text-muted">Transactions History</h3>
      <hr />
      {transactions.map((transaction) => {
        const sign = transaction.amount < 0 ? "-" : null;
        return (
          <div key={transaction.id} className="global">
            <div className="card mt-3" style={{ width: "300px" }}>
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
            <button
              className="btn btn-danger btn-sm delete-btn"
              onClick={() =>
                dispatch({ type: "DELETE", payload: transaction.id })
              }
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Transactions;
