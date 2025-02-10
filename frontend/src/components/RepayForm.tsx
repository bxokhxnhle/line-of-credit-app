import React, { useState } from 'react';

const RepayForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Call the backend API to repay funds
    // Example: await repayFunds({ amount });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="repayAmount">Repay Amount:</label>
        <input
          type="number"
          id="repayAmount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <button type="submit">Repay</button>
    </form>
  );
};

export default RepayForm;