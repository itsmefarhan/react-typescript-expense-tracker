import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import AddTransaction from "./components/AddTransaction";
import { Simulate } from "react-dom/test-utils";
import Balance from "./components/Balance";

// test('renders Expense Tracker in App Component', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Expense Tracker/i);
//   expect(linkElement).toBeInTheDocument();
// });

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

// it("check whether button is clicked", () => {
//   const onSubmit = jest.fn();
//   const { getByTestId } = render(<AddTransaction />);
//   const textEl = getByTestId("text");
//   const amountEl = getByTestId("amount");

//   fireEvent.change(textEl, { target: { value: "this is test" } });
//   fireEvent.change(amountEl, { target: { value: "11" } });

//   fireEvent.click(getByTestId('form'));
//   expect(onSubmit).toBeCalled();
// });

it("check whether balance heading has class text-light", () => {
  const { getByTestId } = render(<Balance />);
  const total = getByTestId("total");
  expect(total).toHaveClass("text-light");
});
