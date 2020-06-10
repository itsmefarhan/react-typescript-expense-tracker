import React from "react";

const AddTransaction = () => {
  return (
    <div className='mt-3 med-query'>
      <h3 className="text-muted">Add a Transaction</h3>
      <hr />
      <form>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input type="text" name="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="text" name="amount" className="form-control" />
        </div>
        <input
          type="submit"
          value="Add"
          className="btn btn-outline-info btn-block"
        />
      </form>
    </div>
  );
};

export default AddTransaction;
