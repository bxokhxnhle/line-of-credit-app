import React, { useEffect, useState } from 'react';

interface Application {
  id: string;
  amount: number;
  state: string;
  expressDelivery: boolean;
}

const ApplicationList: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    // Fetch the list of applications from the backend API
    // Example: const fetchedApplications = await fetchApplications();
    // setApplications(fetchedApplications);
  }, []);

  return (
    <div>
      <h2>Application History</h2>
      <ul>
        {applications.map((app) => (
          <li key={app.id}>
            {app.amount} - {app.state} - {app.expressDelivery ? 'Express' : 'Standard'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationList;