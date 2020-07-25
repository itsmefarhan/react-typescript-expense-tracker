import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Transactions from "./components/Transactions";

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Expense Tracker/i)).toBeInTheDocument();
  });
});

it("renders Add transaction button", () => {
  const { getByTestId } = render(<AddTransaction />);
  const addBtn = getByTestId("testbtn");
  expect(addBtn).toHaveValue("Add");
});

it("check whether button is disabled when input fields are empty", () => {
  const { getByTestId } = render(<AddTransaction />);
  const addBtn = getByTestId("testbtn");
  expect(addBtn).toBeDisabled();
});

it("check whether button is enabled when input fields are not empty", () => {
  const { getByTestId } = render(<AddTransaction />);
  const addBtn = getByTestId("testbtn");

  const textEl = getByTestId("text");
  const amountEl = getByTestId("amount");

  fireEvent.change(textEl, { target: { value: "this is test" } });
  fireEvent.change(amountEl, { target: { value: "11" } });
  expect(addBtn).toBeEnabled();
});

it("check whether balance heading has class text-light", () => {
  const { getByTestId } = render(<Balance />);
  const total = getByTestId("total");
  expect(total).toHaveClass("text-light");
});

it("Render income", () => {
  const { getByTestId } = render(<Balance />);
  expect(getByTestId("income")).toBeInTheDocument();
});

it("Render expense", () => {
  const { getByTestId } = render(<Balance />);
  expect(getByTestId("expense")).toBeInTheDocument();
});

it("Renders Transaction history", () => {
  const { getByText } = render(<Transactions />);
  expect(getByText("Transactions History")).toBeInTheDocument();
});
