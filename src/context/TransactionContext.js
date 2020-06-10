import React, { createContext, useReducer } from "react";
import transactionReducer from "./transactionReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Received payment", amount: 100 },
    { id: 2, text: "Paid utilities", amount: -40 },
    { id: 3, text: "Received rent", amount: 200 },
  ],
};

export const TransactionContext = createContext();

const TransactionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);
  return (
    <TransactionContext.Provider
      value={{ transactions: state.transactions, dispatch }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
