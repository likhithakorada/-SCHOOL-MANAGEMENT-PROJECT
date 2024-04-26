import React, { useState } from 'react';
import axios from 'axios';
import './fee-management.css'; // Assuming you have a CSS file named FeeManagement.css for styling

const FeeManagement = () => {
  const [gradeLevel, setGradeLevel] = useState('');
  const [structureFeeAmount, setStructureFeeAmount] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState('');

  const gradeFeeMapping = {
    LKG: 10000,
    UKG: 12000,
    'Class 1': 15000,
    'Class 2': 16000,
    'Class 3': 17000,
    'Class 4': 18000,
    'Class 5': 19000,
    'Class 6': 20000,
    'Class 7': 21000,
    'Class 8': 22000,
    'Class 9': 23000,
    'Class 10': 24000,
  };

  const handleSubmitFeeStructure = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/fee/feestructure', {
        gradeLevel,
        structureFeeAmount,
        paymentFrequency,
      });
      console.log(response.data);
      setGradeLevel('');
      setStructureFeeAmount('');
      setPaymentFrequency('');
    } catch (error) {
      console.error('Error submitting fee structure:', error);
    }
  };

  return (
    <div className="fee-management">
      <h1>Fee Management</h1>
      <div className="form-container">
        <form onSubmit={handleSubmitFeeStructure}>
          <div className="form-fields">
            <label>
              Grade Level:
              <select value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)}>
                {Object.keys(gradeFeeMapping).map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Fee Amount:
              <input
                type="text"
                value={structureFeeAmount}
                onChange={(e) => setStructureFeeAmount(e.target.value)}
                placeholder="Enter fee amount"
              />
            </label>
            <label>
              Payment Frequency:
              <select value={paymentFrequency} onChange={(e) => setPaymentFrequency(e.target.value)}>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Annually">Annually</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="image-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDIRSiMnK3ZEW7iIJSx6iK67H519yMDYAlxulWoqoJbT2YT3cHoYZsa7GcAivmhEM6Do&usqp=CAU" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default FeeManagement;
