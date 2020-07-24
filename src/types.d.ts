type TransactionType = {
  id: string;
  text: string;
  amount: number;
};

type InitialStateType = {
  transactions: TransactionType[];
};
