import React, { useState } from 'react';
import axios from 'axios';
import './staff-management.css';

const StaffManagement = () => {
  const [staffInfo, setStaffInfo] = useState({
    type: '',
    name: '',
    contactInfo: '',
    dateOfJoining: '',
  });

  const handleStaffInfoChange = (e) => {
    const { name, value } = e.target;
    setStaffInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitStaff = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/staff/api/staff', staffInfo);
      console.log(response.data);
    } catch (error) {
      console.error('Error creating staff:', error);
    }
  };

  return (
    <div className="staff-management">
      <h2>Staff Management</h2>
      <div className="content-container">
        <div className="input-fields">
          <h3>Add Staff</h3>
          <form onSubmit={handleSubmitStaff}>
            <label>
              Staff Type:
              <select
                name="type"
                value={staffInfo.type}
                onChange={handleStaffInfoChange}
                required
              >
                <option value="">Select Staff Type</option>
                <option value="teacher">Teacher</option>
                <option value="principal">Principal</option>
                <option value="correspondent">Correspondent</option>
                <option value="generalStaff">General Staff</option>
                <option value="officeBoy">Office Boy</option>
                <option value="peon">Peon</option>
              </select>
            </label>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={staffInfo.name}
                onChange={handleStaffInfoChange}
                required
              />
            </label>
            <label>
              Contact Information:
              <input
                type="text"
                name="contactInfo"
                value={staffInfo.contactInfo}
                onChange={handleStaffInfoChange}
                required
              />
            </label>
            <label>
              Date of Joining:
              <input
                type="date"
                name="dateOfJoining"
                value={staffInfo.dateOfJoining}
                onChange={handleStaffInfoChange}
                required
              />
            </label>
            <button type="submit">Add Staff</button>
          </form>
        </div>
        <div className="image-container">
          <img src="https://media.licdn.com/dms/image/C4D12AQH3moW8i3ewrw/article-cover_image-shrink_600_2000/0/1628589993746?e=2147483647&v=beta&t=x0r-d-0VMlcRA_l3hQGm6RBCel5ZrQrV1KkIE6N167g" alt="Staff" />
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
