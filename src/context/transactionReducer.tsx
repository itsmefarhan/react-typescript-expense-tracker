type Actions =
  | { type: "ADD"; payload: TransactionType }
  | { type: "DELETE"; payload: string };

export default (state: InitialStateType, action: Actions) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter(
          (tx) => tx.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
