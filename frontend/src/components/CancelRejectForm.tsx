import React, { useState } from 'react';

const CancelRejectForm: React.FC = () => {
  const [applicationId, setApplicationId] = useState<string>('');

  const handleCancel = async () => {
    // Call the backend API to cancel the application
    // Example: await cancelApplication(applicationId);
  };

  const handleReject = async () => {
    // Call the backend API to reject the application
    // Example: await rejectApplication(applicationId);
  };

  return (
    <div>
      <div>
        <label htmlFor="applicationId">Application ID:</label>
        <input
          type="text"
          id="applicationId"
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
        />
      </div>
      <button onClick={handleCancel}>Cancel Application</button>
      <button onClick={handleReject}>Reject Application</button>
    </div>
  );
};

export default CancelRejectForm;