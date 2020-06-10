import React, { createContext, useReducer } from "react";
import transactionReducer from "./transactionReducer";

const initialState = {
  transactions: [],
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
