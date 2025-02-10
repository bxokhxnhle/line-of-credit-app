import React, { useState } from 'react';

const DisburseForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Call the backend API to disburse funds
    // Example: await disburseFunds({ amount });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="disburseAmount">Disburse Amount:</label>
        <input
          type="number"
          id="disburseAmount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <button type="submit">Disburse</button>
    </form>
  );
};

export default DisburseForm;