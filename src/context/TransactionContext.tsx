import React, { createContext, useReducer } from "react";
import transactionReducer from "./transactionReducer";

const initialState: InitialStateType = {
  transactions: [],
};

export const TransactionContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const TransactionContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);
  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
