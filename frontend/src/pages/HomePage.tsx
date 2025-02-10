import React from 'react';
import ApplicationForm from '../components/ApplicationForm';
import ApplicationList from '../components/ApplicationList';
import DisburseForm from '../components/DisburseForm';
import RepayForm from '../components/RepayForm';
import CancelRejectForm from '../components/CancelRejectForm';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Line of Credit Application</h1>
      <ApplicationForm />
      <DisburseForm />
      <RepayForm />
      <CancelRejectForm />
      <ApplicationList />
    </div>
  );
};

export default HomePage;