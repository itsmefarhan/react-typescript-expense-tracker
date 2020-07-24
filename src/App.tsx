import React from "react";
import "./App.css";

import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import Transactions from "./components/Transactions";

import TransactionContextProvider from "./context/TransactionContext";

const App: React.FC = () => {
  return (
    <TransactionContextProvider>
      <div className="container">
        <h1 className="text-center text-warning mt-3">Expense Tracker</h1>
        <div className="global mt-4">
          <Balance />
          <Transactions />
          <AddTransaction />
        </div>
      </div>
    </TransactionContextProvider>
  );
};

export default App;
