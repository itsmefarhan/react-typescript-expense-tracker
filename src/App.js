import React from "react";
import "./App.css";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="container">
      <h1 className="text-center text-muted mt-3">Expense Tracker</h1>
      <div className="global mt-4">
        <Balance />
        <Transactions />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
