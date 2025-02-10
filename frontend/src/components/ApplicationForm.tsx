import React, { useState } from 'react';

const ApplicationForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [expressDelivery, setExpressDelivery] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch('api-endpoints', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: 'user123', amount, expressDelivery }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="expressDelivery">Express Delivery:</label>
        <input
          type="checkbox"
          id="expressDelivery"
          checked={expressDelivery}
          onChange={(e) => setExpressDelivery(e.target.checked)}
        />
      </div>
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default ApplicationForm;