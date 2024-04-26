import React, { useState } from 'react';
import axios from 'axios';
import './studentenroll.css';

const StudentRegistrationForm = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentAddress, setParentAddress] = useState('');
  const [parentPhoneNumber, setParentPhoneNumber] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [section, setSection] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/studentEnrollment/students', {
        name,
        dateOfBirth,
        gender,
        address,
        phoneNumber,
        email,
        parentName,
        parentAddress,
        parentPhoneNumber,
        parentEmail,
        section
      });
      console.log('Student created:', response.data);
      // Reset form fields after successful submission
      setName('');
      setDateOfBirth('');
      setGender('');
      setAddress('');
      setPhoneNumber('');
      setEmail('');
      setParentName('');
      setParentAddress('');
      setParentPhoneNumber('');
      setParentEmail('');
      setSection('');
    } catch (error) {
      console.error('Error creating student:', error.message);
      // Handle error, show an alert or message to the user
    }
  };

  return (
    <div className="form-container">
      <div className="form-details">
        <h1>Student Enrollment Form</h1>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-fields">
              <label>Name:</label>
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
              <label>Date of Birth:</label>
              <input type="date" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} />
              <label>Gender:</label>
              <select value={gender} onChange={(event) => setGender(event.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <label>Address:</label>
              <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
              <label>Phone Number:</label>
              <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
              <label>Email:</label>
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
              <label>Parent/Guardian Name:</label>
              <input type="text" value={parentName} onChange={(event) => setParentName(event.target.value)} />
              <label>Parent/Guardian Address:</label>
              <input type="text" value={parentAddress} onChange={(event) => setParentAddress(event.target.value)} />
              <label>Parent/Guardian Phone Number:</label>
              <input type="tel" value={parentPhoneNumber} onChange={(event) => setParentPhoneNumber(event.target.value)} />
              <label>Parent/Guardian Email:</label>
              <input type="email" value={parentEmail} onChange={(event) => setParentEmail(event.target.value)} />
              <label>Section:</label>
              <select value={section} onChange={(event) => setSection(event.target.value)}>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
              </select>
              <button type="submit">Submit</button>
            </div>
          </form>
          <div className="image-container">
            <img src="https://cdni.iconscout.com/illustration/premium/preview/sign-up-8044448-6430849.png?f=webp&h=700" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;


