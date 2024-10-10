import React, { useState } from 'react';

const VoterEligibility = () => {
  const [dob, setDob] = useState('');
  const [isEligible, setIsEligible] = useState(null);

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dobDate.getFullYear();
    const isEligibleAge = age >= 18; // assuming 18 is the minimum age for voter eligibility

    setIsEligible(isEligibleAge);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date of Birth:
        <input type="date" value={dob} onChange={handleDobChange} />
      </label>
      <button type="submit">Check Eligibility</button>
      {isEligible !== null && (
        <p>
          {isEligible ? 'You are eligible to vote!' : 'You are not eligible to vote.'}
        </p>
      )}
    </form>
  );
};

export default VoterEligibility;